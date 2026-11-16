import Image from 'next/image';
import LeadConnectorChat from '@/components/LeadConnectorChat';
import { MobileNavButton, MobileNavPanel, MobileNavProvider } from '@/components/MobileNav';
import HousesBought from '@/components/HousesBought';
import OfferCityHeadline from '@/components/OfferCityHeadline';
import OfferHowItWorks from '@/components/OfferHowItWorks';
import OfferLeadForm from '@/components/OfferLeadForm';
import OfferMobileBar, { OfferJumpButton, OfferPhoneLink } from '@/components/OfferMobileBar';
import OfferPageFooter from '@/components/OfferPageFooter';
import type { OfferLandingContent } from '@/data/offerLandings';
import { BBB_TRUST_LINE, GOOGLE_REVIEWS_URL, shortGoogleReviews } from '@/data/offerCredibility';
import type { FormOrigin } from '@/lib/form-origin';
import { GOOGLE_ADS_PHONE, type DisplayPhone } from '@/lib/phones';
import { BUSINESS, localBusinessJsonLd } from '@/lib/site';

const AGENT_COMPARISON = [
  {
    label: 'Fees',
    kindkey: 'No fees',
    agent: 'An agent commission',
  },
  {
    label: 'Repairs and cleaning',
    kindkey: 'No repairs and no cleaning. Cash offer, as-is.',
    agent: 'Repairs and cleaning',
  },
  {
    label: 'Timeline',
    kindkey: 'Close in as little as 7 days, or you pick the closing date',
    agent: 'A listing timeline',
  },
] as const;

const DISTRESS_NOTES = [
  'Back taxes and liens are paid out of the sale at closing, not out of your pocket first.',
  'Open code violations, unpermitted work, or tenants in place? We still buy without asking you to fix or evict first.',
  'Take what you want and leave the rest — no cleanout needed.',
] as const;

/** Search phrases the Situations ad group sends to /offer. The house and the sale only. */
const OFFER_SITUATIONS = [
  {
    title: 'Inherited and probate',
    body: 'You can ask for a cash offer on an inherited or probate house. You do not have to empty the house first. KindKey does not give legal advice about the estate.',
  },
  {
    title: 'Divorce',
    body: 'You can ask for a cash offer on the house during a divorce. KindKey does not give legal advice about the divorce. You pick the closing date.',
  },
  {
    title: 'Stop foreclosure',
    body: 'Tell us the sale date if you have one. You can ask for a cash offer before the sale. Asking for an offer does not stop a foreclosure.',
  },
  {
    title: 'House with tenants',
    body: 'Tenants can stay in place. You do not have to end a rental before you ask for an offer. Cash offer, as-is.',
  },
  {
    title: 'Major repairs and fire damage',
    body: 'A house that needs work, including fire damage, can still get a cash offer, as-is. No fees, repairs, or cleaning. Cash offer within 24 hours.',
  },
  {
    title: 'Tax delinquent, back taxes, and liens',
    body: 'Back taxes and liens are paid out of the sale at closing, not out of your pocket first. Tell us about them when you tell us about the house.',
  },
] as const;

function OfferAgentComparison() {
  return (
    <section className="mt-10" aria-labelledby="vs-agent-heading">
      <h2 id="vs-agent-heading" className="text-xl font-bold">
        Selling to KindKey vs. Listing With an Agent
      </h2>
      <div className="mt-4 overflow-hidden rounded-xl border border-gray-200">
        <div className="grid grid-cols-2 border-b border-gray-200 text-sm font-bold">
          <p className="bg-secondary px-3 py-2">KindKey</p>
          <p className="border-l border-gray-200 px-3 py-2 text-text-secondary">
            Traditional Agent
          </p>
        </div>
        {AGENT_COMPARISON.map((row) => (
          <div key={row.label} className="border-b border-gray-200 last:border-b-0">
            <p className="px-3 pt-3 text-xs font-semibold text-text-secondary">{row.label}</p>
            <div className="grid grid-cols-2">
              <p className="px-3 py-3 text-sm font-medium leading-snug">{row.kindkey}</p>
              <p className="border-l border-gray-200 px-3 py-3 text-sm leading-snug text-text-secondary">
                {row.agent}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function OfferCountyBuyers({ includeKitsap = false }: { includeKitsap?: boolean }) {
  const area = includeKitsap
    ? 'Pierce County, South King County, and Kitsap County'
    : 'Pierce and South King County';

  return (
    <section className="mt-8" aria-labelledby="county-buyers-heading">
      <h2 id="county-buyers-heading" className="text-xl font-bold">
        {includeKitsap
          ? 'Cash Home Buyers in Pierce, South King, and Kitsap County'
          : 'Cash Home Buyers in Pierce & South King County'}
      </h2>
      <div className="mt-3 space-y-3 text-base leading-snug text-text-secondary">
        {includeKitsap ? (
          <p className="font-semibold text-text-primary" data-offer-service-area>
            Pierce County, South King County, and Kitsap County.
          </p>
        ) : null}
        <p>
          KindKey Home Buyers is a small, family-owned business. Cash home buyers. Sell your
          property for cash, as-is. We buy houses for cash across {area}.
          {includeKitsap ? ' We buy homes for cash.' : ''}
        </p>
        <p>
          <span className="font-semibold text-text-primary">We buy houses as-is.</span> No fees,
          repairs, or cleaning.
        </p>
        <p>
          <span className="font-semibold text-text-primary">Cash offer within 24 hours.</span> Tell
          us about the property.
        </p>
        <p>
          <span className="font-semibold text-text-primary">You pick the closing date.</span> Close
          in as little as 7 days, or choose a later date.
        </p>
        <p>
          <span className="font-semibold text-text-primary">A solution for any situation.</span>{' '}
          Cash for houses from a small, family-owned business in Auburn.
        </p>
      </div>
      <OfferJumpButton
        location="bottom"
        label="Get My Cash Offer"
        className="mt-4 flex min-h-14 w-full items-center justify-center rounded-lg bg-divider px-6 text-lg font-bold text-white shadow-md"
      />
    </section>
  );
}

function OfferDistressNotes() {
  return (
    <section className="mt-8" aria-label="Taxes, code cases, and cleanout">
      <ul className="space-y-3">
        {DISTRESS_NOTES.map((note) => (
          <li key={note} className="flex gap-3 text-base leading-snug">
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-divider" aria-hidden />
            <span>{note}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function OfferSituations() {
  return (
    <section className="mt-8" aria-labelledby="offer-situations-heading" data-offer-situations>
      <h2 id="offer-situations-heading" className="text-xl font-bold">
        Situations we buy
      </h2>
      <p className="mt-2 text-base leading-snug text-text-secondary">
        For an off-market house that is not listed with an agent.
      </p>
      <ul className="mt-4 space-y-4">
        {OFFER_SITUATIONS.map((item) => (
          <li key={item.title}>
            <h3 className="font-semibold">{item.title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-text-secondary">{item.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function OfferLanding({
  content,
  formOrigin,
  trackMetaLead = false,
  phone = GOOGLE_ADS_PHONE,
  src,
  showOfferMath = false,
  showAgentComparison = false,
  showDistressNotes = false,
  showServiceArea = false,
  showSituations = false,
  steppedForm = false,
  stickyPhone,
  lockHeadline = false,
  trustStrip,
}: {
  content: OfferLandingContent;
  formOrigin: FormOrigin;
  /** Passed through to the form. Facebook offer visits set this. */
  trackMetaLead?: boolean;
  /** Header, footer, menu, and mobile call bar. Defaults to the Google Ads number. */
  phone?: DisplayPhone;
  /** Sticky tap-to-call when it should differ from the header tracking number. */
  stickyPhone?: DisplayPhone;
  /** Query src for a Facebook /offer visit. Empty when only utm_source=facebook matched. */
  src?: string;
  /** Short offer-math note shown under the form on /offer only. */
  showOfferMath?: boolean;
  /** KindKey vs. agent comparison, shown on /offer. */
  showAgentComparison?: boolean;
  /** Taxes, code cases, and cleanout notes on /offer and /offer/foreclosure. */
  showDistressNotes?: boolean;
  /** Names Kitsap next to Pierce and South King. /offer only. */
  showServiceArea?: boolean;
  /** Divorce, foreclosure, tenants, and liens. /offer only. */
  showSituations?: boolean;
  /** Two-step hero form on /offer/facebook. /offer and the situation pages stay one step. */
  steppedForm?: boolean;
  /** Keep the server headline. Foreclosure ads must not become the generic city line. */
  lockHeadline?: boolean;
  /** Short claims under the headline. Replaces the single BBB line when set. */
  trustStrip?: readonly string[];
}) {
  const address = `${BUSINESS.streetAddress}, ${BUSINESS.addressLocality}, ${BUSINESS.addressRegion} ${BUSINESS.postalCode}`;

  return (
    <main className="min-h-screen bg-white text-text-primary">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd(phone.tel)).replace(/</g, '\\u003c'),
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
            <OfferCityHeadline headline={content.headline} lockHeadline={lockHeadline} />
          </h1>
          <p className="mt-0.5 text-lg font-bold leading-tight" data-offer-speed>
            Get your cash offer within 24 hours
          </p>
          <p className="mt-1 text-base leading-snug text-text-secondary md:mt-2">
            {content.subhead}
          </p>
          <div
            data-offer-form
            className="mt-3 scroll-mt-4 rounded-xl border border-gray-200 bg-white p-3 shadow-sm md:mt-6 md:scroll-mt-20 md:p-4"
          >
            <OfferLeadForm
              idPrefix="hero"
              formOrigin={formOrigin}
              trackMetaLead={trackMetaLead}
              src={src}
              stepped={steppedForm}
            />
          </div>
          {trustStrip && trustStrip.length > 0 ? (
            <ul
              className="mt-32 grid grid-cols-2 gap-2 md:mt-6"
              aria-label="Why ask for an offer"
              data-offer-trust-strip
            >
              {trustStrip.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-gray-200 bg-secondary px-2 py-1.5 text-center text-xs font-semibold leading-tight"
                >
                  {item}
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-32 inline-flex items-center rounded-full border-2 border-divider bg-secondary px-4 py-1 text-sm font-bold text-text-primary md:mt-6">
              {BBB_TRUST_LINE}
            </p>
          )}
          {content.pageSituations && content.pageSituations.length > 0 ? (
            <section
              className="mt-8"
              aria-labelledby="page-situations-heading"
              data-page-situations
            >
              <h2 id="page-situations-heading" className="text-xl font-bold">
                About this situation
              </h2>
              <ul className="mt-4 space-y-4">
                {content.pageSituations.map((item) => (
                  <li key={item.title}>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-text-secondary">{item.body}</p>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
          <OfferCountyBuyers includeKitsap={showServiceArea} />
          {showSituations ? <OfferSituations /> : null}
          <HousesBought />
          {showOfferMath ? (
            <>
              <section className="mt-8" aria-labelledby="how-we-figure-heading">
                <h2 id="how-we-figure-heading" className="text-xl font-bold">
                  How we figure your offer
                </h2>
                <div className="mt-3 space-y-2 text-base leading-snug text-text-secondary">
                  <p>We buy and hold most houses as rentals, and sometimes we fix and sell them.</p>
                  <p>We start with what the house would be worth after repairs.</p>
                  <p>We subtract the repair costs and our costs to buy and sell.</p>
                  <p>We leave a fair margin, and we walk you through every number.</p>
                </div>
              </section>
            </>
          ) : null}
          {showDistressNotes ? <OfferDistressNotes /> : null}
          {showAgentComparison ? <OfferAgentComparison /> : null}
        </section>

        <section className="mt-12" aria-label="Why homeowners sell to us">
          <ul className="space-y-3">
            {content.trustPoints.slice(0, 3).map((point) => (
              <li key={point} className="flex gap-3 text-base leading-snug">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-divider" aria-hidden />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12 space-y-6" aria-label="Reviews">
          <ul className="space-y-6">
            {shortGoogleReviews.map((review) => (
              <li key={review.id}>
                <p className="text-base leading-relaxed text-text-primary">
                  &ldquo;{review.text}&rdquo;
                </p>
                <p className="mt-2 text-sm font-semibold">{review.name}</p>
                <p className="text-xs text-text-secondary">Google review</p>
              </li>
            ))}
          </ul>
          <p className="text-sm">
            <a href={GOOGLE_REVIEWS_URL} className="font-medium text-divider underline">
              Read our reviews on Google
            </a>
          </p>
          <p className="text-base leading-relaxed text-text-primary">
            KindKey Home Buyers LLC is a small, family-owned business in Auburn. Cash offer, as-is.
          </p>
        </section>

        <OfferHowItWorks steps={content.steps} />

        <section className="mt-12">
          <OfferJumpButton
            location="bottom"
            className="flex min-h-14 w-full items-center justify-center rounded-lg bg-divider px-6 text-lg font-bold text-white shadow-md"
          />
        </section>

        <OfferPageFooter address={address} phone={phone} />
      </div>
      <OfferMobileBar phone={stickyPhone ?? phone} />
      <LeadConnectorChat mobileOnly suppressGreeting mountDelayMs={8000} />
    </main>
  );
}
