import type { Metadata } from 'next';
import Image from 'next/image';
import OfferLeadForm, { type OfferChannel } from '@/components/OfferLeadForm';

export const metadata: Metadata = {
  title: 'Sell Your House As-Is for Cash',
  description:
    'Local King & Pierce County home buyer. No repairs, no commissions, you pick the closing date.',
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
    },
  },
};

const PHONES = {
  google: { display: '(253) 352-4379', tel: '+12533524379' },
  facebook: { display: '(206) 519-5463', tel: '+12065195463' },
} as const;

const TRUST_POINTS = [
  "We've bought hundreds of homes",
  'Any condition, no cleaning or repairs',
  'Local Auburn, WA company',
];

const STEPS = [
  {
    title: 'Tell us about the house',
    body: 'Share your name, phone, and the property address. It takes about a minute.',
  },
  {
    title: 'Get a cash offer',
    body: 'We review the house and send a no-obligation cash offer.',
  },
  {
    title: 'Pick your closing date',
    body: 'You choose when to close. No repairs, and no agent commission.',
  },
];

const FAQS = [
  {
    question: 'Do I need to clean or repair anything?',
    answer: 'No. We buy the house as-is, in any condition. Leave the cleaning and repairs to us.',
  },
  {
    question: 'Are there commissions or fees?',
    answer:
      'No. KindKey buys the house directly. We do not charge the seller an agent commission or a separate service or assignment fee.',
  },
  {
    question: 'Who picks the closing date?',
    answer: 'You do. Close in a few days, or pick a later date that works for you.',
  },
  {
    question: 'Am I obligated if I ask for an offer?',
    answer: 'No. The cash offer is free, and you can say no.',
  },
];

function firstQueryValue(value: string | string[] | undefined): string | undefined {
  return Array.isArray(value) ? value[0] : value;
}

export default async function OfferPage({
  searchParams,
}: {
  searchParams: Promise<{ src?: string | string[] }>;
}) {
  const params = await searchParams;
  const channel: OfferChannel = firstQueryValue(params.src) === 'fb' ? 'facebook' : 'google';
  const phone = PHONES[channel];

  return (
    <main className="min-h-screen bg-white text-text-primary">
      <header className="border-b border-gray-200">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-3 px-4 py-2">
          <div className="flex items-center gap-2">
            <Image
              src="/logo-header.avif"
              alt="KindKey Home Buyers"
              width={40}
              height={40}
              priority
              className="h-10 w-10 object-contain"
            />
            <span className="text-sm font-bold leading-tight sm:text-base">
              KindKey Home Buyers
            </span>
          </div>
          <a href={`tel:${phone.tel}`} className="shrink-0 text-base font-semibold text-divider">
            {phone.display}
          </a>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-4 pb-12 pt-1">
        <section>
          <h1 className="text-balance text-[1.7rem] font-bold leading-[1.15] sm:text-4xl">
            Sell Your House As-Is for Cash
          </h1>
          <p className="mt-2 text-base leading-snug text-text-secondary">
            Local King &amp; Pierce County home buyer. No repairs, no commissions, you pick the
            closing date.
          </p>
          <a
            href={`tel:${phone.tel}`}
            className="mt-2 flex min-h-12 w-full items-center justify-center rounded-lg bg-accent px-4 py-3 text-center text-lg font-semibold text-white hover:bg-accent/90"
          >
            Call {phone.display}
          </a>
          <div className="mt-2 rounded-xl border border-gray-200 bg-white p-2.5 shadow-sm">
            <OfferLeadForm channel={channel} idPrefix="hero" />
          </div>
        </section>

        <section className="mt-10" aria-label="Why homeowners sell to us">
          <ul className="grid gap-3 sm:grid-cols-3">
            {TRUST_POINTS.map((point) => (
              <li
                key={point}
                className="rounded-lg border border-gray-200 bg-secondary px-4 py-3 text-sm font-semibold leading-snug"
              >
                {point}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">How it works</h2>
          <ol className="mt-4 space-y-4">
            {STEPS.map((step, index) => (
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

        <section className="mt-10">
          <h2 className="text-2xl font-bold">Questions</h2>
          <div className="mt-3">
            {FAQS.map((item) => (
              <details key={item.question} className="border-b border-gray-200 py-3">
                <summary className="cursor-pointer font-semibold">{item.question}</summary>
                <p className="pt-2 text-sm leading-relaxed text-text-secondary">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-xl bg-secondary p-4">
          <h2 className="text-2xl font-bold">Get your cash offer</h2>
          <p className="mt-2 text-text-secondary">
            Tell us about the house. We will follow up with a no-obligation cash offer.
          </p>
          <a
            href={`tel:${phone.tel}`}
            className="mt-4 flex min-h-14 w-full items-center justify-center rounded-lg bg-accent px-6 py-4 text-center text-lg font-semibold text-white hover:bg-accent/90"
          >
            Call {phone.display}
          </a>
          <div className="mt-5 rounded-xl border border-gray-200 bg-white p-4">
            <OfferLeadForm channel={channel} idPrefix="repeat" />
          </div>
        </section>
      </div>
    </main>
  );
}
