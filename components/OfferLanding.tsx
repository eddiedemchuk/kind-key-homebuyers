import Image from 'next/image';
import Link from 'next/link';
import OfferLeadForm from '@/components/OfferLeadForm';
import OfferMobileBar, { OfferJumpButton } from '@/components/OfferMobileBar';
import type { OfferLandingContent } from '@/data/offerLandings';
import {
  BBB_TRUST_LINE,
  GOOGLE_REVIEWS_URL,
  customerStories,
  googleReviews,
} from '@/data/offerCredibility';
import type { FormOrigin } from '@/lib/form-origin';
import { BUSINESS } from '@/lib/site';
import { caseStudies } from '@/data/cases';

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

export interface OfferPhone {
  display: string;
  tel: string;
}

/**
 * Short cards from the published /success stories. Wording that would name a
 * protected characteristic is left out. Nothing here is invented.
 */
const SUCCESS_STORY_IDS = ['1', '3', '2'] as const;

function storySummary(id: string): { title: string; detail: string; text: string } | null {
  const story = caseStudies.find((item) => item.id === id);
  if (!story) return null;
  if (id === '1') {
    return {
      title: `${story.city}, WA — as-is`,
      detail: `Closed in ${story.timeframe}`,
      text: 'A Kent homeowner needed to relocate quickly for a job. The house needed only minor updates. KindKey made a cash offer and closed within 10 days.',
    };
  }
  if (id === '3') {
    return {
      title: `${story.city}, WA — major repairs`,
      detail: `Closed in ${story.timeframe}`,
      text: 'Inherited Kent house with significant repair needs. The executor wanted a simple sale. KindKey purchased it as-is and closed in 12 days.',
    };
  }
  if (id === '2') {
    return {
      title: `${story.city}, WA`,
      detail: `Closed in ${story.timeframe}`,
      text: 'Federal Way house that needed fresh paint and minor repairs. KindKey coordinated the purchase with the closing agent and closed in 14 days.',
    };
  }
  return null;
}

export default function OfferLanding({
  content,
  formOrigin,
  phone,
}: {
  content: OfferLandingContent;
  formOrigin: FormOrigin;
  phone: OfferPhone;
}) {
  const stories = SUCCESS_STORY_IDS.map((id) => storySummary(id)).filter(
    (story): story is NonNullable<typeof story> => story !== null
  );
  const featureMegan = formOrigin === 'google_ads_foreclosure';
  const address = `${BUSINESS.streetAddress}, ${BUSINESS.addressLocality}, ${BUSINESS.addressRegion} ${BUSINESS.postalCode}`;

  return (
    <main className="min-h-screen bg-white text-text-primary">
      <header className="z-40 border-b border-gray-200 bg-white md:sticky md:top-0">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-3 px-4 py-1.5">
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
            <a href={`tel:${phone.tel}`} className="text-base font-semibold text-divider">
              {phone.display}
            </a>
            <OfferJumpButton className="hidden min-h-12 items-center justify-center rounded-lg bg-divider px-4 text-sm font-bold text-white shadow-sm md:inline-flex" />
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-4 pb-[calc(65px+env(safe-area-inset-bottom,0px))] pt-1 md:pb-12">
        <section>
          <h1 className="text-balance text-[1.55rem] font-bold leading-tight sm:text-4xl">
            {content.headline}
          </h1>
          <p className="mt-1 text-sm leading-snug text-text-secondary">{content.subhead}</p>
          <a
            href={`tel:${phone.tel}`}
            className="mt-1.5 flex min-h-12 w-full items-center justify-center rounded-lg bg-accent px-4 py-2.5 text-center text-lg font-semibold text-white hover:bg-accent/90"
          >
            Call {phone.display}
          </a>
          <div
            data-offer-form
            className="mt-1.5 scroll-mt-4 rounded-xl border border-gray-200 bg-white p-2 shadow-sm md:scroll-mt-20"
          >
            <p className="mb-1.5 text-sm font-semibold leading-snug text-text-primary">
              {content.cta}
            </p>
            <OfferLeadForm idPrefix="hero" formOrigin={formOrigin} />
          </div>
          <p className="mt-3 text-center text-sm">
            <Link href="/" className="font-medium text-divider underline">
              Learn more about KindKey Home Buyers
            </Link>
          </p>
        </section>

        <section className="mt-8" aria-label="Why homeowners sell to us">
          <ul className="grid gap-2 sm:grid-cols-2">
            {content.trustPoints.map((point) => (
              <li
                key={point}
                className="rounded-lg border border-gray-200 bg-secondary px-3 py-2.5 text-sm font-semibold leading-snug"
              >
                {point}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-bold">How it works</h2>
          <ol className="mt-3 space-y-3">
            {content.steps.map((step, index) => (
              <li key={step.title} className="flex gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-divider text-sm font-bold text-white">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-semibold">{step.title}</h3>
                  <p className="text-sm text-text-secondary">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-8" aria-label="Success stories">
          <h2 className="text-2xl font-bold">Houses we have bought</h2>
          <p className="mt-1 text-sm text-text-secondary">
            From our{' '}
            <Link href="/success" className="font-medium text-divider underline">
              Kent and Federal Way success stories
            </Link>
            .
          </p>
          <ul className="mt-3 space-y-3">
            {stories.map((story) => (
              <li key={story.title} className="rounded-lg border border-gray-200 px-3 py-3">
                <p className="font-semibold">{story.title}</p>
                <p className="text-sm font-medium text-divider">{story.detail}</p>
                <p className="mt-1 text-sm leading-snug text-text-secondary">{story.text}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-8" aria-label="Reviews and customer stories">
          <h2 className="text-2xl font-bold">What homeowners and agents say</h2>
          <ul className="mt-3 space-y-3">
            {googleReviews.map((review) => {
              const featured = featureMegan && review.id === 'megan-white';
              return (
                <li
                  key={review.id}
                  className={
                    featured
                      ? 'rounded-lg border-2 border-divider bg-secondary px-3 py-3'
                      : 'rounded-lg border border-gray-200 px-3 py-3'
                  }
                >
                  <FiveStars />
                  <p className="mt-2 text-sm leading-snug text-text-primary">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <p className="mt-2 text-sm font-semibold">{review.name}</p>
                  <p className="text-xs text-text-secondary">Google review</p>
                </li>
              );
            })}
            {customerStories.map((story) => (
              <li key={story.id} className="rounded-lg border border-gray-200 px-3 py-3">
                <p className="text-sm leading-snug text-text-primary">&ldquo;{story.text}&rdquo;</p>
                <p className="mt-2 text-sm font-semibold">{story.name}</p>
                <p className="text-xs text-text-secondary">{story.location}</p>
                <p className="text-xs text-text-secondary">Customer story</p>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-sm">
            <a href={GOOGLE_REVIEWS_URL} className="font-medium text-divider underline">
              Read our reviews on Google
            </a>
          </p>
          <p className="mt-2 text-sm font-semibold text-text-primary">{BBB_TRUST_LINE}</p>
        </section>

        <section className="mt-8 rounded-xl border border-gray-200 bg-secondary p-4">
          <h2 className="text-xl font-bold">Local Auburn, WA company</h2>
          <p className="mt-2 font-semibold">{BUSINESS.legalName}</p>
          <p className="text-sm text-text-secondary">{address}</p>
          <p className="mt-2 text-sm text-text-secondary">We&apos;ve bought hundreds of homes.</p>
        </section>

        <section className="mt-8" aria-label="Flip videos">
          <h2 className="text-2xl font-bold">House flips</h2>
          <div className="mt-3 rounded-lg border border-dashed border-gray-400 bg-white p-4">
            <p className="font-semibold">Video placeholder</p>
            <p className="mt-1 text-sm leading-snug text-text-secondary">
              YouTube flip videos will be embedded here after the owner supplies the links. No video
              is embedded yet.
            </p>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-bold">Questions</h2>
          <div className="mt-2">
            {content.faqs.map((item) => (
              <details key={item.question} className="border-b border-gray-200 py-2.5">
                <summary className="cursor-pointer font-semibold">{item.question}</summary>
                <p className="pt-2 text-sm leading-relaxed text-text-secondary">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-xl bg-secondary p-4">
          <h2 className="text-2xl font-bold">Get your cash offer</h2>
          <p className="mt-2 text-sm text-text-secondary">
            Tell us about the house. We will follow up with a no-obligation cash offer.
          </p>
          <a
            href={`tel:${phone.tel}`}
            className="mt-3 flex min-h-12 w-full items-center justify-center rounded-lg bg-accent px-4 py-3 text-center text-lg font-semibold text-white hover:bg-accent/90"
          >
            Call {phone.display}
          </a>
          <div
            data-offer-form
            className="mt-4 scroll-mt-4 rounded-xl border border-gray-200 bg-white p-3 md:scroll-mt-20"
          >
            <p className="mb-1.5 text-sm font-semibold leading-snug text-text-primary">
              {content.cta}
            </p>
            <OfferLeadForm idPrefix="repeat" formOrigin={formOrigin} />
          </div>
        </section>

        <footer className="mt-8 border-t border-gray-200 py-6 text-sm text-text-secondary">
          <p className="font-semibold text-text-primary">{BUSINESS.legalName}</p>
          <p>{address}</p>
          <nav className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
            <Link href="/" className="font-medium text-divider underline">
              Learn more about KindKey Home Buyers
            </Link>
            <Link href="/about" className="font-medium text-divider underline">
              About us
            </Link>
            <Link href="/success" className="font-medium text-divider underline">
              Success stories
            </Link>
          </nav>
        </footer>
      </div>
      <OfferMobileBar phone={phone} />
    </main>
  );
}
