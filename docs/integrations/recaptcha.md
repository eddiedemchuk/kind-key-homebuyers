# reCAPTCHA v3

Google reCAPTCHA v3 is an optional client/server protection for lead submissions. Production bot
scoring requires both the public site key and server secret.

## Configuration

Create a v3 property in the Google reCAPTCHA Admin Console and allow every deployed hostname that
serves the lead form. Configure:

```env
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_public_v3_site_key
RECAPTCHA_SECRET_KEY=your_server_secret
```

The site key is intentionally public. The secret must remain server-side and must not be committed.

## Request flow

1. `lib/useRecaptcha.ts` lazy-loads the v3 script as a shared singleton when a form approaches the
   viewport.
2. The lead form requests a token for the `submit_lead` action.
3. The browser includes the token in `POST /api/lead`.
4. `lib/captcha.ts` verifies supplied tokens through Google's site verification endpoint.
5. The request is accepted only when Google reports success and a score greater than `0.5`.

The current implementation is intentionally fail-open when keys are absent: the client returns an
empty token, and the server skips verification when no token is submitted or no secret is
configured. Configure both keys for production enforcement.

## Verification

1. Confirm both keys belong to the same reCAPTCHA v3 property.
2. Confirm the deployed hostname is allowed in the reCAPTCHA configuration.
3. Submit the form and verify the reCAPTCHA script loads only once.
4. Check server logs for verification errors.
5. Review score distribution in the reCAPTCHA Admin Console before changing the threshold.

## Troubleshooting

- `Invalid site key`: verify the public key, v3 type, and allowed hostname.
- Verification failure: verify the server secret and inspect the server response/log entry.
- Script load failure: inspect browser network errors and content-security restrictions.
- Submissions accepted without scoring: confirm both variables are present in the deployed build
  and restart or rebuild after changing the public key.
