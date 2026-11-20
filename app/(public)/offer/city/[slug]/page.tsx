import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import OfferPerCityLanding from '@/components/OfferPerCityLanding';
import {
  getOfferCityPage,
  offerCityDescription,
  offerCityPages,
  offerCityPagePath,
  offerCityTitle,
} from '@/data/offerCityPages';
import { SITE_URL } from '@/lib/site';

export function generateStaticParams() {
  return offerCityPages.map((city) => ({ slug: city.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const city = getOfferCityPage(slug);
  if (!city) return {};

  const title = offerCityTitle(city);
  const description = offerCityDescription(city);
  const canonical = `${SITE_URL}${offerCityPagePath(city)}`;

  return {
    title: { absolute: title },
    description,
    alternates: { canonical },
    robots: {
      index: false,
      follow: true,
      googleBot: { index: false, follow: true },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: 'KindKey Home Buyers',
      type: 'website',
    },
  };
}

export default async function OfferCityPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const city = getOfferCityPage(slug);
  if (!city) notFound();
  return <OfferPerCityLanding city={city} />;
}
