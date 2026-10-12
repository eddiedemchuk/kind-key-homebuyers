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

export async function sendLeadToGHL(data: GHLLeadInput): Promise<boolean> {
  const webhookUrl = process.env.GHL_WEBHOOK_URL;
  if (!webhookUrl) {
    console.warn('GHL_WEBHOOK_URL not configured');
    return false;
  }

  const fullName = data.name.trim();
  const [firstName = '', ...restName] = fullName.split(/\s+/);

  // Flat payload keys are mapped to contact fields inside the GHL workflow.
  const payload = {
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
    utm_source: data.utm ?? '',
    gclid: data.gclid ?? '',
    page_path: data.pagePath ?? '',
    ip: data.ip ?? '',
    source: 'Website',
    tags: 'website lead',
  };

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
