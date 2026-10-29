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
  'Mountlake Terrace',
  'Lake Stevens',
  'Mill Creek',
  'Marysville',
  'Mukilteo',
  'Lynnwood',
  'Edmonds',
  'Everett',
  'Bothell',
  'Monroe',
  'Arlington',
  'Stanwood',
  'SeaTac',
  'Tukwila',
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

/** Explicit `city` wins, then `keyword`, then `kw`, then `utm_term`. */
const CITY_PARAM_KEYS = ['city', 'keyword', 'kw', 'utm_term'] as const;

export function offerCityHeadline(city: OfferCity): string {
  return `We Buy Houses in ${city} for Cash`;
}

export function offerPageHeadline(
  fallback: string,
  params: Record<string, string | string[] | undefined>
): string {
  const city = offerCityFromSearch(offerCitySearchFromParams(params));
  return city ? offerCityHeadline(city) : fallback;
}

function offerCitySearchFromParams(params: Record<string, string | string[] | undefined>): string {
  const search = new URLSearchParams();
  for (const key of CITY_PARAM_KEYS) {
    const value = params[key];
    const raw = Array.isArray(value) ? value[0] : value;
    if (raw) search.set(key, raw);
  }
  return search.toString();
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

  return (
    matchNormalizedCity(normalized) ?? matchNormalizedCity(normalized.replace(/sea tac/g, 'seatac'))
  );
}

function matchNormalizedCity(normalized: string): OfferCity | null {
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
