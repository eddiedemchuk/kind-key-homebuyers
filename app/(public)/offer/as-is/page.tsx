import type { Metadata } from 'next';
import OfferLanding from '@/components/OfferLanding';
import { asIsOffer } from '@/data/offerLandings';
import { offerPageHeadline } from '@/lib/offer-city';

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

export default async function AsIsOfferPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  return (
    <OfferLanding
      content={{ ...asIsOffer, headline: offerPageHeadline(asIsOffer.headline, params) }}
      formOrigin={asIsOffer.formOrigin}
    />
  );
}
