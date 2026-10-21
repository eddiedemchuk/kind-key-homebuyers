import type { Metadata } from 'next';
import OfferSearchLanding from '@/components/OfferSearchLanding';
import { generalOffer } from '@/data/offerLandings';

export const metadata: Metadata = {
  title: generalOffer.title,
  description: generalOffer.description,
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
    },
  },
};

/** Internal document for /offer?src=fb and /offer?src=fb_static. Direct visits redirect. */
export default function FacebookSrcOfferPage({
  searchParams,
}: {
  searchParams: Promise<{ src?: string | string[]; utm_source?: string | string[] }>;
}) {
  return <OfferSearchLanding searchParams={searchParams} pixelInDocument />;
}
