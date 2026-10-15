import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LongformPage from '@/components/LongformPage';
import { blogPosts, getBlogPost } from '@/data/blogPosts';
import { articleMetadata } from '@/lib/seo';

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) {
    return { title: 'Article Not Found' };
  }
  return articleMetadata(post);
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) {
    notFound();
  }
  return <LongformPage content={post} article={post} />;
}
