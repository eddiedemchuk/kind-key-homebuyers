import type { Metadata } from 'next';
import OfferLanding from '@/components/OfferLanding';
import { fireDamageOffer } from '@/data/offerLandings';
import { offerPageHeadline } from '@/lib/offer-city';

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

export default async function FireDamageOfferPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  return (
    <OfferLanding
      content={{
        ...fireDamageOffer,
        headline: offerPageHeadline(fireDamageOffer.headline, params),
      }}
      formOrigin={fireDamageOffer.formOrigin}
    />
  );
}
