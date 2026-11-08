import OfferCityAdsLanding from '@/components/OfferCityAdsLanding';
import { kentAuburnOffer, offerCityAdsMetadata } from '@/data/offerCityAds';

export const metadata = offerCityAdsMetadata(kentAuburnOffer);

export default function KentAuburnOfferPage() {
  return <OfferCityAdsLanding content={kentAuburnOffer} />;
}
