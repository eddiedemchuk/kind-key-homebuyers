import Image from 'next/image';
import Link from 'next/link';
import LeadConnectorChat from '@/components/LeadConnectorChat';
import { MobileNavButton, MobileNavPanel, MobileNavProvider } from '@/components/MobileNav';
import OfferCityHeadline from '@/components/OfferCityHeadline';
import OfferLeadForm from '@/components/OfferLeadForm';
import OfferMobileBar, { OfferJumpButton, OfferPhoneLink } from '@/components/OfferMobileBar';
import type { OfferLandingContent } from '@/data/offerLandings';
import {
  BBB_TRUST_LINE,
  GOOGLE_REVIEWS_URL,
  shortCustomerStories,
  shortGoogleReviews,
} from '@/data/offerCredibility';
import type { FormOrigin } from '@/lib/form-origin';
import { GOOGLE_ADS_PHONE, type DisplayPhone } from '@/lib/phones';
import { BUSINESS, localBusinessJsonLd } from '@/lib/site';

const AGENT_COMPARISON = [
  {
    label: 'Commissions',
    kindkey: '$0 commissions',
    agent: '~6% agent commissions',
  },
  {
    label: 'Repairs & Cleanout',
    kindkey: 'Buy as-is — take what you want and leave the rest',
    agent: 'You pay for repairs, cleaning, and staging',
  },
  {
    label: 'Showings',
    kindkey: 'No open houses or strangers walking through',
    agent: 'Weeks of showings and open houses',
  },
  {
    label: 'Timeline & Certainty',
    kindkey:
      'Cash offer (close as fast as 7 days) or seller-financed terms for a higher price — you pick the date',
    agent: '60–90+ days, and buyer financing can fall through',
  },
  {
    label: 'Back Taxes, Liens & Code Cases',
    kindkey:
      'Paid out of the sale at closing, not out of your pocket first; open code cases & tenants in place OK',
    agent: "Often must be resolved before a buyer's lender will close",
  },
] as const;

const DISTRESS_NOTES = [
  'Back taxes and liens are paid out of the sale at closing, not out of your pocket first.',
  'Open code violations, unpermitted work, or tenants in place? We still buy without asking you to fix or evict first.',
  'Take what you want and leave the rest — no cleanout needed.',
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

function OfferBuyOptions() {
  return (
    <section className="mt-8" aria-labelledby="two-ways-heading">
      <h2 id="two-ways-heading" className="text-xl font-bold">
        Two Ways We Can Buy Your House
      </h2>
      <p className="mt-2 text-base leading-snug text-text-secondary">
        Pick the option that fits you best.
      </p>
      <div className="mt-4 space-y-3">
        <div className="rounded-xl border border-gray-200 p-3">
          <p className="text-sm font-bold">Option 1: Fast All-Cash Offer</p>
          <p className="mt-1 text-base leading-snug text-text-secondary">
            Close in as little as 7 days (or on your date) and walk away with cash at closing.
          </p>
        </div>
        <div className="rounded-xl border border-gray-200 p-3">
          <p className="text-sm font-bold">Option 2: Seller Financing (Terms) for a Higher Price</p>
          <p className="mt-1 text-base leading-snug text-text-secondary">
            If you don&apos;t need all your cash at once and want a higher total price or steady
            monthly payments, we can buy on seller-financed terms secured by the property.
          </p>
        </div>
      </div>
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

function FiveStars() {
  return (
    <p className="flex gap-0.5 text-amber-500" aria-label="5 stars">
      {Array.from({ length: 5 }, (_, index) => (
        <svg key={index} className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </p>
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
  steppedForm = false,
}: {
  content: OfferLandingContent;
  formOrigin: FormOrigin;
  /** Passed through to the form. Facebook offer visits set this. */
  trackMetaLead?: boolean;
  /** Header, footer, menu, and mobile call bar. Defaults to the Google Ads number. */
  phone?: DisplayPhone;
  /** Query src for a Facebook /offer visit. Empty when only utm_source=facebook matched. */
  src?: string;
  /** Short offer-math note shown under the form on /offer only. */
  showOfferMath?: boolean;
  /** KindKey vs. agent comparison, shown on /offer. */
  showAgentComparison?: boolean;
  /** Taxes, code cases, and cleanout notes on /offer and /offer/foreclosure. */
  showDistressNotes?: boolean;
  /** Two-step hero form on /offer and /offer/facebook. Situation pages stay one step. */
  steppedForm?: boolean;
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
          <div className="mx-auto flex max-w-xl items-center justify-between gap-3 px-5 py-3">
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

      <div className="mx-auto max-w-xl px-5 pb-[calc(65px+env(safe-area-inset-bottom,0px))] pt-2 md:pb-16 md:pt-8">
        <section>
          <h1
            className="text-balance text-3xl font-bold leading-tight"
            style={{ marginBottom: 0 }}
            data-offer-headline
          >
            <OfferCityHeadline headline={content.headline} />
          </h1>
          <p className="mt-3 text-base leading-relaxed text-text-secondary">{content.subhead}</p>
          <p className="mt-4 inline-flex items-center rounded-full border-2 border-divider bg-secondary px-4 py-2 text-sm font-bold text-text-primary">
            {BBB_TRUST_LINE}
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
              <OfferBuyOptions />
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
                <FiveStars />
                <p className="mt-2 text-base leading-relaxed text-text-primary">
                  &ldquo;{review.text}&rdquo;
                </p>
                <p className="mt-2 text-sm font-semibold">{review.name}</p>
                <p className="text-xs text-text-secondary">Google review</p>
              </li>
            ))}
            {shortCustomerStories.map((story) => (
              <li key={story.id}>
                <p className="text-base leading-relaxed text-text-primary">
                  &ldquo;{story.text}&rdquo;
                </p>
                <p className="mt-2 text-sm font-semibold">
                  {story.name}
                  <span className="font-normal text-text-secondary"> · {story.location}</span>
                </p>
                <p className="text-xs text-text-secondary">Customer story</p>
              </li>
            ))}
          </ul>
          <p className="text-sm">
            <a href={GOOGLE_REVIEWS_URL} className="font-medium text-divider underline">
              Read our reviews on Google
            </a>
          </p>
          <p className="text-base leading-relaxed text-text-primary">
            We&apos;re a local Auburn family business. We buy homes as-is for cash and keep most of
            them as long-term rentals; sometimes we renovate and resell them.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-bold">How it works</h2>
          <ol className="mt-5 space-y-5">
            {content.steps.map((step, index) => (
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

        <section className="mt-12">
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
      <LeadConnectorChat mobileOnly />
    </main>
  );
}
