import type { Metadata } from 'next';
import OfferLanding from '@/components/OfferLanding';
import { inheritedOffer } from '@/data/offerLandings';

export const metadata: Metadata = {
  title: inheritedOffer.title,
  description: inheritedOffer.description,
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
    },
  },
};

export default function InheritedOfferPage() {
  return <OfferLanding content={inheritedOffer} formOrigin={inheritedOffer.formOrigin} />;
}
