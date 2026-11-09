'use client';

import type { FormOrigin } from '@/lib/form-origin';
import {
  offerFormUsesYouTubeAds,
  rememberOfferYouTubeVisit,
  type OfferYouTubeVisitStorage,
} from '@/lib/offer-youtube';

function browserStorages(): OfferYouTubeVisitStorage[] {
  const storages: OfferYouTubeVisitStorage[] = [];
  try {
    if (typeof sessionStorage !== 'undefined') storages.push(sessionStorage);
  } catch {
    // Storage access can throw. The landing URL is still checked at submit.
  }
  try {
    if (typeof localStorage !== 'undefined') storages.push(localStorage);
  } catch {
    // Storage access can throw. The landing URL is still checked at submit.
  }
  return storages;
}

/** Saves src=youtube or utm_source=youtube so it survives a later navigation. */
export function persistOfferYouTubeLanding(search: string, now = new Date()): void {
  for (const storage of browserStorages()) {
    try {
      rememberOfferYouTubeVisit(search, storage, now);
    } catch {
      // Private mode can reject the write. Submit still reads the current URL.
    }
  }
}

export function offerLandingIsYouTube(
  formOrigin: FormOrigin,
  search: string,
  touch?: { utm_source?: string; landing_page?: string } | null
): boolean {
  return offerFormUsesYouTubeAds({
    formOrigin,
    search,
    storages: browserStorages(),
    touch,
  });
}
