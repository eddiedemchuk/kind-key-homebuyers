import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LongformPage from '@/components/LongformPage';
import { cities } from '@/data/cities';
import { getCitySituation, type CitySituationKind } from '@/data/citySituations';
import { pageMetadata } from '@/lib/seo';

export function createCitySituationRoute(kind: CitySituationKind) {
  function generateStaticParams() {
    return cities
      .filter((city) => getCitySituation(city.slug, kind))
      .map((city) => ({ slug: city.slug }));
  }

  async function generateMetadata({
    params,
  }: {
    params: Promise<{ slug: string }>;
  }): Promise<Metadata> {
    const { slug } = await params;
    const page = getCitySituation(slug, kind);
    if (!page) {
      return { title: 'Page Not Found' };
    }
    return pageMetadata(page);
  }

  async function CitySituationRoutePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const page = getCitySituation(slug, kind);
    if (!page) {
      notFound();
    }
    return <LongformPage content={page} />;
  }

  return { generateStaticParams, generateMetadata, CitySituationRoutePage };
}
