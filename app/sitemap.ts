import { MetadataRoute } from 'next';
import { blogPosts } from '@/data/blogPosts';
import { cities } from '@/data/cities';
import { citySituations } from '@/data/citySituations';
import { situations } from '@/data/situations';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://kindkeyhomebuyers.com';
  const now = new Date();

  const routes = [
    '',
    '/how-it-works',
    '/success',
    '/about',
    '/contact',
    '/privacy',
    '/terms',
    '/sell-house-as-is',
    '/cash-offer',
    '/sell-house-washington',
    '/blog',
  ];

  const cityRoutes = cities.map((city) => `/areas/${city.slug}`);

  const intentTypes = ['sell-my-house-fast', 'cash-offer', 'sell-house-as-is'];
  const cityIntentRoutes = cities.flatMap((city) =>
    intentTypes.map((intent) => `/areas/${city.slug}/${intent}`)
  );

  const situationRoutes = situations.map((page) => page.path);
  const citySituationRoutes = citySituations.map((page) => page.path);
  const blogRoutes = blogPosts.map((post) => post.path);

  const allRoutes = [
    ...routes,
    ...cityRoutes,
    ...cityIntentRoutes,
    ...situationRoutes,
    ...citySituationRoutes,
    ...blogRoutes,
  ];

  return allRoutes.map((route) => {
    let priority = 0.8;
    if (route === '') {
      priority = 1.0;
    } else if (route === '/sell-house-washington' || route.startsWith('/areas/')) {
      // Intent pages rank below their city hubs.
      if (
        citySituationRoutes.includes(route) ||
        route.match(/\/areas\/[^/]+\/(sell-my-house-fast|cash-offer|sell-house-as-is)$/)
      ) {
        priority = 0.85;
      } else {
        priority = 0.9;
      }
    } else if (['/how-it-works', '/contact', '/about', '/blog'].includes(route)) {
      priority = 0.85;
    } else if (situationRoutes.includes(route)) {
      priority = 0.8;
    } else if (citySituationRoutes.includes(route) || blogRoutes.includes(route)) {
      priority = 0.7;
    }

    return {
      url: `${baseUrl}${route}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority,
    };
  });
}
