import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import {
  OFFER_FACEBOOK_VISIT_KEY,
  offerFacebookVisitFromSearch,
  resolveOfferFacebookVisit,
  writeStoredOfferFacebookVisit,
  type OfferFacebookVisitStorage,
} from './offer-facebook-visit';

function memoryStorage(): OfferFacebookVisitStorage & { data: Record<string, string> } {
  const data: Record<string, string> = {};
  return {
    data,
    getItem(key) {
      return Object.prototype.hasOwnProperty.call(data, key) ? data[key] : null;
    },
    setItem(key, value) {
      data[key] = value;
    },
  };
}

describe('offer Facebook visit', () => {
  it('matches src=fb, src=fb_static, and utm_source=facebook', () => {
    assert.deepEqual(offerFacebookVisitFromSearch('?src=fb'), { src: 'fb' });
    assert.deepEqual(offerFacebookVisitFromSearch('src=FB_STATIC'), { src: 'fb_static' });
    assert.deepEqual(offerFacebookVisitFromSearch('?utm_source=Facebook'), { src: '' });
    assert.deepEqual(offerFacebookVisitFromSearch('?src=fb&utm_source=facebook'), { src: 'fb' });
    assert.equal(offerFacebookVisitFromSearch('?src=facebook'), null);
    assert.equal(offerFacebookVisitFromSearch('?utm_source=fb'), null);
    assert.equal(offerFacebookVisitFromSearch(''), null);
    assert.equal(offerFacebookVisitFromSearch('?utm_source=google&utm_medium=cpc'), null);
  });

  it('keeps a qualifying visit for the rest of the session', () => {
    const storage = memoryStorage();
    assert.equal(resolveOfferFacebookVisit('', storage), null);

    const visit = offerFacebookVisitFromSearch('?utm_source=facebook');
    assert.ok(visit);
    writeStoredOfferFacebookVisit(storage, visit);
    assert.deepEqual(resolveOfferFacebookVisit('', storage), { src: '' });
    assert.ok(storage.data[OFFER_FACEBOOK_VISIT_KEY]);

    assert.deepEqual(resolveOfferFacebookVisit('?src=fb_static', storage), { src: 'fb_static' });
    writeStoredOfferFacebookVisit(storage, { src: 'fb_static' });
    assert.deepEqual(resolveOfferFacebookVisit('?gclid=abc', storage), { src: 'fb_static' });
  });
});
