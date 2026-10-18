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

  it('keeps the first paid click when a second paid click arrives', () => {
    const facebook = landing('?fbclid=fb-1&utm_source=facebook&utm_medium=paid');
    const google = landing('?gclid=g-2&utm_source=google&utm_medium=cpc');
    assert.equal(mergeAttribution(facebook, google, NOW).fbclid, 'fb-1');
    assert.equal(mergeAttribution(facebook, google, NOW).gclid, '');
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
    assert.equal(payload.tags, 'website lead, google ads');
    assert.equal(payload.form_name, 'Google Ads Landing Page');
    assert.equal(payload.form_origin, 'google_ads_landing');
    assert.equal(payload.click_source, 'Direct/Website');
    assert.equal(payload.city, '');
    assert.equal(payload.condition, '');
    assert.equal(payload.timeframe, '');
    assert.equal(payload.preferred_contact, '');
    assert.equal(payload.page_path, '/offer');
    assert.equal(payload.listed_with_agent, '');
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
    assert.equal(payload.tags, 'website lead, google ads, foreclosure');
    assert.equal(payload.form_name, 'Google Ads Foreclosure Page');
    assert.equal(payload.form_origin, 'google_ads_foreclosure');
    assert.equal(payload.page_path, '/offer/foreclosure');
    assert.equal(payload.listed_with_agent, 'no');
  });

  it('adds the listed-with-agent tag and note when the offer answer is yes', () => {
    const payload = buildGhlPayload({
      ...lead,
      pagePath: '/offer',
      formOrigin: 'google_ads_landing',
      listedWithAgent: 'yes',
    });
    assert.equal(payload.listed_with_agent, 'yes');
    assert.equal(payload.tags, 'website lead, google ads, listed with agent');
    assert.equal(payload.source, 'Google Ads');
    assert.match(String(payload.attribution_notes), /Listed with agent: yes/);
  });

  it('records a no answer without the listed-with-agent tag', () => {
    const payload = buildGhlPayload({
      ...lead,
      pagePath: '/offer',
      formOrigin: 'facebook_ads_landing',
      listedWithAgent: 'no',
    });
    assert.equal(payload.listed_with_agent, 'no');
    assert.equal(payload.tags, 'website lead, facebook ads');
    assert.equal(payload.source, 'Facebook Ads');
    assert.match(String(payload.attribution_notes), /Listed with agent: no/);
    assert.doesNotMatch(String(payload.tags), /listed with agent/);
  });
});
