import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import {
  FACEBOOK_OFFER_PHONE,
  FACEBOOK_OFFER_THANK_YOU_KEY,
  GOOGLE_ADS_PHONE,
  hasFacebookOfferThankYouFlag,
  isAlwaysGoogleAdsPhonePath,
  isFacebookOfferThankYou,
  offerLandingPhone,
  ORGANIC_PHONE,
  rememberThankYouPhoneSource,
  thankYouHref,
  thankYouPhone,
  type ThankYouPhoneStorage,
} from './phones';

function memoryStorage(initial: Record<string, string> = {}): ThankYouPhoneStorage & {
  data: Record<string, string>;
} {
  const data = { ...initial };
  return {
    data,
    getItem(key) {
      return Object.prototype.hasOwnProperty.call(data, key) ? data[key] : null;
    },
    setItem(key, value) {
      data[key] = value;
    },
    removeItem(key) {
      delete data[key];
    },
  };
}

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
      assert.equal(offerLandingPhone(path).tel, GOOGLE_ADS_PHONE.tel, path);
    }
    assert.equal(GOOGLE_ADS_PHONE.display, '(253) 352-4379');
    assert.equal(GOOGLE_ADS_PHONE.tel, '+12533524379');
  });

  it('uses the Facebook offer number only on /offer/facebook', () => {
    assert.equal(isAlwaysGoogleAdsPhonePath('/offer/facebook'), false);
    assert.equal(offerLandingPhone('/offer/facebook'), FACEBOOK_OFFER_PHONE);
    assert.equal(FACEBOOK_OFFER_PHONE.display, '(253) 453-8597');
    assert.equal(FACEBOOK_OFFER_PHONE.tel, '+12534538597');
    assert.equal(offerLandingPhone('/offer').tel, '+12533524379');
    assert.equal(offerLandingPhone('/offer/inherited').tel, '+12533524379');
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

describe('Facebook offer thank-you phone', () => {
  it('marks a Facebook offer submit and clears it for every other page', () => {
    const storage = memoryStorage();
    rememberThankYouPhoneSource('/offer/facebook', storage);
    assert.equal(storage.data[FACEBOOK_OFFER_THANK_YOU_KEY], 'facebook');
    assert.equal(hasFacebookOfferThankYouFlag(storage), true);
    assert.equal(thankYouHref('/offer/facebook'), '/thank-you?from=facebook');

    rememberThankYouPhoneSource('/offer', storage, true);
    assert.equal(hasFacebookOfferThankYouFlag(storage), true);
    assert.equal(thankYouHref('/offer', true), '/thank-you?from=facebook');

    rememberThankYouPhoneSource('/offer', storage);
    assert.equal(hasFacebookOfferThankYouFlag(storage), false);
    assert.equal(thankYouHref('/offer'), '/thank-you');
    assert.equal(thankYouHref('/offer/inherited'), '/thank-you');
    assert.equal(thankYouHref('/'), '/thank-you');
  });

  it('shows the Facebook number on thank-you only after that offer page', () => {
    const storage = memoryStorage({ [FACEBOOK_OFFER_THANK_YOU_KEY]: 'facebook' });
    assert.equal(isFacebookOfferThankYou('?from=facebook', null), true);
    assert.equal(isFacebookOfferThankYou('from=facebook&utm_source=meta', null), true);
    assert.equal(isFacebookOfferThankYou('', storage), true);
    assert.equal(isFacebookOfferThankYou('?from=google', memoryStorage()), false);
    assert.equal(isFacebookOfferThankYou('', null), false);
    assert.equal(thankYouPhone(true), FACEBOOK_OFFER_PHONE);
    assert.equal(thankYouPhone(false), GOOGLE_ADS_PHONE);
  });
});
