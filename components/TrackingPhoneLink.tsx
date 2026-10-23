'use client';

import { useLayoutEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { isGoogleAdsTouch } from '@/lib/attribution';
import { captureAttribution } from '@/lib/attribution-client';
import {
  GOOGLE_ADS_PHONE,
  GOOGLE_ADS_PHONE_PATHS,
  isAlwaysGoogleAdsPhonePath,
  isFacebookOfferDocumentPath,
  isFacebookOfferThankYou,
  offerDisplayPhone,
  ORGANIC_PHONE,
  thankYouPhone,
  type DisplayPhone,
} from '@/lib/phones';

export { GOOGLE_ADS_PHONE, ORGANIC_PHONE };
export type { DisplayPhone };

const trackingPaths = new Set<string>(GOOGLE_ADS_PHONE_PATHS);

function phoneBeforeAttribution(pathname: string): DisplayPhone {
  return offerDisplayPhone(pathname);
}

/**
 * Facebook offer pages (/offer/facebook, /offer?src=fb, /offer?src=fb_static) show
 * (253) 453-8597. A plain /offer visit shows the Google Ads number.
 * /thank-you shows the Facebook offer number only after a submit from a Facebook offer page.
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
    if (
      pathname === '/offer' ||
      isFacebookOfferDocumentPath(pathname) ||
      isAlwaysGoogleAdsPhonePath(pathname)
    ) {
      setPhone(offerDisplayPhone(pathname, window.location.search));
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
