import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LongformPage from '@/components/LongformPage';
import { CITY_SITUATION_SLUGS, getCitySituation } from '@/data/citySituations';
import { pageMetadata } from '@/lib/seo';

export const dynamicParams = false;

export function generateStaticParams() {
  return CITY_SITUATION_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getCitySituation(slug, 'fire');
  if (!page) {
    return { title: 'Page Not Found' };
  }
  return pageMetadata(page);
}

export default async function CityFireDamagedPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getCitySituation(slug, 'fire');
  if (!page) {
    notFound();
  }
  return <LongformPage content={page} />;
}
