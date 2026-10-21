import OfferGeneralLanding from '@/components/OfferGeneralLanding';

function firstQueryValue(value: string | string[] | undefined): string {
  const raw = Array.isArray(value) ? value[0] : value;
  return raw ?? '';
}

export default async function OfferSearchLanding({
  searchParams,
  pixelInDocument = false,
}: {
  searchParams: Promise<{ src?: string | string[]; utm_source?: string | string[] }>;
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
    <OfferGeneralLanding initialSearch={initial.toString()} pixelInDocument={pixelInDocument} />
  );
}
