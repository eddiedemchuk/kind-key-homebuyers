import Link from 'next/link';
import CTASection from '@/components/CTASection';
import FAQAccordion from '@/components/FAQAccordion';
import JsonLd from '@/components/JsonLd';
import { APPROVED_TRANSACTION_DISCLOSURE } from '@/data/disclosures';
import type { BlogPost, LongformContent } from '@/lib/content';
import { articleJsonLd, breadcrumbJsonLd, faqJsonLd } from '@/lib/seo';

function formatPublishedDate(isoDate: string) {
  return new Intl.DateTimeFormat('en-US', {
    timeZone: 'UTC',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(`${isoDate}T00:00:00Z`));
}

export default function LongformPage({
  content,
  article,
}: {
  content: LongformContent;
  article?: BlogPost;
}) {
  return (
    <>
      <JsonLd id="breadcrumb-schema" data={breadcrumbJsonLd(content.breadcrumbs)} />
      <JsonLd id="faq-schema" data={faqJsonLd(content.faqs)} />
      {article ? <JsonLd id="article-schema" data={articleJsonLd(article)} /> : null}

      <article>
        <header className="border-b border-divider bg-secondary py-16">
          <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-text-secondary">
              {content.breadcrumbs.map((crumb, index) => {
                const isLast = index === content.breadcrumbs.length - 1;
                return (
                  <span key={crumb.path}>
                    {index > 0 ? <span className="mx-2">/</span> : null}
                    {isLast ? (
                      <span className="text-text-primary">{crumb.name}</span>
                    ) : (
                      <Link href={crumb.path} className="text-divider hover:underline">
                        {crumb.name}
                      </Link>
                    )}
                  </span>
                );
              })}
            </nav>
            {article ? (
              <p className="mb-4 text-sm text-text-secondary">
                <time dateTime={article.publishedAt}>
                  {formatPublishedDate(article.publishedAt)}
                </time>
                {' · '}KindKey Home Buyers LLC
              </p>
            ) : null}
            <h1 className="mb-6 text-4xl font-bold text-text-primary md:text-5xl">{content.h1}</h1>
            <div className="space-y-4 text-lg text-text-secondary">
              {content.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <Link
              href="/cash-offer"
              className="mt-8 inline-block rounded-lg bg-divider px-6 py-3 font-semibold text-white transition-colors hover:bg-divider/90"
            >
              Get a cash offer
            </Link>
          </div>
        </header>

        <div className="bg-primary py-16">
          <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            {content.sections.map((section) => (
              <section key={section.heading} className="mb-12">
                <h2 className="mb-4 text-2xl font-semibold text-text-primary">{section.heading}</h2>
                <div className="space-y-4 text-lg text-text-secondary">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                {section.bullets ? (
                  <ul className="mt-4 list-disc space-y-2 pl-6 text-lg text-text-secondary">
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}

            {content.related && content.related.length > 0 ? (
              <section className="mb-12">
                <h2 className="mb-4 text-2xl font-semibold text-text-primary">Related pages</h2>
                <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {content.related.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="block h-full rounded-lg border border-divider bg-secondary p-5 transition-colors hover:border-accent"
                      >
                        <span className="font-semibold text-divider">{link.label}</span>
                        {link.description ? (
                          <span className="mt-2 block text-sm text-text-secondary">
                            {link.description}
                          </span>
                        ) : null}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}

            <p className="text-sm text-text-secondary">{APPROVED_TRANSACTION_DISCLOSURE}</p>
          </div>
        </div>

        <section className="bg-secondary py-16">
          <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-3xl font-bold text-text-primary">
              Frequently asked questions
            </h2>
            <FAQAccordion items={content.faqs} />
          </div>
        </section>

        <CTASection
          title={content.ctaTitle ?? 'Ready for a cash offer?'}
          subtitle={
            content.ctaSubtitle ??
            'Tell KindKey about the house. Requesting an offer does not obligate you to sell.'
          }
          buttonText="Get My Cash Offer"
          buttonHref="/cash-offer"
        />
      </article>
    </>
  );
}
