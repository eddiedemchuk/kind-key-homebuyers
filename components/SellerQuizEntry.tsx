import SellerQuizLanding from '@/components/SellerQuizLanding';
import { offerDisplayPhone } from '@/lib/phones';

function firstQueryValue(value: string | string[] | undefined): string {
  const raw = Array.isArray(value) ? value[0] : value;
  return raw ?? '';
}

export default async function SellerQuizEntry({
  pathname,
  searchParams,
}: {
  pathname: '/quiz' | '/offer/quiz';
  searchParams: Promise<{ src?: string | string[]; utm_source?: string | string[] }>;
}) {
  const params = await searchParams;
  const initial = new URLSearchParams();
  const src = firstQueryValue(params.src);
  const utmSource = firstQueryValue(params.utm_source);
  if (src) initial.set('src', src);
  if (utmSource) initial.set('utm_source', utmSource);
  const search = initial.toString();

  return (
    <SellerQuizLanding
      pathname={pathname}
      initialSearch={search}
      initialPhone={offerDisplayPhone(pathname, search ? `?${search}` : '')}
    />
  );
}
