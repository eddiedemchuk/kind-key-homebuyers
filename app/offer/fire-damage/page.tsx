import type { Metadata } from 'next';
import OfferLanding from '@/components/OfferLanding';
import { fireDamageOffer } from '@/data/offerLandings';

export const metadata: Metadata = {
  title: fireDamageOffer.title,
  description: fireDamageOffer.description,
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
    },
  },
};

export default function FireDamageOfferPage() {
  return <OfferLanding content={fireDamageOffer} formOrigin={fireDamageOffer.formOrigin} />;
}
