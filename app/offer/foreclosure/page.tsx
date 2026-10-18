import type { Metadata } from 'next';
import OfferLanding from '@/components/OfferLanding';
import { foreclosureOffer } from '@/data/offerLandings';

export const metadata: Metadata = {
  title: foreclosureOffer.title,
  description: foreclosureOffer.description,
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
    },
  },
};

export default function ForeclosureOfferPage() {
  return <OfferLanding content={foreclosureOffer} formOrigin={foreclosureOffer.formOrigin} />;
}
