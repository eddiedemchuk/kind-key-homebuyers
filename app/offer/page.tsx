import type { Metadata } from 'next';
import OfferGeneralLanding from '@/components/OfferGeneralLanding';
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

function firstQueryValue(value: string | string[] | undefined): string {
  const raw = Array.isArray(value) ? value[0] : value;
  return raw ?? '';
}

export default async function OfferPage({
  searchParams,
}: {
  searchParams: Promise<{ src?: string | string[]; utm_source?: string | string[] }>;
}) {
  const params = await searchParams;
  const initial = new URLSearchParams();
  const src = firstQueryValue(params.src);
  const utmSource = firstQueryValue(params.utm_source);
  if (src) initial.set('src', src);
  if (utmSource) initial.set('utm_source', utmSource);

  return <OfferGeneralLanding initialSearch={initial.toString()} />;
}
