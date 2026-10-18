'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { isGoogleAdsTouch } from '@/lib/attribution';
import { captureAttribution } from '@/lib/attribution-client';
import {
  GOOGLE_ADS_PHONE,
  GOOGLE_ADS_PHONE_PATHS,
  ORGANIC_PHONE,
  type DisplayPhone,
} from '@/lib/phones';

export { GOOGLE_ADS_PHONE, ORGANIC_PHONE };
export type { DisplayPhone };

const trackingPaths = new Set<string>(GOOGLE_ADS_PHONE_PATHS);

function isOfferPath(pathname: string): boolean {
  return pathname === '/offer' || pathname.startsWith('/offer/');
}

/**
 * /offer and /offer/* always show the Google Ads number.
 * /sell-house-as-is and /cash-offer switch to it after a paid Google visit.
 * Every other page stays on the organic number.
 */
export function useTrackingPhone(): DisplayPhone {
  const pathname = usePathname() ?? '';
  const offerPage = isOfferPath(pathname);
  const [phone, setPhone] = useState<DisplayPhone>(offerPage ? GOOGLE_ADS_PHONE : ORGANIC_PHONE);

  useEffect(() => {
    if (isOfferPath(pathname)) {
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
