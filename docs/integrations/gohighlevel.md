# GoHighLevel lead delivery

Cash-offer and contact forms on this site create GoHighLevel contacts through an inbound webhook.
The chat widget is a separate, GHL-hosted path and does not use this webhook.

## How a form lead is submitted

1. Cash-offer forms post through `components/LeadForm.tsx` (homepage, `/cash-offer`, `/contact`,
   city pages, and situation pages) or `components/OfferLeadForm.tsx` on the paid-ads page
   `/offer`, the Facebook page `/offer/facebook`, and the situation pages
   `/offer/foreclosure`, `/offer/inherited`, `/offer/as-is`, and `/offer/fire-damage`.
   There is no embedded GHL form and no direct browser call to the LeadConnector API.
   Those pages collect name, a required phone, email, property address, a required yes/no answer to
   “Is your house currently listed with an agent?”, and a required call/text consent checkbox that
   starts unchecked. The `/offer` and `/offer/facebook` heroes (including `/offer?src=fb` and
   `/offer?src=fb_static`) ask for the address and listing answer first, then name, phone, an
   optional email, and consent. Situation offer pages keep every field on one step and still require
   email. The listing answer is posted as `listed_with_agent` (`yes` or `no`). Email is the contact
   email, and a blank hero email is sent as an empty string. Consent is posted as `sms_consent` =
   `true` with `sms_consent_text_version`
   `a2p-v1`; the API records `sms_consent_at` when it accepts the lead. `LeadForm` does not ask the
   listing question or the offer consent box, and email stays optional there. City, condition,
   timeframe, and preferred contact stay required on
   `LeadForm` and are optional in the API so the short form can submit without filling them in.
   Each form posts `form_origin`: `website` from `LeadForm`, `google_ads_landing` from `/offer`,
   `facebook_ads_eddie` from `/offer/facebook` and from `/offer` when the URL has `src=fb`,
   `src=fb_static`, or `utm_source=facebook` (that `/offer` match is remembered for the session),
   `google_ads_foreclosure` from `/offer/foreclosure`, `google_ads_inherited` from
   `/offer/inherited`, `google_ads_as_is` from `/offer/as-is`, and `google_ads_fire_damage` from
   `/offer/fire-damage`. Those `/offer` Facebook visits also post `src` (`fb`, `fb_static`, or an
   empty string when only `utm_source=facebook` matched). `facebook_ads_landing` remains an
   allowlisted origin and is no longer chosen by `/offer`.
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
   `/thank-you` always fires `AW-17766515185/hcQZCKrs2swbEPGD3pdC` for the visit, whether or not
   the cookie banner has been accepted. It also repeats `AW-17766515185/IeBJCKCujPIbEPGD3pdC` with
   the stored `transaction_id` so Google Ads counts that submit conversion once if the first hit
   was lost during navigation.

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
| `keyword`                                                             | `keyword` query param, when present        |
| `adgroup`                                                             | `adgroup`, or `adgroupid` when no name     |
| `referrer`                                                            | `document.referrer`                        |
| `landing_page`                                                        | Origin, path, and query of the landing URL |
| `captured_at`                                                         | Time of the stored touch                   |

Rules:

- The first visit is stored.
- A new `gclid` replaces the stored click, including its landing page, UTMs, keyword, and ad group.
  The same `gclid` keeps the original landing page, so a later visit from `/offer/as-is` to
  `/offer` still submits the ad landing URL.
- A stored click is not replaced by a later organic or direct visit, or by a click that has no new
  `gclid`.
- A later paid click without a `gclid` still replaces an earlier unpaid visit.
- After 90 days from `captured_at`, the next visit starts a new touch.
- The API trusts the posted touch, and if the `kk_attribution` cookie still holds a paid click that
  the body omitted, the paid click is the one sent to GoHighLevel.

Google Ads auto-tagging adds `gclid` (and `gbraid` / `wbraid` on some clicks). It does not add the
campaign, ad group, or keyword. To fill `utm_campaign`, `utm_term`, `utm_content`, `keyword`, and
`adgroup`, add this final URL suffix in Google Ads. A tracking template is not required, and the
suffix should not include `{gclid}`.

```text
utm_source=google&utm_medium=cpc&utm_campaign={campaignid}&utm_term={keyword}&utm_content={creative}&keyword={keyword}&adgroupid={adgroupid}
```

Contact source follows the form, not the click. `lib/form-origin.ts` maps the allowlisted
`form_origin`:

| `form_origin`            | `source` / `lead_source` | `source_tag`             | `form_name`                           | `tags` (plus `website lead`) |
| ------------------------ | ------------------------ | ------------------------ | ------------------------------------- | ---------------------------- |
| `website`                | `Website`                | `website`                | `Website Form`                        | `website`                    |
| `google_ads_landing`     | `Google Ads`             | `google ads`             | `Google Ads Landing Page`             | `google ads, general`        |
| `facebook_ads_landing`   | `Facebook Ads`           | `facebook ads`           | `Facebook Ads Landing Page`           | `facebook ads`               |
| `google_ads_foreclosure` | `Google Ads`             | `google ads`             | `Google Ads Foreclosure Page`         | `google ads, foreclosure`    |
| `google_ads_inherited`   | `Google Ads`             | `google ads`             | `Google Ads Inherited Page`           | `google ads, inherited`      |
| `google_ads_as_is`       | `Google Ads`             | `google ads`             | `Google Ads As-Is Page`               | `google ads, as-is`          |
| `google_ads_fire_damage` | `Google Ads`             | `google ads`             | `Google Ads Fire Damage Page`         | `google ads, fire damage`    |
| `facebook_ads_eddie`     | `Facebook Leads (Eddie)` | `Facebook Leads (Eddie)` | `Facebook Leads (Eddie) Landing Page` | `Facebook Leads (Eddie)`     |

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

| Payload key                                                               | Value                                                                                                                                                                                                                           |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `first_name`, `last_name`, `full_name`, `phone`, `email`                  | Lead contact. Email is optional on the two-step `/offer` and `/offer/facebook` hero and on the website form. Situation `/offer` pages still require email.                                                                      |
| `address1`, `city`, `state`, `country`                                    | Property address, `WA`, `US`                                                                                                                                                                                                    |
| `condition`, `timeframe`, `preferred_contact`, `reason_for_selling`       | Form answers                                                                                                                                                                                                                    |
| `listed_with_agent`                                                       | `yes` or `no` from an `/offer` page; empty when the website form omitted it                                                                                                                                                     |
| `sms_non_marketing_consent`, `sms_marketing_consent`                      | Consent booleans. Both are `true` when the offer checkbox is checked                                                                                                                                                            |
| `sms_consent`, `sms_consent_at`, `sms_consent_text_version`               | `true`, the server timestamp, and `a2p-v1` when the offer checkbox was checked. Also copied into `customFields`                                                                                                                 |
| `page_path`, `ip`                                                         | Path of the submit page, and client IP                                                                                                                                                                                          |
| `source`, `lead_source`                                                   | Form origin: `Website`, `Google Ads`, `Facebook Ads`, or `Facebook Leads (Eddie)`                                                                                                                                               |
| `click_source`                                                            | Click-derived label, such as `Google Ads` or `Direct/Website`                                                                                                                                                                   |
| `form_name`                                                               | Form label from the allowlisted origin, such as `Google Ads Foreclosure Page`                                                                                                                                                   |
| `form_origin`                                                             | Allowlisted key the server accepted. Also sent in `customFields` and in the attribution note                                                                                                                                    |
| `src`                                                                     | Present on a Facebook `/offer` visit: `fb`, `fb_static`, or empty when only `utm_source=facebook` matched. Also copied into `customFields`                                                                                      |
| `page_tag`                                                                | Situation tag for a Google offer page: `general`, `inherited`, `as-is`, `foreclosure`, or `fire damage`. Empty on the website form and both Facebook forms                                                                      |
| `channel`                                                                 | Always `Website`, so a workflow can still recognize a site lead                                                                                                                                                                 |
| `tags`                                                                    | `website lead`, the form's source tag, and `page_tag` when one exists, comma-separated. When `listed_with_agent` is `yes`, also `listed with agent`                                                                             |
| `source_tag`                                                              | `website`, `google ads`, `facebook ads`, or `Facebook Leads (Eddie)`. Stays `google ads` on every Google offer page                                                                                                             |
| `customFields`                                                            | `{ key, field_value }` entries for `form_origin`, for `listed_with_agent` whenever the offer form answered yes or no, for `src` on a Facebook `/offer` visit, and for the SMS consent fields when the offer checkbox is checked |
| `utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content`     | Stored UTM values                                                                                                                                                                                                               |
| `gclid`, `gbraid`, `wbraid`, `fbclid`                                     | Stored click ids                                                                                                                                                                                                                |
| `keyword`, `adgroup`                                                      | Keyword and ad group from the landing URL when those params were present                                                                                                                                                        |
| `referrer`, `landing_page`, `landing_page_url`, `attribution_captured_at` | `landing_page_url` is the same first landing URL as `landing_page`                                                                                                                                                              |
| `attribution_notes`                                                       | Plain-text copy of the same values, plus the SMS consent lines when the offer checkbox was checked                                                                                                                              |

Example `tags` values: `website lead, google ads, general`, `website lead, google ads, foreclosure`,
`website lead, facebook ads`, `website lead, Facebook Leads (Eddie)`, and `website lead, website`.
`/offer` adds `general`. Situation pages add `inherited`, `as-is`, `foreclosure`, or `fire damage`
the same way, and that value is also sent alone as `page_tag`. The original `website lead` tag is
always included, and `source_tag` stays `google ads` on every Google offer page. A yes answer on an
`/offer` page appends `listed with agent`, for example
`website lead, google ads, general, listed with agent`. `/offer/facebook` leaves `page_tag` empty.
Its source and source tag are `Facebook Leads (Eddie)`, so a yes answer is
`website lead, Facebook Leads (Eddie), listed with agent`.
A no answer keeps the form tags unchanged and still sends `listed_with_agent` = `no`, including in
`customFields`. The attribution note includes `Form origin`, `Page tag` when one exists, and
`Listed with agent: yes` or `Listed with agent: no` only when the field was answered.

The payload also puts `listed_with_agent` and `form_origin` in `customFields`. The contact note
template already reads the flat `listed_with_agent` key. The sub-account still needs that
single-line custom field, mapped from `customFields` or from
`{{inboundWebhookRequest.listed_with_agent}}`, before the answer shows on the contact record. The
contact action applies `source_tag` as the tag and adds `page_tag` only when it is not empty.
`/offer/facebook` leaves `page_tag` empty, so its tag stays `Facebook Leads (Eddie)`.

`source` and `lead_source` follow the form. `click_source` is the click-derived label. `channel`
remains `Website`.

## GoHighLevel setup

Do this in the KindKey Home Buyers sub-account, in the workflow that owns `GHL_WEBHOOK_URL`.

1. Confirm the opportunity step still targets pipeline **ALL LEADS**, stage **New Hot Lead**.
   Website forms send `source` = `Website`. The `/offer` form sends `Google Ads`. It sends
   `Facebook Leads (Eddie)` when the URL has `src=fb`, `src=fb_static`, or `utm_source=facebook`,
   and that match stays for the browser session. `/offer/facebook` sends `Facebook Leads (Eddie)`.
   A condition that
   requires `source` to equal `Website`, or to be only `Website`, `Google Ads`, or `Facebook Ads`,
   will skip that page. Point that condition at tag `website lead` or at `channel` equal to
   `Website` if every site lead should enter the pipeline. `channel` stays `Website`, and `tags`
   still starts with `website lead`.
2. Map `source` to the contact's standard Source field. The payload key is already `source`. It
   matches `lead_source`. Do not map `click_source` onto that field.
3. Tags. The Website Leads workflow currently applies the contact tag from `source_tag`
   (`google ads` on every Google offer page). Keep that mapping. Also add
   `{{inboundWebhookRequest.page_tag}}` as a second tag so `/offer` is tagged `general`,
   `/offer/inherited` is `inherited`, `/offer/as-is` is `as-is`, `/offer/foreclosure` is
   `foreclosure`, and `/offer/fire-damage` is `fire damage`. Skip the extra tag when `page_tag`
   is empty, which includes `/offer/facebook` and a Facebook visit to `/offer` (`src=fb`,
   `src=fb_static`, or `utm_source=facebook`). Those visits use source tag `Facebook Leads (Eddie)`
   and also send `src`. If the contact action maps the combined `tags` string and GoHighLevel splits on
   commas, `website lead`, `google ads`, and the page tag are applied together. If the contact
   shows one literal tag named `website lead, google ads, general`, keep using separate tag inputs
   instead of the combined string.
4. Create these contact custom fields as **Single Line** text fields, then map each webhook key to
   the field with the same name:
   - `lead_source`
   - `click_source`
   - `form_name`
   - `form_origin`
   - `src`
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
   - `keyword`
   - `adgroup`
   - `referrer`
   - `landing_page`
   - `landing_page_url`
   - `attribution_captured_at`
5. Map `attribution_notes` to the contact note (or to a multi-line custom field) so the campaign
   detail is visible before the custom fields exist. Until that mapping is saved, the values are
   still on the webhook execution log, and `source` / `tags` are the fields the existing contact
   action can apply immediately.
6. Submit one test lead from a website form opened with
   `?gclid=test-gclid&utm_source=google&utm_medium=cpc`. Confirm `source` and `lead_source` are
   `Website`, the tag is `website lead, website`, and `click_source` is `Google Ads` with the click
   id still stored. Submit one lead from `/offer` and confirm `Google Ads` / `google ads` /
   `Google Ads Landing Page`, with page tag `general`. Submit one lead from `/offer?src=fb`,
   one from `/offer?src=fb_static`, and one from `/offer?utm_source=facebook`. Confirm those match
   `/offer/facebook`: `Facebook Leads (Eddie)` / `Facebook Leads (Eddie)` /
   `Facebook Leads (Eddie) Landing Page`, empty `page_tag`, `form_origin` `facebook_ads_eddie`,
   and `src` of `fb`, `fb_static`, or empty. Submit one lead
   from `/offer/facebook` and confirm `source` and `lead_source` are `Facebook Leads (Eddie)`,
   `source_tag` is `Facebook Leads (Eddie)`, `page_tag` is empty, `form_origin` is
   `facebook_ads_eddie`, and `form_name` is `Facebook Leads (Eddie) Landing Page`. On each `/offer`
   page, answer “Is your house currently listed with an agent?” Yes and confirm
   `listed_with_agent` is `yes` on the contact custom field, the note includes
   `Listed with agent: yes`, and the tags include `listed with agent`. Answer No and confirm the
   custom field is `no` without that extra tag. Confirm `form_origin` is on the contact (custom
   field or the note line `Form origin`) and the opportunity is in **ALL LEADS** / **New Hot Lead**.

No new environment variable is required. Attribution is captured in the browser and sent through
the existing webhook.
