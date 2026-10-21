# Analytics and cookie consent

The site uses one Google tag for Google Ads conversion tracking and Google Analytics 4 (property
514584396, measurement ID `G-E2YKGLGN1S`). Consent Mode v2 defaults to granted so visitors are
counted before they interact with the cookie banner. Offer landing pages do not show that banner.

## Responsibilities

- `lib/useCookieConsent.ts` reads and writes the consent record. Accept updates consent to granted.
  Reject updates consent to denied.
- `components/CookieConsent.tsx` displays the accept/reject banner on marketing pages.
- `components/RootDocument.tsx` loads one gtag.js, sets the consent default, and configures both
  the Ads tag and GA4. The public and Facebook-offer root layouts both render that document. A
  stored rejection updates consent to denied before either tag sends a hit.
- `lib/analytics.ts` provides the browser event helpers used by lead submission and the offer pages.

## Consent record

The browser stores the decision in `localStorage` under `cookie-consent`:

```json
{
  "consent": "accepted",
  "expiry": "2027-01-15T12:00:00.000Z"
}
```

Accepted and rejected decisions expire after 365 days. Missing, expired, or invalid records return
the state to `pending`, which displays the banner on pages that include it. The default consent is
granted either way, so GA4 still loads when the banner is absent.

## Tag behavior

- GA4 measurement ID `G-E2YKGLGN1S` is the web stream for property 514584396.
  `NEXT_PUBLIC_GA_MEASUREMENT_ID` overrides it when set to a `G-` ID.
- Consent Mode v2 defaults `analytics_storage`, `ad_storage`, `ad_user_data`, and
  `ad_personalization` to `granted` for every visitor. US visitors, including Washington, are the
  audience. Rejecting cookies calls `gtag('consent', 'update', …)` with those flags `denied`.
- Google Ads `AW-17766515185` and GA4 share that one gtag loader. GA4 sends the page view. The Ads
  config stays `gtag('config', 'AW-17766515185')` so the existing conversion can fire. There is no
  second gtag loader and no second GA4 `config`.
- Offer pages emit `form_start` (once per page load, with `form_origin`) on the first field focus
  or input, `call_click` (with `link_location`) on a `tel:` tap, and `get_offer_click` on a Get My
  Offer button.
- Lead submission emits `lead_submit` and `generate_lead`, and queues Google Ads conversion
  `AW-17766515185/IeBJCKCujPIbEPGD3pdC` with a transaction id.
- The thank-you route repeats that same conversion with the stored transaction id, so Google Ads
  counts it once if the first hit was lost during navigation. It does not fire a second label.
- Meta pixel `1352513176647290` is an inline script in the document `<head>` on `/offer/facebook`
  and on `/offer` when `src` is `fb` or `fb_static` (any case). The browser runs `fbq('init')` and
  `fbq('track', 'PageView')` while parsing that HTML. The same response includes the noscript
  image. Those pages do not run the init again from the offer bundle. A successful submit still
  calls `fbq('track', 'Lead')` before the redirect to `/thank-you`.
- `/offer?utm_source=facebook`, and a later plain `/offer` view in the same tab after a qualifying
  visit, still load the pixel from the client bundle once the page is interactive. That fallback
  does not run when `window.fbq` already exists. A plain `/offer` visit with no Facebook signal,
  the other `/offer/*` pages, and `/thank-you` do not load this pixel. Their HTML does not include
  the base code.
- First-touch campaign parameters are stored separately from the GA4 consent record. See
  [GoHighLevel lead delivery](gohighlevel.md).

## Verification

1. Open `/offer` with no `cookie-consent` entry and no banner click. A request to
   `google-analytics.com/g/collect` should fire on load.
2. Focus a form field and confirm one `form_start` event with `form_origin`.
3. Tap a `tel:` link and confirm `call_click` with `link_location`.
4. On a marketing page, reject cookies and confirm a consent update to denied. Reload and confirm
   the stored rejection is applied before the next hit.
5. Submit a controlled lead and confirm `lead_submit`, `generate_lead`, and the Ads conversion.
6. Review the privacy page and consent copy whenever tracking behavior changes.

This document describes application behavior only; legal and regulatory requirements must be
reviewed separately for the deployed jurisdiction and tracking configuration.
