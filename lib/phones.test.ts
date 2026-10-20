import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { GOOGLE_ADS_PHONE, isAlwaysGoogleAdsPhonePath, ORGANIC_PHONE } from './phones';

describe('isAlwaysGoogleAdsPhonePath', () => {
  it('uses the ads number on offer pages and thank-you', () => {
    for (const path of [
      '/thank-you',
      '/offer',
      '/offer/inherited',
      '/offer/as-is',
      '/offer/foreclosure',
      '/offer/fire-damage',
    ]) {
      assert.equal(isAlwaysGoogleAdsPhonePath(path), true, path);
    }
    assert.equal(GOOGLE_ADS_PHONE.display, '(253) 352-4379');
    assert.equal(GOOGLE_ADS_PHONE.tel, '+12533524379');
  });

  it('leaves organic pages on the organic number', () => {
    for (const path of [
      '/',
      '/contact',
      '/about',
      '/cash-offer',
      '/sell-house-as-is',
      '/privacy',
    ]) {
      assert.equal(isAlwaysGoogleAdsPhonePath(path), false, path);
    }
    assert.equal(ORGANIC_PHONE.display, '(253) 518-3638');
    assert.equal(ORGANIC_PHONE.tel, '+12535183638');
  });
});
