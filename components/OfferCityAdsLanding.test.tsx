import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { createElement, type ReactElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import sitemap from '../app/sitemap';
import KentAuburnOfferPage, {
  metadata as kentMetadata,
} from '../app/(public)/offer/kent-auburn/page';
import KitsapBremertonOfferPage, {
  metadata as kitsapMetadata,
} from '../app/(public)/offer/kitsap-bremerton/page';
import TacomaPuyallupOfferPage, {
  metadata as tacomaMetadata,
} from '../app/(public)/offer/tacoma-puyallup/page';
import {
  OFFER_CITY_ADS_FAQS,
  OFFER_CITY_ADS_FORM_ORIGIN,
  OFFER_CITY_ADS_SITUATIONS,
  OFFER_CITY_ADS_STEPS,
  OFFER_CITY_ADS_TRUST,
  kentAuburnOffer,
  kitsapBremertonOffer,
  offerCityAdsPages,
  tacomaPuyallupOffer,
} from '../data/offerCityAds';
import { GOOGLE_ADS_PHONE } from '../lib/phones';
import { BUSINESS } from '../lib/site';

const ADS_TEL = `tel:${GOOGLE_ADS_PHONE.tel}`;
const ORGANIC_DISPLAY = '(253) 518-3638';
const ORGANIC_TEL = 'tel:+12535183638';
const MAIN_OFFICE_TEL = `tel:${BUSINESS.telephone}`;

const PAGES = [
  {
    content: tacomaPuyallupOffer,
    page: TacomaPuyallupOfferPage,
    metadata: tacomaMetadata,
    places: [
      'Tacoma',
      'Puyallup',
      'South Hill',
      'Lakewood',
      'University Place',
      'Spanaway',
      'Gig Harbor',
      'North End',
      'Hilltop',
      'Stadium District',
      'Lincoln District',
      'South Tacoma',
      'Tillicum',
      'Oakbrook',
      'Artondale',
    ],
  },
  {
    content: kitsapBremertonOffer,
    page: KitsapBremertonOfferPage,
    metadata: kitsapMetadata,
    places: [
      'Bremerton',
      'Port Orchard',
      'Silverdale',
      'Poulsbo',
      'Kitsap',
      'Manette',
      'Charleston',
      'Navy Yard City',
      'Annapolis',
      'Mile Hill',
      'McCormick Woods',
      'Old Town Silverdale',
      'Viking Avenue',
    ],
  },
  {
    content: kentAuburnOffer,
    page: KentAuburnOfferPage,
    metadata: kentMetadata,
    places: [
      'Kent',
      'Auburn',
      'Federal Way',
      'Renton',
      'Covington',
      'Maple Valley',
      'East Hill',
      'West Hill',
      'Kent Valley',
      'Lea Hill',
      'Lakeland Hills',
      'Twin Lakes',
      'Dash Point',
      'Steel Lake',
      'Renton Highlands',
      'Kennydale',
      'Fairwood',
      'Lake Wilderness',
    ],
  },
] as const;

const SITUATION_PHRASES = [
  'Inherited',
  'probate',
  'Tenant-occupied',
  'Fire or water damage',
  'Foreclosure',
  'Behind on payments',
  'Short sale',
  'major repairs',
];

const BLOCKED_PHRASES = [
  'closing cost',
  'we pay closing',
  'guarantee',
  'guaranteed',
  'hundreds',
  'testimonial',
  'perfect for',
  'famil',
  'child',
  'senior',
  'elder',
  'retire',
  'religion',
  'church',
  'disability',
  'handicap',
  'veteran',
  ORGANIC_DISPLAY,
  ORGANIC_TEL,
  '(206) 519-5463',
  MAIN_OFFICE_TEL,
];

function stickyBar(html: string): string {
  const start = html.indexOf('data-offer-mobile-bar');
  assert.notEqual(start, -1);
  const end = html.indexOf('data-bottom-dock="offer-call"', start);
  assert.notEqual(end, -1);
  return html.slice(start, html.indexOf('</div>', end));
}

function telHrefs(html: string): string[] {
  return [...html.matchAll(/href="(tel:[^"]+)"/g)].map((match) => match[1]);
}

function inputTag(html: string, id: string): string {
  const tag = html.match(new RegExp(`<input\\b[^>]*\\bid="${id}"[^>]*>`))?.[0];
  assert.ok(tag, id);
  return tag ?? '';
}

function robotsIndex(metadata: (typeof PAGES)[number]['metadata']): boolean | undefined {
  const robots = metadata.robots;
  if (robots == null || typeof robots === 'string') return undefined;
  return robots.index;
}

describe('Google Ads city offer pages', () => {
  it('gives each page a unique indexable title and description', () => {
    const titles = PAGES.map((entry) => entry.metadata.title);
    const descriptions = PAGES.map((entry) => entry.metadata.description);
    assert.equal(new Set(titles).size, PAGES.length);
    assert.equal(new Set(descriptions).size, PAGES.length);

    for (const entry of PAGES) {
      assert.equal(entry.metadata.title, entry.content.title);
      assert.equal(entry.metadata.description, entry.content.description);
      assert.equal(robotsIndex(entry.metadata), true);
      assert.equal(JSON.stringify(entry.metadata).includes('noindex'), false);
      assert.equal(entry.metadata.alternates && 'canonical' in entry.metadata.alternates, true);
      const canonical =
        entry.metadata.alternates && 'canonical' in entry.metadata.alternates
          ? entry.metadata.alternates.canonical
          : '';
      assert.equal(canonical, `https://kindkeyhomebuyers.com${entry.content.path}`);
    }
  });

  it('lists the three city paths in the sitemap and leaves the noindex offer pages out', () => {
    const urls = sitemap().map((item) => item.url);
    for (const content of offerCityAdsPages) {
      assert.equal(
        urls.includes(`https://kindkeyhomebuyers.com${content.path}`),
        true,
        content.path
      );
    }
    for (const path of ['/offer', '/offer/inherited', '/offer/facebook', '/offer/foreclosure']) {
      assert.equal(urls.includes(`https://kindkeyhomebuyers.com${path}`), false, path);
    }
  });

  it('reuses the shared offer form, ads number, local copy, and allowed claims', () => {
    for (const entry of PAGES) {
      const html = renderToStaticMarkup(createElement(entry.page) as ReactElement);
      const bar = stickyBar(html);
      const email = inputTag(html, 'hero-email');
      const consent = inputTag(html, 'hero-sms-consent');
      const lower = html.toLowerCase();

      assert.match(html, new RegExp(`data-offer-headline[^>]*>${entry.content.headline}`));
      assert.equal(html.includes(entry.content.areaBody), true, entry.content.path);
      for (const place of entry.places) {
        assert.equal(html.includes(place), true, `${entry.content.path} ${place}`);
      }
      for (const phrase of SITUATION_PHRASES) {
        assert.equal(html.includes(phrase), true, `${entry.content.path} ${phrase}`);
      }
      assert.equal(html.includes('Cash offer vs listing with an agent'), true);
      assert.equal(html.includes('not listed with an agent'), true);
      assert.equal(html.includes('off-market'), true);
      assert.equal(
        html.match(/data-offer-steps[\s\S]*?<\/ol>/)?.[0].match(/<li\b/g)?.length,
        OFFER_CITY_ADS_STEPS.length
      );
      assert.equal(OFFER_CITY_ADS_SITUATIONS.length, 7);
      assert.equal(OFFER_CITY_ADS_FAQS.length >= 3, true);
      assert.equal(html.includes('data-offer-faq'), true);
      for (const claim of OFFER_CITY_ADS_TRUST) {
        assert.equal(html.includes(claim), true, claim);
      }
      assert.equal(lower.includes('no fees'), true);
      assert.equal(lower.includes('no repairs'), true);
      assert.equal(lower.includes('no cleaning'), true);

      assert.equal(html.includes(`data-form-origin="${OFFER_CITY_ADS_FORM_ORIGIN}"`), true);
      assert.equal(html.includes('name="name"'), true);
      assert.equal(html.includes('name="phone"'), true);
      assert.equal(html.includes('name="propertyAddress"'), true);
      assert.equal(html.includes('name="listed_with_agent"'), true);
      assert.equal(html.includes('value="yes"'), true);
      assert.equal(html.includes('value="no"'), true);
      assert.equal(email.includes('id="hero-email"'), true);
      assert.equal(email.includes('type="email"'), true);
      assert.equal(email.includes('required'), true);
      assert.equal(consent.includes('id="hero-sms-consent"'), true);
      assert.equal(consent.includes('name="sms_consent"'), true);
      assert.equal(consent.includes('type="checkbox"'), true);
      assert.equal(consent.includes('checked'), false);

      assert.equal(bar.includes('Get My Offer'), true);
      assert.equal(bar.includes(ADS_TEL), true);
      assert.equal(bar.includes(`Call ${GOOGLE_ADS_PHONE.display}`), true);
      assert.equal(
        html.includes('pb-[calc(65px+env(safe-area-inset-bottom,0px))]'),
        true,
        'page padding keeps the sticky bar off the end of the form'
      );
      assert.equal(html.includes('scroll-mb-[calc(65px+env(safe-area-inset-bottom,0px))]'), true);

      const hrefs = telHrefs(html);
      assert.ok(hrefs.length >= 3, entry.content.path);
      for (const href of hrefs) {
        assert.equal(href, ADS_TEL, `${entry.content.path} ${href}`);
      }
      assert.equal(html.includes(GOOGLE_ADS_PHONE.display), true);
      for (const phrase of BLOCKED_PHRASES) {
        assert.equal(
          lower.includes(phrase.toLowerCase()),
          false,
          `${entry.content.path} ${phrase}`
        );
      }
    }
  });
});
