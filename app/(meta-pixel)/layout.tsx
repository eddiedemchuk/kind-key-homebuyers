import RootDocument from '@/components/RootDocument';
import { rootMetadata } from '@/lib/root-metadata';
import '../globals.css';

export const metadata = rootMetadata;

/** Facebook offer documents and the seller quiz. The Meta pixel lives in <head>. */
export default function MetaPixelRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <RootDocument metaPixel>{children}</RootDocument>;
}
