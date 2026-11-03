import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { buildGhlPayload } from './ghl';
import { quizLeadTouchFromBody } from './seller-quiz';
import { leadSchemaForSubmission } from './schema';
import { emptyTouch } from './attribution';
import {
  buildSellLeadBody,
  chooseSellAddress,
  chooseSellCondition,
  chooseSellListed,
  chooseSellOwner,
  chooseSellTimeline,
  goBackSell,
  initialSellState,
  readSellTracking,
  resolveSellTracking,
  sellStepLabel,
  sellThanksMessage,
  writeSellTracking,
  SELL_TRACKING_STORAGE_KEY,
} from './sell-funnel';

const capturedAt = '2026-11-03T12:00:00.000Z';

function memoryStorage(initial: Record<string, string> = {}) {
  const data = { ...initial };
  return {
    data,
    getItem(key: string) {
      return Object.prototype.hasOwnProperty.call(data, key) ? data[key] : null;
    },
    setItem(key: string, value: string) {
      data[key] = value;
    },
  };
}

describe('sell funnel steps', () => {
  it('counts address and confirm as step 1 of 6, then one question per step', () => {
    let state = initialSellState;
    assert.equal(sellStepLabel(state.screen), 'Step 1 of 6');
    state = chooseSellAddress(state, {
      address: '100 Main St, Auburn, WA',
      county: 'King',
      state: 'WA',
      city: 'Auburn',
      lat: null,
      lng: null,
      areaStatus: 'in_area',
    });
    assert.equal(state.screen, 'confirm');
    assert.equal(sellStepLabel(state.screen), 'Step 1 of 6');
    state = { ...state, screen: 'owner' };
    state = chooseSellOwner(state, 'yes');
    assert.equal(sellStepLabel(state.screen), 'Step 3 of 6');
    state = chooseSellListed(state, 'no');
    assert.equal(state.screen, 'condition');
    state = chooseSellCondition(state, 'Good shape');
    state = chooseSellTimeline(state, 'ASAP');
    assert.equal(state.screen, 'contact');
    assert.equal(sellStepLabel(state.screen), 'Step 6 of 6');
    assert.equal(goBackSell(state).screen, 'timeline');
  });

  it('sends a listed-now answer to contact and back to the listing question', () => {
    let state = chooseSellOwner({ ...initialSellState, screen: 'owner' }, 'helping');
    state = chooseSellListed(state, 'listed-now');
    assert.equal(state.screen, 'contact');
    assert.equal(state.answers.condition, null);
    assert.equal(state.answers.timeline, null);
    assert.equal(goBackSell(state).screen, 'listed');
  });
});

describe('sell tracking', () => {
  it('maps src=fb to facebook, keeps fbclid, and blanks a stored Google click', () => {
    const stored = {
      src: 'google',
      attribution: {
        ...emptyTouch(capturedAt),
        utm_source: 'google',
        utm_medium: 'cpc',
        gclid: 'stored-click',
        fbclid: 'stale',
        landing_page: '/?gclid=stored-click',
      },
    };
    const fresh = resolveSellTracking({
      search: '?src=fb&fbclid=click-9',
      referrer: 'https://m.facebook.com/',
      stored,
      capturedAt,
    });
    assert.equal(fresh.src, 'fb');
    assert.equal(fresh.attribution.utm_source, 'facebook');
    assert.equal(fresh.attribution.utm_medium, '');
    assert.equal(fresh.attribution.utm_campaign, '');
    assert.equal(fresh.attribution.gclid, '');
    assert.equal(fresh.attribution.fbclid, 'click-9');
    assert.equal(fresh.attribution.referrer, 'https://m.facebook.com/');
    assert.equal(fresh.attribution.landing_page, '/sell?src=fb&fbclid=click-9');

    const storage = memoryStorage();
    writeSellTracking(storage, fresh);
    assert.equal(readSellTracking(storage)?.attribution.fbclid, 'click-9');
    assert.equal(storage.data[SELL_TRACKING_STORAGE_KEY]?.includes('click-9'), true);

    const kept = resolveSellTracking({ search: '', stored: readSellTracking(storage) });
    assert.equal(kept.attribution.fbclid, 'click-9');
    assert.equal(kept.attribution.utm_source, 'facebook');
  });

  it('fills utm_source from src=fb when another UTM param is present', () => {
    const partial = resolveSellTracking({
      search: '?src=fb&utm_campaign=TEST&fbclid=zz',
      referrer: '',
      capturedAt,
    });
    assert.equal(partial.src, 'fb');
    assert.equal(partial.attribution.utm_source, 'facebook');
    assert.equal(partial.attribution.utm_campaign, 'TEST');
    assert.equal(partial.attribution.utm_medium, '');
    assert.equal(partial.attribution.fbclid, 'zz');
  });
});

describe('sell GoHighLevel payload', () => {
  const qualifying = buildSellLeadBody({
    answers: {
      ...initialSellState.answers,
      address: '100 Main St, Auburn, WA',
      county: 'King',
      state: 'WA',
      city: 'Auburn',
      areaStatus: 'out_of_area',
      owner: 'yes',
      listed: 'expired',
      condition: 'Needs updating',
      timeline: '2-4 weeks',
    },
    firstName: 'Ada',
    lastName: 'Lovelace',
    phone: '(253) 555-0100',
    email: '',
    src: 'fb',
    attribution: resolveSellTracking({
      search: '?src=fb',
      referrer: 'https://m.facebook.com/',
      capturedAt,
    }).attribution,
  });

  it('rejects an address-only partial and accepts the final step', () => {
    assert.equal(
      leadSchemaForSubmission('facebook_ads_eddie', '/sell').safeParse({
        propertyAddress: '100 Main St, Auburn, WA',
      }).success,
      false
    );
    const parsed = leadSchemaForSubmission('facebook_ads_eddie', '/sell').safeParse(qualifying);
    assert.equal(parsed.success, true);
  });

  it('tags an out-of-area qualifying lead as a Facebook Eddie lead', () => {
    const touch = quizLeadTouchFromBody(qualifying, capturedAt);
    const payload = buildGhlPayload({
      name: 'Ada Lovelace',
      firstName: 'Ada',
      lastName: 'Lovelace',
      phone: '+12535550100',
      email: '',
      propertyAddress: '100 Main St, Auburn, WA',
      city: 'Auburn',
      condition: 'Needs updating',
      timeline: '2-4 weeks',
      situation: String(qualifying.situation),
      notes: String(qualifying.notes),
      listedWithAgent: 'no',
      formOrigin: 'facebook_ads_eddie',
      src: 'fb',
      pagePath: '/sell',
      ownerStatus: 'yes',
      sellListed: 'expired',
      county: 'King',
      outOfArea: true,
      attribution: touch,
      smsConsent: true,
      smsConsentTextVersion: 'a2p-v1',
    });
    assert.equal(payload.source, 'Facebook Leads (Eddie)');
    assert.equal(payload.lead_source, 'Facebook Leads (Eddie)');
    assert.equal(payload.form_origin, 'facebook_ads_eddie');
    assert.equal(payload.form_name, 'Facebook Leads (Eddie) Landing Page');
    assert.equal(payload.tags, 'website lead, Facebook Leads (Eddie), out_of_area');
    assert.equal(payload.hot_lead, undefined);
    assert.equal(payload.pipeline, undefined);
    assert.equal(payload.utm_source, 'facebook');
    assert.equal(payload.src, 'fb');
    assert.equal(payload.fbclid, '');
    assert.equal(payload.first_name, 'Ada');
    assert.equal(payload.last_name, 'Lovelace');
    assert.equal(sellThanksMessage(), 'Eddie or Angie will call you shortly from (206) 519-5463');
  });

  it('tags a listed-now lead for check-in and does not mark it hot', () => {
    const body = buildSellLeadBody({
      answers: {
        ...initialSellState.answers,
        address: '100 Main St, Auburn, WA',
        areaStatus: 'in_area',
        owner: 'agent',
        listed: 'listed-now',
      },
      firstName: 'Ada',
      lastName: 'Lovelace',
      phone: '(253) 555-0100',
      src: 'fb',
    });
    assert.equal(body.hot_lead, false);
    assert.equal(body.listed_with_agent, 'yes');
    assert.equal(
      leadSchemaForSubmission('facebook_ads_eddie', '/sell').safeParse(body).success,
      true
    );
    assert.equal(
      leadSchemaForSubmission('facebook_ads_eddie', '/sell').safeParse({ ...body, hot_lead: true })
        .success,
      false
    );

    const payload = buildGhlPayload({
      name: 'Ada Lovelace',
      phone: '+12535550100',
      propertyAddress: '100 Main St, Auburn, WA',
      listedWithAgent: 'yes',
      formOrigin: 'facebook_ads_eddie',
      pagePath: '/sell',
      src: 'fb',
      sellListed: 'listed-now',
      hotLead: false,
      attribution: quizLeadTouchFromBody(body, capturedAt),
    });
    assert.equal(payload.tags, 'website lead, Facebook Leads (Eddie), listed with agent, check in');
    assert.equal(payload.hot_lead, false);
    assert.equal(payload.pipeline, undefined);
    assert.equal(payload.stage, undefined);
  });
});
