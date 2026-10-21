import type { Metadata } from 'next';
import OfferLanding from '@/components/OfferLanding';
import { asIsOffer } from '@/data/offerLandings';

export const metadata: Metadata = {
  title: asIsOffer.title,
  description: asIsOffer.description,
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
    },
  },
};

export default function AsIsOfferPage() {
  return <OfferLanding content={asIsOffer} formOrigin={asIsOffer.formOrigin} />;
}
