import OfferCityAdsLanding from '@/components/OfferCityAdsLanding';
import { offerCityAdsMetadata, tacomaPuyallupOffer } from '@/data/offerCityAds';
import { offerPageHeadline } from '@/lib/offer-city';

export const metadata = offerCityAdsMetadata(tacomaPuyallupOffer);

export default async function TacomaPuyallupOfferPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  return (
    <OfferCityAdsLanding
      content={tacomaPuyallupOffer}
      headline={offerPageHeadline(tacomaPuyallupOffer.headline, params)}
    />
  );
}
