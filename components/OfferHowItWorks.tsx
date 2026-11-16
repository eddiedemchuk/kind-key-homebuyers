import type { OfferStep } from '@/data/offerLandings';

export default function OfferHowItWorks({ steps }: { steps: readonly OfferStep[] }) {
  return (
    <section className="mt-10" aria-labelledby="how-it-works-heading" data-how-it-works>
      <h2 id="how-it-works-heading" className="text-xl font-bold">
        How it works
      </h2>
      <ol className="mt-5 space-y-5" data-offer-steps>
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
    </section>
  );
}
