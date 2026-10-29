import type { Metadata } from 'next';
import OfferLanding from '@/components/OfferLanding';
import { facebookEddieOffer } from '@/data/offerLandings';
import { offerPageHeadline } from '@/lib/offer-city';
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

export default async function FacebookEddieOfferPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  return (
    <OfferLanding
      content={{
        ...facebookEddieOffer,
        headline: offerPageHeadline(facebookEddieOffer.headline, params),
      }}
      formOrigin={facebookEddieOffer.formOrigin}
      trackMetaLead
      phone={FACEBOOK_OFFER_PHONE}
      steppedForm
    />
  );
}
