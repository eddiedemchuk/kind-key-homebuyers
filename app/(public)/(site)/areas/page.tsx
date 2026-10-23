import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { citiesByCounty } from '@/data/cities';
import { APPROVED_TRANSACTION_DISCLOSURE } from '@/data/disclosures';
import { faqJsonLd, pageMetadata } from '@/lib/seo';
import { localBusinessJsonLd } from '@/lib/site';

const content = {
  title: 'Areas We Buy in King, Pierce, and Kitsap County',
  description:
    'KindKey Home Buyers LLC buys houses as-is in King County, Pierce County, and Kitsap County. Find your city and request a cash offer from an Auburn principal buyer.',
  path: '/areas',
};

const areaFaqs = [
  {
    question: 'Which counties does KindKey buy in?',
    answer:
      'KindKey Home Buyers LLC buys houses in King County, Pierce County, and Kitsap County, Washington. The company is based at 640 1st St SW in Auburn. KindKey is a principal buyer, not a real estate agent or brokerage.',
  },
  {
    question: 'Are Spanaway and Silverdale cities?',
    answer:
      'No. Spanaway is an unincorporated community in Pierce County. Silverdale is an unincorporated community in Kitsap County. KindKey still buys houses there. The county, not a city hall, is the local government. The title report confirms the parcel.',
  },
  {
    question: 'Does KindKey charge a commission?',
    answer: APPROVED_TRANSACTION_DISCLOSURE,
  },
];

export const metadata: Metadata = pageMetadata(content);

export default function AreasPage() {
  const groups = citiesByCounty();

  return (
    <>
      <JsonLd id="local-business-schema" data={localBusinessJsonLd()} />
      <JsonLd id="faq-schema" data={faqJsonLd(areaFaqs)} />
      <section className="bg-primary py-16">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h1 className="mb-4 text-4xl font-bold text-text-primary md:text-5xl">
            Areas we buy in Washington
          </h1>
          <p className="mb-6 max-w-3xl text-lg text-text-secondary">
            KindKey Home Buyers LLC buys houses directly from owners in King County, Pierce County,
            and Kitsap County. The office is at 640 1st St SW, Auburn, WA 98001. KindKey is a
            principal buyer and is not a real estate agent. Choose a city for local detail, or{' '}
            <Link href="/cash-offer" className="font-semibold text-divider hover:underline">
              request a cash offer
            </Link>
            .
          </p>
          <p className="mb-10 text-sm text-text-secondary">{APPROVED_TRANSACTION_DISCLOSURE}</p>

          <div className="space-y-12">
            {groups.map((group) => (
              <section key={group.group}>
                <h2 className="mb-4 text-2xl font-semibold text-text-primary">{group.label}</h2>
                <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {group.cities.map((city) => (
                    <li key={city.slug}>
                      <Link
                        href={`/areas/${city.slug}`}
                        className="block h-full rounded-lg border border-divider bg-secondary p-5 transition-colors hover:border-accent"
                      >
                        <span className="block text-lg font-semibold text-text-primary">
                          {city.name}, WA
                        </span>
                        <span className="mt-1 block text-sm text-text-secondary">
                          {city.countyLabel}
                        </span>
                        <span className="mt-3 block text-sm text-text-secondary">
                          {city.neighborhoods.join(', ')}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <div className="mt-12">
            <h2 className="mb-4 text-2xl font-semibold text-text-primary">Common questions</h2>
            <dl className="space-y-6">
              {areaFaqs.map((faq) => (
                <div key={faq.question}>
                  <dt className="font-semibold text-text-primary">{faq.question}</dt>
                  <dd className="mt-2 text-text-secondary">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}
