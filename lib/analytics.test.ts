import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { googleAdsUserData } from './analytics';

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
