import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { ATTRIBUTION_MAX_AGE_MS } from './attribution';
import { buildGhlPayload } from './ghl';
import {
  OFFER_YOUTUBE_VISIT_KEY,
  isYouTubeOfferTouch,
  offerFormUsesYouTubeAds,
  offerYouTubeVisitFromSearch,
  readStoredOfferYouTubeVisit,
  rememberOfferYouTubeVisit,
  resolveOfferYouTubeVisit,
  type OfferYouTubeVisitStorage,
} from './offer-youtube';

const NOW = Date.parse('2026-10-15T16:00:00.000Z');

function memoryStorage(): OfferYouTubeVisitStorage & { data: Record<string, string> } {
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

describe('YouTube offer visit', () => {
  it('matches src=youtube and utm_source=youtube only', () => {
    assert.equal(offerYouTubeVisitFromSearch('?src=youtube'), true);
    assert.equal(offerYouTubeVisitFromSearch('src=YouTube'), true);
    assert.equal(offerYouTubeVisitFromSearch('?utm_source=youtube'), true);
    assert.equal(offerYouTubeVisitFromSearch('?utm_source=YouTube&utm_medium=cpc'), true);
    assert.equal(offerYouTubeVisitFromSearch('?src=youtube&gclid=abc'), true);
    assert.equal(offerYouTubeVisitFromSearch(''), false);
    assert.equal(offerYouTubeVisitFromSearch('?gclid=abc'), false);
    assert.equal(offerYouTubeVisitFromSearch('?src=fb'), false);
    assert.equal(offerYouTubeVisitFromSearch('?src=fb_static'), false);
    assert.equal(offerYouTubeVisitFromSearch('?src=google'), false);
    assert.equal(offerYouTubeVisitFromSearch('?utm_source=google&utm_medium=cpc'), false);
    assert.equal(offerYouTubeVisitFromSearch('?utm_source=facebook'), false);
  });

  it('reads YouTube from a stored first-touch landing URL or utm_source', () => {
    assert.equal(
      isYouTubeOfferTouch({
        landing_page: 'https://kindkeyhomebuyers.com/offer?src=youtube&gclid=abc',
      }),
      true
    );
    assert.equal(
      isYouTubeOfferTouch({
        utm_source: 'youtube',
        landing_page: 'https://kindkeyhomebuyers.com/offer/tacoma-puyallup',
      }),
      true
    );
    assert.equal(
      isYouTubeOfferTouch({
        utm_source: 'google',
        landing_page: 'https://kindkeyhomebuyers.com/offer?gclid=abc',
      }),
      false
    );
    assert.equal(isYouTubeOfferTouch(null), false);
  });

  it('keeps the first YouTube landing in session or local storage', () => {
    const session = memoryStorage();
    const local = memoryStorage();
    const now = new Date(NOW);

    assert.equal(resolveOfferYouTubeVisit('', [session, local], null, NOW), false);
    rememberOfferYouTubeVisit('?src=youtube', session, now);
    rememberOfferYouTubeVisit('', session, now);
    rememberOfferYouTubeVisit('?src=youtube', local, now);
    rememberOfferYouTubeVisit('?src=youtube&utm_source=google', local, new Date(NOW + 1000));

    assert.equal(readStoredOfferYouTubeVisit(session, NOW)?.src, 'youtube');
    assert.equal(readStoredOfferYouTubeVisit(local, NOW)?.captured_at, now.toISOString());
    assert.ok(session.data[OFFER_YOUTUBE_VISIT_KEY]);
    assert.equal(resolveOfferYouTubeVisit('', [session, local], null, NOW), true);
    assert.equal(resolveOfferYouTubeVisit('?src=fb', [session, local], null, NOW), false);
    assert.equal(
      resolveOfferYouTubeVisit('?gclid=search-click', [session, local], null, NOW),
      false
    );

    const expired = memoryStorage();
    expired.setItem(
      OFFER_YOUTUBE_VISIT_KEY,
      JSON.stringify({
        src: 'youtube',
        captured_at: new Date(NOW - ATTRIBUTION_MAX_AGE_MS - 1000).toISOString(),
      })
    );
    assert.equal(readStoredOfferYouTubeVisit(expired, NOW), null);
    assert.equal(resolveOfferYouTubeVisit('', [expired], null, NOW), false);
  });

  it('labels only Google offer forms, and leaves a Facebook src alone', () => {
    assert.equal(offerFormUsesYouTubeAds({ formOrigin: 'google_ads_landing', search: '' }), false);
    assert.equal(
      offerFormUsesYouTubeAds({ formOrigin: 'google_ads_landing', search: '?gclid=abc' }),
      false
    );
    assert.equal(
      offerFormUsesYouTubeAds({ formOrigin: 'google_ads_landing', search: '?src=youtube' }),
      true
    );
    assert.equal(
      offerFormUsesYouTubeAds({
        formOrigin: 'google_ads_foreclosure',
        search: '?utm_source=YouTube',
      }),
      true
    );
    assert.equal(
      offerFormUsesYouTubeAds({ formOrigin: 'facebook_ads_eddie', search: '?src=fb' }),
      false
    );
    assert.equal(
      offerFormUsesYouTubeAds({ formOrigin: 'facebook_ads_eddie', search: '?src=youtube' }),
      false
    );
    assert.equal(
      offerFormUsesYouTubeAds({ formOrigin: 'facebook_ads_landing', search: '?src=fb' }),
      false
    );
    assert.equal(offerFormUsesYouTubeAds({ formOrigin: 'website', search: '?src=youtube' }), false);

    const stored = memoryStorage();
    rememberOfferYouTubeVisit('?src=youtube', stored, new Date(NOW));
    assert.equal(
      offerFormUsesYouTubeAds({
        formOrigin: 'google_ads_landing',
        search: '',
        storages: [stored],
        now: NOW,
      }),
      true
    );
    assert.equal(
      offerFormUsesYouTubeAds({
        formOrigin: 'google_ads_landing',
        search: '?gclid=search-click',
        storages: [stored],
        now: NOW,
      }),
      false
    );
    assert.equal(
      offerFormUsesYouTubeAds({
        formOrigin: 'facebook_ads_eddie',
        search: '?src=fb',
        storages: [stored],
        now: NOW,
      }),
      false
    );
  });
});

describe('YouTube Ads GoHighLevel payload', () => {
  const lead = {
    name: 'Ada Lovelace',
    phone: '+1(253) 555-0100',
    email: 'ada@example.com',
    propertyAddress: '123 Main St',
    smsNonMarketingConsent: false,
    smsMarketingConsent: false,
    listedWithAgent: 'no' as const,
  };

  it('keeps Google Ads when the offer lead has no YouTube param', () => {
    const payload = buildGhlPayload({
      ...lead,
      pagePath: '/offer',
      formOrigin: 'google_ads_landing',
      attribution: {
        utm_source: 'google',
        utm_medium: 'cpc',
        utm_campaign: 'search',
        utm_term: 'sell house fast',
        utm_content: 'ad-a',
        gclid: 'search-click',
        gbraid: 'gb-search',
        wbraid: 'wb-search',
        fbclid: '',
        keyword: 'sell house fast',
        adgroup: '11',
        referrer: 'https://www.google.com/',
        landing_page: 'https://kindkeyhomebuyers.com/offer?gclid=search-click',
        captured_at: new Date(NOW).toISOString(),
      },
    });

    assert.equal(payload.source, 'Google Ads');
    assert.equal(payload.lead_source, 'Google Ads');
    assert.equal(payload.source_tag, 'google ads');
    assert.equal(payload.page_tag, 'general');
    assert.equal(payload.tags, 'website lead, google ads, general');
    assert.equal(payload.form_origin, 'google_ads_landing');
    assert.equal(payload.gclid, 'search-click');
    assert.equal(payload.src, undefined);
    assert.equal(payload.pipeline, undefined);
    assert.equal(payload.stage, undefined);
  });

  it('labels src=youtube as YouTube Ads and keeps the page tag and click ids', () => {
    for (const pagePath of ['/offer', '/offer/tacoma-puyallup', '/offer/foreclosure']) {
      const formOrigin = pagePath.endsWith('foreclosure')
        ? 'google_ads_foreclosure'
        : 'google_ads_landing';
      const pageTag = pagePath.endsWith('foreclosure') ? 'foreclosure' : 'general';
      const payload = buildGhlPayload({
        ...lead,
        pagePath,
        formOrigin,
        youtubeAds: true,
        attribution: {
          utm_source: 'google',
          utm_medium: 'cpc',
          utm_campaign: 'youtube-sellers',
          utm_term: 'sell house fast',
          utm_content: 'yt-a',
          gclid: 'yt-click',
          gbraid: 'gb-yt',
          wbraid: 'wb-yt',
          fbclid: '',
          keyword: 'sell house fast',
          adgroup: '88',
          referrer: 'https://www.youtube.com/',
          landing_page: `https://kindkeyhomebuyers.com${pagePath}?src=youtube&gclid=yt-click`,
          captured_at: new Date(NOW).toISOString(),
        },
      });

      assert.equal(payload.source, 'YouTube Ads', pagePath);
      assert.equal(payload.lead_source, 'YouTube Ads', pagePath);
      assert.equal(payload.source_tag, 'youtube ads', pagePath);
      assert.equal(payload.page_tag, pageTag, pagePath);
      assert.equal(payload.tags, `website lead, youtube ads, ${pageTag}`, pagePath);
      assert.equal(payload.form_origin, formOrigin, pagePath);
      assert.equal(String(payload.form_name).includes('Google Ads'), true, pagePath);
      assert.equal(payload.click_source, 'Google Ads', pagePath);
      assert.equal(payload.gclid, 'yt-click', pagePath);
      assert.equal(payload.gbraid, 'gb-yt', pagePath);
      assert.equal(payload.wbraid, 'wb-yt', pagePath);
      assert.equal(payload.utm_source, 'google', pagePath);
      assert.equal(payload.utm_medium, 'cpc', pagePath);
      assert.equal(payload.utm_campaign, 'youtube-sellers', pagePath);
      assert.equal(payload.src, undefined, pagePath);
      assert.equal(payload.pipeline, undefined, pagePath);
      assert.equal(payload.stage, undefined, pagePath);
      assert.match(String(payload.attribution_notes), /Lead source: YouTube Ads/);
      assert.match(String(payload.attribution_notes), /Tag: youtube ads/);
      assert.match(String(payload.attribution_notes), new RegExp(`Page tag: ${pageTag}`));
      const fields = payload.customFields as Array<{ key: string; field_value: string }>;
      const fieldValue = (key: string) => fields.find((field) => field.key === key)?.field_value;
      assert.equal(fieldValue('google_click_id'), 'yt-click', pagePath);
      assert.equal(fieldValue('gbraid'), 'gb-yt', pagePath);
      assert.equal(fieldValue('wbraid'), 'wb-yt', pagePath);
      assert.equal(fieldValue('form_origin'), formOrigin, pagePath);
      assert.equal(fieldValue('src'), undefined, pagePath);
    }
  });

  it('labels a stored utm_source=youtube landing without replacing Google click fields', () => {
    const payload = buildGhlPayload({
      ...lead,
      pagePath: '/offer/kent-auburn',
      formOrigin: 'google_ads_landing',
      attribution: {
        utm_source: 'youtube',
        utm_medium: 'cpc',
        utm_campaign: 'yt',
        utm_term: '',
        utm_content: '',
        gclid: 'stored-click',
        gbraid: '',
        wbraid: '',
        fbclid: '',
        keyword: '',
        adgroup: '',
        referrer: '',
        landing_page: 'https://kindkeyhomebuyers.com/offer?utm_source=youtube&gclid=stored-click',
        captured_at: new Date(NOW).toISOString(),
      },
    });

    assert.equal(payload.source, 'YouTube Ads');
    assert.equal(payload.source_tag, 'youtube ads');
    assert.equal(payload.page_tag, 'general');
    assert.equal(payload.tags, 'website lead, youtube ads, general');
    assert.equal(payload.gclid, 'stored-click');
    assert.equal(payload.utm_source, 'youtube');
    assert.equal(payload.form_origin, 'google_ads_landing');
  });

  it('leaves Facebook src labeling unchanged', () => {
    for (const src of ['fb', 'fb_static', ''] as const) {
      const payload = buildGhlPayload({
        ...lead,
        pagePath: '/offer',
        formOrigin: 'facebook_ads_eddie',
        src,
        youtubeAds: true,
        attribution: {
          utm_source: 'youtube',
          utm_medium: '',
          utm_campaign: '',
          utm_term: '',
          utm_content: '',
          gclid: '',
          gbraid: '',
          wbraid: '',
          fbclid: 'fb-1',
          keyword: '',
          adgroup: '',
          referrer: 'https://m.facebook.com/',
          landing_page: 'https://kindkeyhomebuyers.com/offer?src=fb',
          captured_at: new Date(NOW).toISOString(),
        },
      });

      assert.equal(payload.source, 'Facebook Leads (Eddie)', src || 'empty');
      assert.equal(payload.lead_source, 'Facebook Leads (Eddie)', src || 'empty');
      assert.equal(payload.source_tag, 'Facebook Leads (Eddie)', src || 'empty');
      assert.equal(payload.tags, 'website lead, Facebook Leads (Eddie)', src || 'empty');
      assert.equal(payload.form_origin, 'facebook_ads_eddie', src || 'empty');
      assert.equal(payload.page_tag, '', src || 'empty');
      assert.equal(payload.src, src, src || 'empty');
      assert.equal(payload.fbclid, 'fb-1', src || 'empty');
    }
  });
});
