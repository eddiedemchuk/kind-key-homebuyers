import OfferReviewsSlot from '@/components/OfferReviewsSlot';

const SUPPORTING = ['500+ homes bought', 'BBB A- rated', 'We close on the date you pick'] as const;

/** Compact claims under the H1. The closing-speed line is the prominent one. */
export default function OfferCityTrustBar() {
  return (
    <div className="mt-1.5" data-offer-trust-bar>
      <p className="text-center text-sm font-bold leading-tight text-text-primary">
        Close in as little as 7 days
      </p>
      <ul className="mt-0.5 flex flex-wrap items-center justify-center gap-x-2 gap-y-0.5 text-[11px] font-semibold leading-tight text-text-secondary">
        {SUPPORTING.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <OfferReviewsSlot />
    </div>
  );
}
