export type OfferCityCounty = 'King' | 'Pierce' | 'Kitsap';

export interface OfferCityPage {
  name: string;
  slug: string;
  county: OfferCityCounty;
  /** Shown with the county so each page is not a copy of the next. */
  nearby: readonly [string, string];
  /** Alternate local name, such as Lakebay on the Key Peninsula. */
  alsoKnownAs?: string;
}

const KING: readonly string[] = [
  'Seattle',
  'Shoreline',
  'Lake Forest Park',
  'Burien',
  'White Center',
  'Tukwila',
  'SeaTac',
  'Des Moines',
  'Normandy Park',
  'Kent',
  'Renton',
  'Auburn',
  'Federal Way',
  'Covington',
  'Maple Valley',
  'Black Diamond',
  'Enumclaw',
  'Algona',
  'Pacific',
  'Newcastle',
  'Bellevue',
  'Kirkland',
  'Redmond',
  'Sammamish',
  'Issaquah',
  'Mercer Island',
  'Bothell',
  'Kenmore',
  'Woodinville',
  'Snoqualmie',
  'North Bend',
  'Duvall',
  'Carnation',
  'Vashon',
];

const PIERCE: readonly string[] = [
  'Tacoma',
  'Lakewood',
  'University Place',
  'Puyallup',
  'South Hill',
  'Spanaway',
  'Parkland',
  'Frederickson',
  'Graham',
  'Bonney Lake',
  'Sumner',
  'Edgewood',
  'Milton',
  'Fife',
  'Fircrest',
  'Steilacoom',
  'DuPont',
  'Gig Harbor',
  'Orting',
  'Buckley',
  'Eatonville',
  'Key Peninsula',
  'Roy',
  'Ruston',
];

const KITSAP: readonly string[] = [
  'Bremerton',
  'Port Orchard',
  'Silverdale',
  'Poulsbo',
  'Bainbridge Island',
  'Kingston',
  'Keyport',
  'Manchester',
  'Seabeck',
  'Olalla',
  'Hansville',
  'Suquamish',
];

function slugFor(name: string): string {
  return `${name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')}-wa`;
}

const NEARBY_OVERRIDE: Record<string, readonly [string, string]> = {
  Seattle: ['Shoreline', 'Burien'],
  Vashon: ['Seattle', 'Burien'],
  Ruston: ['Tacoma', 'Gig Harbor'],
  'Key Peninsula': ['Gig Harbor', 'Lakebay'],
};

function withNearby(names: readonly string[], county: OfferCityCounty): OfferCityPage[] {
  return names.map((name, index) => {
    const before = names[Math.max(0, index - 1)];
    const after = names[Math.min(names.length - 1, index + 1)];
    const nearby =
      NEARBY_OVERRIDE[name] ??
      (index === 0
        ? ([names[1], names[2]] as const)
        : index === names.length - 1
          ? ([names[index - 1], names[index - 2]] as const)
          : ([before, after] as const));
    return {
      name,
      slug: slugFor(name),
      county,
      nearby,
      ...(name === 'Key Peninsula' ? { alsoKnownAs: 'Lakebay' } : {}),
    };
  });
}

export const offerCityPages: readonly OfferCityPage[] = [
  ...withNearby(KING, 'King'),
  ...withNearby(PIERCE, 'Pierce'),
  ...withNearby(KITSAP, 'Kitsap'),
];

const offerCityBySlug = new Map(offerCityPages.map((city) => [city.slug, city]));

export function getOfferCityPage(slug: string): OfferCityPage | undefined {
  return offerCityBySlug.get(slug);
}

export function offerCityPagePath(city: OfferCityPage): string {
  return `/offer/city/${city.slug}`;
}

export function offerCityHeadline(city: OfferCityPage): string {
  return `#1 Cash Home Buyer in ${city.name}, WA`;
}

export function offerCitySubhead(city: OfferCityPage): string {
  return `Sell your ${city.name} house as-is for cash. 500+ homes bought.`;
}

export function offerCityTitle(city: OfferCityPage): string {
  return `#1 Cash Home Buyer ${city.name} WA | Sell As-Is | KindKey Home Buyers`;
}

export function offerCityDescription(city: OfferCityPage): string {
  const place = city.alsoKnownAs ? `${city.name} (${city.alsoKnownAs})` : city.name;
  return `Sell your ${place} house as-is for cash in ${city.county} County. 500+ homes bought. BBB A- rated. Cash offer within 24 hours. You pick the closing date.`;
}

export function offerCityLocalCopy(city: OfferCityPage): string {
  const place = city.alsoKnownAs ? `${city.name}, including ${city.alsoKnownAs},` : city.name;
  return `${place} is in ${city.county} County. Nearby, KindKey also buys in ${city.nearby[0]} and ${city.nearby[1]}. Cash offer, as-is. No fees, repairs, or cleaning. A solution for any situation. When we make a cash offer, we close on the date you pick.`;
}
