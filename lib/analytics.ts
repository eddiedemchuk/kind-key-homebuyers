declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (
      command: 'config' | 'event' | 'js' | 'set' | 'consent',
      targetIdOrEventName: string,
      config?: Record<string, unknown>
    ) => void;
  }
}

/** GA4 web stream for property 514584396 (kindkeyhomebuyers.com). */
export const GA4_MEASUREMENT_ID = 'G-E2YKGLGN1S';

export const COOKIE_CONSENT_STORAGE_KEY = 'cookie-consent';

export type GoogleConsentState = 'granted' | 'denied';

/** Consent Mode v2 update. Decline sets every storage flag to denied. */
export function updateGoogleConsent(state: GoogleConsentState): void {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('consent', 'update', {
    analytics_storage: state,
    ad_storage: state,
    ad_user_data: state,
    ad_personalization: state,
  });
}

/** Fired after a successful lead submit. Thank-you repeats it with the same transaction id. */
export const GOOGLE_ADS_SUBMIT_CONVERSION_SEND_TO = 'AW-17766515185/IeBJCKCujPIbEPGD3pdC';

export const GOOGLE_ADS_SUBMIT_CONVERSION_STORAGE_KEY = 'kk_gads_lead_conversion';

function createConversionTransactionId(): string {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  return `lead-${Date.now()}`;
}

function trackSubmitConversion(): void {
  if (typeof window === 'undefined') return;

  const transactionId = createConversionTransactionId();
  try {
    sessionStorage.setItem(
      GOOGLE_ADS_SUBMIT_CONVERSION_STORAGE_KEY,
      JSON.stringify({
        sendTo: GOOGLE_ADS_SUBMIT_CONVERSION_SEND_TO,
        transactionId,
      })
    );
  } catch {
    // Storage can be unavailable. The gtag event below still runs on this page.
  }

  if (!window.gtag) return;

  try {
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

  trackSubmitConversion();
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
