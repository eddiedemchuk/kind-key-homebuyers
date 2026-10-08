# Analytics and cookie consent

The site uses Google Ads conversion tracking and optional Google Analytics 4. Consent handling for
GA4 is implemented in the browser.

## Responsibilities

- `lib/useCookieConsent.ts` reads and writes the consent record.
- `components/CookieConsent.tsx` displays the accept/reject banner.
- `components/GoogleAnalytics.tsx` loads GA4 after accepted consent.
- `app/layout.tsx` initializes the Google Ads tag and renders the consent/analytics components.
- `lib/analytics.ts` provides the browser event helpers used by lead submission.

## Consent record

The browser stores the decision in `localStorage` under `cookie-consent`:

```json
{
  "consent": "accepted",
  "expiry": "2027-01-15T12:00:00.000Z"
}
```

Accepted and rejected decisions expire after 365 days. Missing, expired, or invalid records return
the state to `pending`, which displays the banner. Accepting dispatches the
`cookieConsentAccepted` browser event so GA4 can load without a page refresh.

## Tag behavior

- GA4 is omitted unless `NEXT_PUBLIC_GA_MEASUREMENT_ID` is configured.
- When configured, GA4 loads only after an unexpired accepted consent record or the acceptance
  event.
- The Google Ads tag is initialized separately in the root layout and is not gated by the GA4
  consent component.
- Lead submission emits `generate_lead`; the thank-you route emits the configured Google Ads
  conversion event.

The Google Ads identifiers are currently stored in application code. The optional GA4 measurement
ID comes from `NEXT_PUBLIC_GA_MEASUREMENT_ID`.

## Verification

1. Clear the `cookie-consent` localStorage entry and reload the site.
2. Reject consent and confirm the GA4 script is not requested.
3. Accept consent and confirm GA4 loads without a reload when a measurement ID is configured.
4. Reload and confirm the accepted state is restored.
5. Submit a controlled lead and inspect the expected analytics events.
6. Review the privacy page and consent copy whenever tracking behavior changes.

This document describes application behavior only; legal and regulatory requirements must be
reviewed separately for the deployed jurisdiction and tracking configuration.
