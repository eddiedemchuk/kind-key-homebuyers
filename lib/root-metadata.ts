import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/site';

const shareImage = {
  url: `${SITE_URL}/logo.avif`,
  alt: 'KindKey Home Buyers logo',
};

/** Shared by both root documents so offer and marketing pages keep the same defaults. */
export const rootMetadata: Metadata = {
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
