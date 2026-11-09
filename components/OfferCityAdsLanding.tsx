import Image from 'next/image';
import Link from 'next/link';
import LeadConnectorChat from '@/components/LeadConnectorChat';
import { MobileNavButton, MobileNavPanel, MobileNavProvider } from '@/components/MobileNav';
import OfferCityHeadline from '@/components/OfferCityHeadline';
import OfferLeadForm from '@/components/OfferLeadForm';
import OfferMobileBar, { OfferJumpButton, OfferPhoneLink } from '@/components/OfferMobileBar';
import {
  OFFER_CITY_ADS_COMPARISON,
  OFFER_CITY_ADS_FAQS,
  OFFER_CITY_ADS_FORM_ORIGIN,
  OFFER_CITY_ADS_SITUATIONS,
  OFFER_CITY_ADS_STEPS,
  OFFER_CITY_ADS_TRUST,
  type OfferCityAdsPage,
} from '@/data/offerCityAds';
import { GOOGLE_ADS_PHONE } from '@/lib/phones';
import { faqJsonLd } from '@/lib/seo';
import { BUSINESS, localBusinessJsonLd } from '@/lib/site';

const phone = GOOGLE_ADS_PHONE;

export default function OfferCityAdsLanding({
  content,
  headline = content.headline,
}: {
  content: OfferCityAdsPage;
  /** Server headline. A whitelist city in the ad URL replaces it before paint. */
  headline?: string;
}) {
  const address = `${BUSINESS.streetAddress}, ${BUSINESS.addressLocality}, ${BUSINESS.addressRegion} ${BUSINESS.postalCode}`;

  return (
    <main className="min-h-screen bg-white text-text-primary" data-offer-city={content.path}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd(phone.tel)).replace(/</g, '\\u003c'),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd([...OFFER_CITY_ADS_FAQS])).replace(/</g, '\\u003c'),
        }}
      />
      <header className="z-40 border-b border-gray-200 bg-white md:sticky md:top-0">
        <MobileNavProvider>
          <div className="mx-auto flex max-w-xl items-center justify-between gap-3 px-5 py-1 md:py-3">
            <div className="flex min-w-0 items-center gap-2">
              <Image
                src="/logo-header.avif"
                alt="KindKey Home Buyers"
                width={36}
                height={36}
                priority
                className="h-9 w-9 object-contain"
              />
              <span className="truncate text-sm font-bold leading-tight">KindKey Home Buyers</span>
            </div>
            <div className="flex shrink-0 items-center gap-3">
              <OfferPhoneLink
                phone={phone}
                location="header"
                className="text-base font-semibold text-divider"
              />
              <OfferJumpButton
                location="header"
                className="hidden min-h-12 items-center justify-center rounded-lg bg-divider px-4 text-sm font-bold text-white shadow-sm md:inline-flex"
              />
              <MobileNavButton />
            </div>
          </div>
          <MobileNavPanel className="mx-auto max-w-xl px-5" phone={phone} />
        </MobileNavProvider>
      </header>

      <div className="mx-auto max-w-xl px-5 pb-[calc(65px+env(safe-area-inset-bottom,0px))] pt-0 md:pb-16 md:pt-8">
        <section>
          <h1
            className="text-balance text-3xl font-bold leading-tight"
            style={{ marginBottom: 0 }}
            data-offer-headline
          >
            <OfferCityHeadline headline={headline} />
          </h1>
          <p className="mt-2 text-base leading-snug text-text-secondary">{content.subhead}</p>
          <ul
            className="mt-3 grid grid-cols-2 gap-2"
            aria-label="Why ask for an offer"
            data-offer-trust-strip
          >
            {OFFER_CITY_ADS_TRUST.map((item) => (
              <li
                key={item}
                className="rounded-md border border-gray-200 bg-secondary px-2 py-1.5 text-center text-xs font-semibold leading-tight"
              >
                {item}
              </li>
            ))}
          </ul>
          <div
            data-offer-form
            data-form-origin={OFFER_CITY_ADS_FORM_ORIGIN}
            className="mt-4 scroll-mt-4 rounded-xl border border-gray-200 bg-white p-3 shadow-sm md:scroll-mt-20 md:p-4"
          >
            <OfferLeadForm idPrefix="hero" formOrigin={OFFER_CITY_ADS_FORM_ORIGIN} />
          </div>
        </section>

        <section className="mt-10" aria-labelledby="offer-city-area-heading">
          <h2 id="offer-city-area-heading" className="text-xl font-bold">
            {content.areaHeading}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-text-secondary">{content.areaBody}</p>
        </section>

        <section className="mt-10" aria-labelledby="offer-city-situations-heading">
          <h2 id="offer-city-situations-heading" className="text-xl font-bold">
            Situations we buy
          </h2>
          <p className="mt-2 text-base leading-snug text-text-secondary">
            We have a solution for any situation. These pages are for houses that are not already
            listed.
          </p>
          <ul className="mt-4 space-y-4">
            {OFFER_CITY_ADS_SITUATIONS.map((item) => (
              <li key={item.title}>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-text-secondary">{item.body}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10" aria-labelledby="vs-agent-heading">
          <h2 id="vs-agent-heading" className="text-xl font-bold">
            Cash offer vs listing with an agent
          </h2>
          <div className="mt-4 overflow-hidden rounded-xl border border-gray-200">
            <div className="grid grid-cols-2 border-b border-gray-200 text-sm font-bold">
              <p className="bg-secondary px-3 py-2">Cash offer</p>
              <p className="border-l border-gray-200 px-3 py-2 text-text-secondary">
                Listing with an agent
              </p>
            </div>
            {OFFER_CITY_ADS_COMPARISON.map((row) => (
              <div key={row.label} className="border-b border-gray-200 last:border-b-0">
                <p className="px-3 pt-3 text-xs font-semibold text-text-secondary">{row.label}</p>
                <div className="grid grid-cols-2">
                  <p className="px-3 py-3 text-sm font-medium leading-snug">{row.cash}</p>
                  <p className="border-l border-gray-200 px-3 py-3 text-sm leading-snug text-text-secondary">
                    {row.agent}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10" aria-labelledby="how-it-works-heading">
          <h2 id="how-it-works-heading" className="text-xl font-bold">
            How it works
          </h2>
          <ol className="mt-5 space-y-5" data-offer-steps>
            {OFFER_CITY_ADS_STEPS.map((step, index) => (
              <li key={step.title} className="flex gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-divider text-sm font-bold text-white">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-semibold">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-text-secondary">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-10" aria-labelledby="offer-city-faq-heading" data-offer-faq>
          <h2 id="offer-city-faq-heading" className="text-xl font-bold">
            FAQ
          </h2>
          <dl className="mt-4 space-y-4">
            {OFFER_CITY_ADS_FAQS.map((faq) => (
              <div key={faq.question}>
                <dt className="font-semibold">{faq.question}</dt>
                <dd className="mt-1 text-sm leading-relaxed text-text-secondary">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="mt-10">
          <OfferJumpButton
            location="bottom"
            className="flex min-h-14 w-full items-center justify-center rounded-lg bg-divider px-6 text-lg font-bold text-white shadow-md"
          />
        </section>

        <footer className="mt-12 border-t border-gray-200 py-8 text-sm leading-relaxed text-text-secondary">
          <p>{address}</p>
          <p className="mt-3">
            <OfferPhoneLink
              phone={phone}
              location="footer"
              className="text-base font-semibold text-divider"
            />
          </p>
          <p className="mt-3">
            <Link href="/" className="font-medium text-divider underline">
              KindKey Home Buyers
            </Link>
          </p>
        </footer>
      </div>
      <OfferMobileBar phone={phone} />
      <LeadConnectorChat mobileOnly suppressGreeting mountDelayMs={8000} />
    </main>
  );
}
