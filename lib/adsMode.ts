'use client';

import { getCityBySlug } from '@/data/cities';

/** Returns true for Google Ads visits identified by gclid or google/cpc UTM parameters. */
export function isAdsMode(): boolean {
  if (typeof window === 'undefined') {
    return false;
  }

  const params = new URLSearchParams(window.location.search);

  if (params.has('gclid')) {
    return true;
  }

  const utmSource = params.get('utm_source');
  const utmMedium = params.get('utm_medium');

  if (utmSource === 'google' && utmMedium === 'cpc') {
    return true;
  }

  return false;
}

export function getCityFromPath(): string | null {
  if (typeof window === 'undefined') {
    return null;
  }

  const path = window.location.pathname;
  const match = path.match(/\/areas\/([^/]+)/);

  if (!match) {
    return null;
  }

  const slug = match[1].replace(/-wa$/, '');
  return getCityBySlug(slug)?.name ?? null;
}
