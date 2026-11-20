import Image from 'next/image';
import LeadConnectorChat from '@/components/LeadConnectorChat';
import { MobileNavButton, MobileNavPanel, MobileNavProvider } from '@/components/MobileNav';
import OfferCityTrustBar from '@/components/OfferCityTrustBar';
import OfferHowItWorks from '@/components/OfferHowItWorks';
import OfferHowWeFigure from '@/components/OfferHowWeFigure';
import OfferLeadForm from '@/components/OfferLeadForm';
import OfferMobileBar, { OfferJumpButton, OfferPhoneLink } from '@/components/OfferMobileBar';
import OfferPageFooter from '@/components/OfferPageFooter';
import {
  offerCityHeadline,
  offerCityLocalCopy,
  offerCityPagePath,
  offerCitySubhead,
  type OfferCityPage,
} from '@/data/offerCityPages';
import { offerHowItWorks } from '@/data/offerLandings';
import { OFFER_CITY_ADS_FORM_ORIGIN } from '@/data/offerCityAds';
import { GOOGLE_ADS_PHONE } from '@/lib/phones';
import { BUSINESS, localBusinessJsonLd } from '@/lib/site';

const phone = GOOGLE_ADS_PHONE;

export default function OfferPerCityLanding({ city }: { city: OfferCityPage }) {
  const address = `${BUSINESS.streetAddress}, ${BUSINESS.addressLocality}, ${BUSINESS.addressRegion} ${BUSINESS.postalCode}`;

  return (
    <main
      className="min-h-screen bg-white text-text-primary"
      data-offer-city={offerCityPagePath(city)}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            localBusinessJsonLd(phone.tel, { includeExpansionCities: false })
          ).replace(/</g, '\\u003c'),
        }}
      />
      <header className="z-40 border-b border-gray-200 bg-white md:sticky md:top-0">
        <MobileNavProvider>
          <div className="mx-auto flex max-w-xl items-center justify-between gap-3 px-5 py-1 md:py-3">
            <div className="flex min-w-0 items-center gap-2">
              <Image
                src="/logo-header.avif"
                alt="KindKey Home Buyers LLC logo"
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
                className="inline-flex h-9 shrink-0 items-center whitespace-nowrap rounded-lg bg-accent px-2.5 text-[13px] font-bold leading-none text-white"
              />
              <OfferJumpButton
                location="header"
                className="hidden min-h-12 items-center justify-center rounded-lg bg-divider px-4 text-sm font-bold text-white shadow-sm md:inline-flex"
              />
              <MobileNavButton />
            </div>
          </div>
          <MobileNavPanel className="mx-auto max-w-xl px-5" phone={phone} prefetch={false} />
        </MobileNavProvider>
      </header>

      <div className="mx-auto max-w-xl px-5 pb-[calc(65px+env(safe-area-inset-bottom,0px))] pt-0 md:pb-16 md:pt-8">
        <section>
          <h1
            className="text-balance text-[1.625rem] font-bold leading-[1.15] md:text-3xl"
            style={{ marginBottom: 0 }}
            data-offer-headline
          >
            {offerCityHeadline(city)}
          </h1>
          <p className="mt-1 text-sm leading-snug text-text-secondary">{offerCitySubhead(city)}</p>
          <OfferCityTrustBar />
          <div
            data-offer-form
            data-form-origin={OFFER_CITY_ADS_FORM_ORIGIN}
            className="mt-2 scroll-mt-4 rounded-xl border border-gray-200 bg-white p-3 shadow-sm md:mt-6 md:p-4"
          >
            <OfferLeadForm
              idPrefix="hero"
              formOrigin={OFFER_CITY_ADS_FORM_ORIGIN}
              callPhone={phone}
            />
          </div>
        </section>

        <OfferHowItWorks steps={offerHowItWorks} compact />

        <section className="mt-8" aria-labelledby="offer-per-city-local">
          <h2 id="offer-per-city-local" className="text-xl font-bold">
            Cash home buyer in {city.name}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-text-secondary">
            {offerCityLocalCopy(city)} KindKey is a small, family-owned business. Cash offer within
            24 hours.
          </p>
        </section>

        <OfferHowWeFigure />
        <OfferPageFooter address={address} phone={phone} />
      </div>
      <OfferMobileBar phone={phone} />
      <LeadConnectorChat mobileOnly suppressGreeting mountDelayMs={12000} />
    </main>
  );
}
