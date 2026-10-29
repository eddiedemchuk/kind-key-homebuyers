import OfferGeneralLanding from '@/components/OfferGeneralLanding';
import { generalOffer } from '@/data/offerLandings';
import { offerPageHeadline } from '@/lib/offer-city';

function firstQueryValue(value: string | string[] | undefined): string {
  const raw = Array.isArray(value) ? value[0] : value;
  return raw ?? '';
}

export default async function OfferSearchLanding({
  searchParams,
  pixelInDocument = false,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
  /** True when this response's <head> already contains the Meta pixel. */
  pixelInDocument?: boolean;
}) {
  const params = await searchParams;
  const initial = new URLSearchParams();
  const src = firstQueryValue(params.src);
  const utmSource = firstQueryValue(params.utm_source);
  if (src) initial.set('src', src);
  if (utmSource) initial.set('utm_source', utmSource);

  return (
    <OfferGeneralLanding
      initialSearch={initial.toString()}
      headline={offerPageHeadline(generalOffer.headline, params)}
      pixelInDocument={pixelInDocument}
    />
  );
}
