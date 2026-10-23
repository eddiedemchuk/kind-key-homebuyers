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
] as const;

export function localBusinessJsonLd(telephone: string = BUSINESS.telephone) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: BUSINESS.legalName,
    description:
      'KindKey Home Buyers LLC is a principal buyer based in Auburn, Washington. KindKey purchases houses directly from homeowners in King County, Pierce County, and Kitsap County and is not a real estate agent or broker.',
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
      ...COUNTY_AREAS.map((name) => ({
        '@type': 'AdministrativeArea',
        name,
      })),
      ...SERVICE_AREA_CITIES.map((name) => ({
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
