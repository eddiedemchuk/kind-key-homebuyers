'use client';

import { useLayoutEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import {
  GOOGLE_ADS_PHONE,
  isAlwaysGoogleAdsPhonePath,
  isFacebookOfferDocumentPath,
  isFacebookOfferThankYou,
  isSellerQuizPath,
  offerDisplayPhone,
  ORGANIC_PHONE,
  thankYouPhone,
  type DisplayPhone,
} from '@/lib/phones';

export { GOOGLE_ADS_PHONE, ORGANIC_PHONE };
export type { DisplayPhone };

function phoneBeforeAttribution(pathname: string): DisplayPhone {
  return offerDisplayPhone(pathname);
}

/**
 * Facebook offer pages (/offer/facebook, /offer?src=fb, /offer?src=fb_static) and the
 * seller quiz (/quiz, /offer/quiz) show (253) 453-8597 unless the quiz URL sets a
 * non-Facebook src. A plain /offer visit shows the Google Ads number.
 * /thank-you shows the Facebook offer number only after a submit from a Facebook offer page.
 * Every other page, including /sell-house-as-is and /cash-offer, stays on the main office line.
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
      isSellerQuizPath(pathname) ||
      isFacebookOfferDocumentPath(pathname) ||
      isAlwaysGoogleAdsPhonePath(pathname)
    ) {
      setPhone(offerDisplayPhone(pathname, window.location.search));
      return;
    }
    setPhone(ORGANIC_PHONE);
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
