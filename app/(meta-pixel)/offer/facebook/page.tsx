import type { Metadata } from 'next';
import OfferLanding from '@/components/OfferLanding';
import { facebookEddieOffer } from '@/data/offerLandings';
import { FACEBOOK_OFFER_PHONE } from '@/lib/phones';

export const metadata: Metadata = {
  title: facebookEddieOffer.title,
  description: facebookEddieOffer.description,
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
    },
  },
};

export default function FacebookEddieOfferPage() {
  return (
    <OfferLanding
      content={facebookEddieOffer}
      formOrigin={facebookEddieOffer.formOrigin}
      trackMetaLead
      phone={FACEBOOK_OFFER_PHONE}
    />
  );
}
