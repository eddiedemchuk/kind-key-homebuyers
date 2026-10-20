import type { Metadata } from 'next';
import MetaPixel from '@/components/MetaPixel';
import OfferLanding from '@/components/OfferLanding';
import { facebookEddieOffer } from '@/data/offerLandings';

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
    <>
      <MetaPixel />
      <OfferLanding
        content={facebookEddieOffer}
        formOrigin={facebookEddieOffer.formOrigin}
        trackMetaLead
      />
    </>
  );
}
