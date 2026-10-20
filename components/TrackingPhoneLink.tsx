'use client';

import { useLayoutEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { isGoogleAdsTouch } from '@/lib/attribution';
import { captureAttribution } from '@/lib/attribution-client';
import {
  FACEBOOK_OFFER_PATH,
  FACEBOOK_OFFER_PHONE,
  GOOGLE_ADS_PHONE,
  GOOGLE_ADS_PHONE_PATHS,
  isAlwaysGoogleAdsPhonePath,
  isFacebookOfferThankYou,
  ORGANIC_PHONE,
  thankYouPhone,
  type DisplayPhone,
} from '@/lib/phones';

export { GOOGLE_ADS_PHONE, ORGANIC_PHONE };
export type { DisplayPhone };

const trackingPaths = new Set<string>(GOOGLE_ADS_PHONE_PATHS);

function phoneBeforeAttribution(pathname: string): DisplayPhone {
  if (pathname === FACEBOOK_OFFER_PATH) return FACEBOOK_OFFER_PHONE;
  if (isAlwaysGoogleAdsPhonePath(pathname)) return GOOGLE_ADS_PHONE;
  return ORGANIC_PHONE;
}

/**
 * /offer/facebook shows the Facebook offer number.
 * Other /offer pages show the Google Ads number.
 * /thank-you shows the Facebook offer number only after a submit from /offer/facebook.
 * /sell-house-as-is and /cash-offer switch to the Google Ads number after a paid Google visit.
 * Every other page stays on the organic number.
 */
export function useTrackingPhone(): DisplayPhone {
  const pathname = usePathname() ?? '';
  const [phone, setPhone] = useState<DisplayPhone>(phoneBeforeAttribution(pathname));

  useLayoutEffect(() => {
    if (pathname === '/thank-you') {
      let fromFacebookOffer = false;
      try {
        fromFacebookOffer = isFacebookOfferThankYou(window.location.search, sessionStorage);
      } catch {
        fromFacebookOffer = isFacebookOfferThankYou(window.location.search, null);
      }
      setPhone(thankYouPhone(fromFacebookOffer));
      return;
    }
    if (pathname === FACEBOOK_OFFER_PATH) {
      setPhone(FACEBOOK_OFFER_PHONE);
      return;
    }
    if (isAlwaysGoogleAdsPhonePath(pathname)) {
      setPhone(GOOGLE_ADS_PHONE);
      return;
    }
    if (!trackingPaths.has(pathname)) {
      setPhone(ORGANIC_PHONE);
      return;
    }
    try {
      const touch = captureAttribution();
      setPhone(isGoogleAdsTouch(touch) ? GOOGLE_ADS_PHONE : ORGANIC_PHONE);
    } catch (error) {
      console.error('Tracking phone attribution failed:', error);
    }
  }, [pathname]);

  return phone;
}

export default function TrackingPhoneLink({
  className,
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) {
  const phone = useTrackingPhone();
  return (
    <a href={`tel:${phone.tel}`} className={className} onClick={onClick}>
      {phone.display}
    </a>
  );
}
