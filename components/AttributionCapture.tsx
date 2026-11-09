'use client';

import { useEffect } from 'react';
import { captureAttribution } from '@/lib/attribution-client';
import { persistOfferYouTubeLanding } from '@/lib/offer-youtube-client';

/** Records the landing touch once per page load. A new gclid replaces the stored click. */
export default function AttributionCapture() {
  useEffect(() => {
    try {
      captureAttribution();
      persistOfferYouTubeLanding(window.location.search);
    } catch (error) {
      console.error('Attribution capture failed:', error);
    }
  }, []);

  return null;
}
