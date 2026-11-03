import SellFunnel from '@/components/SellFunnel';
import { sellPageMetadata } from '@/lib/sell-funnel';

export const metadata = sellPageMetadata;

export default function SellPage() {
  return <SellFunnel />;
}
