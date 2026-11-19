import { offerApprovedBenefits, type OfferStep } from '@/data/offerLandings';

export default function OfferHowItWorks({
  steps,
  compact = false,
}: {
  steps: readonly OfferStep[];
  compact?: boolean;
}) {
  return (
    <section
      className={compact ? 'mt-6' : 'mt-10'}
      aria-labelledby="how-it-works-heading"
      data-how-it-works
    >
      <h2 id="how-it-works-heading" className={compact ? 'text-lg font-bold' : 'text-xl font-bold'}>
        How it works
      </h2>
      <ol className={compact ? 'mt-3 space-y-3' : 'mt-5 space-y-5'} data-offer-steps>
        {steps.map((step, index) => (
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
      <ul className="mt-4 space-y-2" data-offer-benefits>
        {offerApprovedBenefits.map((item) => (
          <li key={item} className="flex gap-3 text-sm font-semibold leading-snug">
            <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-divider" aria-hidden />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
