import OfferCityAdsLanding from '@/components/OfferCityAdsLanding';
import { kitsapBremertonOffer, offerCityAdsMetadata } from '@/data/offerCityAds';

export const metadata = offerCityAdsMetadata(kitsapBremertonOffer);

export default function KitsapBremertonOfferPage() {
  return <OfferCityAdsLanding content={kitsapBremertonOffer} />;
}
