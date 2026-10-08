'use client';

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

  const slug = match[1];
  const cityMap: Record<string, string> = {
    kent: 'Kent',
    'kent-wa': 'Kent',
    auburn: 'Auburn',
    'auburn-wa': 'Auburn',
    tacoma: 'Tacoma',
    'tacoma-wa': 'Tacoma',
    'federal-way': 'Federal Way',
    'federal-way-wa': 'Federal Way',
    milton: 'Milton',
    'milton-wa': 'Milton',
    edgewood: 'Edgewood',
    'edgewood-wa': 'Edgewood',
    puyallup: 'Puyallup',
    'puyallup-wa': 'Puyallup',
  };

  return cityMap[slug] || null;
}
