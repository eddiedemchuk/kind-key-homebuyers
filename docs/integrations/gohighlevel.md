# GoHighLevel lead delivery

Cash-offer and contact forms on this site create GoHighLevel contacts through an inbound webhook.
The chat widget is a separate, GHL-hosted path and does not use this webhook.

## How a form lead is submitted

1. Cash-offer forms post through `components/LeadForm.tsx` (homepage, `/cash-offer`, `/contact`,
   city pages, and situation pages) or `components/OfferLeadForm.tsx` on the paid-ads page
   `/offer` and the situation pages `/offer/foreclosure`, `/offer/inherited`, and `/offer/as-is`.
   There is no embedded GHL form and no direct browser call to the LeadConnector API.
   Those pages collect name, phone, property address, optional email, a required yes/no answer to
   “Is your house currently listed with an agent?”, and the same SMS consent checkboxes. That
   answer is posted as `listed_with_agent` (`yes` or `no`). `LeadForm` does not ask the question
   and does not send the field. City, condition, timeframe, and preferred contact stay required on
   `LeadForm` and are optional in the API so the short form can submit without filling them in.
   Each form posts `form_origin`: `website` from `LeadForm`, `google_ads_landing` from `/offer`,
   `facebook_ads_landing` from `/offer?src=fb`, `google_ads_foreclosure` from `/offer/foreclosure`,
   `google_ads_inherited` from `/offer/inherited`, and `google_ads_as_is` from `/offer/as-is`.
   The server accepts only those values.
2. On each full page load, `components/AttributionCapture.tsx` stores the landing touch. On submit,
   the form reads that stored touch again so a later page without campaign parameters still sends
   the original click.
3. The browser `POST`s JSON to `/api/lead`.
4. `app/api/lead/route.ts` rate-limits, validates, and checks reCAPTCHA when a token is present.
   It then delivers the same lead independently to:
   - GoHighLevel, via `lib/ghl.ts` and `GHL_WEBHOOK_URL`
   - the ProspectX / CRM webhook, when that pair of credentials is set
   - Telegram
   - SMTP email
5. Provider failures are logged. One failure does not cancel the others. The site does not write a
   local copy of the lead.
6. A successful response runs the existing `generate_lead` analytics event, queues Google Ads
   conversion `AW-17766515185/IeBJCKCujPIbEPGD3pdC`, and sends the visitor to `/thank-you`.
   `/thank-you` repeats that same conversion with the stored `transaction_id` so Google Ads counts
   it once if the first hit was lost during navigation. It does not fire a second conversion label.

The webhook URL is the Inbound Webhook trigger of a workflow in the KindKey Home Buyers
sub-account. This app does not create the opportunity itself.

```env
GHL_WEBHOOK_URL=https://services.leadconnectorhq.com/hooks/your_location/webhook-trigger/your_id
```

Pipeline **ALL LEADS** and stage **New Hot Lead** stay in that workflow. The payload does not send
pipeline, stage, or opportunity fields, so the existing opportunity step is left as-is.

The root layout also loads the LeadConnector chat widget
(`widgets.leadconnectorhq.com`, widget id `6abd7b3db9739b95923d98c3`). Conversations that start in
that widget are created by GHL directly. They do not pass through `/api/lead`. To attribute those
chats, turn on URL-parameter capture in the widget settings in GoHighLevel.

## First-touch attribution

The browser stores this touch in `localStorage` key `kk_attribution` and cookie `kk_attribution`
for 90 days:

| Field                                                                 | Source                                     |
| --------------------------------------------------------------------- | ------------------------------------------ |
| `utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content` | Landing query                              |
| `gclid`, `gbraid`, `wbraid`, `fbclid`                                 | Landing query                              |
| `referrer`                                                            | `document.referrer`                        |
| `landing_page`                                                        | Origin, path, and query of the landing URL |
| `captured_at`                                                         | Time of the stored touch                   |

Rules:

- The first visit is stored.
- A stored paid click is not replaced by a later organic or direct visit, or by a different paid
  click. The first Google or Facebook click wins for the rest of the 90 days.
- A later paid click replaces an earlier unpaid visit, so a direct browsing session does not hide
  an ad click that happens afterward.
- After 90 days from `captured_at`, the next visit starts a new touch.
- The API trusts the posted touch, and if the `kk_attribution` cookie still holds a paid click that
  the body omitted, the paid click is the one sent to GoHighLevel.

Contact source follows the form, not the click. `lib/form-origin.ts` maps the allowlisted
`form_origin`:

| `form_origin`            | `source` / `lead_source` | `source_tag`   | `form_name`                   | `tags` (plus `website lead`) |
| ------------------------ | ------------------------ | -------------- | ----------------------------- | ---------------------------- |
| `website`                | `Website`                | `website`      | `Website Form`                | `website`                    |
| `google_ads_landing`     | `Google Ads`             | `google ads`   | `Google Ads Landing Page`     | `google ads`                 |
| `facebook_ads_landing`   | `Facebook Ads`           | `facebook ads` | `Facebook Ads Landing Page`   | `facebook ads`               |
| `google_ads_foreclosure` | `Google Ads`             | `google ads`   | `Google Ads Foreclosure Page` | `google ads, foreclosure`    |
| `google_ads_inherited`   | `Google Ads`             | `google ads`   | `Google Ads Inherited Page`   | `google ads, inherited`      |
| `google_ads_as_is`       | `Google Ads`             | `google ads`   | `Google Ads As-Is Page`       | `google ads, as-is`          |

A missing or unknown `form_origin` is `website`. A regular website form stays `Website` even when
the visitor arrived from an ad.

`click_source` is separate. It is still derived from the stored click, for reference only:

| `click_source`     | When                                                                                                                                                       |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Google Ads`       | `gclid`, `gbraid`, or `wbraid` is present, or `utm_source` is `google` (also `adwords` / `googleads`) and `utm_medium` is `cpc`, `ppc`, or contains `paid` |
| `Facebook Ads`     | `fbclid` is present, or `utm_source` is `facebook`, `fb`, `instagram`, `ig`, or `meta` with a paid medium                                                  |
| `Google Organic`   | Google UTM without a paid medium, or a Google search referrer                                                                                              |
| `Facebook Organic` | Facebook or Instagram UTM without a paid medium, or a Facebook/Instagram referrer                                                                          |
| `Referral`         | Another external referrer, or a UTM source that is not Google or Facebook                                                                                  |
| `Direct/Website`   | No campaign parameters and no external referrer                                                                                                            |

A Google click id wins over `fbclid` when both are present. `mail.google.com` is a referral, not
Google Organic. A referrer on `kindkeyhomebuyers.com` is direct. UTM values and click ids are still
sent unchanged. They do not change `source`, `lead_source`, or the tag.

## What GoHighLevel receives

`lib/ghl.ts` POSTs flat JSON. Contact fields are unchanged except the source, tag, and the
form and click labels below.

| Payload key                                                           | Value                                                                                                                   |
| --------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `first_name`, `last_name`, `full_name`, `phone`, `email`              | Lead contact                                                                                                            |
| `address1`, `city`, `state`, `country`                                | Property address, `WA`, `US`                                                                                            |
| `condition`, `timeframe`, `preferred_contact`, `reason_for_selling`   | Form answers                                                                                                            |
| `listed_with_agent`                                                   | `yes` or `no` from an `/offer` page; empty when the website form omitted it                                             |
| `sms_non_marketing_consent`, `sms_marketing_consent`                  | Consent booleans                                                                                                        |
| `page_path`, `ip`                                                     | Path of the submit page, and client IP                                                                                  |
| `source`, `lead_source`                                               | Form origin: `Website`, `Google Ads`, or `Facebook Ads`                                                                 |
| `click_source`                                                        | Click-derived label, such as `Google Ads` or `Direct/Website`                                                           |
| `form_name`                                                           | Form label from the allowlisted origin, such as `Google Ads Foreclosure Page`                                           |
| `form_origin`                                                         | Allowlisted key the server accepted                                                                                     |
| `channel`                                                             | Always `Website`, so a workflow can still recognize a site lead                                                         |
| `tags`                                                                | `website lead` plus the form's source tag, comma-separated. When `listed_with_agent` is `yes`, also `listed with agent` |
| `source_tag`                                                          | `website`, `google ads`, or `facebook ads` from the form                                                                |
| `utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content` | Stored UTM values                                                                                                       |
| `gclid`, `gbraid`, `wbraid`, `fbclid`                                 | Stored click ids                                                                                                        |
| `referrer`, `landing_page`, `attribution_captured_at`                 | Landing context                                                                                                         |
| `attribution_notes`                                                   | Plain-text copy of the same values                                                                                      |

Example `tags` values: `website lead, google ads`, `website lead, google ads, foreclosure`,
`website lead, facebook ads`, and `website lead, website`. Situation pages add `inherited` or
`as-is` the same way. The original `website lead` tag is always included. A yes answer on an
`/offer` page appends `listed with agent`, for example `website lead, google ads, listed with agent`.
A no answer keeps the form tags unchanged and still sends `listed_with_agent` = `no`. The
attribution note includes `Listed with agent: yes` or `Listed with agent: no` only when the field
was answered.

`source` and `lead_source` follow the form. `click_source` is the click-derived label. `channel`
remains `Website`.

## GoHighLevel setup

Do this in the KindKey Home Buyers sub-account, in the workflow that owns `GHL_WEBHOOK_URL`.

1. Confirm the opportunity step still targets pipeline **ALL LEADS**, stage **New Hot Lead**.
   Website forms send `source` = `Website`. The `/offer` form sends `Google Ads`, or `Facebook Ads`
   when the URL has `?src=fb`. A condition that requires `source` to equal `Website` will skip the
   ads landing leads. Point that condition at tag `website lead` or at `channel` equal to `Website`
   if every site lead should enter the pipeline.
2. Map `source` to the contact's standard Source field. The payload key is already `source`. It
   matches `lead_source`. Do not map `click_source` onto that field.
3. Tags. If the contact action maps `tags` and GoHighLevel splits on commas, both `website lead`
   and the source tag are applied with no further change. If the contact shows one literal tag
   named `website lead, google ads`, set the Tags input to the literal `website lead` plus custom
   value `{{inboundWebhookRequest.source_tag}}` instead of the combined string.
4. Create these contact custom fields as **Single Line** text fields, then map each webhook key to
   the field with the same name:
   - `lead_source`
   - `click_source`
   - `form_name`
   - `form_origin`
   - `listed_with_agent`
   - `utm_source`
   - `utm_medium`
   - `utm_campaign`
   - `utm_term`
   - `utm_content`
   - `gclid`
   - `gbraid`
   - `wbraid`
   - `fbclid`
   - `referrer`
   - `landing_page`
   - `attribution_captured_at`
5. Map `attribution_notes` to the contact note (or to a multi-line custom field) so the campaign
   detail is visible before the custom fields exist. Until that mapping is saved, the values are
   still on the webhook execution log, and `source` / `tags` are the fields the existing contact
   action can apply immediately.
6. Submit one test lead from a website form opened with
   `?gclid=test-gclid&utm_source=google&utm_medium=cpc`. Confirm `source` and `lead_source` are
   `Website`, the tag is `website lead, website`, and `click_source` is `Google Ads` with the click
   id still stored. Submit one lead from `/offer` and one from `/offer?src=fb`. Confirm those are
   `Google Ads` / `google ads` / `Google Ads Landing Page` and `Facebook Ads` / `facebook ads` /
   `Facebook Ads Landing Page`. On `/offer`, answer “Is your house currently listed with an agent?”
   Yes and confirm `listed_with_agent` is `yes`, the note includes `Listed with agent: yes`, and
   the tags include `listed with agent`. Answer No and confirm `listed_with_agent` is `no` without
   that extra tag. Confirm the opportunity is in **ALL LEADS** / **New Hot Lead**.

No new environment variable is required. Attribution is captured in the browser and sent through
the existing webhook.
