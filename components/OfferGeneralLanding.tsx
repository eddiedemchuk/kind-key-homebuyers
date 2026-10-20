'use client';

import { useLayoutEffect, useState } from 'react';
import MetaPixel from '@/components/MetaPixel';
import OfferLanding from '@/components/OfferLanding';
import { generalOffer } from '@/data/offerLandings';
import {
  offerFacebookVisitFromSearch,
  readStoredOfferFacebookVisit,
  writeStoredOfferFacebookVisit,
  type OfferFacebookVisit,
} from '@/lib/offer-facebook-visit';
import { FACEBOOK_OFFER_PHONE, GOOGLE_ADS_PHONE } from '@/lib/phones';

export default function OfferGeneralLanding({ initialSearch }: { initialSearch: string }) {
  const [visit, setVisit] = useState<OfferFacebookVisit | null>(() =>
    offerFacebookVisitFromSearch(initialSearch)
  );

  useLayoutEffect(() => {
    const fromUrl = offerFacebookVisitFromSearch(window.location.search);
    try {
      if (fromUrl) {
        writeStoredOfferFacebookVisit(sessionStorage, fromUrl);
        setVisit(fromUrl);
        return;
      }
      setVisit(readStoredOfferFacebookVisit(sessionStorage));
    } catch {
      setVisit(fromUrl);
    }
  }, []);

  const facebook = visit !== null;

  return (
    <>
      {facebook ? <MetaPixel /> : null}
      <OfferLanding
        content={generalOffer}
        formOrigin={facebook ? 'facebook_ads_eddie' : generalOffer.formOrigin}
        trackMetaLead={facebook}
        phone={facebook ? FACEBOOK_OFFER_PHONE : GOOGLE_ADS_PHONE}
        src={facebook ? visit.src : undefined}
      />
    </>
  );
}
