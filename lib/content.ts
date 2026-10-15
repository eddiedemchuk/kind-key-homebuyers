export interface ContentSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface RelatedLink {
  href: string;
  label: string;
  description?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export interface LongformContent {
  path: string;
  title: string;
  description: string;
  h1: string;
  intro: string[];
  /** Short note shown after the intro and again before the closing call to action. The page adds the phone number and cash-offer form. */
  callout?: string;
  sections: ContentSection[];
  faqs: FaqItem[];
  related?: RelatedLink[];
  breadcrumbs: BreadcrumbItem[];
  ctaTitle?: string;
  ctaSubtitle?: string;
}

export interface BlogPost extends LongformContent {
  slug: string;
  publishedAt: string;
  updatedAt: string;
}
