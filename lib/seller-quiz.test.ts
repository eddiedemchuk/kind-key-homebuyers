import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { buildGhlPayload } from './ghl';
import { FACEBOOK_OFFER_PHONE, GOOGLE_ADS_PHONE } from './phones';
import { leadSchemaForSubmission } from './schema';
import { SMS_CONSENT_TEXT_VERSION } from './sms-consent';
import {
  buildSellerQuizLeadBody,
  chooseQuizCondition,
  chooseQuizListed,
  chooseQuizTimeline,
  editQuizAnswers,
  goBackQuiz,
  initialSellerQuizState,
  quizAnswerSummary,
  quizLeadAttribution,
} from './seller-quiz';

describe('seller quiz flow', () => {
  it('advances through four taps and keeps earlier answers on back', () => {
    let state = initialSellerQuizState;
    assert.equal(state.step, 1);

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
    const edited = editQuizAnswers(state);
    assert.equal(edited.step, 1);
    assert.equal(edited.answers.condition, 'Good Shape — Just Want a Fast Sale');
    assert.equal(edited.answers.timeline, 'Just Exploring Options');
    assert.equal(edited.answers.listedWithAgent, 'no');
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
    });
    const body = buildSellerQuizLeadBody({
      condition: 'Needs Cosmetics / Updating',
      timeline: 'Within 30 Days',
      listedWithAgent: 'no',
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
    assert.match(String(body.situation), /Needs Cosmetics \/ Updating/);
    assert.match(String(body.situation), /Within 30 Days/);
    assert.match(String(body.situation), /No — Not Listed/);
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
  });

  it('rejects an empty phone before the payload would be accepted', () => {
    const body = buildSellerQuizLeadBody({
      condition: 'Needs Major Repairs',
      timeline: 'As Fast as 7 Days',
      listedWithAgent: 'yes',
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
