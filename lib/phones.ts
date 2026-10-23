import { normalizeOfferSrc, offerFacebookVisitFromSearch } from '@/lib/offer-facebook-visit';

export const ORGANIC_PHONE = { display: '(253) 518-3638', tel: '+12535183638' } as const;
export const GOOGLE_ADS_PHONE = { display: '(253) 352-4379', tel: '+12533524379' } as const;
export const FACEBOOK_ADS_PHONE = { display: '(206) 519-5463', tel: '+12065195463' } as const;
/** Number shown on Facebook offer pages and on /thank-you after that form is submitted. */
export const FACEBOOK_OFFER_PHONE = { display: '(253) 453-8597', tel: '+12534538597' } as const;

/** Organic pages that swap to the Google Ads number after a paid Google visit. */
export const GOOGLE_ADS_PHONE_PATHS = ['/sell-house-as-is', '/cash-offer'] as const;

export const FACEBOOK_OFFER_PATH = '/offer/facebook';
/** Internal document for /offer?src=fb and /offer?src=fb_static. The browser URL stays /offer. */
export const FACEBOOK_OFFER_REWRITE_PATH = '/offer/fb';
export const FACEBOOK_OFFER_THANK_YOU_KEY = 'kk_facebook_offer_phone';
const FACEBOOK_OFFER_THANK_YOU_VALUE = 'facebook';

export type DisplayPhone = { display: string; tel: string };

export interface ThankYouPhoneStorage {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
}

/** /offer/facebook and the rewritten /offer?src=fb|fb_static document. */
export function isFacebookOfferDocumentPath(pathname: string): boolean {
  return pathname === FACEBOOK_OFFER_PATH || pathname === FACEBOOK_OFFER_REWRITE_PATH;
}

/** Seller quiz documents. Both URLs default to the Facebook offer number. */
export function isSellerQuizPath(pathname: string): boolean {
  return pathname === '/quiz' || pathname === '/offer/quiz';
}

/**
 * A quiz URL named a source other than the Facebook src values.
 * Blank src still counts as the Facebook quiz default.
 */
export function hasExplicitNonFacebookSrc(search: string): boolean {
  const query = search.startsWith('?') ? search.slice(1) : search;
  const src = new URLSearchParams(query).get('src');
  if (src == null || src.trim() === '') return false;
  return normalizeOfferSrc(src) === null;
}

/** Google offer landings and a thank-you visit that did not come from a Facebook offer page. */
export function isAlwaysGoogleAdsPhonePath(pathname: string): boolean {
  if (isFacebookOfferDocumentPath(pathname) || isSellerQuizPath(pathname)) return false;
  return pathname === '/thank-you' || pathname === '/offer' || pathname.startsWith('/offer/');
}

/** Header, footer, and mobile call bar on an offer landing when the URL has no query. */
export function offerLandingPhone(pathname: string): DisplayPhone {
  if (isFacebookOfferDocumentPath(pathname) || isSellerQuizPath(pathname)) {
    return FACEBOOK_OFFER_PHONE;
  }
  return GOOGLE_ADS_PHONE;
}

/**
 * Phone for an offer URL, including the query string.
 * src=fb, src=fb_static, and utm_source=facebook use the Facebook offer number.
 * A plain /offer visit keeps the Google Ads number.
 */
export function offerDisplayPhone(pathname: string, search = ''): DisplayPhone {
  if (isFacebookOfferDocumentPath(pathname)) return FACEBOOK_OFFER_PHONE;
  if (isSellerQuizPath(pathname)) {
    return hasExplicitNonFacebookSrc(search) ? GOOGLE_ADS_PHONE : FACEBOOK_OFFER_PHONE;
  }
  if (pathname === '/offer' && offerFacebookVisitFromSearch(search)) return FACEBOOK_OFFER_PHONE;
  if (isAlwaysGoogleAdsPhonePath(pathname)) return GOOGLE_ADS_PHONE;
  return ORGANIC_PHONE;
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
