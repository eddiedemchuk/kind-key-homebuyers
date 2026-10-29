import type { Metadata } from 'next';
import OfferLanding from '@/components/OfferLanding';
import { inheritedOffer } from '@/data/offerLandings';
import { offerPageHeadline } from '@/lib/offer-city';

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

export default async function InheritedOfferPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  return (
    <OfferLanding
      content={{
        ...inheritedOffer,
        headline: offerPageHeadline(inheritedOffer.headline, params),
      }}
      formOrigin={inheritedOffer.formOrigin}
    />
  );
}
