import OfferCityAdsLanding from '@/components/OfferCityAdsLanding';
import { kentAuburnOffer, offerCityAdsMetadata } from '@/data/offerCityAds';
import { offerPageHeadline } from '@/lib/offer-city';

export const metadata = offerCityAdsMetadata(kentAuburnOffer);

export default async function KentAuburnOfferPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  return (
    <OfferCityAdsLanding
      content={kentAuburnOffer}
      headline={offerPageHeadline(kentAuburnOffer.headline, params)}
    />
  );
}
