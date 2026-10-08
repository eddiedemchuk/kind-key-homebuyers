# KindKey Home Buyers website

This repository contains the public lead-generation website for KindKey Home Buyers LLC. It
provides statewide service information, city-specific landing pages, transaction disclosures,
case studies, and lead forms for homeowners in Washington.

The application uses the Next.js App Router. Most page content is rendered on the server, while
forms, navigation, consent handling, video controls, and paid-traffic layouts use client
components.

## Stack

- Next.js 15 and React 18
- TypeScript with strict checking
- Tailwind CSS and Framer Motion
- React Hook Form with Zod validation
- Upstash Redis rate limiting
- Google reCAPTCHA v3
- CRM webhook, Telegram, and Nodemailer lead delivery
- Google Analytics 4 and Google Ads event tracking
- Render deployment configuration and GitHub Actions CI

## Repository structure

```text
app/                  App Router pages, metadata, route handlers, sitemap, and robots rules
  api/lead/           Server-side lead submission endpoint
  areas/[slug]/       Generated city hub and city-intent routes
components/           Shared client and presentation components
data/                 City, FAQ, case-study, intent, and disclosure content
docs/                 Architecture, deployment, and integration documentation
lib/                  Validation, analytics, consent, CAPTCHA, and delivery integrations
public/               Images, video, icons, manifest, and asset notes
.github/workflows/    Continuous integration checks
render.yaml           Render web-service configuration
```

## Routes and content

The main routes are:

- `/`
- `/cash-offer`
- `/sell-house-as-is`
- `/sell-house-washington`
- `/how-it-works`, `/success`, `/about`, and `/contact`
- `/privacy` and `/terms`
- `/thank-you`
- `/areas/{city}`
- `/areas/{city}/cash-offer`
- `/areas/{city}/sell-house-as-is`
- `/areas/{city}/sell-my-house-fast`

`data/cities.ts` is the source of truth for city names, slugs, descriptions, introductions, and
city FAQs. Seven city records currently generate seven hubs and 21 intent pages.
`data/intentFAQs.ts` supplies intent-specific FAQs. `data/disclosures.ts` centralizes approved
transaction and business-model wording reused by visible content and structured data.

See [City pages and routing](docs/architecture/city-pages.md) before changing route generation or
city content.

## Local development

### Requirements

- Node.js 20, as specified by `.nvmrc` and CI
- npm and the committed `package-lock.json`

Install dependencies and start the development server:

```bash
npm ci
npm run dev
```

The site is available at `http://localhost:3000` by default.

There is no tracked `.env.example`. The application builds without external credentials, so create
an ignored `.env.local` only for integrations you need to exercise. Never commit tokens, passwords,
webhook credentials, or private keys.

## Environment configuration

The main variable groups are:

- reCAPTCHA: `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`, `RECAPTCHA_SECRET_KEY`
- Upstash: `UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN`
- CRM: `PROSPECTX_WEBHOOK_URL`, `PROSPECTX_API_TOKEN` or the `CRM_WEBHOOK_*` fallback pair
- Telegram: `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID`
- SMTP: `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `LEADS_NOTIFY_EMAIL`
- Analytics: `NEXT_PUBLIC_GA_MEASUREMENT_ID`
- Canonical host: `NEXT_PUBLIC_SITE_URL`
- Optional brand and hero overrides: the documented `NEXT_PUBLIC_*` variables

See [Environment variables](docs/deployment/environment-variables.md) for behavior, defaults, and
the current differences between source usage and `render.yaml` declarations.

## Application flow

### Lead submission

1. `components/LeadForm.tsx` validates input with the shared Zod schema and requests a reCAPTCHA
   token when the public key is configured.
2. The browser posts the lead, page path, and available campaign attribution to `POST /api/lead`.
3. The route applies the Upstash limit when both Redis variables exist, validates the payload, and
   verifies any supplied reCAPTCHA token server-side.
4. The validated lead is offered independently to the CRM, Telegram, and SMTP adapters.
5. `Promise.allSettled` prevents one delivery failure from cancelling the other providers.
6. A successful response triggers analytics and either calls the form's success handler or redirects
   to `/thank-you`.

The API does not persist leads locally. It returns success after all configured delivery attempts
settle; provider failures are written to server logs.

### City and paid-traffic layouts

City routes use `generateStaticParams` and `data/cities.ts`. Metadata and FAQ structured data come
from the same content sources as visible pages.

`components/CityPageClient.tsx` selects the paid-traffic layout in the browser when the URL contains
a `gclid` or both `utm_source=google` and `utm_medium=cpc`. Direct and organic visits use the
standard layout. The server route remains responsible for metadata and city JSON-LD.

### Consent and analytics

Cookie consent is stored in `localStorage` for 365 days. GA4 loads only after accepted consent when
a measurement ID is configured. The Google Ads tag is initialized separately in the root layout.
See [Analytics and cookie consent](docs/integrations/analytics-and-consent.md).

### Authentication and storage

The repository has no application database, user accounts, or protected administration area.
Website content is stored in TypeScript modules, and submitted leads are sent to configured external
providers.

## Commands

| Command                | Purpose                                 |
| ---------------------- | --------------------------------------- |
| `npm run dev`          | Start the development server            |
| `npm run build`        | Create a production build               |
| `npm run start`        | Run the production server after a build |
| `npm run lint`         | Run the configured Next.js ESLint check |
| `npm run typecheck`    | Run TypeScript without emitting files   |
| `npm run format:check` | Check supported files with Prettier     |
| `npm run format`       | Rewrite supported files with Prettier   |

The pre-commit hook runs `lint-staged`. Staged TypeScript and JavaScript files are processed by
ESLint and Prettier; staged JSON, CSS, and Markdown files are formatted with Prettier.

## Validation and CI

The repository has no automated unit or end-to-end test suite. Run the same checks used by GitHub
Actions:

```bash
npm run lint
npm run typecheck
npm run format:check
npm run build
```

GitHub Actions runs these checks for pushes and pull requests targeting `main` or `master`.
Provider delivery, consent behavior, campaign parameters, and responsive layouts still require
targeted manual verification.

## Deployment

`render.yaml` defines the repository's Render build and start commands. External service state,
branch selection, custom domains, and secrets must be confirmed in the deployment dashboard.

See [Render deployment](docs/deployment/render.md) for the operational checklist.

## Maintainer notes

- Treat `data/disclosures.ts` as shared compliance copy and review all consumers before editing it.
- `NEXT_PUBLIC_*` values are embedded at build time and require a rebuild when changed.
- Rate limiting is disabled unless both Upstash variables are configured.
- reCAPTCHA is fail-open when its key pair is incomplete; configure both keys for production.
- CRM delivery requires both an endpoint and bearer token.
- The sitemap contains main routes, every city hub, and all city-intent routes.
- `public/hero-loop.mp4` and the two case-study JPG files are placeholders; see
  [public/README.md](public/README.md).

## Detailed documentation

- [City pages and routing](docs/architecture/city-pages.md)
- [Render deployment](docs/deployment/render.md)
- [Environment variables](docs/deployment/environment-variables.md)
- [Analytics and cookie consent](docs/integrations/analytics-and-consent.md)
- [reCAPTCHA v3](docs/integrations/recaptcha.md)
- [Telegram lead notifications](docs/integrations/telegram.md)

Copyright KindKey Home Buyers LLC. All rights reserved.
