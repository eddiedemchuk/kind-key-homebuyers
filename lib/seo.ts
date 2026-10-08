import type { Metadata } from 'next';
import type { BlogPost, FaqItem, LongformContent } from '@/lib/content';
import { BUSINESS, SITE_URL } from '@/lib/site';

const SHARE_IMAGE = {
  url: BUSINESS.logo,
  alt: 'KindKey Home Buyers logo',
};

export function pageMetadata(
  content: Pick<LongformContent, 'title' | 'description' | 'path'>
): Metadata {
  const canonical = `${SITE_URL}${content.path}`;
  const shareTitle = `${content.title} | ${BUSINESS.brandName}`;

  return {
    title: content.title,
    description: content.description,
    alternates: { canonical },
    openGraph: {
      title: shareTitle,
      description: content.description,
      url: canonical,
      siteName: BUSINESS.brandName,
      type: 'website',
      images: [SHARE_IMAGE],
    },
    twitter: {
      card: 'summary_large_image',
      title: shareTitle,
      description: content.description,
      images: [SHARE_IMAGE.url],
    },
  };
}

export function articleMetadata(post: BlogPost): Metadata {
  const metadata = pageMetadata(post);
  const canonical = `${SITE_URL}${post.path}`;

  return {
    ...metadata,
    openGraph: {
      ...metadata.openGraph,
      type: 'article',
      url: canonical,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
    },
  };
}

export function faqJsonLd(faqs: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.path === '/' ? SITE_URL : `${SITE_URL}${item.path}`,
    })),
  };
}

export function articleJsonLd(post: BlogPost) {
  const url = `${SITE_URL}${post.path}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.h1,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    mainEntityOfPage: url,
    image: [BUSINESS.logo],
    author: {
      '@type': 'Organization',
      name: BUSINESS.legalName,
      url: BUSINESS.url,
    },
    publisher: {
      '@type': 'Organization',
      name: BUSINESS.legalName,
      url: BUSINESS.url,
      logo: {
        '@type': 'ImageObject',
        url: BUSINESS.logo,
      },
    },
  };
}
