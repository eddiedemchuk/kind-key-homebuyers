import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { createElement, type ReactElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import OfferGeneralLanding from './OfferGeneralLanding';
import OfferLanding from './OfferLanding';
import {
  asIsOffer,
  fireDamageOffer,
  foreclosureOffer,
  inheritedOffer,
} from '../data/offerLandings';
import { GOOGLE_ADS_PHONE } from '../lib/phones';

const MAIN_OFFICE_TEL = 'tel:+12065195463';
const ORGANIC_DISPLAY = '(253) 518-3638';

function stickyBar(html: string): string {
  const start = html.indexOf('data-offer-mobile-bar');
  assert.notEqual(start, -1);
  const end = html.indexOf('data-bottom-dock="offer-call"', start);
  assert.notEqual(end, -1);
  return html.slice(start, html.indexOf('</a>', end));
}

describe('trimmed /offer landing', () => {
  it('keeps four fields, the ads tracking call, and no situations list', () => {
    const html = renderToStaticMarkup(
      createElement(OfferGeneralLanding, { initialSearch: '' }) as ReactElement
    );
    const bar = stickyBar(html);

    assert.equal(html.includes('Situations we help with'), false);
    assert.equal(html.includes('Behind on payments'), false);
    assert.equal(html.includes('Divorce'), false);
    assert.equal(html.includes('Foreclosure'), false);
    assert.equal(html.includes('data-offer-fields="address listed name phone"'), true);
    assert.equal(html.includes('type="email"'), false);
    assert.equal(html.includes('sms_consent'), false);
    assert.equal(html.includes('we pay closing costs'), false);
    assert.equal(bar.includes(`tel:${GOOGLE_ADS_PHONE.tel}`), true);
    assert.equal(bar.includes('Call (253) 352-4379'), true);
    assert.equal(html.includes(MAIN_OFFICE_TEL), false);
    assert.equal(html.includes(ORGANIC_DISPLAY), false);
    assert.equal(html.includes('(206) 519-5463'), false);
  });

  it('keeps the sticky call on the ads tracking number for a Facebook /offer visit', () => {
    const html = renderToStaticMarkup(
      createElement(OfferGeneralLanding, { initialSearch: 'src=fb' }) as ReactElement
    );
    const bar = stickyBar(html);

    assert.equal(bar.includes(`tel:${GOOGLE_ADS_PHONE.tel}`), true);
    assert.equal(bar.includes('Call (253) 352-4379'), true);
    assert.equal(bar.includes(MAIN_OFFICE_TEL), false);
    assert.equal(html.includes(MAIN_OFFICE_TEL), false);
  });

  it('situation pages already use the ads tracking number for tap-to-call', () => {
    for (const content of [inheritedOffer, foreclosureOffer, fireDamageOffer, asIsOffer]) {
      const html = renderToStaticMarkup(
        createElement(OfferLanding, {
          content,
          formOrigin: content.formOrigin,
          showDistressNotes: content === foreclosureOffer,
        }) as ReactElement
      );
      const bar = stickyBar(html);

      assert.equal(bar.includes(`tel:${GOOGLE_ADS_PHONE.tel}`), true, content.formOrigin);
      assert.equal(bar.includes('Call (253) 352-4379'), true, content.formOrigin);
      assert.equal(html.includes(MAIN_OFFICE_TEL), false, content.formOrigin);
      assert.equal(html.includes(ORGANIC_DISPLAY), false, content.formOrigin);
    }
  });
});
