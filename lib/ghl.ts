import {
  type AttributionTouch,
  type LeadSource,
  deriveLeadSource,
  emptyTouch,
  formatAttributionNotes,
  ghlTagsForLeadSource,
  normalizeTouch,
  sourceTagForLeadSource,
} from '@/lib/attribution';

interface GHLLeadInput {
  name: string;
  phone?: string;
  email?: string;
  reasonForSelling?: string;
  propertyAddress: string;
  city: string;
  condition: string;
  timeframe: string;
  preferredContact: string;
  smsNonMarketingConsent?: boolean;
  smsMarketingConsent?: boolean;
  utm?: string;
  gclid?: string;
  pagePath?: string;
  ip?: string;
  attribution?: AttributionTouch;
}

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
  const leadSource: LeadSource = deriveLeadSource(attribution);

  return {
    first_name: firstName,
    last_name: restName.join(' '),
    full_name: fullName,
    phone: normalizePhone(data.phone),
    email: data.email?.trim() ?? '',
    address1: data.propertyAddress,
    city: data.city,
    state: 'WA',
    country: 'US',
    condition: data.condition,
    timeframe: data.timeframe,
    preferred_contact: data.preferredContact,
    reason_for_selling: data.reasonForSelling ?? '',
    sms_non_marketing_consent: data.smsNonMarketingConsent ?? false,
    sms_marketing_consent: data.smsMarketingConsent ?? false,
    utm_source: attribution.utm_source,
    utm_medium: attribution.utm_medium,
    utm_campaign: attribution.utm_campaign,
    utm_term: attribution.utm_term,
    utm_content: attribution.utm_content,
    gclid: attribution.gclid,
    gbraid: attribution.gbraid,
    wbraid: attribution.wbraid,
    fbclid: attribution.fbclid,
    referrer: attribution.referrer,
    landing_page: attribution.landing_page,
    attribution_captured_at: attribution.captured_at,
    page_path: data.pagePath ?? '',
    ip: data.ip ?? '',
    source: leadSource,
    lead_source: leadSource,
    channel: 'Website',
    tags: ghlTagsForLeadSource(leadSource),
    source_tag: sourceTagForLeadSource(leadSource),
    attribution_notes: formatAttributionNotes(attribution, leadSource),
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
