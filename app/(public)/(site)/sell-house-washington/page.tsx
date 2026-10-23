import type { Metadata } from 'next';
import Script from 'next/script';
import AdsHeroSection from '@/components/AdsHeroSection';
import AdsConversionBlocks from '@/components/AdsConversionBlocks';
import AdsFAQ from '@/components/AdsFAQ';
import SEOContentAccordion from '@/components/SEOContentAccordion';
import CTASection from '@/components/CTASection';
import Link from 'next/link';
import { citiesByCounty } from '@/data/cities';
import { localBusinessJsonLd } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Sell Your House FAST Anywhere in Washington — Cash Offer in 24 Hours',
  description:
    'Sell your house as-is directly to a principal buyer across Washington State. No repairs required before sale. Close in 7–14 days. Serving King County, Pierce County, Kitsap County, and the rest of WA.',
  openGraph: {
    title: 'Sell Your House FAST Anywhere in Washington — Cash Offer',
    description:
      'Sell your house as-is directly to a principal buyer across Washington State. No repairs required before sale. Close in 7–14 days.',
    images: [{ url: 'https://kindkeyhomebuyers.com/logo.avif', alt: 'KindKey Home Buyers logo' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sell Your House FAST Anywhere in Washington — Cash Offer',
    description:
      'Sell your house as-is directly to a principal buyer across Washington State. No repairs required before sale. Close in 7–14 days.',
    images: ['https://kindkeyhomebuyers.com/logo.avif'],
  },
  alternates: {
    canonical: 'https://kindkeyhomebuyers.com/sell-house-washington',
  },
};

const washingtonFAQ = [
  {
    question: 'Do you buy houses anywhere in Washington State?',
    answer:
      'Yes. We buy houses throughout Washington State, including King County, Pierce County, and Kitsap County. The city list on this page links to the local pages. If your city is not listed, contact us and we can still look at the house.',
  },
  {
    question: 'Do I need to make repairs before selling?',
    answer:
      "No! We buy houses in Washington exactly as they are. Whether your house needs minor cosmetic fixes or major repairs, we'll make you a fair cash offer. You do not need to make repairs before the sale; KindKey handles repairs after purchase.",
  },
  {
    question: 'How fast can we close in Washington?',
    answer:
      "We can close in as little as 7 days, but we work with your timeline. Whether you need to close quickly or need more time to move out, we're flexible. Most transactions in Washington close within 7-14 days, but we can accommodate your schedule.",
  },
  {
    question: 'What types of homes do you buy in Washington?',
    answer:
      "We buy all types of residential properties throughout Washington State: single-family homes, condos, townhouses, multi-family properties, and even land. Condition doesn't matter - we buy houses that need repairs, have tenants, are vacant, or are in perfect condition.",
  },
];

const washingtonSEOContent = {
  intro: `Washington State offers different housing from King County and Pierce County to Kitsap County across the Sound. Whether you are in Auburn, Tacoma, Edgewood, Bremerton, Port Orchard, or another Washington city, selling can be stressful and time-consuming.`,
  description: `We're a local Washington-based cash home buyer serving homeowners throughout the entire state. We understand the unique real estate dynamics across different Washington communities and can provide fair, transparent cash offers regardless of your property's location or condition.`,
};

export default function SellHouseWashingtonPage() {
  return (
    <>
      <Script
        type="application/ld+json"
        id="local-business-schema"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd()).replace(/</g, '\\u003c'),
        }}
      />

      <AdsHeroSection cityName="Washington" />

      <AdsConversionBlocks cityName="Washington" />

      <AdsFAQ cityName="Washington" items={washingtonFAQ} />

      <SEOContentAccordion
        cityName="Washington State"
        cityIntro={washingtonSEOContent.intro}
        cityDescription={washingtonSEOContent.description}
      />

      <section className="bg-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-2xl font-bold text-text-primary md:text-3xl">
              We Buy Houses in Cities Throughout Washington
            </h2>
            <div className="space-y-8">
              {citiesByCounty().map((group) => (
                <div key={group.group}>
                  <h3 className="mb-3 text-lg font-semibold text-text-primary">{group.label}</h3>
                  <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                    {group.cities.map((city) => (
                      <Link
                        key={city.slug}
                        href={`/areas/${city.slug}`}
                        className="rounded-lg border border-divider bg-secondary px-4 py-3 text-center font-medium text-text-primary transition-colors hover:border-accent hover:bg-accent/10"
                      >
                        {city.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-center text-text-secondary">
              Don't see your city? We buy houses throughout Washington State.{' '}
              <Link href="/contact" className="text-divider underline hover:text-divider/80">
                Contact us
              </Link>{' '}
              to see if we can help.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Sell Your Washington Home?"
        subtitle="Get your cash offer today. No obligation, no pressure."
      />
    </>
  );
}
