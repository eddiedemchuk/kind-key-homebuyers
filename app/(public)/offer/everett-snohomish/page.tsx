import OfferCityAdsLanding from '@/components/OfferCityAdsLanding';
import { everettSnohomishOffer, offerCityAdsMetadata } from '@/data/offerCityAds';
import { offerPageHeadline } from '@/lib/offer-city';

export const metadata = offerCityAdsMetadata(everettSnohomishOffer);

export default async function EverettSnohomishOfferPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  return (
    <OfferCityAdsLanding
      content={everettSnohomishOffer}
      headline={offerPageHeadline(everettSnohomishOffer.headline, params)}
    />
  );
}
