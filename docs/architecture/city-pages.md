# City pages and routing

City content is data-driven. The records in `data/cities.ts` are the source of truth for city
names, slugs, descriptions, introductory copy, and city-specific FAQs.

## Generated routes

Each city record produces four routes:

- `/areas/{slug}`
- `/areas/{slug}/cash-offer`
- `/areas/{slug}/sell-house-as-is`
- `/areas/{slug}/sell-my-house-fast`

The current seven city records therefore generate seven city hubs and 21 intent pages. Every route
uses `generateStaticParams`; an unknown slug is handled with `notFound()`.

## Data model

`CityInfo` contains:

```ts
interface CityInfo {
  name: string;
  slug: string;
  description: string;
  intro: string;
  faq: Array<{
    question: string;
    answer: string;
  }>;
}
```

Intent-specific FAQs are stored separately in `data/intentFAQs.ts` and are reused across cities.
Transaction and business-model wording lives in `data/disclosures.ts`; update that shared content
only after reviewing every visible and structured-data consumer.

## Rendering responsibilities

The city hub route is a server component. It resolves the city, produces metadata and JSON-LD, and
passes serializable content to `components/CityPageClient.tsx`.

`CityPageClient` selects the paid-traffic layout after hydration when the URL contains either a
`gclid` or both `utm_source=google` and `utm_medium=cpc`. Direct and organic traffic use the
standard city layout. Metadata and LocalBusiness/Breadcrumb JSON-LD remain server-owned in either
mode.

The three intent routes share `components/IntentPageTemplate.tsx`. Each route supplies its heading,
benefits, intent content, FAQ set, metadata, canonical URL, and FAQPage JSON-LD.

## Search metadata and discovery

- City hubs generate city-specific title, description, Open Graph, and Twitter fields.
- Intent pages add self-referencing canonical URLs.
- City hubs emit LocalBusiness and BreadcrumbList JSON-LD.
- Intent pages emit FAQPage JSON-LD from `data/intentFAQs.ts`.
- `app/sitemap.ts` includes all city hubs and intent pages.
- `app/robots.ts` publishes the sitemap and excludes `/api/` and `/thank-you` from crawling.

The sitemap host comes from `NEXT_PUBLIC_SITE_URL` with a fallback to
`https://kindkeyhomebuyers.com`. `app/robots.ts` currently uses that production sitemap URL
directly.

## Adding a city

1. Add a complete `CityInfo` record to `data/cities.ts` with a unique lowercase slug.
2. Write city-specific description, introduction, and FAQ content.
3. Run lint, type checking, formatting checks, and a production build.
4. Confirm the hub and all three intent routes are present in the build output.
5. Inspect visible FAQ content and the corresponding JSON-LD.
6. Verify the new routes in `/sitemap.xml` and test an unknown slug for a 404 response.

No route file is required for an individual city; the dynamic route families consume the shared
record automatically.
