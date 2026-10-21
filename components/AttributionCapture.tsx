'use client';

import { useEffect } from 'react';
import { captureAttribution } from '@/lib/attribution-client';

/** Records the landing touch once per page load. A new gclid replaces the stored click. */
export default function AttributionCapture() {
  useEffect(() => {
    try {
      captureAttribution();
    } catch (error) {
      console.error('Attribution capture failed:', error);
    }
  }, []);

  return null;
}
