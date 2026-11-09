import OfferCityAdsLanding from '@/components/OfferCityAdsLanding';
import { kitsapBremertonOffer, offerCityAdsMetadata } from '@/data/offerCityAds';
import { offerPageHeadline } from '@/lib/offer-city';

export const metadata = offerCityAdsMetadata(kitsapBremertonOffer);

export default async function KitsapBremertonOfferPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  return (
    <OfferCityAdsLanding
      content={kitsapBremertonOffer}
      headline={offerPageHeadline(kitsapBremertonOffer.headline, params)}
    />
  );
}
