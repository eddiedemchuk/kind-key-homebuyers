import type { Metadata } from 'next';
import OfferLanding from '@/components/OfferLanding';
import { foreclosureOffer } from '@/data/offerLandings';
import { offerPageHeadline } from '@/lib/offer-city';

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

export default async function ForeclosureOfferPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  return (
    <OfferLanding
      content={{
        ...foreclosureOffer,
        headline: offerPageHeadline(foreclosureOffer.headline, params),
      }}
      formOrigin={foreclosureOffer.formOrigin}
      showDistressNotes
    />
  );
}
