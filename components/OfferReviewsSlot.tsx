import { GOOGLE_REVIEWS_URL } from '@/data/offerCredibility';

/** Verified Google Maps rating as of Nov 17, 2026. No review quotes or schema. */
export const OFFER_GOOGLE_RATING_TEXT = '4.6 Stars on Google (18 reviews)';

export default function OfferReviewsSlot() {
  return (
    <p className="mt-0.5 text-center text-sm font-semibold leading-tight" data-offer-reviews-slot>
      <a href={GOOGLE_REVIEWS_URL} className="text-text-primary underline">
        {OFFER_GOOGLE_RATING_TEXT}
      </a>
    </p>
  );
}
