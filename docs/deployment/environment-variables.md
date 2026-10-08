# Environment variables

This reference is derived from the current source code. Store real credentials in the deployment
provider or an ignored `.env.local` file; never commit them.

The application builds without external credentials. Runtime protection and lead delivery are
enabled only when the relevant variable groups are complete.

## Public build-time variables

Values prefixed with `NEXT_PUBLIC_` may be included in browser bundles and require a rebuild when
changed.

| Variable                         | Purpose                                              | Default                         |
| -------------------------------- | ---------------------------------------------------- | ------------------------------- |
| `NEXT_PUBLIC_SITE_URL`           | Base origin for generated URLs and schema            | `https://kindkeyhomebuyers.com` |
| `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` | Loads reCAPTCHA v3 and requests form tokens          | reCAPTCHA is skipped            |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID`  | Configures GA4 after accepted cookie consent         | GA4 is omitted                  |
| `NEXT_PUBLIC_HERO_VIDEO_SRC`     | Overrides hero video; supported routes accept `none` | `/hero-loop.mp4`                |
| `NEXT_PUBLIC_HERO_IMAGE_SRC`     | Overrides hero poster imagery                        | route-specific local asset      |
| `NEXT_PUBLIC_BRAND_NAME`         | Overrides header and footer brand name               | `KindKey Home Buyers`           |
| `NEXT_PUBLIC_BRAND_TAGLINE`      | Overrides the footer tagline                         | built-in statewide tagline      |

## Server-only variables

### reCAPTCHA

```env
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_public_v3_site_key
RECAPTCHA_SECRET_KEY=your_server_secret
```

Both keys are needed for enforced bot scoring. The server accepts scores greater than `0.5`.

### Upstash rate limiting

```env
UPSTASH_REDIS_REST_URL=https://your-instance.upstash.io
UPSTASH_REDIS_REST_TOKEN=your_rest_token
```

Both values enable a sliding limit of three submissions per 15 minutes per derived client IP.

### CRM

Preferred names:

```env
PROSPECTX_WEBHOOK_URL=https://your-crm-endpoint.example
PROSPECTX_API_TOKEN=your_bearer_token
```

Backward-compatible names:

```env
CRM_WEBHOOK_URL=https://your-crm-endpoint.example
CRM_WEBHOOK_TOKEN=your_bearer_token
```

The adapter prefers the `PROSPECTX_*` pair and falls back to the generic pair. Delivery is skipped
unless both the resolved endpoint and token are present.

### Telegram

```env
TELEGRAM_BOT_TOKEN=your_bot_token
TELEGRAM_CHAT_ID=your_chat_or_group_id
```

Both values are required for Telegram delivery.

### SMTP email

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_smtp_username
SMTP_PASS=your_smtp_password_or_app_password
LEADS_NOTIFY_EMAIL=recipient@example.com
```

Host and port have the defaults shown. Username, password, and recipient are all required for email
delivery.

## Configuration alignment notes

`render.yaml` declares dashboard fields, while source code determines the values actually read at
runtime. The current differences are:

- CRM token variables are supported in code but are not declared in `render.yaml`.
- `GA_MEASUREMENT_ID`, `RECAPTCHA_SITE_KEY`, and `NEXT_PUBLIC_PRIMARY_CITIES` are declared in
  `render.yaml` but are not read by the application.
- Google Ads identifiers and the conversion destination are currently defined in application code,
  not environment variables.

After changing deployment values, rebuild the service and verify each configured destination with
one controlled lead submission.
