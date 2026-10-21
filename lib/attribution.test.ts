import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import {
  ATTRIBUTION_MAX_AGE_MS,
  type AttributionTouch,
  decodeStoredAttribution,
  deriveLeadSource,
  isGoogleAdsTouch,
  emptyTouch,
  encodeAttribution,
  mergeAttribution,
  readAttributionFromCookieHeader,
  resolveSubmissionAttribution,
  touchFromLanding,
} from './attribution';
import { resolveFormOrigin } from './form-origin';
import { buildGhlPayload } from './ghl';

const NOW = Date.parse('2026-10-15T16:00:00.000Z');
const CAPTURED = new Date(NOW).toISOString();

function touch(overrides: Partial<AttributionTouch> = {}): AttributionTouch {
  return { ...emptyTouch(CAPTURED), ...overrides, captured_at: overrides.captured_at ?? CAPTURED };
}

function landing(search: string, referrer = ''): AttributionTouch {
  return touchFromLanding({
    search,
    referrer,
    landingPage: `https://kindkeyhomebuyers.com/${search}`,
    capturedAt: CAPTURED,
  });
}

describe('deriveLeadSource', () => {
  it('classifies Google click ids and paid Google UTMs as Google Ads', () => {
    assert.equal(deriveLeadSource(touch({ gclid: 'abc' })), 'Google Ads');
    assert.equal(deriveLeadSource(touch({ gbraid: 'gb' })), 'Google Ads');
    assert.equal(deriveLeadSource(touch({ wbraid: 'wb' })), 'Google Ads');
    assert.equal(
      deriveLeadSource(touch({ utm_source: 'google', utm_medium: 'cpc' })),
      'Google Ads'
    );
    assert.equal(
      deriveLeadSource(touch({ utm_source: 'Google', utm_medium: 'Paid' })),
      'Google Ads'
    );
    assert.equal(
      deriveLeadSource(touch({ utm_source: 'google-ads', utm_medium: 'ppc' })),
      'Google Ads'
    );
  });

  it('classifies fbclid and paid Meta UTMs as Facebook Ads', () => {
    assert.equal(deriveLeadSource(touch({ fbclid: 'fb' })), 'Facebook Ads');
    assert.equal(
      deriveLeadSource(touch({ utm_source: 'facebook', utm_medium: 'paid' })),
      'Facebook Ads'
    );
    assert.equal(deriveLeadSource(touch({ utm_source: 'FB', utm_medium: 'CPC' })), 'Facebook Ads');
    assert.equal(
      deriveLeadSource(touch({ utm_source: 'instagram', utm_medium: 'paidsocial' })),
      'Facebook Ads'
    );
    assert.equal(
      deriveLeadSource(touch({ utm_source: 'meta', utm_medium: 'paid_social' })),
      'Facebook Ads'
    );
    assert.equal(deriveLeadSource(touch({ utm_source: 'ig', utm_medium: 'paid' })), 'Facebook Ads');
  });

  it('prefers Google Ads when a Google click id and fbclid are both present', () => {
    assert.equal(deriveLeadSource(touch({ gclid: 'g', fbclid: 'f' })), 'Google Ads');
  });

  it('classifies organic search, social, referral, and direct visits', () => {
    assert.equal(
      deriveLeadSource(touch({ utm_source: 'google', utm_medium: 'organic' })),
      'Google Organic'
    );
    assert.equal(deriveLeadSource(touch({ utm_source: 'google' })), 'Google Organic');
    assert.equal(
      deriveLeadSource(
        touch({
          referrer: 'https://www.google.com/search?q=sell+house',
          landing_page: 'https://kindkeyhomebuyers.com/',
        })
      ),
      'Google Organic'
    );
    assert.equal(
      deriveLeadSource(touch({ utm_source: 'facebook', utm_medium: 'social' })),
      'Facebook Organic'
    );
    assert.equal(
      deriveLeadSource(
        touch({
          referrer: 'https://l.facebook.com/l.php',
          landing_page: 'https://kindkeyhomebuyers.com/cash-offer',
        })
      ),
      'Facebook Organic'
    );
    assert.equal(
      deriveLeadSource(
        touch({
          referrer: 'https://www.instagram.com/kindkey',
          landing_page: 'https://kindkeyhomebuyers.com/',
        })
      ),
      'Facebook Organic'
    );
    assert.equal(
      deriveLeadSource(
        touch({
          referrer: 'https://mail.google.com/mail',
          landing_page: 'https://kindkeyhomebuyers.com/',
        })
      ),
      'Referral'
    );
    assert.equal(
      deriveLeadSource(
        touch({
          referrer: 'https://www.redfin.com/WA',
          landing_page: 'https://kindkeyhomebuyers.com/',
        })
      ),
      'Referral'
    );
    assert.equal(
      deriveLeadSource(touch({ utm_source: 'newsletter', utm_medium: 'email' })),
      'Referral'
    );
    assert.equal(
      deriveLeadSource(
        touch({
          referrer: 'https://www.kindkeyhomebuyers.com/about',
          landing_page: 'https://kindkeyhomebuyers.com/cash-offer',
        })
      ),
      'Direct/Website'
    );
    assert.equal(deriveLeadSource(touch()), 'Direct/Website');
  });
});

describe('mergeAttribution', () => {
  it('stores the first visit when nothing is saved', () => {
    const incoming = landing('?utm_source=google&utm_medium=organic');
    assert.equal(mergeAttribution(null, incoming, NOW), incoming);
  });

  it('does not replace a paid click with a later organic or direct visit', () => {
    const paid = landing('?gclid=click-1&utm_source=google&utm_medium=cpc&utm_campaign=brand');
    const direct = landing('');
    const organic = landing('', 'https://www.google.com/search?q=cash+offer');
    assert.equal(mergeAttribution(paid, direct, NOW).gclid, 'click-1');
    assert.equal(mergeAttribution(paid, organic, NOW).utm_campaign, 'brand');
    assert.equal(deriveLeadSource(mergeAttribution(paid, direct, NOW)), 'Google Ads');
  });

  it('lets a new gclid replace an earlier paid click and keeps the same gclid landing page', () => {
    const facebook = landing('?fbclid=fb-1&utm_source=facebook&utm_medium=paid');
    const google = landing('?gclid=g-2&utm_source=google&utm_medium=cpc&utm_campaign=new');
    assert.equal(mergeAttribution(facebook, google, NOW).gclid, 'g-2');
    assert.equal(mergeAttribution(facebook, google, NOW).utm_campaign, 'new');
    assert.equal(mergeAttribution(facebook, google, NOW).fbclid, '');

    const first = touchFromLanding({
      search:
        '?gclid=click-1&utm_source=google&utm_medium=cpc&utm_campaign=brand&keyword=sell+house&adgroupid=77',
      referrer: 'https://www.google.com/',
      landingPage: 'https://kindkeyhomebuyers.com/offer/as-is?gclid=click-1',
      capturedAt: CAPTURED,
    });
    assert.equal(first.keyword, 'sell house');
    assert.equal(first.adgroup, '77');
    const sameClick = touchFromLanding({
      search: '?gclid=click-1',
      referrer: 'https://kindkeyhomebuyers.com/offer/as-is',
      landingPage: 'https://kindkeyhomebuyers.com/offer?gclid=click-1',
      capturedAt: new Date(NOW + 5000).toISOString(),
    });
    const kept = mergeAttribution(first, sameClick, NOW + 5000);
    assert.equal(kept.gclid, 'click-1');
    assert.equal(kept.landing_page, 'https://kindkeyhomebuyers.com/offer/as-is?gclid=click-1');
    assert.equal(kept.utm_campaign, 'brand');
    assert.equal(kept.keyword, 'sell house');

    const nextClick = touchFromLanding({
      search: '?gclid=click-2&utm_campaign=later&keyword=inherited',
      referrer: 'https://www.google.com/',
      landingPage: 'https://kindkeyhomebuyers.com/offer/inherited?gclid=click-2',
      capturedAt: new Date(NOW + 9000).toISOString(),
    });
    const replaced = mergeAttribution(kept, nextClick, NOW + 9000);
    assert.equal(replaced.gclid, 'click-2');
    assert.equal(replaced.utm_campaign, 'later');
    assert.equal(replaced.keyword, 'inherited');
    assert.equal(
      replaced.landing_page,
      'https://kindkeyhomebuyers.com/offer/inherited?gclid=click-2'
    );

    const navigated = touchFromLanding({
      search: '',
      referrer: 'https://kindkeyhomebuyers.com/offer/inherited',
      landingPage: 'https://kindkeyhomebuyers.com/offer',
      capturedAt: new Date(NOW + 12000).toISOString(),
    });
    const survived = mergeAttribution(replaced, navigated, NOW + 12000);
    assert.equal(survived.gclid, 'click-2');
    assert.equal(survived.landing_page, replaced.landing_page);
  });

  it('lets a later paid click replace an earlier unpaid visit', () => {
    const direct = landing('');
    const paid = landing('?gclid=later&utm_source=google&utm_medium=cpc');
    const merged = mergeAttribution(direct, paid, NOW);
    assert.equal(merged.gclid, 'later');
    assert.equal(deriveLeadSource(merged), 'Google Ads');
  });

  it('keeps the original unpaid touch against a later unpaid visit', () => {
    const first = landing('', 'https://www.google.com/search?q=sell');
    const second = landing('', 'https://www.redfin.com/');
    assert.equal(mergeAttribution(first, second, NOW).referrer, first.referrer);
    assert.equal(deriveLeadSource(mergeAttribution(first, second, NOW)), 'Google Organic');
  });

  it('replaces an expired touch', () => {
    const stale = touch({
      gclid: 'old',
      captured_at: new Date(NOW - ATTRIBUTION_MAX_AGE_MS - 1000).toISOString(),
    });
    const incoming = landing('');
    assert.equal(mergeAttribution(stale, incoming, NOW).gclid, '');
  });
});

describe('submission resolution', () => {
  it('round-trips attribution through the cookie and prefers a stored paid click', () => {
    const paid = touch({
      gclid: 'stored-click',
      utm_source: 'google',
      utm_medium: 'cpc',
      utm_campaign: 'sellers',
      referrer: 'https://www.google.com/',
      landing_page: 'https://kindkeyhomebuyers.com/?gclid=stored-click',
    });
    const encoded = encodeAttribution(paid);
    assert.ok(encoded.length < 4000);
    const header = `session=abc; kk_attribution=${encoded}; other=1`;
    const stored = readAttributionFromCookieHeader(header, NOW);
    const submitted = touch({ landing_page: 'https://kindkeyhomebuyers.com/contact' });
    const resolved = resolveSubmissionAttribution(submitted, stored, NOW);
    assert.equal(resolved.gclid, 'stored-click');
    assert.equal(resolved.utm_campaign, 'sellers');
    assert.equal(decodeStoredAttribution(JSON.stringify(paid), NOW)?.gclid, 'stored-click');
  });

  it('uses the submitted paid click when the cookie is an older unpaid visit', () => {
    const stored = touch({
      referrer: 'https://www.google.com/',
      landing_page: 'https://kindkeyhomebuyers.com/',
    });
    const submitted = touch({ fbclid: 'new', utm_source: 'facebook', utm_medium: 'paid' });
    const resolved = resolveSubmissionAttribution(submitted, stored, NOW);
    assert.equal(deriveLeadSource(resolved), 'Facebook Ads');
  });
});

describe('isGoogleAdsTouch', () => {
  it('is true for a Google click id or a paid Google visit', () => {
    assert.equal(isGoogleAdsTouch(touch({ gclid: 'abc' })), true);
    assert.equal(isGoogleAdsTouch(touch({ gbraid: 'gb' })), true);
    assert.equal(isGoogleAdsTouch(touch({ wbraid: 'wb' })), true);
    assert.equal(isGoogleAdsTouch(touch({ utm_source: 'google', utm_medium: 'cpc' })), true);
    assert.equal(isGoogleAdsTouch(touch({ utm_source: 'google', utm_medium: 'organic' })), false);
    assert.equal(isGoogleAdsTouch(touch({ utm_source: 'facebook', utm_medium: 'cpc' })), false);
    assert.equal(isGoogleAdsTouch(touch()), false);
    assert.equal(isGoogleAdsTouch(null), false);
  });
});

describe('resolveFormOrigin', () => {
  it('accepts only the form allowlist', () => {
    assert.equal(resolveFormOrigin('website'), 'website');
    assert.equal(resolveFormOrigin('google_ads_landing'), 'google_ads_landing');
    assert.equal(resolveFormOrigin('facebook_ads_landing'), 'facebook_ads_landing');
    assert.equal(resolveFormOrigin('google_ads_foreclosure'), 'google_ads_foreclosure');
    assert.equal(resolveFormOrigin('google_ads_inherited'), 'google_ads_inherited');
    assert.equal(resolveFormOrigin('google_ads_as_is'), 'google_ads_as_is');
    assert.equal(resolveFormOrigin('google_ads_fire_damage'), 'google_ads_fire_damage');
    assert.equal(resolveFormOrigin('facebook_ads_eddie'), 'facebook_ads_eddie');
    assert.equal(resolveFormOrigin('Google Ads'), 'website');
    assert.equal(resolveFormOrigin('facebook'), 'website');
    assert.equal(resolveFormOrigin('google ads'), 'website');
    assert.equal(resolveFormOrigin(undefined), 'website');
    assert.equal(resolveFormOrigin(['google_ads_landing']), 'website');
  });
});

describe('buildGhlPayload', () => {
  const lead = {
    name: 'Ada Lovelace',
    phone: '+1(253) 555-0100',
    email: 'ada@example.com',
    propertyAddress: '123 Main St',
    city: 'Auburn',
    condition: 'as-is',
    timeframe: 'asap',
    preferredContact: 'call',
    smsNonMarketingConsent: true,
    smsMarketingConsent: false,
    pagePath: '/cash-offer',
    ip: '203.0.113.5',
  };

  it('sets the contact source, keeps the website lead tag, and includes click fields', () => {
    const payload = buildGhlPayload({
      ...lead,
      attribution: touch({
        gclid: 'gclid-1',
        utm_source: 'google',
        utm_medium: 'cpc',
        utm_campaign: 'brand',
        utm_term: 'sell house fast',
        utm_content: 'ad-a',
        gbraid: '',
        wbraid: '',
        fbclid: '',
        referrer: 'https://www.google.com/',
        landing_page: 'https://kindkeyhomebuyers.com/?gclid=gclid-1',
      }),
    });

    assert.equal(payload.source, 'Website');
    assert.equal(payload.lead_source, 'Website');
    assert.equal(payload.click_source, 'Google Ads');
    assert.equal(payload.form_name, 'Website Form');
    assert.equal(payload.form_origin, 'website');
    assert.equal(payload.source_tag, 'website');
    assert.equal(payload.tags, 'website lead, website');
    assert.equal(payload.listed_with_agent, '');
    assert.equal(payload.channel, 'Website');
    assert.equal(payload.gclid, 'gclid-1');
    assert.equal(payload.landing_page, 'https://kindkeyhomebuyers.com/?gclid=gclid-1');
    assert.equal(payload.landing_page_url, 'https://kindkeyhomebuyers.com/?gclid=gclid-1');
    assert.equal(payload.keyword, '');
    assert.equal(payload.adgroup, '');
    assert.equal(payload.utm_campaign, 'brand');
    assert.equal(payload.utm_term, 'sell house fast');
    assert.match(String(payload.attribution_notes), /Lead source: Website/);
    assert.match(String(payload.attribution_notes), /Click source: Google Ads/);
    assert.match(String(payload.attribution_notes), /gclid: gclid-1/);
    assert.equal(payload.phone, '+12535550100');
    assert.equal(payload.first_name, 'Ada');
    assert.equal(payload.last_name, 'Lovelace');
    assert.equal(payload.address1, '123 Main St');
    assert.equal(payload.city, 'Auburn');
    assert.equal(payload.state, 'WA');
    assert.equal(payload.page_path, '/cash-offer');
    assert.equal(payload.pipeline, undefined);
    assert.equal(payload.pipelineId, undefined);
    assert.equal(payload.stage, undefined);
    assert.equal(payload.opportunity, undefined);
  });

  it('labels a direct website lead and still sends the original website lead tag', () => {
    const payload = buildGhlPayload({ ...lead, attribution: touch() });
    assert.equal(payload.source, 'Website');
    assert.equal(payload.lead_source, 'Website');
    assert.equal(payload.click_source, 'Direct/Website');
    assert.equal(payload.source_tag, 'website');
    assert.equal(payload.tags, 'website lead, website');
    assert.equal(payload.form_name, 'Website Form');
  });

  it('labels an offer-page lead that omits the long-form fields', () => {
    const payload = buildGhlPayload({
      name: 'Ada Lovelace',
      phone: '+1(253) 555-0100',
      propertyAddress: '123 Main St',
      smsNonMarketingConsent: false,
      smsMarketingConsent: false,
      pagePath: '/offer',
      formOrigin: 'google_ads_landing',
      attribution: touch({
        landing_page: 'https://kindkeyhomebuyers.com/offer',
      }),
    });
    assert.equal(payload.source, 'Google Ads');
    assert.equal(payload.lead_source, 'Google Ads');
    assert.equal(payload.source_tag, 'google ads');
    assert.equal(payload.page_tag, 'general');
    assert.equal(payload.tags, 'website lead, google ads, general');
    assert.equal(payload.form_name, 'Google Ads Landing Page');
    assert.equal(payload.form_origin, 'google_ads_landing');
    assert.deepEqual(payload.customFields, [
      { key: 'form_origin', field_value: 'google_ads_landing' },
    ]);
    assert.equal(payload.click_source, 'Direct/Website');
    assert.equal(payload.city, '');
    assert.equal(payload.condition, '');
    assert.equal(payload.timeframe, '');
    assert.equal(payload.preferred_contact, '');
    assert.equal(payload.page_path, '/offer');
    assert.equal(payload.listed_with_agent, '');
    assert.match(String(payload.attribution_notes), /Form origin: google_ads_landing/);
    assert.match(String(payload.attribution_notes), /Page tag: general/);
    assert.doesNotMatch(String(payload.attribution_notes), /Listed with agent/);
  });

  it('keeps a Facebook click on the website form as click_source only', () => {
    const payload = buildGhlPayload({
      ...lead,
      formOrigin: 'website',
      attribution: touch({ fbclid: 'fb-9', utm_source: 'facebook', utm_medium: 'paid' }),
    });
    assert.equal(payload.source, 'Website');
    assert.equal(payload.lead_source, 'Website');
    assert.equal(payload.source_tag, 'website');
    assert.equal(payload.tags, 'website lead, website');
    assert.equal(payload.click_source, 'Facebook Ads');
    assert.equal(payload.fbclid, 'fb-9');
    assert.equal(payload.utm_source, 'facebook');
  });

  it('labels the Facebook ads landing form even when the click is from Google', () => {
    const payload = buildGhlPayload({
      ...lead,
      pagePath: '/offer',
      formOrigin: 'facebook_ads_landing',
      attribution: touch({ gclid: 'gclid-1', utm_source: 'google', utm_medium: 'cpc' }),
    });
    assert.equal(payload.source, 'Facebook Ads');
    assert.equal(payload.lead_source, 'Facebook Ads');
    assert.equal(payload.source_tag, 'facebook ads');
    assert.equal(payload.page_tag, '');
    assert.equal(payload.tags, 'website lead, facebook ads');
    assert.equal(payload.form_name, 'Facebook Ads Landing Page');
    assert.equal(payload.click_source, 'Google Ads');
    assert.equal(payload.gclid, 'gclid-1');
  });

  it('labels a situation landing page and keeps Google Ads as the contact source', () => {
    const payload = buildGhlPayload({
      ...lead,
      pagePath: '/offer/foreclosure',
      formOrigin: 'google_ads_foreclosure',
      listedWithAgent: 'no',
    });
    assert.equal(payload.source, 'Google Ads');
    assert.equal(payload.lead_source, 'Google Ads');
    assert.equal(payload.source_tag, 'google ads');
    assert.equal(payload.page_tag, 'foreclosure');
    assert.equal(payload.tags, 'website lead, google ads, foreclosure');
    assert.equal(payload.form_name, 'Google Ads Foreclosure Page');
    assert.equal(payload.form_origin, 'google_ads_foreclosure');
    assert.equal(payload.page_path, '/offer/foreclosure');
    assert.equal(payload.listed_with_agent, 'no');
    assert.deepEqual(payload.customFields, [
      { key: 'listed_with_agent', field_value: 'no' },
      { key: 'form_origin', field_value: 'google_ads_foreclosure' },
    ]);
    assert.match(String(payload.attribution_notes), /Form origin: google_ads_foreclosure/);
    assert.match(String(payload.attribution_notes), /Listed with agent: no/);
  });

  it('labels a fire-damage landing with Google Ads and a fire damage tag', () => {
    const payload = buildGhlPayload({
      ...lead,
      pagePath: '/offer/fire-damage',
      formOrigin: 'google_ads_fire_damage',
      listedWithAgent: 'no',
    });
    assert.equal(payload.source, 'Google Ads');
    assert.equal(payload.lead_source, 'Google Ads');
    assert.equal(payload.source_tag, 'google ads');
    assert.equal(payload.tags, 'website lead, google ads, fire damage');
    assert.equal(payload.form_name, 'Google Ads Fire Damage Page');
    assert.equal(payload.form_origin, 'google_ads_fire_damage');
    assert.equal(payload.page_path, '/offer/fire-damage');
    assert.equal(payload.listed_with_agent, 'no');
  });

  it('labels the Eddie Facebook landing with its own source and tag', () => {
    const payload = buildGhlPayload({
      ...lead,
      pagePath: '/offer/facebook',
      formOrigin: 'facebook_ads_eddie',
      listedWithAgent: 'no',
    });
    assert.equal(payload.source, 'Facebook Leads (Eddie)');
    assert.equal(payload.lead_source, 'Facebook Leads (Eddie)');
    assert.equal(payload.source_tag, 'Facebook Leads (Eddie)');
    assert.equal(payload.page_tag, '');
    assert.equal(payload.tags, 'website lead, Facebook Leads (Eddie)');
    assert.equal(payload.form_name, 'Facebook Leads (Eddie) Landing Page');
    assert.equal(payload.form_origin, 'facebook_ads_eddie');
    assert.equal(payload.page_path, '/offer/facebook');
    assert.equal(payload.channel, 'Website');
    assert.equal(payload.listed_with_agent, 'no');
    assert.deepEqual(payload.customFields, [
      { key: 'listed_with_agent', field_value: 'no' },
      { key: 'form_origin', field_value: 'facebook_ads_eddie' },
    ]);
    assert.match(String(payload.attribution_notes), /Listed with agent: no/);
    assert.match(String(payload.attribution_notes), /Form origin: facebook_ads_eddie/);
    assert.doesNotMatch(String(payload.attribution_notes), /Page tag:/);
    assert.equal(payload.pipeline, undefined);
    assert.equal(payload.stage, undefined);
    assert.equal(payload.src, undefined);
  });

  it('keeps the Eddie source when the house is listed with an agent', () => {
    const payload = buildGhlPayload({
      ...lead,
      pagePath: '/offer/facebook',
      formOrigin: 'facebook_ads_eddie',
      listedWithAgent: 'yes',
    });
    assert.equal(payload.source, 'Facebook Leads (Eddie)');
    assert.equal(payload.source_tag, 'Facebook Leads (Eddie)');
    assert.equal(payload.page_tag, '');
    assert.equal(payload.tags, 'website lead, Facebook Leads (Eddie), listed with agent');
    assert.equal(payload.listed_with_agent, 'yes');
    assert.deepEqual(payload.customFields, [
      { key: 'listed_with_agent', field_value: 'yes' },
      { key: 'form_origin', field_value: 'facebook_ads_eddie' },
    ]);
    assert.match(String(payload.attribution_notes), /Listed with agent: yes/);
    assert.match(String(payload.attribution_notes), /Form origin: facebook_ads_eddie/);
  });

  it('passes src through on a Facebook /offer visit with the Eddie attribution', () => {
    for (const src of ['fb', 'fb_static', ''] as const) {
      const payload = buildGhlPayload({
        ...lead,
        pagePath: '/offer',
        formOrigin: 'facebook_ads_eddie',
        listedWithAgent: 'no',
        src,
      });
      assert.equal(payload.source, 'Facebook Leads (Eddie)', src || 'empty');
      assert.equal(payload.lead_source, 'Facebook Leads (Eddie)', src || 'empty');
      assert.equal(payload.source_tag, 'Facebook Leads (Eddie)', src || 'empty');
      assert.equal(payload.form_origin, 'facebook_ads_eddie', src || 'empty');
      assert.equal(payload.page_tag, '', src || 'empty');
      assert.equal(payload.src, src);
      assert.deepEqual(payload.customFields, [
        { key: 'listed_with_agent', field_value: 'no' },
        { key: 'form_origin', field_value: 'facebook_ads_eddie' },
        { key: 'src', field_value: src },
      ]);
    }
  });

  it('adds the listed-with-agent tag and note when the offer answer is yes', () => {
    const payload = buildGhlPayload({
      ...lead,
      pagePath: '/offer',
      formOrigin: 'google_ads_landing',
      listedWithAgent: 'yes',
    });
    assert.equal(payload.listed_with_agent, 'yes');
    assert.equal(payload.page_tag, 'general');
    assert.equal(payload.tags, 'website lead, google ads, general, listed with agent');
    assert.equal(payload.source, 'Google Ads');
    assert.equal(payload.source_tag, 'google ads');
    assert.deepEqual(payload.customFields, [
      { key: 'listed_with_agent', field_value: 'yes' },
      { key: 'form_origin', field_value: 'google_ads_landing' },
    ]);
    assert.match(String(payload.attribution_notes), /Listed with agent: yes/);
    assert.match(String(payload.attribution_notes), /Form origin: google_ads_landing/);
  });

  it('records a no answer without the listed-with-agent tag', () => {
    const payload = buildGhlPayload({
      ...lead,
      pagePath: '/offer',
      formOrigin: 'facebook_ads_landing',
      listedWithAgent: 'no',
    });
    assert.equal(payload.listed_with_agent, 'no');
    assert.equal(payload.page_tag, '');
    assert.equal(payload.tags, 'website lead, facebook ads');
    assert.equal(payload.source, 'Facebook Ads');
    assert.deepEqual(payload.customFields, [
      { key: 'listed_with_agent', field_value: 'no' },
      { key: 'form_origin', field_value: 'facebook_ads_landing' },
    ]);
    assert.match(String(payload.attribution_notes), /Listed with agent: no/);
    assert.match(String(payload.attribution_notes), /Form origin: facebook_ads_landing/);
    assert.doesNotMatch(String(payload.attribution_notes), /Page tag:/);
    assert.doesNotMatch(String(payload.tags), /listed with agent/);
  });

  it('adds the page tag and saves a no answer on every Google offer page', () => {
    const pages = [
      ['google_ads_landing', '/offer', 'general'],
      ['google_ads_inherited', '/offer/inherited', 'inherited'],
      ['google_ads_as_is', '/offer/as-is', 'as-is'],
      ['google_ads_foreclosure', '/offer/foreclosure', 'foreclosure'],
      ['google_ads_fire_damage', '/offer/fire-damage', 'fire damage'],
    ] as const;

    for (const [formOrigin, pagePath, pageTag] of pages) {
      const payload = buildGhlPayload({
        ...lead,
        pagePath,
        formOrigin,
        listedWithAgent: 'no',
      });
      assert.equal(payload.source, 'Google Ads', formOrigin);
      assert.equal(payload.source_tag, 'google ads', formOrigin);
      assert.equal(payload.page_tag, pageTag, formOrigin);
      assert.equal(payload.tags, `website lead, google ads, ${pageTag}`, formOrigin);
      assert.equal(payload.listed_with_agent, 'no', formOrigin);
      assert.equal(payload.form_origin, formOrigin);
      assert.deepEqual(payload.customFields, [
        { key: 'listed_with_agent', field_value: 'no' },
        { key: 'form_origin', field_value: formOrigin },
      ]);
      assert.match(String(payload.attribution_notes), new RegExp(`Form origin: ${formOrigin}`));
      assert.match(String(payload.attribution_notes), new RegExp(`Page tag: ${pageTag}`));
      assert.equal(payload.sms_consent, false);
      assert.equal(payload.email, 'ada@example.com');
    }
  });

  it('sends the contact email and required consent on an offer lead', () => {
    const payload = buildGhlPayload({
      ...lead,
      email: ' ada@example.com ',
      pagePath: '/offer',
      formOrigin: 'google_ads_landing',
      listedWithAgent: 'no',
      smsConsent: true,
      smsConsentAt: '2026-10-20T15:00:00.000Z',
      smsConsentTextVersion: 'a2p-v1',
    });
    assert.equal(payload.email, 'ada@example.com');
    assert.equal(payload.sms_consent, true);
    assert.equal(payload.sms_consent_at, '2026-10-20T15:00:00.000Z');
    assert.equal(payload.sms_consent_text_version, 'a2p-v1');
    assert.deepEqual(payload.customFields, [
      { key: 'listed_with_agent', field_value: 'no' },
      { key: 'form_origin', field_value: 'google_ads_landing' },
      { key: 'sms_consent', field_value: 'true' },
      { key: 'sms_consent_at', field_value: '2026-10-20T15:00:00.000Z' },
      { key: 'sms_consent_text_version', field_value: 'a2p-v1' },
    ]);
    assert.match(String(payload.attribution_notes), /SMS consent: true/);
    assert.match(String(payload.attribution_notes), /SMS consent text: a2p-v1/);
  });

  it('sends the offer click, keyword, ad group, and landing page url', () => {
    const payload = buildGhlPayload({
      ...lead,
      pagePath: '/offer',
      formOrigin: 'google_ads_landing',
      listedWithAgent: 'no',
      attribution: touch({
        gclid: 'click-1',
        gbraid: 'gb-1',
        wbraid: 'wb-1',
        utm_source: 'google',
        utm_medium: 'cpc',
        utm_campaign: '12345',
        utm_term: 'sell house fast',
        utm_content: 'ad-a',
        keyword: 'sell house fast',
        adgroup: '77',
        referrer: 'https://www.google.com/',
        landing_page: 'https://kindkeyhomebuyers.com/offer/as-is?gclid=click-1',
      }),
    });
    assert.equal(payload.gclid, 'click-1');
    assert.equal(payload.gbraid, 'gb-1');
    assert.equal(payload.wbraid, 'wb-1');
    assert.equal(payload.utm_source, 'google');
    assert.equal(payload.utm_medium, 'cpc');
    assert.equal(payload.utm_campaign, '12345');
    assert.equal(payload.utm_term, 'sell house fast');
    assert.equal(payload.utm_content, 'ad-a');
    assert.equal(payload.keyword, 'sell house fast');
    assert.equal(payload.adgroup, '77');
    assert.equal(payload.referrer, 'https://www.google.com/');
    assert.equal(
      payload.landing_page_url,
      'https://kindkeyhomebuyers.com/offer/as-is?gclid=click-1'
    );
    assert.equal(payload.page_tag, 'general');
    assert.equal(payload.form_origin, 'google_ads_landing');
    assert.equal(payload.listed_with_agent, 'no');
  });
});
