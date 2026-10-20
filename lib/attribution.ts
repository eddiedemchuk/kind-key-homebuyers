/**
 * First-touch campaign attribution shared by the browser and the lead API.
 * Paid click values are kept for 90 days and are not replaced by a later
 * organic or direct visit. A later paid click can replace an earlier unpaid visit.
 */

export const ATTRIBUTION_STORAGE_KEY = 'kk_attribution';
export const ATTRIBUTION_COOKIE_NAME = 'kk_attribution';
export const ATTRIBUTION_MAX_AGE_DAYS = 90;
export const ATTRIBUTION_MAX_AGE_SECONDS = ATTRIBUTION_MAX_AGE_DAYS * 24 * 60 * 60;
export const ATTRIBUTION_MAX_AGE_MS = ATTRIBUTION_MAX_AGE_SECONDS * 1000;

const UTM_MAX = 120;
const CLICK_ID_MAX = 250;
const URL_MAX = 300;

export const LEAD_SOURCES = [
  'Google Ads',
  'Facebook Ads',
  'Google Organic',
  'Facebook Organic',
  'Referral',
  'Direct/Website',
] as const;

export type LeadSource = (typeof LEAD_SOURCES)[number];

export interface AttributionTouch {
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_term: string;
  utm_content: string;
  gclid: string;
  gbraid: string;
  wbraid: string;
  fbclid: string;
  referrer: string;
  landing_page: string;
  captured_at: string;
}

export function emptyTouch(capturedAt: string): AttributionTouch {
  return {
    utm_source: '',
    utm_medium: '',
    utm_campaign: '',
    utm_term: '',
    utm_content: '',
    gclid: '',
    gbraid: '',
    wbraid: '',
    fbclid: '',
    referrer: '',
    landing_page: '',
    captured_at: capturedAt,
  };
}

function cleanField(value: unknown, max: number): string {
  if (typeof value !== 'string') return '';
  return value
    .replace(/[\u0000-\u001F\u007F]/g, '')
    .trim()
    .slice(0, max);
}

export function normalizeTouch(
  input: Partial<AttributionTouch> | null | undefined,
  fallbackCapturedAt: string
): AttributionTouch {
  const captured = cleanField(input?.captured_at, 40);
  const parsed = Date.parse(captured);

  return {
    utm_source: cleanField(input?.utm_source, UTM_MAX),
    utm_medium: cleanField(input?.utm_medium, UTM_MAX),
    utm_campaign: cleanField(input?.utm_campaign, UTM_MAX),
    utm_term: cleanField(input?.utm_term, UTM_MAX),
    utm_content: cleanField(input?.utm_content, UTM_MAX),
    gclid: cleanField(input?.gclid, CLICK_ID_MAX),
    gbraid: cleanField(input?.gbraid, CLICK_ID_MAX),
    wbraid: cleanField(input?.wbraid, CLICK_ID_MAX),
    fbclid: cleanField(input?.fbclid, CLICK_ID_MAX),
    referrer: cleanField(input?.referrer, URL_MAX),
    landing_page: cleanField(input?.landing_page, URL_MAX),
    captured_at: Number.isNaN(parsed) ? fallbackCapturedAt : new Date(parsed).toISOString(),
  };
}

export function isAttributionExpired(touch: AttributionTouch, now = Date.now()): boolean {
  const captured = Date.parse(touch.captured_at);
  if (Number.isNaN(captured)) return true;
  return now - captured > ATTRIBUTION_MAX_AGE_MS;
}

export function isPaidMedium(medium: string): boolean {
  const normalized = medium
    .trim()
    .toLowerCase()
    .replace(/[\s_]+/g, '-');
  if (!normalized) return false;
  if (normalized === 'cpc' || normalized === 'ppc') return true;
  return normalized.includes('paid');
}

function isGoogleUtmSource(source: string): boolean {
  const normalized = source
    .trim()
    .toLowerCase()
    .replace(/[\s_]+/g, '-');
  return (
    normalized === 'google' ||
    normalized === 'adwords' ||
    normalized === 'googleads' ||
    normalized === 'google-ads'
  );
}

function isMetaUtmSource(source: string): boolean {
  const normalized = source
    .trim()
    .toLowerCase()
    .replace(/[\s_]+/g, '-');
  return (
    normalized === 'facebook' ||
    normalized === 'fb' ||
    normalized === 'instagram' ||
    normalized === 'ig' ||
    normalized === 'meta'
  );
}

function isOrganicMedium(medium: string): boolean {
  const normalized = medium
    .trim()
    .toLowerCase()
    .replace(/[\s_]+/g, '-');
  return (
    normalized === '' ||
    normalized === 'organic' ||
    normalized === 'seo' ||
    normalized === 'organic-search' ||
    normalized === 'organic-social' ||
    normalized === 'social'
  );
}

export function hasPaidClick(
  touch: Pick<
    AttributionTouch,
    'gclid' | 'gbraid' | 'wbraid' | 'fbclid' | 'utm_source' | 'utm_medium'
  >
): boolean {
  if (touch.gclid || touch.gbraid || touch.wbraid || touch.fbclid) return true;
  if (!isPaidMedium(touch.utm_medium)) return false;
  return isGoogleUtmSource(touch.utm_source) || isMetaUtmSource(touch.utm_source);
}

function hostnameOf(value: string): string | null {
  const trimmed = value.trim();
  if (!trimmed) return null;
  try {
    const withProtocol = /^[a-z][a-z0-9+.-]*:/i.test(trimmed) ? trimmed : `https://${trimmed}`;
    return new URL(withProtocol).hostname.toLowerCase().replace(/\.$/, '') || null;
  } catch {
    return null;
  }
}

function bareHost(host: string): string {
  return host.replace(/^www\./, '');
}

function isSameSite(host: string, siteHost: string | null): boolean {
  if (!siteHost) return false;
  return bareHost(host) === bareHost(siteHost);
}

function isGoogleSearchHost(host: string): boolean {
  if (host === 'com.google.android.googlequicksearchbox') return true;
  const bare = bareHost(host);
  if (
    bare.startsWith('mail.') ||
    bare.startsWith('accounts.') ||
    bare.startsWith('ads.') ||
    bare.startsWith('support.') ||
    bare.startsWith('docs.') ||
    bare.startsWith('drive.') ||
    bare.startsWith('calendar.')
  ) {
    return false;
  }
  return /^google\.([a-z]{2,3})(\.[a-z]{2})?$/.test(bare);
}

function isMetaHost(host: string): boolean {
  const bare = bareHost(host);
  return (
    bare === 'facebook.com' ||
    bare.endsWith('.facebook.com') ||
    bare === 'fb.com' ||
    bare.endsWith('.fb.com') ||
    bare === 'instagram.com' ||
    bare.endsWith('.instagram.com') ||
    bare === 'fb.me' ||
    bare.endsWith('.fb.me')
  );
}

/** Google Ads click: gclid, or a Google click id, or google + a paid medium. */
export function isGoogleAdsTouch(
  touch:
    | Pick<AttributionTouch, 'gclid' | 'gbraid' | 'wbraid' | 'utm_source' | 'utm_medium'>
    | null
    | undefined
): boolean {
  if (!touch) return false;
  if (touch.gclid.trim() || touch.gbraid.trim() || touch.wbraid.trim()) return true;
  return isGoogleUtmSource(touch.utm_source) && isPaidMedium(touch.utm_medium);
}

export function deriveLeadSource(touch: AttributionTouch): LeadSource {
  const source = touch.utm_source;
  const medium = touch.utm_medium;
  const paid = isPaidMedium(medium);

  if (touch.gclid || touch.gbraid || touch.wbraid || (isGoogleUtmSource(source) && paid)) {
    return 'Google Ads';
  }
  if (touch.fbclid || (isMetaUtmSource(source) && paid)) {
    return 'Facebook Ads';
  }
  if (isGoogleUtmSource(source) && isOrganicMedium(medium)) {
    return 'Google Organic';
  }
  if (isMetaUtmSource(source) && isOrganicMedium(medium)) {
    return 'Facebook Organic';
  }

  const referrerHost = hostnameOf(touch.referrer);
  const siteHost = hostnameOf(touch.landing_page);
  if (referrerHost && !isSameSite(referrerHost, siteHost)) {
    if (isGoogleSearchHost(referrerHost)) return 'Google Organic';
    if (isMetaHost(referrerHost)) return 'Facebook Organic';
    return 'Referral';
  }

  if (source || medium) return 'Referral';
  return 'Direct/Website';
}

export const GHL_BASE_TAG = 'website lead';

export function formatAttributionNotes(
  touch: AttributionTouch,
  form: {
    leadSource: string;
    sourceTag: string;
    formName: string;
    formOrigin: string;
    pageTag?: string;
  },
  clickSource: LeadSource,
  listedWithAgent?: 'yes' | 'no'
): string {
  const line = (label: string, value: string) => `${label}: ${value || '—'}`;
  return [
    `Form: ${form.formName}`,
    `Form origin: ${form.formOrigin}`,
    `Lead source: ${form.leadSource}`,
    `Tag: ${form.sourceTag}`,
    ...(form.pageTag ? [`Page tag: ${form.pageTag}`] : []),
    `Click source: ${clickSource}`,
    ...(listedWithAgent ? [`Listed with agent: ${listedWithAgent}`] : []),
    line('Landing page', touch.landing_page),
    line('Referrer', touch.referrer),
    line('utm_source', touch.utm_source),
    line('utm_medium', touch.utm_medium),
    line('utm_campaign', touch.utm_campaign),
    line('utm_term', touch.utm_term),
    line('utm_content', touch.utm_content),
    line('gclid', touch.gclid),
    line('gbraid', touch.gbraid),
    line('wbraid', touch.wbraid),
    line('fbclid', touch.fbclid),
    line('Captured', touch.captured_at),
  ].join('\n');
}

export function touchFromLanding(input: {
  search: string;
  referrer: string;
  landingPage: string;
  capturedAt: string;
}): AttributionTouch {
  const query = input.search.startsWith('?') ? input.search.slice(1) : input.search;
  const params = new URLSearchParams(query);
  return normalizeTouch(
    {
      utm_source: params.get('utm_source') ?? '',
      utm_medium: params.get('utm_medium') ?? '',
      utm_campaign: params.get('utm_campaign') ?? '',
      utm_term: params.get('utm_term') ?? '',
      utm_content: params.get('utm_content') ?? '',
      gclid: params.get('gclid') ?? '',
      gbraid: params.get('gbraid') ?? '',
      wbraid: params.get('wbraid') ?? '',
      fbclid: params.get('fbclid') ?? '',
      referrer: input.referrer,
      landing_page: input.landingPage,
      captured_at: input.capturedAt,
    },
    input.capturedAt
  );
}

function firstString(...values: unknown[]): string {
  for (const value of values) {
    if (typeof value === 'string' && value.trim()) return value;
  }
  return '';
}

export function touchFromRequestBody(
  body: unknown,
  capturedAt = new Date().toISOString()
): AttributionTouch {
  const record =
    body && typeof body === 'object'
      ? (body as Record<string, unknown>)
      : ({} as Record<string, unknown>);
  return normalizeTouch(
    {
      utm_source: firstString(record.utm_source, record.utm),
      utm_medium: firstString(record.utm_medium),
      utm_campaign: firstString(record.utm_campaign),
      utm_term: firstString(record.utm_term),
      utm_content: firstString(record.utm_content),
      gclid: firstString(record.gclid),
      gbraid: firstString(record.gbraid),
      wbraid: firstString(record.wbraid),
      fbclid: firstString(record.fbclid),
      referrer: firstString(record.referrer),
      landing_page: firstString(record.landing_page),
      captured_at: firstString(record.attribution_captured_at),
    },
    capturedAt
  );
}

/**
 * Keeps the first paid click. A later paid click replaces an earlier unpaid
 * visit. Organic and direct visits never replace a stored touch.
 */
export function mergeAttribution(
  existing: AttributionTouch | null,
  incoming: AttributionTouch,
  now = Date.now()
): AttributionTouch {
  if (!existing || isAttributionExpired(existing, now)) return incoming;
  if (hasPaidClick(existing)) return existing;
  if (hasPaidClick(incoming)) return incoming;
  return existing;
}

export function preferStoredTouch(
  first: AttributionTouch | null,
  second: AttributionTouch | null,
  now = Date.now()
): AttributionTouch | null {
  const left = first && !isAttributionExpired(first, now) ? first : null;
  const right = second && !isAttributionExpired(second, now) ? second : null;
  if (!left) return right;
  if (!right) return left;
  const leftPaid = hasPaidClick(left);
  const rightPaid = hasPaidClick(right);
  if (leftPaid !== rightPaid) return leftPaid ? left : right;
  return Date.parse(left.captured_at) <= Date.parse(right.captured_at) ? left : right;
}

export function resolveSubmissionAttribution(
  submitted: AttributionTouch | null,
  stored: AttributionTouch | null,
  now = Date.now()
): AttributionTouch {
  const incoming = submitted ?? emptyTouch(new Date(now).toISOString());
  return mergeAttribution(stored, incoming, now);
}

function bytesToBase64Url(bytes: Uint8Array): string {
  let binary = '';
  for (let index = 0; index < bytes.length; index += 1) {
    binary += String.fromCharCode(bytes[index]);
  }
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '');
}

function base64UrlToString(value: string): string {
  const padded = value.replace(/-/g, '+').replace(/_/g, '/');
  const padLength = (4 - (padded.length % 4)) % 4;
  const binary = atob(padded + '='.repeat(padLength));
  const bytes = new Uint8Array(binary.length);
  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index);
  }
  return new TextDecoder().decode(bytes);
}

export function encodeAttribution(touch: AttributionTouch): string {
  return bytesToBase64Url(new TextEncoder().encode(JSON.stringify(touch)));
}

function touchFromJson(raw: string): AttributionTouch | null {
  try {
    const parsed = JSON.parse(raw) as Partial<AttributionTouch>;
    if (!parsed || typeof parsed !== 'object' || typeof parsed.captured_at !== 'string') {
      return null;
    }
    return normalizeTouch(parsed, parsed.captured_at);
  } catch {
    return null;
  }
}

export function decodeStoredAttribution(raw: string, now = Date.now()): AttributionTouch | null {
  const candidates = [raw];
  try {
    const decoded = decodeURIComponent(raw);
    if (decoded !== raw) candidates.push(decoded);
  } catch {
    // Ignore malformed escape sequences and try the raw value.
  }

  for (const candidate of candidates) {
    const touch = candidate.trim().startsWith('{')
      ? touchFromJson(candidate)
      : touchFromJson(safeBase64(candidate));
    if (touch && !isAttributionExpired(touch, now)) return touch;
  }
  return null;
}

function safeBase64(value: string): string {
  try {
    return base64UrlToString(value);
  } catch {
    return '';
  }
}

export function readAttributionFromCookieHeader(
  header: string | null | undefined,
  now = Date.now()
): AttributionTouch | null {
  if (!header) return null;
  const parts = header.split(';');
  for (const part of parts) {
    const separator = part.indexOf('=');
    if (separator === -1) continue;
    if (part.slice(0, separator).trim() !== ATTRIBUTION_COOKIE_NAME) continue;
    return decodeStoredAttribution(part.slice(separator + 1).trim(), now);
  }
  return null;
}

export function attributionToPayload(touch: AttributionTouch): Record<string, string> {
  return {
    utm_source: touch.utm_source,
    utm_medium: touch.utm_medium,
    utm_campaign: touch.utm_campaign,
    utm_term: touch.utm_term,
    utm_content: touch.utm_content,
    gclid: touch.gclid,
    gbraid: touch.gbraid,
    wbraid: touch.wbraid,
    fbclid: touch.fbclid,
    referrer: touch.referrer,
    landing_page: touch.landing_page,
    attribution_captured_at: touch.captured_at,
  };
}
