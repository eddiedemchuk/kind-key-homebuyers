import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import {
  GOOGLE_ADS_SUBMIT_CONVERSION_SEND_TO,
  googleAdsUserData,
  trackLeadSubmit,
} from './analytics';

describe('google ads user data', () => {
  it('keeps a collected email and normalizes the phone', () => {
    assert.deepEqual(googleAdsUserData({ email: ' Ada@Example.com ', phone: '(253) 555-0100' }), {
      email: 'ada@example.com',
      phone_number: '+12535550100',
    });
  });

  it('omits a blank email', () => {
    assert.deepEqual(googleAdsUserData({ email: '   ', phone: '+1 253-555-0100' }), {
      phone_number: '+12535550100',
    });
  });
});

describe('google ads submit conversion', () => {
  it('fires the offer conversion once per successful submit', () => {
    const events: { name: unknown; params?: Record<string, unknown> }[] = [];
    const previousWindow = globalThis.window;
    globalThis.window = {
      gtag: (_command: string, name: unknown, params?: Record<string, unknown>) => {
        events.push({ name, params });
      },
    } as unknown as Window & typeof globalThis.window;

    try {
      trackLeadSubmit({ email: 'ada@example.com', phone: '(253) 555-0100' });
      trackLeadSubmit({ email: 'ada@example.com', phone: '(253) 555-0100' });
    } finally {
      globalThis.window = previousWindow;
    }

    const conversions = events.filter((event) => event.name === 'conversion');
    assert.equal(conversions.length, 2);
    assert.equal(conversions[0]?.params?.send_to, GOOGLE_ADS_SUBMIT_CONVERSION_SEND_TO);
    assert.equal(conversions[1]?.params?.send_to, GOOGLE_ADS_SUBMIT_CONVERSION_SEND_TO);
    assert.notEqual(conversions[0]?.params?.transaction_id, conversions[1]?.params?.transaction_id);
  });
});
