'use client';

import { useLayoutEffect, useState } from 'react';
import { offerDisplayedHeadline } from '@/lib/offer-city';

/** Default headline on the server. A whitelist city in the ad URL replaces it before paint. */
export default function OfferCityHeadline({
  headline,
  lockHeadline = false,
}: {
  headline: string;
  /** Keep the server headline. Foreclosure must stay about foreclosure. */
  lockHeadline?: boolean;
}) {
  const [text, setText] = useState(headline);

  useLayoutEffect(() => {
    if (lockHeadline) return;
    setText(offerDisplayedHeadline(headline, window.location.search));
  }, [headline, lockHeadline]);

  if (lockHeadline) return headline;
  return text;
}
