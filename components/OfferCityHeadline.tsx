'use client';

import { useLayoutEffect, useState } from 'react';
import { offerCityFromSearch, offerCityHeadline } from '@/lib/offer-city';

/** Default headline on the server. A whitelist city in the ad URL replaces it before paint. */
export default function OfferCityHeadline({ headline }: { headline: string }) {
  const [text, setText] = useState(headline);

  useLayoutEffect(() => {
    const city = offerCityFromSearch(window.location.search);
    setText(city ? offerCityHeadline(city) : headline);
  }, [headline]);

  return text;
}
