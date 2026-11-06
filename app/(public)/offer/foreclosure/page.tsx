import type { Metadata } from 'next';
import OfferLanding from '@/components/OfferLanding';
import { foreclosureOffer, foreclosureTrustStrip } from '@/data/offerLandings';
import { offerCityFromParams, offerForeclosureHeadline } from '@/lib/offer-city';

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
        headline: offerForeclosureHeadline(offerCityFromParams(params)),
      }}
      formOrigin={foreclosureOffer.formOrigin}
      showDistressNotes
      lockHeadline
      trustStrip={foreclosureTrustStrip}
    />
  );
}
