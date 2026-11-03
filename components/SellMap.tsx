'use client';

import { useEffect, useRef } from 'react';
import { googleMapsNamespace, loadGoogleMaps } from '@/lib/google-maps';

/** Map pin for the address confirmation screen. The caller renders this only after step 1. */
export default function SellMap({
  apiKey,
  lat,
  lng,
}: {
  apiKey: string;
  lat: number;
  lng: number;
}) {
  const nodeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node || !apiKey) return;
    let cancelled = false;

    void loadGoogleMaps(apiKey)
      .then(() => {
        if (cancelled) return;
        const maps = googleMapsNamespace();
        if (!maps) return;
        const map = new maps.Map(node, {
          center: { lat, lng },
          zoom: 16,
          disableDefaultUI: true,
          gestureHandling: 'cooperative',
          clickableIcons: false,
        });
        new maps.Marker({ map, position: { lat, lng } });
      })
      .catch((error: unknown) => {
        console.error('Sell map error:', error);
      });

    return () => {
      cancelled = true;
    };
  }, [apiKey, lat, lng]);

  return (
    <div
      ref={nodeRef}
      className="mt-3 h-40 w-full overflow-hidden rounded-xl bg-secondary"
      data-sell-map
      role="img"
      aria-label="Map pin for this address"
    />
  );
}
