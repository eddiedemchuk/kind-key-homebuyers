import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { createElement, type ReactElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import OfferGeneralLanding from './OfferGeneralLanding';
import OfferLanding from './OfferLanding';
import ForeclosureOfferPage from '../app/(public)/offer/foreclosure/page';
import {
  asIsOffer,
  fireDamageOffer,
  foreclosureOffer,
  foreclosureTrustStrip,
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
    assert.equal(html.includes('Bought 100+ homes'), true);
    assert.equal(html.toLowerCase().includes('hundreds'), false);
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
      assert.equal(html.toLowerCase().includes('hundreds'), false, content.formOrigin);
      assert.equal(html.toLowerCase().includes('we pay closing costs'), false, content.formOrigin);
    }
  });

  it('replaces the hundreds claim on the as-is offer page', () => {
    const html = renderToStaticMarkup(
      createElement(OfferLanding, {
        content: asIsOffer,
        formOrigin: asIsOffer.formOrigin,
      }) as ReactElement
    );

    assert.equal(html.includes('Bought 100+ homes'), true);
    assert.equal(html.toLowerCase().includes('hundreds'), false);
  });
});

describe('foreclosure offer landing', () => {
  it('leads with stopping foreclosure, a short trust strip, and lazy images', async () => {
    const page = await ForeclosureOfferPage({ searchParams: Promise.resolve({}) });
    const html = renderToStaticMarkup(page as ReactElement);
    const bar = stickyBar(html);

    assert.match(html, /Stop foreclosure\. Sell your house before the sale/);
    assert.match(html, /Asking does not stop the foreclosure/);
    assert.equal(html.includes('data-offer-trust-strip'), true);
    for (const item of foreclosureTrustStrip) {
      assert.equal(html.includes(item), true, item);
    }
    assert.equal(html.toLowerCase().includes('hundreds'), false);
    assert.equal(html.toLowerCase().includes('we pay closing costs'), false);
    assert.equal(html.includes('name="name"'), true);
    assert.equal(html.includes('name="phone"'), true);
    assert.equal(html.includes('name="email"'), true);
    assert.equal(html.includes('name="propertyAddress"'), true);
    assert.equal(html.includes('name="listed_with_agent"'), true);
    assert.equal(html.includes('sms_consent'), true);
    assert.equal(bar.includes('Call (253) 352-4379'), true);
    assert.equal(bar.includes(`tel:${GOOGLE_ADS_PHONE.tel}`), true);
    const images = [...html.matchAll(/<img\b[^>]*>/g)].map((match) => match[0]);
    const houses = images.filter((tag) => tag.includes('/houses/house-'));
    assert.equal(houses.length, 5);
    for (const tag of houses) {
      assert.match(tag, /loading="lazy"/);
      assert.match(tag, /decoding="async"/);
      assert.match(tag, / fetchpriority="low"/);
      assert.equal(tag.includes('fetchPriority'), false);
    }
  });

  it('keeps foreclosure in the headline when the ad names a city', async () => {
    const page = await ForeclosureOfferPage({
      searchParams: Promise.resolve({ utm_term: 'sell house tacoma' }),
    });
    const html = renderToStaticMarkup(page as ReactElement);

    assert.match(html, /Stop foreclosure in Tacoma\. Sell your house before the sale/);
    assert.equal(html.includes('We Buy Houses in Tacoma'), false);
  });
});
