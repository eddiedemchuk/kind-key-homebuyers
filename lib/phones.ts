export const ORGANIC_PHONE = { display: '(253) 518-3638', tel: '+12535183638' } as const;
export const GOOGLE_ADS_PHONE = { display: '(253) 352-4379', tel: '+12533524379' } as const;
export const FACEBOOK_ADS_PHONE = { display: '(206) 519-5463', tel: '+12065195463' } as const;
/** Number shown on /offer/facebook and on /thank-you after that page's form is submitted. */
export const FACEBOOK_OFFER_PHONE = { display: '(253) 453-8597', tel: '+12534538597' } as const;

/** Organic pages that swap to the Google Ads number after a paid Google visit. */
export const GOOGLE_ADS_PHONE_PATHS = ['/sell-house-as-is', '/cash-offer'] as const;

export const FACEBOOK_OFFER_PATH = '/offer/facebook';
export const FACEBOOK_OFFER_THANK_YOU_KEY = 'kk_facebook_offer_phone';
const FACEBOOK_OFFER_THANK_YOU_VALUE = 'facebook';

export type DisplayPhone = { display: string; tel: string };

export interface ThankYouPhoneStorage {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
}

/** Google offer landings and a thank-you visit that did not come from /offer/facebook. */
export function isAlwaysGoogleAdsPhonePath(pathname: string): boolean {
  if (pathname === FACEBOOK_OFFER_PATH) return false;
  return pathname === '/thank-you' || pathname === '/offer' || pathname.startsWith('/offer/');
}

/** Header, footer, and mobile call bar on an offer landing. */
export function offerLandingPhone(pathname: string): DisplayPhone {
  return pathname === FACEBOOK_OFFER_PATH ? FACEBOOK_OFFER_PHONE : GOOGLE_ADS_PHONE;
}

export function thankYouHref(
  pagePath: string,
  facebookOffer = pagePath === FACEBOOK_OFFER_PATH
): string {
  return facebookOffer ? '/thank-you?from=facebook' : '/thank-you';
}

/** Remember a Facebook offer submit, and clear that memory for every other form. */
export function rememberThankYouPhoneSource(
  pagePath: string,
  storage: ThankYouPhoneStorage,
  facebookOffer = pagePath === FACEBOOK_OFFER_PATH
): void {
  if (facebookOffer) {
    storage.setItem(FACEBOOK_OFFER_THANK_YOU_KEY, FACEBOOK_OFFER_THANK_YOU_VALUE);
    return;
  }
  storage.removeItem(FACEBOOK_OFFER_THANK_YOU_KEY);
}

export function persistThankYouPhoneSource(pagePath: string, facebookOffer?: boolean): void {
  if (typeof sessionStorage === 'undefined') return;
  try {
    rememberThankYouPhoneSource(
      pagePath,
      sessionStorage,
      facebookOffer ?? pagePath === FACEBOOK_OFFER_PATH
    );
  } catch {
    // Storage can be blocked. A Facebook submit still adds ?from=facebook.
  }
}

export function isFacebookOfferThankYouSearch(search: string): boolean {
  const query = search.startsWith('?') ? search.slice(1) : search;
  return new URLSearchParams(query).get('from') === 'facebook';
}

export function hasFacebookOfferThankYouFlag(
  storage: Pick<ThankYouPhoneStorage, 'getItem'>
): boolean {
  try {
    return storage.getItem(FACEBOOK_OFFER_THANK_YOU_KEY) === FACEBOOK_OFFER_THANK_YOU_VALUE;
  } catch {
    return false;
  }
}

export function isFacebookOfferThankYou(
  search: string,
  storage?: Pick<ThankYouPhoneStorage, 'getItem'> | null
): boolean {
  if (isFacebookOfferThankYouSearch(search)) return true;
  if (!storage) return false;
  return hasFacebookOfferThankYouFlag(storage);
}

export function thankYouPhone(fromFacebookOffer: boolean): DisplayPhone {
  return fromFacebookOffer ? FACEBOOK_OFFER_PHONE : GOOGLE_ADS_PHONE;
}
