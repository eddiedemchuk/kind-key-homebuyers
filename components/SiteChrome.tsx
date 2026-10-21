import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileStickyButton from '@/components/MobileStickyButton';
import CookieConsent from '@/components/CookieConsent';
import LeadConnectorChat from '@/components/LeadConnectorChat';
import { localBusinessJsonLd } from '@/lib/site';

/** Shared marketing-site chrome. The /offer ads page does not use this. */
export default function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd()).replace(/</g, '\\u003c'),
        }}
      />
      <link rel="preload" as="image" href="/logo2.avif" fetchPriority="high" />
      <link
        rel="preload"
        as="image"
        href="/logo3.avif"
        fetchPriority="high"
        media="(max-width: 767px)"
      />
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
      <MobileStickyButton />
      <CookieConsent />
      <LeadConnectorChat />
    </>
  );
}
