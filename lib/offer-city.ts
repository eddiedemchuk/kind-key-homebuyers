/** Cities we will print in an offer headline. Anything else stays off the page. */
export const OFFER_CITIES = [
  'University Place',
  'Bonney Lake',
  'Maple Valley',
  'Gig Harbor',
  'Port Orchard',
  'Federal Way',
  'Des Moines',
  'Bremerton',
  'Silverdale',
  'Puyallup',
  'Lakewood',
  'Spanaway',
  'Covington',
  'Edgewood',
  'Enumclaw',
  'Poulsbo',
  'Tacoma',
  'Auburn',
  'Renton',
  'Burien',
  'Sumner',
  'Milton',
  'Kent',
  'Fife',
] as const;

export type OfferCity = (typeof OFFER_CITIES)[number];

/** Query keys the ad URLs already send. Explicit `city` wins, then `keyword`, then `utm_term`. */
const CITY_PARAM_KEYS = ['city', 'keyword', 'utm_term'] as const;

export function offerCityHeadline(city: OfferCity): string {
  return `We Buy Houses in ${city}`;
}

/**
 * Returns a whitelist city found in the current query, or null.
 * The displayed name is always the whitelist spelling, never the raw parameter.
 */
export function offerCityFromSearch(search: string): OfferCity | null {
  const query = search.startsWith('?') ? search.slice(1) : search;
  let params: URLSearchParams;
  try {
    params = new URLSearchParams(query);
  } catch {
    return null;
  }

  for (const key of CITY_PARAM_KEYS) {
    const city = matchOfferCity(params.get(key) ?? '');
    if (city) return city;
  }
  return null;
}

function matchOfferCity(raw: string): OfferCity | null {
  const normalized = raw
    .toLowerCase()
    .replace(/[_-]+/g, ' ')
    .replace(/[^a-z\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  if (!normalized) return null;

  const padded = ` ${normalized} `;
  let best: { index: number; city: OfferCity } | null = null;
  for (const city of OFFER_CITIES) {
    const index = padded.indexOf(` ${city.toLowerCase()} `);
    if (index === -1) continue;
    if (!best || index < best.index || (index === best.index && city.length > best.city.length)) {
      best = { index, city };
    }
  }
  return best?.city ?? null;
}
