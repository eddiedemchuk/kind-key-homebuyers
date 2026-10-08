# Render deployment

This document describes only the deployment behavior represented in the repository. Confirm the
active service, branch, domain, automatic-deploy policy, and secret values in the Render dashboard.

## Repository configuration

`render.yaml` defines a Node web service with these commands:

```text
Build: npm ci && npm run build
Start: npm run start
```

Node 20 is selected through `.nvmrc`, and `package-lock.json` makes npm the supported package
manager.

## Pre-deployment checks

From a clean checkout of the revision to deploy, run:

```bash
npm ci
npm run lint
npm run typecheck
npm run format:check
npm run build
git status
```

There is no unit or end-to-end test suite. Changes to provider integrations, consent behavior,
tracking, and responsive layouts require targeted manual testing.

## Service setup

1. Connect the intended source repository and branch to a Render Node web service.
2. Use `render.yaml`, or enter the exact build and start commands shown above.
3. Configure environment values in the Render dashboard. Use
   [environment-variables.md](environment-variables.md) as the code-verified reference.
4. Keep secrets out of Git and mark dashboard-managed values as secret where supported.
5. Trigger a new build after changing any `NEXT_PUBLIC_*` value because Next.js embeds public
   variables in browser output at build time.

## Post-deployment verification

1. Check `/`, the statewide service pages, and at least one city hub.
2. Check one route from each city-intent family.
3. Verify `/sitemap.xml` and `/robots.txt` on the deployed host.
4. Submit a controlled lead and confirm every configured CRM, Telegram, and email destination.
5. Confirm repeated requests are limited when both Upstash variables are set.
6. Confirm reCAPTCHA verification when both reCAPTCHA keys are set.
7. Confirm GA4 waits for accepted consent when a measurement ID is configured.
8. Confirm the thank-you flow emits the configured Google Ads conversion event.
9. Review server logs for adapter, SMTP, CAPTCHA, and Redis warnings.

## Canonical host

Generated canonical and sitemap URLs default to `https://kindkeyhomebuyers.com`. Set
`NEXT_PUBLIC_SITE_URL` to the complete HTTPS origin when deploying to another canonical host, then
rebuild the application. DNS and certificate values are external service configuration and are not
stored in this repository.

## Troubleshooting

### Build failures

- Reproduce with `npm ci && npm run build` under Node 20.
- Confirm `package-lock.json` is present and no second package-manager lockfile was introduced.
- Run lint and type checking separately to isolate source failures.

### Form errors

- Review server logs for validation, rate-limit, or reCAPTCHA failures.
- Confirm paired credentials are present for each enabled integration.
- Confirm the public and secret reCAPTCHA keys belong to the same v3 configuration and allow the
  deployed host.

### Successful form response but missing notification

The lead endpoint waits for all configured delivery attempts but isolates provider failures. Check
the provider-specific warning or error, then verify both variables required by that adapter.
