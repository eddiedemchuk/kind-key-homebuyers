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

export const SERVICE_AREA_CITIES = [
  'Auburn',
  'Kent',
  'Federal Way',
  'Milton',
  'Tacoma',
  'Edgewood',
  'Puyallup',
] as const;

export function localBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: BUSINESS.legalName,
    description:
      'KindKey Home Buyers LLC is a principal buyer based in Auburn, Washington. KindKey purchases houses directly from homeowners in King County and Pierce County and is not a real estate agent or broker.',
    url: BUSINESS.url,
    image: BUSINESS.logo,
    logo: BUSINESS.logo,
    telephone: BUSINESS.telephone,
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
      {
        '@type': 'AdministrativeArea',
        name: 'King County, Washington',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Pierce County, Washington',
      },
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
