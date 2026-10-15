import type { Metadata } from 'next';
import LongformPage from '@/components/LongformPage';
import { getSituation } from '@/data/situations';
import { pageMetadata } from '@/lib/seo';

const content = getSituation('sell-house-with-tenants');

export const metadata: Metadata = pageMetadata(content);

export default function Page() {
  return <LongformPage content={content} />;
}
