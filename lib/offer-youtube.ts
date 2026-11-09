import { ATTRIBUTION_MAX_AGE_MS } from '@/lib/attribution';
import { type FormOrigin, formOriginLabel } from '@/lib/form-origin';

export const OFFER_YOUTUBE_VISIT_KEY = 'kk_offer_youtube_visit';

/** First qualifying YouTube landing. Kept so a later page without the query still labels the lead. */
export interface OfferYouTubeVisit {
  src: 'youtube';
  captured_at: string;
}

export interface OfferYouTubeVisitStorage {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
}

export function isYouTubeAdsValue(value: string | null | undefined): boolean {
  return (value ?? '').trim().toLowerCase() === 'youtube';
}

function searchParams(search: string): URLSearchParams {
  const query = search.startsWith('?') ? search.slice(1) : search;
  return new URLSearchParams(query);
}

/**
 * The landing URL is a YouTube ad when `src=youtube` or `utm_source=youtube`.
 * Matching is case-insensitive. Other src values, including Facebook, do not match.
 */
export function offerYouTubeVisitFromSearch(search: string): boolean {
  const params = searchParams(search);
  return isYouTubeAdsValue(params.get('src')) || isYouTubeAdsValue(params.get('utm_source'));
}

export function searchFromLandingPage(landingPage: string): string {
  const trimmed = landingPage.trim();
  if (!trimmed) return '';
  const queryIndex = trimmed.indexOf('?');
  if (queryIndex === -1) return '';
  const hashIndex = trimmed.indexOf('#', queryIndex);
  return trimmed.slice(queryIndex, hashIndex === -1 ? undefined : hashIndex);
}

/** First-touch attribution stored in localStorage or the attribution cookie. */
export function isYouTubeOfferTouch(
  touch: { utm_source?: string; landing_page?: string } | null | undefined
): boolean {
  if (!touch) return false;
  if (isYouTubeAdsValue(touch.utm_source)) return true;
  return offerYouTubeVisitFromSearch(searchFromLandingPage(touch.landing_page ?? ''));
}

export function parseStoredOfferYouTubeVisit(
  raw: string | null,
  now = Date.now()
): OfferYouTubeVisit | null {
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as { src?: unknown; captured_at?: unknown };
    if (!isYouTubeAdsValue(typeof parsed?.src === 'string' ? parsed.src : '')) return null;
    if (typeof parsed.captured_at !== 'string') return null;
    const captured = Date.parse(parsed.captured_at);
    if (Number.isNaN(captured) || now - captured > ATTRIBUTION_MAX_AGE_MS) return null;
    return { src: 'youtube', captured_at: new Date(captured).toISOString() };
  } catch {
    return null;
  }
}

export function readStoredOfferYouTubeVisit(
  storage: Pick<OfferYouTubeVisitStorage, 'getItem'>,
  now = Date.now()
): OfferYouTubeVisit | null {
  try {
    return parseStoredOfferYouTubeVisit(storage.getItem(OFFER_YOUTUBE_VISIT_KEY), now);
  } catch {
    return null;
  }
}

export function writeStoredOfferYouTubeVisit(
  storage: Pick<OfferYouTubeVisitStorage, 'setItem'>,
  visit: OfferYouTubeVisit
): void {
  storage.setItem(
    OFFER_YOUTUBE_VISIT_KEY,
    JSON.stringify({ src: visit.src, captured_at: visit.captured_at })
  );
}

/**
 * Records the first YouTube landing in this store. A later visit does not
 * replace it, and a non-YouTube URL does not clear it.
 */
export function rememberOfferYouTubeVisit(
  search: string,
  storage: OfferYouTubeVisitStorage,
  now = new Date()
): void {
  if (!offerYouTubeVisitFromSearch(search)) return;
  if (readStoredOfferYouTubeVisit(storage, now.getTime())) return;
  writeStoredOfferYouTubeVisit(storage, {
    src: 'youtube',
    captured_at: now.toISOString(),
  });
}

/**
 * This URL names a campaign other than YouTube, so a stored YouTube visit must
 * not replace it. A URL with no campaign params is a navigation, not a new source.
 */
function searchHasOtherCampaign(search: string): boolean {
  const params = searchParams(search);
  const src = params.get('src');
  if (src && !isYouTubeAdsValue(src)) return true;
  const utmSource = params.get('utm_source');
  if (utmSource && !isYouTubeAdsValue(utmSource)) return true;
  return ['gclid', 'gbraid', 'wbraid', 'fbclid'].some(
    (key) => (params.get(key) ?? '').trim() !== ''
  );
}

export function resolveOfferYouTubeVisit(
  search: string,
  storages: Array<Pick<OfferYouTubeVisitStorage, 'getItem'> | null | undefined> = [],
  touch?: { utm_source?: string; landing_page?: string } | null,
  now = Date.now()
): boolean {
  if (offerYouTubeVisitFromSearch(search)) return true;
  if (searchHasOtherCampaign(search)) return false;
  for (const storage of storages) {
    if (storage && readStoredOfferYouTubeVisit(storage, now)) return true;
  }
  return isYouTubeOfferTouch(touch);
}

/**
 * Shared offer forms that already label the contact as Google Ads.
 * Facebook form origins stay on their own source even if a YouTube param is also present.
 */
export function offerFormUsesYouTubeAds(input: {
  formOrigin: FormOrigin;
  search: string;
  storages?: Array<Pick<OfferYouTubeVisitStorage, 'getItem'> | null | undefined>;
  touch?: { utm_source?: string; landing_page?: string } | null;
  now?: number;
}): boolean {
  if (formOriginLabel(input.formOrigin).source !== 'Google Ads') return false;
  return resolveOfferYouTubeVisit(input.search, input.storages, input.touch, input.now);
}
