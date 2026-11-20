import { cities } from '@/data/cities';

export const SITE_URL = 'https://kindkeyhomebuyers.com';

export const BUSINESS = {
  legalName: 'KindKey Home Buyers LLC',
  brandName: 'KindKey Home Buyers',
  url: SITE_URL,
  email: 'info@kindkeyhomebuyers.com',
  telephone: '+12065195463',
  streetAddress: '640 1st St SW',
  addressLocality: 'Auburn',
  addressRegion: 'WA',
  postalCode: '98001',
  addressCountry: 'US',
  sameAs: [
    'https://maps.google.com/maps?cid=17956619195552254372',
    'https://www.yelp.com/biz/kindkey-home-buyers-auburn',
  ],
  logo: `${SITE_URL}/logo.avif`,
} as const;

export const SERVICE_AREA_CITIES = cities.map((city) => city.name);

const COUNTY_AREAS = [
  'King County, Washington',
  'Pierce County, Washington',
  'Kitsap County, Washington',
  'Snohomish County, Washington',
  'Thurston County, Washington',
] as const;

const EXPANSION_CITY_NAMES = new Set([
  'Seattle',
  'Bellevue',
  'Shoreline',
  'Maple Valley',
  'Covington',
  'Enumclaw',
  'Gig Harbor',
  'University Place',
  'South Hill',
  'Everett',
  'Lynnwood',
  'Olympia',
]);

const FULL_AREA_DESCRIPTION =
  'KindKey Home Buyers LLC is a principal buyer based in Auburn, Washington. KindKey purchases houses directly from homeowners in King County, Pierce County, Kitsap County, Snohomish County, and Thurston County and is not a real estate agent or broker.';

const PRE_EXPANSION_AREA_DESCRIPTION =
  'KindKey Home Buyers LLC is a principal buyer based in Auburn, Washington. KindKey purchases houses directly from homeowners in King County, Pierce County, Kitsap County, and Snohomish County and is not a real estate agent or broker.';

export function localBusinessJsonLd(
  telephone: string = BUSINESS.telephone,
  options?: { includeExpansionCities?: boolean }
) {
  const includeExpansion = options?.includeExpansionCities ?? true;
  const cityNames = includeExpansion
    ? SERVICE_AREA_CITIES
    : SERVICE_AREA_CITIES.filter((name) => !EXPANSION_CITY_NAMES.has(name));
  const counties = includeExpansion
    ? COUNTY_AREAS
    : COUNTY_AREAS.filter((name) => name !== 'Thurston County, Washington');

  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: BUSINESS.legalName,
    description: includeExpansion ? FULL_AREA_DESCRIPTION : PRE_EXPANSION_AREA_DESCRIPTION,
    url: BUSINESS.url,
    image: BUSINESS.logo,
    logo: BUSINESS.logo,
    telephone,
    email: BUSINESS.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS.streetAddress,
      addressLocality: BUSINESS.addressLocality,
      addressRegion: BUSINESS.addressRegion,
      postalCode: BUSINESS.postalCode,
      addressCountry: BUSINESS.addressCountry,
    },
    areaServed: [
      ...counties.map((name) => ({
        '@type': 'AdministrativeArea',
        name,
      })),
      ...cityNames.map((name) => ({
        '@type': 'City',
        name,
        addressRegion: 'WA',
        addressCountry: 'US',
      })),
    ],
    sameAs: [...BUSINESS.sameAs],
    serviceType: 'Cash home buyer',
  };
}

export function cityRealEstateServiceJsonLd(city: {
  name: string;
  slug: string;
  countyLabel: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Cash purchase of residential real estate in ${city.name}, Washington`,
    serviceType: 'Principal cash purchase of residential real estate',
    category: 'Real estate',
    description: `KindKey Home Buyers LLC buys houses directly from owners in ${city.name}, ${city.countyLabel}, Washington. KindKey is a principal buyer and is not a real estate agent or brokerage.`,
    provider: {
      '@type': 'LocalBusiness',
      name: BUSINESS.legalName,
      url: BUSINESS.url,
      telephone: BUSINESS.telephone,
      image: BUSINESS.logo,
      address: {
        '@type': 'PostalAddress',
        streetAddress: BUSINESS.streetAddress,
        addressLocality: BUSINESS.addressLocality,
        addressRegion: BUSINESS.addressRegion,
        postalCode: BUSINESS.postalCode,
        addressCountry: BUSINESS.addressCountry,
      },
    },
    areaServed: {
      '@type': 'City',
      name: `${city.name}, Washington`,
      containedInPlace: {
        '@type': 'AdministrativeArea',
        name: `${city.countyLabel}, Washington`,
      },
    },
    url: `${BUSINESS.url}/areas/${city.slug}`,
  };
}
