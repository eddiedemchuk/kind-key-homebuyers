import { MetadataRoute } from 'next';
import { cities } from '@/data/cities';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://kindkeyhomebuyers.com';
  const now = new Date();

  const routes = [
    '',
    '/how-it-works',
    '/success',
    '/about',
    '/contact',
    '/thank-you',
    '/privacy',
    '/terms',
    '/sell-house-as-is',
    '/cash-offer',
    '/sell-house-washington',
  ];

  const cityRoutes = cities.map((city) => `/areas/${city.slug}`);

  const intentTypes = ['sell-my-house-fast', 'cash-offer', 'sell-house-as-is'];
  const cityIntentRoutes = cities.flatMap((city) =>
    intentTypes.map((intent) => `/areas/${city.slug}/${intent}`)
  );

  const allRoutes = [...routes, ...cityRoutes, ...cityIntentRoutes];

  return allRoutes.map((route) => {
    let priority = 0.8;
    if (route === '') {
      priority = 1.0;
    } else if (route === '/sell-house-washington' || route.startsWith('/areas/')) {
      // Intent pages rank below their city hubs.
      if (route.match(/\/areas\/[^/]+\/(sell-my-house-fast|cash-offer|sell-house-as-is)$/)) {
        priority = 0.85;
      } else {
        priority = 0.9;
      }
    } else if (['/how-it-works', '/contact', '/about'].includes(route)) {
      priority = 0.85;
    } else if (route === '/thank-you') {
      priority = 0.5;
    }

    return {
      url: `${baseUrl}${route}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority,
    };
  });
}
