import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { cities, getCityBySlug } from '@/data/cities';
import { expansionCityIntent } from '@/data/expansionCityIntent';
import { getCitySituation } from '@/data/citySituations';
import { getRelatedBlogPosts } from '@/lib/cityBlog';

const NEW_SLUGS = [
  'seattle',
  'bellevue',
  'shoreline',
  'maple-valley',
  'covington',
  'enumclaw',
  'gig-harbor',
  'university-place',
  'south-hill',
  'everett',
  'lynnwood',
  'olympia',
] as const;

const DISTRESSED = ['inherited', 'code', 'tenants', 'hoarder', 'vacant'] as const;

describe('expansion city hubs', () => {
  it('adds each new city once, with local facts and nearby links', () => {
    for (const slug of NEW_SLUGS) {
      const matches = cities.filter((city) => city.slug === slug);
      assert.equal(matches.length, 1, slug);
      const city = matches[0];
      assert.ok(city.neighborhoods.length >= 4, slug);
      assert.ok(city.nearby && city.nearby.length >= 2, slug);
      assert.match(city.marketContext, /KindKey does not interpret/);
      assert.match(city.intro + city.marketContext, /not a real estate agent/);
      assert.doesNotMatch(
        city.intro + city.description + city.marketContext,
        /we pay closing costs/i
      );
      assert.doesNotMatch(city.description, /#1|five-star|5-star/i);
    }

    assert.equal(getCityBySlug('gig-harbor')?.countyGroup, 'pierce');
    assert.equal(getCityBySlug('everett')?.countyGroup, 'snohomish');
    assert.equal(getCityBySlug('lynnwood')?.countyGroup, 'snohomish');
    assert.equal(getCityBySlug('olympia')?.countyGroup, 'thurston');
    assert.equal(getCityBySlug('south-hill')?.countyGroup, 'pierce');
    assert.match(getCityBySlug('olympia')?.intro ?? '', /Lacey/);
    assert.match(getCityBySlug('south-hill')?.intro ?? '', /not an incorporated city/);
    assert.match(getCityBySlug('shoreline')?.marketContext ?? '', /King County/);
    assert.match(getCityBySlug('enumclaw')?.marketContext ?? '', /King County/);
  });

  it('gives every new city the five distressed situations and three local intent pages', () => {
    for (const slug of NEW_SLUGS) {
      for (const kind of DISTRESSED) {
        const page = getCitySituation(slug, kind);
        assert.ok(page, `${slug} ${kind}`);
        assert.equal(page?.citySlug, slug);
        assert.match(page?.ctaSubtitle ?? '', /\(206\) 519-5463/);
      }

      const intent = expansionCityIntent[slug];
      assert.ok(intent, slug);
      for (const block of [intent.sellFast, intent.cashOffer, intent.asIs]) {
        assert.ok(block.paragraphs.length >= 3, slug);
        assert.ok(block.faqs.length >= 4, slug);
        assert.ok(block.links.length >= 2, slug);
        const text = JSON.stringify(block);
        assert.match(text, /\(206\) 519-5463/);
        assert.doesNotMatch(text, /we pay closing costs/i);
        assert.doesNotMatch(text, /#1|five-star|5-star/i);
        assert.doesNotMatch(text, /KindKey is (a|an|your) real estate agent/i);
      }
    }
  });

  it('links hubs to blog posts that actually name the city', () => {
    const seattle = getRelatedBlogPosts(getCityBySlug('seattle')!);
    assert.ok(seattle.some((post) => /seattle/i.test(post.title)));

    const southHill = getRelatedBlogPosts(getCityBySlug('south-hill')!);
    assert.ok(southHill.some((post) => /south hill/i.test(post.description)));

    const olympia = getRelatedBlogPosts({ name: 'Olympia', blogTerms: ['Olympia', 'Lacey'] });
    assert.ok(Array.isArray(olympia));
  });
});
