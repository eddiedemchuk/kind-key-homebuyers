import type { Metadata } from 'next';
import SiteChrome from '@/components/SiteChrome';

export const metadata: Metadata = {
  robots: {
    index: true,
    follow: true,
  },
};

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <SiteChrome>{children}</SiteChrome>;
}
