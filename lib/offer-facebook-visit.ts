export const OFFER_FACEBOOK_VISIT_KEY = 'kk_offer_facebook_visit';

export type OfferFacebookSrc = 'fb' | 'fb_static';

/** A qualifying /offer visit. `src` is empty when only utm_source=facebook was present. */
export interface OfferFacebookVisit {
  src: OfferFacebookSrc | '';
}

export interface OfferFacebookVisitStorage {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
}

export function normalizeOfferSrc(value: string | null | undefined): OfferFacebookSrc | null {
  const src = (value ?? '').trim().toLowerCase();
  if (src === 'fb' || src === 'fb_static') return src;
  return null;
}

export function isFacebookOfferUtmSource(value: string | null | undefined): boolean {
  return (value ?? '').trim().toLowerCase() === 'facebook';
}

/** The current URL qualifies when src is fb or fb_static, or utm_source is facebook. */
export function offerFacebookVisitFromSearch(search: string): OfferFacebookVisit | null {
  const query = search.startsWith('?') ? search.slice(1) : search;
  const params = new URLSearchParams(query);
  const src = normalizeOfferSrc(params.get('src'));
  if (!src && !isFacebookOfferUtmSource(params.get('utm_source'))) return null;
  return { src: src ?? '' };
}

export function parseStoredOfferFacebookVisit(raw: string | null): OfferFacebookVisit | null {
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as { src?: unknown };
    if (parsed?.src === '' || parsed?.src === 'fb' || parsed?.src === 'fb_static') {
      return { src: parsed.src };
    }
  } catch {
    return null;
  }
  return null;
}

export function readStoredOfferFacebookVisit(
  storage: Pick<OfferFacebookVisitStorage, 'getItem'>
): OfferFacebookVisit | null {
  try {
    return parseStoredOfferFacebookVisit(storage.getItem(OFFER_FACEBOOK_VISIT_KEY));
  } catch {
    return null;
  }
}

export function writeStoredOfferFacebookVisit(
  storage: Pick<OfferFacebookVisitStorage, 'setItem'>,
  visit: OfferFacebookVisit
): void {
  storage.setItem(OFFER_FACEBOOK_VISIT_KEY, JSON.stringify({ src: visit.src }));
}

/**
 * The current URL wins. When it is not a Facebook offer visit, the session
 * keeps the last qualifying /offer visit.
 */
export function resolveOfferFacebookVisit(
  search: string,
  storage?: Pick<OfferFacebookVisitStorage, 'getItem'> | null
): OfferFacebookVisit | null {
  const fromSearch = offerFacebookVisitFromSearch(search);
  if (fromSearch) return fromSearch;
  if (!storage) return null;
  return readStoredOfferFacebookVisit(storage);
}
