import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { type ReactElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import sitemap from '../app/sitemap';
import OfferCityRoute, {
  generateMetadata,
  generateStaticParams,
} from '../app/(public)/offer/city/[slug]/page';
import OfferPerCityLanding from './OfferPerCityLanding';
import {
  getOfferCityPage,
  offerCityHeadline,
  offerCityPages,
  offerCityPagePath,
  offerCityTitle,
} from '../data/offerCityPages';
import { GOOGLE_ADS_PHONE } from '../lib/phones';

const BANNED = [
  'closing cost',
  'showings',
  'no obligation',
  'commit you',
  'guaranteed',
  'guarantee',
  'wholesaler',
  '100+ homes',
  'bought 100',
];

describe('per-city offer pages', () => {
  it('generates one static page per listed city', () => {
    const slugs = generateStaticParams().map((item) => item.slug);
    assert.equal(slugs.length, offerCityPages.length);
    assert.equal(new Set(slugs).size, slugs.length);
    for (const slug of [
      'tacoma-wa',
      'bremerton-wa',
      'edgewood-wa',
      'seattle-wa',
      'key-peninsula-wa',
    ]) {
      assert.equal(slugs.includes(slug), true, slug);
    }
  });

  it('puts each city in the sitemap and keeps the noindex offer routes out', () => {
    const urls = sitemap().map((item) => item.url);
    for (const city of offerCityPages) {
      assert.equal(
        urls.includes(`https://kindkeyhomebuyers.com${offerCityPagePath(city)}`),
        true,
        city.slug
      );
    }
    for (const path of ['/offer', '/offer/inherited', '/offer/cash-offer-fell-through']) {
      assert.equal(urls.includes(`https://kindkeyhomebuyers.com${path}`), false, path);
    }
  });

  it('uses the approved headline, trust bar, form, and phone', () => {
    for (const city of offerCityPages) {
      const html = renderToStaticMarkup((<OfferPerCityLanding city={city} />) as ReactElement);
      const lower = html.toLowerCase();
      assert.equal(html.match(/<h1\b/g)?.length, 1, city.slug);
      assert.match(
        html,
        new RegExp(
          `data-offer-headline[^>]*>${offerCityHeadline(city).replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`
        )
      );
      assert.match(html, /Sell your .+ house as-is for cash\. 500\+ homes bought\./);
      assert.match(html, /Close in as little as 7 days/);
      assert.match(html, /500\+ homes bought/);
      assert.match(html, /BBB A- rated/);
      assert.match(html, /We close on the date you pick/);
      assert.match(html, /data-offer-trust-bar/);
      assert.match(html, /4\.6★ on Google \(18 reviews\)/);
      assert.equal(html.includes('aggregateRating'), false, city.slug);
      assert.equal(lower.includes('testimonial'), false, city.slug);
      assert.equal(lower.includes('star rating'), false, city.slug);
      assert.match(html, /data-form-origin="google_ads_landing"/);
      assert.match(html, /name="name"/);
      assert.match(html, /name="phone"/);
      assert.match(html, /name="email"/);
      assert.match(html, /name="propertyAddress"/);
      assert.match(html, /name="listed_with_agent"/);
      assert.equal(html.includes(`tel:${GOOGLE_ADS_PHONE.tel}`), true, city.slug);
      assert.match(html, /\(253\) 352-4379/);
      assert.equal(html.includes('(253) 518-3638'), false, city.slug);
      assert.equal(html.includes('253-518-3638'), false, city.slug);
      for (const phrase of BANNED) {
        assert.equal(lower.includes(phrase), false, `${city.slug} ${phrase}`);
      }
    }
  });

  it('sets the absolute title for Tacoma, Bremerton, and Edgewood', async () => {
    for (const slug of ['tacoma-wa', 'bremerton-wa', 'edgewood-wa'] as const) {
      const city = getOfferCityPage(slug);
      assert.ok(city);
      const metadata = await generateMetadata({ params: Promise.resolve({ slug }) });
      const title = metadata.title;
      const absolute =
        title && typeof title === 'object' && 'absolute' in title ? title.absolute : '';
      assert.equal(absolute, offerCityTitle(city!));
      const page = await OfferCityRoute({ params: Promise.resolve({ slug }) });
      const html = renderToStaticMarkup(page as ReactElement);
      assert.match(
        html,
        new RegExp(offerCityHeadline(city!).replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
      );
    }
  });
});
