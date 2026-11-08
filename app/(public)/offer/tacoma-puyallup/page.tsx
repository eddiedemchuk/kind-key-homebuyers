import OfferCityAdsLanding from '@/components/OfferCityAdsLanding';
import { offerCityAdsMetadata, tacomaPuyallupOffer } from '@/data/offerCityAds';

export const metadata = offerCityAdsMetadata(tacomaPuyallupOffer);

export default function TacomaPuyallupOfferPage() {
  return <OfferCityAdsLanding content={tacomaPuyallupOffer} />;
}
