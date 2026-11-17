import type { Metadata } from 'next';
import OfferLanding from '@/components/OfferLanding';
import { fellThroughOffer } from '@/data/offerLandings';

export const metadata: Metadata = {
  title: fellThroughOffer.title,
  description: fellThroughOffer.description,
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
    },
  },
};

export default function CashOfferFellThroughPage() {
  return (
    <OfferLanding
      content={fellThroughOffer}
      formOrigin={fellThroughOffer.formOrigin}
      lockHeadline
      showServiceArea
      showOfferMath
      showTrustBar
      trustStrip={fellThroughOffer.trustPoints}
    />
  );
}
