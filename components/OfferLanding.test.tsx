import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { createElement, type ReactElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import OfferGeneralLanding from './OfferGeneralLanding';
import OfferLanding from './OfferLanding';
import CashOfferFellThroughPage from '../app/(public)/offer/cash-offer-fell-through/page';
import ForeclosureOfferPage from '../app/(public)/offer/foreclosure/page';
import {
  asIsOffer,
  fellThroughOffer,
  fireDamageOffer,
  foreclosureOffer,
  foreclosureTrustStrip,
  inheritedOffer,
} from '../data/offerLandings';
import { GOOGLE_ADS_PHONE } from '../lib/phones';

const MAIN_OFFICE_TEL = 'tel:+12065195463';
const ORGANIC_DISPLAY = '(253) 518-3638';
const ORGANIC_TEL = 'tel:+12535183638';
const ADS_TEL = `tel:${GOOGLE_ADS_PHONE.tel}`;

function stickyBar(html: string): string {
  const start = html.indexOf('data-offer-mobile-bar');
  assert.notEqual(start, -1);
  const end = html.indexOf('data-bottom-dock="offer-call"', start);
  assert.notEqual(end, -1);
  return html.slice(start, html.indexOf('</a>', end));
}

function telHrefs(html: string): string[] {
  return [...html.matchAll(/href="(tel:[^"]+)"/g)].map((match) => match[1]);
}

function inputTag(html: string, id: string): string {
  const tag = html.match(new RegExp(`<input\\b[^>]*\\bid="${id}"[^>]*>`))?.[0];
  assert.ok(tag, id);
  return tag ?? '';
}

/** Every tap-to-call on a Google offer landing is the ads number. */
function assertAdsTapToCall(html: string, label: string) {
  const hrefs = telHrefs(html);
  assert.ok(hrefs.length >= 3, `${label} tap-to-call count`);
  for (const href of hrefs) {
    assert.equal(href, ADS_TEL, `${label} ${href}`);
  }
  assert.equal(html.includes(ORGANIC_DISPLAY), false, label);
  assert.equal(html.includes(ORGANIC_TEL), false, label);
  assert.equal(html.includes(MAIN_OFFICE_TEL), false, label);
  assert.equal(html.includes('(253) 352-4379'), true, label);
}

describe('/offer landing', () => {
  it('requires email and unchecked consent, and uses the ads tracking call', () => {
    const html = renderToStaticMarkup(
      createElement(OfferGeneralLanding, { initialSearch: '' }) as ReactElement
    );
    const bar = stickyBar(html);
    const email = inputTag(html, 'hero-email');
    const consent = inputTag(html, 'hero-sms-consent');

    assert.equal(html.includes('Situations we help with'), false);
    assert.equal(html.includes('Behind on payments'), false);
    assert.match(html, /We Buy Houses for Cash/);
    assert.match(html, /Cash for Houses/);
    assert.match(html, /Cash home buyers/);
    assert.match(html, /Sell your property for cash/);
    assert.match(html, /We buy homes for cash/);
    assert.match(html, /data-how-it-works/);
    assert.match(html, /Tell us about the house/);
    assert.match(html, /Get a cash offer within 24 hours/);
    assert.match(html, /You pick the closing date/);
    assert.match(html, /The number we offer is the number we close on/);
    assert.match(html, /We help with moving/);
    assert.equal(html.toLowerCase().includes('rent-back'), false);
    assert.equal(html.toLowerCase().includes('market snapshot'), false);
    assert.match(html, /href="\/about"/);
    assert.match(html, /href="\/contact"/);
    assert.match(html, /KindKey Home Buyers LLC/);
    assert.match(html, /640 1st St SW/);
    assert.match(html, /BBB A- rated/);
    assert.match(html, /4\.6 Stars on Google \(18 reviews\)/);
    assert.equal(html.includes('★'), false);
    assert.equal(html.includes('aggregateRating'), false);
    assert.equal(html.match(/<h1\b/g)?.length, 1);
    assert.equal(html.toLowerCase().includes('showings'), false);
    assert.equal(html.toLowerCase().includes('no obligation'), false);
    assert.equal(html.toLowerCase().includes('commit you'), false);
    assert.equal(html.toLowerCase().includes('closing cost'), false);
    assert.equal(html.toLowerCase().includes('cleanout'), false);
    assert.equal(html.toLowerCase().includes('leave the rest'), false);
    assert.match(
      html,
      /data-offer-service-area[^>]*>Pierce County, South King County, Kitsap County, and Snohomish County/
    );
    assert.match(html, /Cash Home Buyers in Pierce, South King, Kitsap, and Snohomish County/);
    assert.match(html, /data-offer-situations/);
    assert.match(html, /Divorce/);
    assert.match(html, /does not give legal advice about the divorce/);
    assert.match(html, /Stop foreclosure/);
    assert.match(html, /does not stop a foreclosure/);
    assert.match(html, /House with tenants/);
    assert.match(html, /Tax delinquent, back taxes, and liens/);
    assert.match(html, /not listed with an agent/);
    assert.equal(html.includes('name="name"'), true);
    assert.equal(html.includes('name="phone"'), true);
    assert.equal(html.includes('name="propertyAddress"'), true);
    assert.equal(html.includes('name="listed_with_agent"'), true);
    assert.equal(email.includes('type="email"'), true);
    assert.equal(email.includes('name="email"'), true);
    assert.equal(email.includes('required'), true);
    assert.equal(consent.includes('type="checkbox"'), true);
    assert.equal(consent.includes('name="sms_consent"'), true);
    assert.equal(consent.includes('checked'), false);
    assert.equal(html.includes('Terms of Service'), true);
    assert.equal(html.includes('Privacy Policy'), true);
    assert.equal(html.includes('Reply STOP to opt out'), true);
    assert.equal(html.includes('Consent is not a condition of purchase'), true);
    assert.equal(html.includes('we pay closing costs'), false);
    assert.equal(html.includes('500+ homes bought'), true);
    assert.equal(html.includes('Small family-owned business'), true);
    assert.equal(html.includes('data-offer-next'), true);
    assert.equal(html.toLowerCase().includes('tenants in place'), false);
    assert.equal(html.toLowerCase().includes('empty the house'), false);
    assert.equal(html.toLowerCase().includes('belongings'), false);
    assert.equal(html.toLowerCase().includes('insurance claim'), false);
    assert.equal(html.toLowerCase().includes('hundreds'), false);
    assert.equal(bar.includes(ADS_TEL), true);
    assert.equal(bar.includes('Call (253) 352-4379'), true);
    assertAdsTapToCall(html, '/offer');
    assert.equal(html.includes('(206) 519-5463'), false);
  });

  it('keeps the ads tracking number for a YouTube src', () => {
    const html = renderToStaticMarkup(
      createElement(OfferGeneralLanding, { initialSearch: 'src=youtube' }) as ReactElement
    );
    assertAdsTapToCall(html, 'src=youtube');
    assert.equal(html.includes('tel:+12534538597'), false);
  });

  it('keeps the sticky call on the ads tracking number for a Facebook /offer visit', () => {
    const html = renderToStaticMarkup(
      createElement(OfferGeneralLanding, { initialSearch: 'src=fb' }) as ReactElement
    );
    const bar = stickyBar(html);

    assert.equal(bar.includes(ADS_TEL), true);
    assert.equal(bar.includes('Call (253) 352-4379'), true);
    assert.equal(bar.includes(MAIN_OFFICE_TEL), false);
    assert.equal(html.includes(MAIN_OFFICE_TEL), false);
    assert.equal(html.includes(ORGANIC_DISPLAY), false);
    assert.equal(html.includes(ORGANIC_TEL), false);
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
      const email = inputTag(html, 'hero-email');
      const consent = inputTag(html, 'hero-sms-consent');

      assert.equal(email.includes('type="email"'), true, content.formOrigin);
      assert.equal(email.includes('required'), true, content.formOrigin);
      assert.equal(consent.includes('name="sms_consent"'), true, content.formOrigin);
      assert.equal(consent.includes('checked'), false, content.formOrigin);
      assert.equal(bar.includes(ADS_TEL), true, content.formOrigin);
      assert.equal(bar.includes('Call (253) 352-4379'), true, content.formOrigin);
      assertAdsTapToCall(html, content.formOrigin);
      assert.equal(html.toLowerCase().includes('hundreds'), false, content.formOrigin);
      assert.equal(html.toLowerCase().includes('we pay closing costs'), false, content.formOrigin);
      assert.equal(html.includes('data-offer-situations'), false, content.formOrigin);
      assert.equal(html.includes('data-page-situations'), true, content.formOrigin);
      assert.equal(html.includes('data-how-it-works'), true, content.formOrigin);
      assert.equal(
        html.includes('The number we offer is the number we close on'),
        true,
        content.formOrigin
      );
      assert.equal(html.includes('We help with moving'), true, content.formOrigin);
      assert.equal(html.includes('House with tenants'), false, content.formOrigin);
      assert.equal(html.includes('Tax delinquent'), false, content.formOrigin);
      assert.equal(html.toLowerCase().includes('showings'), false, content.formOrigin);
      assert.equal(html.toLowerCase().includes('no obligation'), false, content.formOrigin);
      assert.equal(html.toLowerCase().includes('commit you'), false, content.formOrigin);
      assert.equal(html.toLowerCase().includes('tenants in place'), false, content.formOrigin);
      assert.equal(html.toLowerCase().includes('insurance claim'), false, content.formOrigin);
      assert.equal(html.toLowerCase().includes('belongings'), false, content.formOrigin);
      assert.equal(html.includes('data-offer-next'), true, content.formOrigin);
    }
  });

  it('replaces the hundreds claim on the as-is offer page', () => {
    const html = renderToStaticMarkup(
      createElement(OfferLanding, {
        content: asIsOffer,
        formOrigin: asIsOffer.formOrigin,
      }) as ReactElement
    );

    assert.match(html, /Sell a House That Needs Work As-Is/);
    assert.match(html, /needs work/);
    assert.equal(html.includes('500+ homes bought'), true);
    assert.equal(html.toLowerCase().includes('hundreds'), false);
  });
});

describe('foreclosure offer landing', () => {
  it('leads with stopping foreclosure, a short trust strip, and lazy images', async () => {
    const page = await ForeclosureOfferPage({ searchParams: Promise.resolve({}) });
    const html = renderToStaticMarkup(page as ReactElement);
    const bar = stickyBar(html);

    assert.match(html, /Sell Your House Before Foreclosure/);
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
    assert.equal(inputTag(html, 'hero-sms-consent').includes('checked'), false);
    assert.equal(bar.includes('Call (253) 352-4379'), true);
    assert.equal(bar.includes(ADS_TEL), true);
    assertAdsTapToCall(html, '/offer/foreclosure');
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

    assert.match(html, /Sell Your Tacoma House Before Foreclosure/);
    assert.equal(html.includes('We Buy Houses in Tacoma'), false);
  });
});

describe('cash offer fell through landing', () => {
  it('keeps the fell-through headline, the approved close message, and the ads form', () => {
    const html = renderToStaticMarkup(createElement(CashOfferFellThroughPage) as ReactElement);
    const lower = html.toLowerCase();

    assert.match(html, /data-offer-headline[^>]*>Had a Cash Offer Fall Through\?/);
    assert.match(html, /Some buyers make an offer they can&#x27;t close on\. We don&#x27;t\./);
    assert.match(html, /When we make a cash offer, we close on the date you pick\./);
    assert.match(html, /Why offers fall through/);
    assert.match(html, /The buyer could not fund the purchase/);
    assert.match(html, /The buyer was trying to tie the house up/);
    assert.match(html, /data-how-it-works/);
    assert.equal(fellThroughOffer.formOrigin, 'google_ads_landing');
    assert.equal(html.includes('name="name"'), true);
    assert.equal(html.includes('name="phone"'), true);
    assert.equal(html.includes('name="email"'), true);
    assert.equal(html.includes('name="propertyAddress"'), true);
    assert.equal(html.includes('name="listed_with_agent"'), true);
    assert.equal(html.includes('(253) 352-4379'), true);
    assert.equal(html.match(/<h1\b/g)?.length, 1);
    for (const phrase of [
      'closing cost',
      'showings',
      'no obligation',
      'commit you',
      'wholesaler',
      'guaranteed',
      'guarantee',
    ]) {
      assert.equal(lower.includes(phrase), false, phrase);
    }
    assert.equal(html.includes('253-518-3638'), false);
    assert.equal(html.includes('(253) 518-3638'), false);
  });
});
