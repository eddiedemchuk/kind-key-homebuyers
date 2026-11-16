import OfferCityAdsLanding from '@/components/OfferCityAdsLanding';
import { offerCityAdsMetadata, seattleKingCountyOffer } from '@/data/offerCityAds';
import { offerPageHeadline } from '@/lib/offer-city';

export const metadata = offerCityAdsMetadata(seattleKingCountyOffer);

export default async function SeattleKingCountyOfferPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  return (
    <OfferCityAdsLanding
      content={seattleKingCountyOffer}
      headline={offerPageHeadline(seattleKingCountyOffer.headline, params)}
    />
  );
}
