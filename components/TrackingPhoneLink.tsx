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

/** Organic number until a stored or current Google Ads visit is known on the two paid-swap pages. */
export function useTrackingPhone(): DisplayPhone {
  const pathname = usePathname();
  const [phone, setPhone] = useState<DisplayPhone>(ORGANIC_PHONE);

  useEffect(() => {
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
