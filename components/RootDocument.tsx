/* eslint-disable @next/next/no-head-element, @next/next/no-before-interactive-script-outside-document --
   Both root layouts render this shell. Those rules only stay quiet for files under app/. */
import { Inter } from 'next/font/google';
import Script from 'next/script';
import AttributionCapture from '@/components/AttributionCapture';
import MetaPixelHead from '@/components/MetaPixelHead';
import { COOKIE_CONSENT_STORAGE_KEY, GA4_MEASUREMENT_ID } from '@/lib/analytics';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'sans-serif'],
});

export default function RootDocument({
  children,
  metaPixel = false,
}: Readonly<{
  children: React.ReactNode;
  /** Facebook offer document only. Other routes must leave this false. */
  metaPixel?: boolean;
}>) {
  const googleAdsId = 'AW-17766515185';
  const configuredMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim();
  const gaMeasurementId =
    configuredMeasurementId && /^G-[A-Z0-9]+$/.test(configuredMeasurementId)
      ? configuredMeasurementId
      : GA4_MEASUREMENT_ID;

  return (
    <html lang="en" className={inter.variable}>
      <head>
        {metaPixel ? <MetaPixelHead /> : null}
        <Script id="google-tag-init" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              analytics_storage: 'granted',
              ad_storage: 'granted',
              ad_user_data: 'granted',
              ad_personalization: 'granted'
            });
            try {
              var stored = localStorage.getItem('${COOKIE_CONSENT_STORAGE_KEY}');
              if (stored) {
                var data = JSON.parse(stored);
                if (data && data.consent === 'rejected' && new Date(data.expiry) > new Date()) {
                  gtag('consent', 'update', {
                    analytics_storage: 'denied',
                    ad_storage: 'denied',
                    ad_user_data: 'denied',
                    ad_personalization: 'denied'
                  });
                }
              }
            } catch (e) {}
            gtag('js', new Date());
          `}
        </Script>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
          strategy="afterInteractive"
        />
        <Script id="google-tag-config" strategy="afterInteractive">
          {`
            gtag('config', '${googleAdsId}');
            gtag('config', '${gaMeasurementId}', {
              anonymize_ip: true,
              send_page_view: true
            });
          `}
        </Script>
        {/* Critical styles avoid render blocking during initial paint. */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
            *{box-sizing:border-box;padding:0;margin:0}
            html{scroll-behavior:smooth}
            body{font-family:var(--font-inter),system-ui,sans-serif;background-color:#FFFFFF;color:#1F2937;line-height:1.6;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}
            .min-h-screen{min-height:100vh}
            .relative{position:relative}
            .absolute{position:absolute}
            .inset-0{top:0;right:0;bottom:0;left:0}
            .z-0{z-index:0}
            .z-10{z-index:10}
            .flex{display:flex}
            .items-center{align-items:center}
            .justify-center{justify-content:center}
            .overflow-hidden{overflow:hidden}
            h1{font-weight:700;margin-bottom:1.5rem}
            .text-4xl{font-size:2.25rem;line-height:2.5rem}
            @media(min-width:768px){.text-5xl{font-size:3rem;line-height:1}}
            @media(min-width:1024px){.text-6xl{font-size:3.75rem;line-height:1}}
          `,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google.com" />
        <link rel="preconnect" href="https://www.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        {children}
        <AttributionCapture />
      </body>
    </html>
  );
}
