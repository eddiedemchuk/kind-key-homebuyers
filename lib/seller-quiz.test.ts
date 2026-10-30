import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { emptyTouch, resolveSubmissionAttribution, touchFromRequestBody } from './attribution';
import { buildGhlPayload } from './ghl';
import { FACEBOOK_OFFER_PHONE, GOOGLE_ADS_PHONE } from './phones';
import { leadSchemaForSubmission } from './schema';
import { SMS_CONSENT_TEXT_VERSION } from './sms-consent';
import {
  buildSellerQuizLeadBody,
  chooseQuizCondition,
  chooseQuizListed,
  chooseQuizRealtor,
  chooseQuizTimeline,
  editQuizAnswers,
  goBackQuiz,
  initialSellerQuizState,
  quizAnswerSummary,
  quizLeadAttribution,
  quizLeadTouchFromBody,
  quizSubmitFields,
  sellerQuizNotAFitMessage,
  shouldSubmitQuizLead,
} from './seller-quiz';

function customField(payload: Record<string, unknown>, key: string): unknown {
  if (!Array.isArray(payload.customFields)) return undefined;
  const match = payload.customFields.find(
    (field) => typeof field === 'object' && field !== null && 'key' in field && field.key === key
  ) as { field_value?: unknown } | undefined;
  return match?.field_value;
}

describe('seller quiz flow', () => {
  it('advances through five taps and keeps earlier answers on back', () => {
    let state = initialSellerQuizState;
    assert.equal(state.step, 1);
    assert.equal(state.outcome, 'quiz');

    state = chooseQuizCondition(state, 'Full of Stuff / Needs Cleanout');
    assert.equal(state.step, 2);
    assert.equal(state.answers.condition, 'Full of Stuff / Needs Cleanout');

    state = chooseQuizTimeline(state, '1–3 Months');
    assert.equal(state.step, 3);
    assert.equal(state.answers.timeline, '1–3 Months');

    state = chooseQuizListed(state, 'yes');
    assert.equal(state.step, 4);
    assert.equal(state.answers.listedWithAgent, 'yes');
    assert.equal(state.answers.condition, 'Full of Stuff / Needs Cleanout');
    assert.equal(state.answers.timeline, '1–3 Months');

    state = chooseQuizRealtor(state, 'expired');
    assert.equal(state.step, 5);
    assert.equal(state.outcome, 'quiz');
    assert.equal(state.answers.realtorStatus, 'expired');
    assert.equal(shouldSubmitQuizLead(state), true);

    state = goBackQuiz(state);
    assert.equal(state.step, 4);
    assert.equal(state.answers.realtorStatus, 'expired');
    state = goBackQuiz(state);
    assert.equal(state.step, 3);
    assert.equal(state.answers.listedWithAgent, 'yes');
    state = goBackQuiz(state);
    assert.equal(state.step, 2);
    assert.equal(state.answers.timeline, '1–3 Months');
    state = goBackQuiz(state);
    assert.equal(state.step, 1);
    assert.equal(state.answers.condition, 'Full of Stuff / Needs Cleanout');
    assert.equal(goBackQuiz(state).step, 1);

    state = chooseQuizCondition(state, 'Good Shape — Just Want a Fast Sale');
    state = chooseQuizTimeline(state, 'Just Exploring Options');
    state = chooseQuizListed(state, 'no');
    state = chooseQuizRealtor(state, 'no');
    const edited = editQuizAnswers(state);
    assert.equal(edited.step, 1);
    assert.equal(edited.outcome, 'quiz');
    assert.equal(edited.answers.condition, 'Good Shape — Just Want a Fast Sale');
    assert.equal(edited.answers.timeline, 'Just Exploring Options');
    assert.equal(edited.answers.listedWithAgent, 'no');
    assert.equal(edited.answers.realtorStatus, 'no');
  });

  it('stops a listed-or-realtor answer before name and phone', () => {
    let state = initialSellerQuizState;
    state = chooseQuizCondition(state, 'Needs Major Repairs');
    state = chooseQuizTimeline(state, 'As Fast as 7 Days');
    state = chooseQuizListed(state, 'no');
    state = chooseQuizRealtor(state, 'listed-or-realtor');

    assert.equal(state.step, 4);
    assert.equal(state.outcome, 'not-a-fit');
    assert.equal(state.answers.realtorStatus, 'listed-or-realtor');
    assert.equal(shouldSubmitQuizLead(state), false);
    assert.equal(
      sellerQuizNotAFitMessage('(253) 453-8597'),
      'Thanks! Based on your answers, we may not be the best fit right now, but feel free to call us at (253) 453-8597.'
    );

    const back = goBackQuiz(state);
    assert.equal(back.outcome, 'quiz');
    assert.equal(back.step, 4);
    assert.equal(back.answers.realtorStatus, 'listed-or-realtor');
    assert.equal(shouldSubmitQuizLead(back), false);

    const qualified = chooseQuizRealtor(back, 'no');
    assert.equal(qualified.outcome, 'quiz');
    assert.equal(qualified.step, 5);
    assert.equal(shouldSubmitQuizLead(qualified), true);
  });
});

describe('seller quiz lead source', () => {
  it('maps quiz pages and src=fb to Facebook Leads (Eddie)', () => {
    for (const [pathname, search] of [
      ['/quiz', ''],
      ['/quiz', '?src=fb'],
      ['/quiz', '?src=fb_static'],
      ['/offer/quiz', ''],
      ['/offer/quiz', '?src=FB'],
      ['/quiz', '?utm_source=facebook'],
    ] as const) {
      const source = quizLeadAttribution(pathname, search);
      assert.equal(source.formOrigin, 'facebook_ads_eddie', `${pathname} ${search}`);
      assert.equal(source.facebook, true, `${pathname} ${search}`);
      assert.equal(source.phone, FACEBOOK_OFFER_PHONE, `${pathname} ${search}`);
      assert.equal(source.phone.display, '(253) 453-8597');
      assert.notEqual(source.phone.display, '(253) 352-4379');
    }

    assert.equal(quizLeadAttribution('/quiz', '?src=fb').src, 'fb');
    assert.equal(quizLeadAttribution('/offer/quiz', '').src, 'fb');
    assert.equal(quizLeadAttribution('/quiz', '?src=fb_static').src, 'fb_static');
    assert.equal(quizLeadAttribution('/quiz', '?utm_source=facebook').src, '');

    const google = quizLeadAttribution('/quiz', '?src=google');
    assert.equal(google.formOrigin, 'google_ads_landing');
    assert.equal(google.facebook, false);
    assert.equal(google.src, 'google');
    assert.equal(google.phone, GOOGLE_ADS_PHONE);
  });
});

describe('seller quiz submission payload', () => {
  it('posts every quiz answer to /api/lead for GoHighLevel', () => {
    const summary = quizAnswerSummary({
      condition: 'Needs Cosmetics / Updating',
      timeline: 'Within 30 Days',
      listedWithAgent: 'no',
      realtorStatus: 'no',
    });
    const body = buildSellerQuizLeadBody({
      condition: 'Needs Cosmetics / Updating',
      timeline: 'Within 30 Days',
      listedWithAgent: 'no',
      realtorStatus: 'no',
      propertyAddress: ' 123 Main St, Auburn, WA ',
      name: ' Ada Lovelace ',
      phone: '(253) 555-0100',
      email: '',
      src: 'fb',
      formOrigin: 'facebook_ads_eddie',
      pagePath: '/offer/quiz',
    });

    assert.equal(body.propertyAddress, '123 Main St, Auburn, WA');
    assert.equal(body.name, 'Ada Lovelace');
    assert.equal(body.phone, '+12535550100');
    assert.equal(body.email, '');
    assert.equal(body.listedWithAgent, 'no');
    assert.equal(body.listed_with_agent, 'no');
    assert.equal(body.timeline, 'Within 30 Days');
    assert.equal(body.condition, 'Needs Cosmetics / Updating');
    assert.equal(body.situation, summary);
    assert.equal(body.notes, summary);
    assert.equal(body.realtor_status, 'no');
    assert.match(String(body.situation), /Needs Cosmetics \/ Updating/);
    assert.match(String(body.situation), /Within 30 Days/);
    assert.match(String(body.situation), /No — Not Listed/);
    assert.match(String(body.situation), /Realtor: No/);
    assert.equal(body.src, 'fb');
    assert.equal(body.form_origin, 'facebook_ads_eddie');
    assert.equal(body.pagePath, '/offer/quiz');
    assert.equal(body.sms_consent, true);
    assert.equal(body.sms_consent_text_version, SMS_CONSENT_TEXT_VERSION);

    for (const pagePath of ['/quiz', '/offer/quiz']) {
      const parsed = leadSchemaForSubmission('facebook_ads_eddie', pagePath).safeParse(body);
      assert.equal(parsed.success, true, pagePath);
    }

    const payload = buildGhlPayload({
      name: String(body.name),
      phone: String(body.phone),
      email: String(body.email),
      propertyAddress: String(body.propertyAddress),
      condition: String(body.condition),
      timeline: String(body.timeline),
      situation: String(body.situation),
      notes: String(body.notes),
      reasonForSelling: String(body.reasonForSelling),
      realtorStatus: 'No',
      listedWithAgent: 'no',
      formOrigin: 'facebook_ads_eddie',
      src: 'fb',
      pagePath: '/offer/quiz',
      smsConsent: true,
      smsConsentTextVersion: SMS_CONSENT_TEXT_VERSION,
    });

    assert.equal(payload.source, 'Facebook Leads (Eddie)');
    assert.equal(payload.lead_source, 'Facebook Leads (Eddie)');
    assert.equal(payload.source_tag, 'Facebook Leads (Eddie)');
    assert.equal(payload.tags, 'website lead, Facebook Leads (Eddie)');
    assert.doesNotMatch(String(payload.tags), /verify owner/);
    assert.equal(payload.realtor_status, 'No');
    assert.equal(payload.form_origin, 'facebook_ads_eddie');
    assert.equal(payload.condition, 'Needs Cosmetics / Updating');
    assert.equal(payload.timeline, 'Within 30 Days');
    assert.equal(payload.situation, summary);
    assert.equal(payload.notes, summary);
    assert.equal(payload.listed_with_agent, 'no');
    assert.equal(payload.src, 'fb');
    assert.match(String(payload.attribution_notes), /Needs Cosmetics \/ Updating/);
    assert.match(String(payload.attribution_notes), /Within 30 Days/);
    assert.match(String(payload.attribution_notes), /No — Not Listed/);
    assert.match(String(payload.attribution_notes), /Realtor: No/);
    assert.equal(
      Array.isArray(payload.customFields) &&
        payload.customFields.some(
          (field) =>
            typeof field === 'object' &&
            field !== null &&
            'key' in field &&
            field.key === 'timeline' &&
            'field_value' in field &&
            field.field_value === 'Within 30 Days'
        ),
      true
    );
    assert.equal(
      Array.isArray(payload.customFields) &&
        payload.customFields.some(
          (field) =>
            typeof field === 'object' &&
            field !== null &&
            'key' in field &&
            field.key === 'realtor_status' &&
            'field_value' in field &&
            field.field_value === 'No'
        ),
      true
    );
  });

  it('keeps an expired listing on the Facebook tag without adding verify owner', () => {
    const summary = quizAnswerSummary({
      condition: 'Needs Major Repairs',
      timeline: 'As Fast as 7 Days',
      listedWithAgent: 'yes',
      realtorStatus: 'expired',
    });
    const payload = buildGhlPayload({
      name: 'Ada Lovelace',
      phone: '+12535550100',
      email: '',
      propertyAddress: '123 Main St, Auburn, WA',
      condition: 'Needs Major Repairs',
      timeline: 'As Fast as 7 Days',
      situation: summary,
      notes: summary,
      reasonForSelling: summary,
      listedWithAgent: 'yes',
      realtorStatus: 'It was listed but expired',
      formOrigin: 'facebook_ads_eddie',
      src: 'fb',
      pagePath: '/quiz',
      smsConsent: true,
      smsConsentTextVersion: SMS_CONSENT_TEXT_VERSION,
    });

    assert.equal(payload.source, 'Facebook Leads (Eddie)');
    assert.equal(payload.tags, 'website lead, Facebook Leads (Eddie), listed with agent');
    assert.doesNotMatch(String(payload.tags), /verify owner/);
    assert.equal(payload.realtor_status, 'It was listed but expired');
    assert.match(String(payload.situation), /It was listed but expired/);
    assert.match(String(payload.attribution_notes), /Realtor: It was listed but expired/);
  });

  it('rejects an empty phone before the payload would be accepted', () => {
    const body = buildSellerQuizLeadBody({
      condition: 'Needs Major Repairs',
      timeline: 'As Fast as 7 Days',
      listedWithAgent: 'yes',
      realtorStatus: 'expired',
      propertyAddress: '123 Main St, Auburn, WA',
      name: 'Ada Lovelace',
      phone: '',
      email: 'ada@example.com',
      src: 'fb',
      formOrigin: 'facebook_ads_eddie',
      pagePath: '/quiz',
    });
    assert.equal(body.phone, '');
    const parsed = leadSchemaForSubmission('facebook_ads_eddie', '/quiz').safeParse(body);
    assert.equal(parsed.success, false);
    if (!parsed.success) {
      assert.equal(
        parsed.error.issues.find((issue) => issue.path[0] === 'phone')?.message,
        'Phone is required.'
      );
    }
  });
});

describe('seller quiz fresh attribution', () => {
  const capturedAt = '2026-10-30T17:00:00.000Z';

  function quizBody(
    pathname: '/quiz' | '/offer/quiz',
    search: string,
    referrer = 'https://m.facebook.com/'
  ) {
    const tracking = quizSubmitFields({ pathname, search, referrer, capturedAt });
    const source = quizLeadAttribution(pathname, search);
    const body = buildSellerQuizLeadBody({
      condition: 'Needs Cosmetics / Updating',
      timeline: 'Within 30 Days',
      listedWithAgent: 'no',
      realtorStatus: 'no',
      propertyAddress: '123 Main St, Auburn, WA',
      name: 'Ada Lovelace',
      phone: '(253) 555-0100',
      email: '',
      src: tracking.src,
      formOrigin: source.formOrigin,
      pagePath: pathname,
      attribution: tracking.attribution,
    });
    return { tracking, source, body };
  }

  it('maps src=fb to facebook and records the quiz URL instead of a stored Google click', () => {
    const { tracking, source, body } = quizBody('/quiz', '?src=fb');
    assert.equal(source.formOrigin, 'facebook_ads_eddie');
    assert.equal(source.facebook, true);
    assert.equal(source.phone, FACEBOOK_OFFER_PHONE);
    assert.equal(tracking.src, 'fb');
    assert.equal(tracking.attribution.utm_source, 'facebook');
    assert.equal(tracking.attribution.utm_medium, '');
    assert.equal(tracking.attribution.utm_campaign, '');
    assert.equal(tracking.attribution.utm_content, '');
    assert.equal(tracking.attribution.utm_term, '');
    assert.equal(tracking.attribution.landing_page, '/quiz?src=fb');
    assert.equal(tracking.attribution.landing_page_url, '/quiz?src=fb');
    assert.equal(tracking.attribution.referrer, 'https://m.facebook.com/');
    assert.equal(tracking.attribution.gclid, '');
    assert.equal(body.src, 'fb');
    assert.equal(body.form_origin, 'facebook_ads_eddie');

    const stored = {
      ...emptyTouch(capturedAt),
      utm_source: 'google',
      utm_medium: 'cpc',
      utm_campaign: 'test',
      gclid: 'stored-click',
      landing_page: 'https://kindkeyhomebuyers.com/?gclid=stored-click',
    };
    const kept = resolveSubmissionAttribution(
      touchFromRequestBody(body),
      stored,
      Date.parse(capturedAt)
    );
    assert.equal(kept.utm_source, 'google');
    assert.equal(kept.utm_medium, 'cpc');
    assert.equal(kept.utm_campaign, 'test');
    assert.equal(kept.landing_page, stored.landing_page);

    const touch = quizLeadTouchFromBody(body, capturedAt);
    assert.equal(touch.utm_source, 'facebook');
    assert.equal(touch.utm_medium, '');
    assert.equal(touch.utm_campaign, '');
    assert.equal(touch.utm_content, '');
    assert.equal(touch.utm_term, '');
    assert.equal(touch.landing_page, '/quiz?src=fb');
    assert.equal(touch.referrer, 'https://m.facebook.com/');
    assert.equal(touch.gclid, '');

    const payload = buildGhlPayload({
      name: 'Ada Lovelace',
      phone: '+12535550100',
      email: '',
      propertyAddress: '123 Main St, Auburn, WA',
      condition: 'Needs Cosmetics / Updating',
      timeline: 'Within 30 Days',
      situation: String(body.situation),
      notes: String(body.notes),
      reasonForSelling: String(body.reasonForSelling),
      realtorStatus: 'No',
      listedWithAgent: 'no',
      formOrigin: 'facebook_ads_eddie',
      src: 'fb',
      pagePath: '/quiz',
      attribution: touch,
      smsConsent: true,
      smsConsentTextVersion: SMS_CONSENT_TEXT_VERSION,
    });

    assert.equal(payload.source, 'Facebook Leads (Eddie)');
    assert.equal(payload.lead_source, 'Facebook Leads (Eddie)');
    assert.equal(payload.tags, 'website lead, Facebook Leads (Eddie)');
    assert.equal(payload.src, 'fb');
    assert.equal(payload.utm_source, 'facebook');
    assert.equal(payload.utm_medium, '');
    assert.equal(payload.utm_campaign, '');
    assert.equal(payload.utm_content, '');
    assert.equal(payload.utm_term, '');
    assert.equal(payload.landing_page, '/quiz?src=fb');
    assert.equal(payload.landing_page_url, '/quiz?src=fb');
    assert.equal(payload.referrer, 'https://m.facebook.com/');
    assert.equal(payload.gclid, '');
    assert.equal(payload.click_source, 'Facebook Organic');
    assert.equal(customField(payload, 'src'), 'fb');
    assert.equal(customField(payload, 'utm_source'), 'facebook');
    assert.equal(customField(payload, 'utm_medium'), '');
    assert.equal(customField(payload, 'utm_campaign'), '');
    assert.equal(customField(payload, 'utm_content'), '');
    assert.equal(customField(payload, 'utm_term'), '');
    assert.equal(customField(payload, 'landing_page'), '/quiz?src=fb');
    assert.equal(customField(payload, 'landing_page_url'), '/quiz?src=fb');
    assert.equal(customField(payload, 'referrer'), 'https://m.facebook.com/');
    assert.equal(
      leadSchemaForSubmission('facebook_ads_eddie', '/quiz').safeParse(body).success,
      true
    );
  });

  it('keeps URL UTM params and leaves the ones that are missing empty', () => {
    const { tracking, source } = quizBody(
      '/offer/quiz',
      '?src=fb&utm_source=google&utm_medium=cpc&utm_campaign=test',
      'https://www.google.com/'
    );
    assert.equal(source.formOrigin, 'facebook_ads_eddie');
    assert.equal(tracking.src, 'fb');
    assert.equal(tracking.attribution.utm_source, 'google');
    assert.equal(tracking.attribution.utm_medium, 'cpc');
    assert.equal(tracking.attribution.utm_campaign, 'test');
    assert.equal(tracking.attribution.utm_content, '');
    assert.equal(tracking.attribution.utm_term, '');
    assert.equal(
      tracking.attribution.landing_page,
      '/offer/quiz?src=fb&utm_source=google&utm_medium=cpc&utm_campaign=test'
    );
    assert.equal(tracking.attribution.referrer, 'https://www.google.com/');

    const partial = quizSubmitFields({
      pathname: '/quiz',
      search: '?src=fb&utm_content=ad-a',
      referrer: '',
      capturedAt,
    });
    assert.equal(partial.src, 'fb');
    assert.equal(partial.attribution.utm_source, '');
    assert.equal(partial.attribution.utm_medium, '');
    assert.equal(partial.attribution.utm_campaign, '');
    assert.equal(partial.attribution.utm_content, 'ad-a');
    assert.equal(partial.attribution.utm_term, '');
    assert.equal(partial.attribution.landing_page, '/quiz?src=fb&utm_content=ad-a');
    assert.equal(partial.attribution.referrer, '');
  });

  it('falls back to the src value only when the quiz URL has no UTM params', () => {
    const facebook = quizSubmitFields({
      pathname: '/quiz',
      search: '?src=FB_STATIC',
      referrer: '',
      capturedAt,
    });
    assert.equal(facebook.src, 'fb_static');
    assert.equal(facebook.attribution.utm_source, 'facebook');
    assert.equal(facebook.attribution.utm_medium, '');
    assert.equal(facebook.attribution.landing_page, '/quiz?src=FB_STATIC');

    const google = quizSubmitFields({
      pathname: '/offer/quiz',
      search: '?src=google',
      referrer: 'https://www.google.com/',
      capturedAt,
    });
    assert.equal(google.src, 'google');
    assert.equal(google.attribution.utm_source, 'google');
    assert.equal(google.attribution.utm_medium, '');
    assert.equal(google.attribution.landing_page, '/offer/quiz?src=google');

    const plain = quizSubmitFields({
      pathname: '/quiz',
      search: '',
      referrer: '',
      capturedAt,
    });
    assert.equal(plain.src, '');
    assert.equal(plain.attribution.utm_source, '');
    assert.equal(plain.attribution.utm_medium, '');
    assert.equal(plain.attribution.utm_campaign, '');
    assert.equal(plain.attribution.utm_content, '');
    assert.equal(plain.attribution.utm_term, '');
    assert.equal(plain.attribution.landing_page, '/quiz');
    assert.equal(plain.attribution.referrer, '');

    const touch = quizLeadTouchFromBody(
      { src: 'fb', landing_page: '/quiz?src=fb', referrer: 'https://lm.facebook.com/' },
      capturedAt
    );
    assert.equal(touch.utm_source, 'facebook');
    assert.equal(touch.utm_medium, '');
    assert.equal(touch.utm_campaign, '');
    assert.equal(touch.landing_page, '/quiz?src=fb');
    assert.equal(touch.referrer, 'https://lm.facebook.com/');
    assert.equal(touch.gclid, '');
  });
});
