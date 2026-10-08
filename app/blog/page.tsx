import type { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from '@/data/blogPosts';
import { pageMetadata } from '@/lib/seo';

const content = {
  title: 'Guides for Selling a House As-Is in Washington',
  description:
    'Plain-language guides from KindKey Home Buyers LLC, an Auburn principal buyer, on cash sales, probate, foreclosure, fire damage, and vacant houses in King and Pierce County.',
  path: '/blog',
};

export const metadata: Metadata = pageMetadata(content);

function formatPublishedDate(isoDate: string) {
  return new Intl.DateTimeFormat('en-US', {
    timeZone: 'UTC',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(`${isoDate}T00:00:00Z`));
}

export default function BlogIndexPage() {
  return (
    <section className="bg-primary py-16">
      <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="mb-4 text-4xl font-bold text-text-primary md:text-5xl">
          Guides for homeowners who need to sell
        </h1>
        <p className="mb-10 text-lg text-text-secondary">
          KindKey Home Buyers LLC is a principal buyer based at 640 1st St SW in Auburn. These
          guides answer common questions about selling as-is in King County and Pierce County.
          KindKey is not a real estate agent, and the articles are not legal or tax advice.
        </p>
        <ul className="divide-y divide-divider border-y border-divider">
          {blogPosts.map((post) => (
            <li key={post.slug} className="py-8">
              <p className="mb-2 text-sm text-text-secondary">
                <time dateTime={post.publishedAt}>{formatPublishedDate(post.publishedAt)}</time>
              </p>
              <h2 className="mb-3 text-2xl font-semibold text-text-primary">
                <Link href={post.path} className="hover:text-divider">
                  {post.h1}
                </Link>
              </h2>
              <p className="mb-4 text-text-secondary">{post.description}</p>
              <Link href={post.path} className="font-semibold text-divider hover:underline">
                Read the guide
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
