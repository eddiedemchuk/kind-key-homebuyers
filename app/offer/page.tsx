import type { Metadata } from 'next';
import OfferLanding from '@/components/OfferLanding';
import { generalOffer } from '@/data/offerLandings';
import type { FormOrigin } from '@/lib/form-origin';
import { FACEBOOK_ADS_PHONE, GOOGLE_ADS_PHONE } from '@/lib/phones';

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

function firstQueryValue(value: string | string[] | undefined): string | undefined {
  return Array.isArray(value) ? value[0] : value;
}

export default async function OfferPage({
  searchParams,
}: {
  searchParams: Promise<{ src?: string | string[] }>;
}) {
  const params = await searchParams;
  const facebook = firstQueryValue(params.src) === 'fb';
  const formOrigin: FormOrigin = facebook ? 'facebook_ads_landing' : generalOffer.formOrigin;
  const phone = facebook ? FACEBOOK_ADS_PHONE : GOOGLE_ADS_PHONE;

  return <OfferLanding content={generalOffer} formOrigin={formOrigin} phone={phone} />;
}
