import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { createElement, type ReactElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import OfferLanding from './OfferLanding';
import { generalOffer } from '../data/offerLandings';
import { FACEBOOK_ADS_PHONE, GOOGLE_ADS_PHONE } from '../lib/phones';

describe('trimmed /offer landing', () => {
  it('keeps four fields, a sticky 206 call, and no situations list', () => {
    const html = renderToStaticMarkup(
      createElement(OfferLanding, {
        content: generalOffer,
        formOrigin: 'google_ads_landing',
        phone: GOOGLE_ADS_PHONE,
        stickyPhone: FACEBOOK_ADS_PHONE,
        compactForm: true,
        trackMetaLead: true,
      }) as ReactElement
    );

    assert.equal(html.includes('Situations we help with'), false);
    assert.equal(html.includes('Behind on payments'), false);
    assert.equal(html.includes('Divorce'), false);
    assert.equal(html.includes('Foreclosure'), false);
    assert.equal(html.includes('data-offer-fields="address listed name phone"'), true);
    assert.equal(html.includes('type="email"'), false);
    assert.equal(html.includes('sms_consent'), false);
    assert.equal(html.includes(`tel:${FACEBOOK_ADS_PHONE.tel}`), true);
    assert.equal(html.includes(`tel:${GOOGLE_ADS_PHONE.tel}`), true);
    assert.equal(html.includes('we pay closing costs'), false);
  });
});
