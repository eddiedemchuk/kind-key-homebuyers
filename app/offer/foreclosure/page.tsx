import type { Metadata } from 'next';
import OfferLanding from '@/components/OfferLanding';
import { foreclosureOffer } from '@/data/offerLandings';
import { GOOGLE_ADS_PHONE } from '@/lib/phones';

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
  return (
    <OfferLanding
      content={foreclosureOffer}
      formOrigin={foreclosureOffer.formOrigin}
      phone={GOOGLE_ADS_PHONE}
    />
  );
}
