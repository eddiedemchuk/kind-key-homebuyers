import {
  type AttributionTouch,
  deriveLeadSource,
  emptyTouch,
  formatAttributionNotes,
  normalizeTouch,
} from '@/lib/attribution';
import { type FormOrigin, formOriginLabel, resolveFormOrigin } from '@/lib/form-origin';
import { isSellerQuizPath } from '@/lib/phones';

interface GHLLeadInput {
  name: string;
  phone?: string;
  email?: string;
  reasonForSelling?: string;
  propertyAddress: string;
  city?: string;
  condition?: string;
  /** Seller quiz step 2 label. */
  timeline?: string;
  /** Seller quiz summary of condition, timeline, listing status, and realtor answer. */
  situation?: string;
  notes?: string;
  /** Qualifying seller-quiz realtor answer, as the option label. */
  realtorStatus?: string;
  timeframe?: string;
  preferredContact?: string;
  smsNonMarketingConsent?: boolean;
  smsMarketingConsent?: boolean;
  utm?: string;
  gclid?: string;
  pagePath?: string;
  ip?: string;
  attribution?: AttributionTouch;
  /** Allowlisted form that created the lead. Missing values are the website form. */
  formOrigin?: FormOrigin;
  /** Present only when the /offer form asked the listing question. */
  listedWithAgent?: 'yes' | 'no';
  /** True when the offer form's required call/text consent box was checked. */
  smsConsent?: boolean;
  smsConsentAt?: string;
  smsConsentTextVersion?: string;
  /** src query from a Facebook /offer visit. Empty when only utm_source=facebook matched. */
  src?: string;
}

const LISTED_WITH_AGENT_TAG = 'listed with agent';

const GHL_TIMEOUT_MS = 10_000;

// Normalizes US numbers to E.164 (+1XXXXXXXXXX); returns '' when incomplete.
function normalizePhone(phone?: string): string {
  if (!phone) return '';
  let digits = phone.replace(/\D/g, '');
  if (digits.length === 11 && digits.startsWith('1')) {
    digits = digits.slice(1);
  }
  return digits.length === 10 ? `+1${digits}` : '';
}

function attributionForLead(data: GHLLeadInput): AttributionTouch {
  const fallbackCapturedAt = new Date().toISOString();
  const base = data.attribution ?? emptyTouch(fallbackCapturedAt);
  return normalizeTouch(
    {
      ...base,
      utm_source: base.utm_source || data.utm || '',
      gclid: base.gclid || data.gclid || '',
      landing_page: base.landing_page || data.pagePath || '',
    },
    base.captured_at || fallbackCapturedAt
  );
}

/**
 * Flat payload keys are mapped onto the contact inside the GHL inbound-webhook
 * workflow. Pipeline and stage stay in that workflow (ALL LEADS / New Hot Lead);
 * this payload does not send opportunity fields.
 */
export function buildGhlPayload(data: GHLLeadInput): Record<string, unknown> {
  const fullName = data.name.trim();
  const [firstName = '', ...restName] = fullName.split(/\s+/);
  const attribution = attributionForLead(data);
  const clickSource = deriveLeadSource(attribution);
  const formOrigin = resolveFormOrigin(data.formOrigin);
  const form = formOriginLabel(formOrigin);
  const listedWithAgent = data.listedWithAgent;
  const tags = listedWithAgent === 'yes' ? `${form.tags}, ${LISTED_WITH_AGENT_TAG}` : form.tags;
  const smsConsent = data.smsConsent === true;
  const customFields = [
    ...(listedWithAgent ? [{ key: 'listed_with_agent', field_value: listedWithAgent }] : []),
    ...(data.realtorStatus ? [{ key: 'realtor_status', field_value: data.realtorStatus }] : []),
    { key: 'form_origin', field_value: formOrigin },
    ...(typeof data.src === 'string' ? [{ key: 'src', field_value: data.src }] : []),
    ...(smsConsent
      ? [
          { key: 'sms_consent', field_value: 'true' },
          { key: 'sms_consent_at', field_value: data.smsConsentAt ?? '' },
          { key: 'sms_consent_text_version', field_value: data.smsConsentTextVersion ?? '' },
        ]
      : []),
    ...(data.timeline ? [{ key: 'timeline', field_value: data.timeline }] : []),
    ...(data.situation ? [{ key: 'situation', field_value: data.situation }] : []),
    ...(data.notes ? [{ key: 'notes', field_value: data.notes }] : []),
    ...(isSellerQuizPath(data.pagePath ?? '')
      ? [
          { key: 'utm_source', field_value: attribution.utm_source },
          { key: 'utm_medium', field_value: attribution.utm_medium },
          { key: 'utm_campaign', field_value: attribution.utm_campaign },
          { key: 'utm_content', field_value: attribution.utm_content },
          { key: 'utm_term', field_value: attribution.utm_term },
          { key: 'landing_page', field_value: attribution.landing_page },
          { key: 'landing_page_url', field_value: attribution.landing_page },
          { key: 'referrer', field_value: attribution.referrer },
        ]
      : []),
  ];
  const attributionNotes = formatAttributionNotes(
    attribution,
    { ...form, formOrigin },
    clickSource,
    listedWithAgent
  );
  const consentNotes = smsConsent
    ? `\nSMS consent: true\nSMS consent at: ${data.smsConsentAt ?? ''}\nSMS consent text: ${data.smsConsentTextVersion ?? ''}`
    : '';
  const hasQuizAnswers = Boolean(
    data.timeline || data.situation || data.notes || data.realtorStatus
  );
  const quizNotes = hasQuizAnswers
    ? `\n${[
        data.condition ? `Condition: ${data.condition}` : '',
        data.timeline ? `Timeline: ${data.timeline}` : '',
        data.realtorStatus ? `Realtor: ${data.realtorStatus}` : '',
        data.situation ? `Situation: ${data.situation}` : '',
        data.notes ? `Notes: ${data.notes}` : '',
      ]
        .filter(Boolean)
        .join('\n')}`
    : '';

  return {
    first_name: firstName,
    last_name: restName.join(' '),
    full_name: fullName,
    phone: normalizePhone(data.phone),
    email: data.email?.trim() ?? '',
    address1: data.propertyAddress,
    city: data.city ?? '',
    state: 'WA',
    country: 'US',
    condition: data.condition ?? '',
    timeline: data.timeline ?? '',
    situation: data.situation ?? '',
    notes: data.notes ?? '',
    timeframe: data.timeframe ?? '',
    preferred_contact: data.preferredContact ?? '',
    reason_for_selling: data.reasonForSelling ?? '',
    sms_non_marketing_consent: data.smsNonMarketingConsent ?? false,
    sms_marketing_consent: data.smsMarketingConsent ?? false,
    sms_consent: smsConsent,
    sms_consent_at: smsConsent ? (data.smsConsentAt ?? '') : '',
    sms_consent_text_version: smsConsent ? (data.smsConsentTextVersion ?? '') : '',
    utm_source: attribution.utm_source,
    utm_medium: attribution.utm_medium,
    utm_campaign: attribution.utm_campaign,
    utm_term: attribution.utm_term,
    utm_content: attribution.utm_content,
    gclid: attribution.gclid,
    gbraid: attribution.gbraid,
    wbraid: attribution.wbraid,
    fbclid: attribution.fbclid,
    keyword: attribution.keyword,
    adgroup: attribution.adgroup,
    referrer: attribution.referrer,
    landing_page: attribution.landing_page,
    landing_page_url: attribution.landing_page,
    attribution_captured_at: attribution.captured_at,
    page_path: data.pagePath ?? '',
    ip: data.ip ?? '',
    source: form.source,
    lead_source: form.leadSource,
    click_source: clickSource,
    form_name: form.formName,
    form_origin: formOrigin,
    ...(typeof data.src === 'string' ? { src: data.src } : {}),
    page_tag: form.pageTag,
    channel: 'Website',
    listed_with_agent: listedWithAgent ?? '',
    ...(data.realtorStatus ? { realtor_status: data.realtorStatus } : {}),
    tags,
    source_tag: form.sourceTag,
    customFields,
    attribution_notes: `${attributionNotes}${consentNotes}${quizNotes}`,
  };
}

export async function sendLeadToGHL(data: GHLLeadInput): Promise<boolean> {
  const webhookUrl = process.env.GHL_WEBHOOK_URL;
  if (!webhookUrl) {
    console.warn('GHL_WEBHOOK_URL not configured');
    return false;
  }

  const payload = buildGhlPayload(data);

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(GHL_TIMEOUT_MS),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('GHL webhook error:', response.status, error);
      return false;
    }

    return true;
  } catch (error) {
    console.error('GHL webhook request error:', error);
    return false;
  }
}
