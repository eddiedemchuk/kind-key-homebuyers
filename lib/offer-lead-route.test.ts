import assert from 'node:assert/strict';
import { afterEach, describe, it } from 'node:test';
import { NextRequest } from 'next/server';
import { POST } from '../app/api/lead/route';
import { SMS_CONSENT_TEXT_VERSION } from './sms-consent';

const MOCK_GHL_URL = 'https://ghl-mock.invalid/kindkey-lead';

const ENV_KEYS = [
  'GHL_WEBHOOK_URL',
  'PROSPECTX_WEBHOOK_URL',
  'CRM_WEBHOOK_URL',
  'PROSPECTX_API_TOKEN',
  'CRM_WEBHOOK_TOKEN',
  'SMTP_USER',
  'SMTP_PASS',
  'TELEGRAM_BOT_TOKEN',
  'TELEGRAM_CHAT_ID',
  'RECAPTCHA_SECRET_KEY',
  'UPSTASH_REDIS_REST_URL',
  'UPSTASH_REDIS_REST_TOKEN',
] as const;

const savedEnv = new Map<string, string | undefined>();

function useMockLeadEnv(): void {
  for (const key of ENV_KEYS) {
    if (!savedEnv.has(key)) savedEnv.set(key, process.env[key]);
    delete process.env[key];
  }
  process.env.GHL_WEBHOOK_URL = MOCK_GHL_URL;
}

function restoreLeadEnv(): void {
  for (const [key, value] of savedEnv) {
    if (value === undefined) delete process.env[key];
    else process.env[key] = value;
  }
  savedEnv.clear();
}

describe('Google Ads offer lead delivery', () => {
  const originalFetch = globalThis.fetch;

  afterEach(() => {
    globalThis.fetch = originalFetch;
    restoreLeadEnv();
  });

  it('sends one mocked GoHighLevel lead and does not call a real webhook', async () => {
    useMockLeadEnv();
    const calls: { url: string; body: string }[] = [];
    globalThis.fetch = async (input, init) => {
      const url =
        typeof input === 'string' ? input : input instanceof URL ? input.toString() : input.url;
      calls.push({ url, body: typeof init?.body === 'string' ? init.body : '' });
      if (url === MOCK_GHL_URL) return new Response('ok', { status: 200 });
      throw new Error(`blocked outbound request ${url}`);
    };

    const request = new NextRequest('http://127.0.0.1/api/lead', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        name: 'Test Seller',
        phone: '+12535550199',
        email: 'test-seller@example.com',
        propertyAddress: '123 Main St, Tacoma, WA',
        listed_with_agent: 'no',
        sms_consent: true,
        sms_consent_text_version: SMS_CONSENT_TEXT_VERSION,
        smsNonMarketingConsent: true,
        smsMarketingConsent: true,
        form_origin: 'google_ads_landing',
        pagePath: '/offer',
        gclid: 'test-gclid-offer',
        gbraid: 'test-gbraid-offer',
        wbraid: 'test-wbraid-offer',
        utm_source: 'google',
        utm_medium: 'cpc',
        utm_campaign: 'cash-offer',
        utm_term: 'sell my house tacoma',
        utm_content: 'ad-1',
        landing_page: 'https://kindkeyhomebuyers.com/offer?gclid=test-gclid-offer',
      }),
    });

    const response = await POST(request);
    assert.equal(response.status, 200);
    const json = (await response.json()) as { success?: boolean };
    assert.equal(json.success, true);
    assert.equal(calls.length, 1);
    assert.equal(calls[0]?.url, MOCK_GHL_URL);

    const payload = JSON.parse(calls[0]?.body ?? '{}') as {
      source: string;
      lead_source: string;
      source_tag: string;
      tags: string;
      page_tag: string;
      gclid: string;
      gbraid: string;
      wbraid: string;
      listed_with_agent: string;
      address1: string;
      phone: string;
      email: string;
      full_name: string;
      customFields: { key: string; field_value: string }[];
    };
    assert.equal(payload.source, 'Google Ads');
    assert.equal(payload.lead_source, 'Google Ads');
    assert.equal(payload.source_tag, 'google ads');
    assert.match(payload.tags, /google ads/);
    assert.equal(payload.page_tag, 'general');
    assert.equal(payload.full_name, 'Test Seller');
    assert.equal(payload.phone, '+12535550199');
    assert.equal(payload.email, 'test-seller@example.com');
    assert.equal(payload.address1, '123 Main St, Tacoma, WA');
    assert.equal(payload.listed_with_agent, 'no');
    assert.equal(payload.gclid, 'test-gclid-offer');
    assert.equal(payload.gbraid, 'test-gbraid-offer');
    assert.equal(payload.wbraid, 'test-wbraid-offer');
    const clickId = payload.customFields.find((field) => field.key === 'google_click_id');
    const gbraid = payload.customFields.find((field) => field.key === 'gbraid');
    const wbraid = payload.customFields.find((field) => field.key === 'wbraid');
    assert.equal(clickId?.field_value, 'test-gclid-offer');
    assert.equal(gbraid?.field_value, 'test-gbraid-offer');
    assert.equal(wbraid?.field_value, 'test-wbraid-offer');
  });
});
