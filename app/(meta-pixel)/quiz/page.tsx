import SellerQuizEntry from '@/components/SellerQuizEntry';
import { sellerQuizMetadata } from '@/lib/seller-quiz';

export const metadata = sellerQuizMetadata;

export default function SellerQuizPage({
  searchParams,
}: {
  searchParams: Promise<{ src?: string | string[]; utm_source?: string | string[] }>;
}) {
  return <SellerQuizEntry pathname="/quiz" searchParams={searchParams} />;
}
