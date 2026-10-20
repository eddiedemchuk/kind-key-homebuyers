export const ORGANIC_PHONE = { display: '(253) 518-3638', tel: '+12535183638' } as const;
export const GOOGLE_ADS_PHONE = { display: '(253) 352-4379', tel: '+12533524379' } as const;
export const FACEBOOK_ADS_PHONE = { display: '(206) 519-5463', tel: '+12065195463' } as const;

/** Organic pages that swap to the Google Ads number after a paid Google visit. */
export const GOOGLE_ADS_PHONE_PATHS = ['/sell-house-as-is', '/cash-offer'] as const;

export type DisplayPhone = { display: string; tel: string };

/** Offer landings and the post-submit thank-you page always show the ads number. */
export function isAlwaysGoogleAdsPhonePath(pathname: string): boolean {
  return pathname === '/thank-you' || pathname === '/offer' || pathname.startsWith('/offer/');
}
