import Script from 'next/script';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileStickyButton from '@/components/MobileStickyButton';
import CookieConsent from '@/components/CookieConsent';
import ChatWidgetOffset from '@/components/ChatWidgetOffset';

/** Shared marketing-site chrome. The /offer ads page does not use this. */
export default function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <>
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
      <ChatWidgetOffset />
      <Script
        id="leadconnector-chat-widget"
        src="https://widgets.leadconnectorhq.com/loader.js"
        strategy="lazyOnload"
        data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
        data-widget-id="6abd7b3db9739b95923d98c3"
      />
    </>
  );
}
