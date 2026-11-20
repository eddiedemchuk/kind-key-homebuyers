import { blogPosts } from '@/data/blogPosts';
import type { CityInfo } from '@/data/cities';

export interface CityBlogLink {
  href: string;
  title: string;
  description: string;
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export function getRelatedBlogPosts(
  city: Pick<CityInfo, 'name' | 'blogTerms'>,
  limit = 3
): CityBlogLink[] {
  const terms = Array.from(new Set([city.name, ...(city.blogTerms ?? [])].filter(Boolean)));
  const patterns = terms.map((term) => new RegExp(`\\b${escapeRegExp(term)}\\b`, 'i'));

  return blogPosts
    .filter((post) => {
      const haystack = [post.title, post.h1, post.description].join('\n');
      return patterns.some((pattern) => pattern.test(haystack));
    })
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt) || b.path.localeCompare(a.path))
    .slice(0, limit)
    .map((post) => ({
      href: post.path,
      title: post.title,
      description: post.description,
    }));
}
