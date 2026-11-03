declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (
      command: 'config' | 'event' | 'js' | 'set' | 'consent',
      targetIdOrEventName: string,
      config?: Record<string, unknown> | boolean
    ) => void;
  }
}

/** GA4 web stream for property 514584396 (kindkeyhomebuyers.com). */
export const GA4_MEASUREMENT_ID = 'G-E2YKGLGN1S';

export const COOKIE_CONSENT_STORAGE_KEY = 'cookie-consent';

export type GoogleConsentState = 'granted' | 'denied';

/** Consent Mode v2 update. Decline denies ad and analytics storage. Security storage stays granted. */
export function updateGoogleConsent(state: GoogleConsentState): void {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('consent', 'update', {
    analytics_storage: state,
    ad_storage: state,
    ad_user_data: state,
    ad_personalization: state,
  });
  window.gtag('set', 'ads_data_redaction', state === 'denied');
}

/** Page-view conversion for a /thank-you visit. Not gated on the cookie banner. */
export const GOOGLE_ADS_THANK_YOU_CONVERSION_SEND_TO = 'AW-17766515185/hcQZCKrs2swbEPGD3pdC';

/** Fired after a successful lead submit. Thank-you repeats it with the same transaction id. */
export const GOOGLE_ADS_SUBMIT_CONVERSION_SEND_TO = 'AW-17766515185/IeBJCKCujPIbEPGD3pdC';

export const GOOGLE_ADS_SUBMIT_CONVERSION_STORAGE_KEY = 'kk_gads_lead_conversion';

function createConversionTransactionId(): string {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  return `lead-${Date.now()}`;
}

function enhancedConversionPhone(phone?: string): string {
  if (!phone) return '';
  const trimmed = phone.trim();
  const digits = trimmed.replace(/\D/g, '');
  if (!digits) return '';
  if (trimmed.startsWith('+')) return `+${digits}`;
  if (digits.length === 11 && digits.startsWith('1')) return `+${digits}`;
  if (digits.length === 10) return `+1${digits}`;
  return '';
}

/** Normalized email and E.164 phone for Google Ads Enhanced Conversions. */
export function googleAdsUserData(user?: {
  email?: string;
  phone?: string;
}): Record<string, string> {
  const userData: Record<string, string> = {};
  const email = user?.email?.trim().toLowerCase() ?? '';
  if (email) userData.email = email;
  const phone = enhancedConversionPhone(user?.phone);
  if (phone) userData.phone_number = phone;
  return userData;
}

function setGoogleAdsUserData(userData: Record<string, string>): void {
  if (!window.gtag || Object.keys(userData).length === 0) return;
  window.gtag('set', 'user_data', userData);
}

function trackSubmitConversion(user?: { email?: string; phone?: string }): void {
  if (typeof window === 'undefined') return;

  const transactionId = createConversionTransactionId();
  const userData = googleAdsUserData(user);
  try {
    sessionStorage.setItem(
      GOOGLE_ADS_SUBMIT_CONVERSION_STORAGE_KEY,
      JSON.stringify({
        sendTo: GOOGLE_ADS_SUBMIT_CONVERSION_SEND_TO,
        transactionId,
        email: userData.email ?? '',
        phone_number: userData.phone_number ?? '',
      })
    );
  } catch {
    // Storage can be unavailable. The gtag event below still runs on this page.
  }

  if (!window.gtag) return;

  try {
    setGoogleAdsUserData(userData);
    window.gtag('event', 'conversion', {
      send_to: GOOGLE_ADS_SUBMIT_CONVERSION_SEND_TO,
      value: 1.0,
      currency: 'USD',
      transaction_id: transactionId,
    });
  } catch (error) {
    console.error('Google Ads conversion error:', error);
  }
}

export function trackEvent(eventName: string, eventParams?: Record<string, unknown>): void {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
}

export function trackLeadSubmit(formData: {
  city?: string;
  condition?: string;
  timeframe?: string;
  email?: string;
  phone?: string;
}): void {
  trackEvent('lead_submit', {
    city: formData.city,
    condition: formData.condition,
    timeframe: formData.timeframe,
  });

  if (typeof window !== 'undefined' && window.gtag) {
    try {
      window.gtag('event', 'generate_lead', {
        lead_type: 'cash_offer',
        city: formData.city || 'unknown',
        condition: formData.condition || 'unknown',
        timeframe: formData.timeframe || 'unknown',
      });
    } catch (error) {
      console.error('Google Ads tracking error:', error);
    }
  }

  trackSubmitConversion({ email: formData.email, phone: formData.phone });
}

export function trackHeroCTA(): void {
  trackEvent('hero_cta_click');
}

export function trackWhatsAppClick(): void {
  trackEvent('whatsapp_click');
}

export function trackCallClick(linkLocation?: string): void {
  trackEvent('call_click', linkLocation ? { link_location: linkLocation } : undefined);
}

export function trackGetOfferClick(linkLocation?: string): void {
  trackEvent('get_offer_click', linkLocation ? { link_location: linkLocation } : undefined);
}
