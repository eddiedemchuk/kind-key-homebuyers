import RootDocument from '@/components/RootDocument';
import { rootMetadata } from '@/lib/root-metadata';
import '../globals.css';

export const metadata = rootMetadata;

export default function PublicRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <RootDocument>{children}</RootDocument>;
}
