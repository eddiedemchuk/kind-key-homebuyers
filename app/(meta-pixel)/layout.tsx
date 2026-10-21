import RootDocument from '@/components/RootDocument';
import { rootMetadata } from '@/lib/root-metadata';
import '../globals.css';

export const metadata = rootMetadata;

/** /offer/facebook and the rewritten /offer?src=fb|fb_static document. */
export default function MetaPixelRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <RootDocument metaPixel>{children}</RootDocument>;
}
