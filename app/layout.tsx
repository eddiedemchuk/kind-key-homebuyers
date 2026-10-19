import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import AttributionCapture from '@/components/AttributionCapture';
import { COOKIE_CONSENT_STORAGE_KEY, GA4_MEASUREMENT_ID } from '@/lib/analytics';
import { SITE_URL } from '@/lib/site';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'sans-serif'],
});

const shareImage = {
  url: `${SITE_URL}/logo.avif`,
  alt: 'KindKey Home Buyers logo',
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'KindKey Home Buyers — Auburn Cash Home Buyer for King and Pierce County',
    template: '%s | KindKey Home Buyers',
  },
  description:
    'KindKey Home Buyers LLC is a principal buyer based in Auburn, Washington. Sell your King or Pierce County house as-is with a transparent cash offer.',
  keywords: [
    'cash home buyer Washington',
    'we buy houses Washington',
    'sell house fast WA',
    'Kent WA',
    'Federal Way WA',
    'Auburn WA',
    'cash home buyer',
    'sell house fast',
  ],
  authors: [{ name: 'KindKey Home Buyers LLC' }],
  // Indexing defaults live on the marketing layout. /offer sets noindex itself.
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'KindKey Home Buyers',
    url: SITE_URL,
    title: 'KindKey Home Buyers — Auburn Cash Home Buyer for King and Pierce County',
    description:
      'KindKey Home Buyers LLC is a principal buyer based in Auburn, Washington. Sell your King or Pierce County house as-is with a transparent cash offer.',
    images: [shareImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KindKey Home Buyers — Auburn Cash Home Buyer for King and Pierce County',
    description:
      'KindKey Home Buyers LLC is a principal buyer based in Auburn, Washington. Sell your King or Pierce County house as-is with a transparent cash offer.',
    images: [shareImage.url],
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    other: [
      {
        rel: 'android-chrome',
        url: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        rel: 'android-chrome',
        url: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  },
  other: {
    'preconnect-google-fonts': 'https://fonts.googleapis.com',
    'preconnect-google-fonts-static': 'https://fonts.gstatic.com',
    'preconnect-google': 'https://www.google.com',
    'preconnect-gstatic': 'https://www.gstatic.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
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
