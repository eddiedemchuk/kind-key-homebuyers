import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { SMS_CONSENT_TEXT_VERSION } from './sms-consent';
import {
  leadApiSchema,
  leadFormSchema,
  isOfferHeroPath,
  leadSchemaForSubmission,
  offerHeroLeadApiSchema,
  offerHeroLeadFormSchema,
  offerLeadApiSchema,
  offerLeadFormSchema,
} from './schema';

const shortOffer = {
  name: 'Ada Lovelace',
  phone: '+1(253) 555-0100',
  email: '',
  propertyAddress: '123 Main St, Auburn, WA',
  smsNonMarketingConsent: true,
  smsMarketingConsent: false,
};

describe('lead schemas', () => {
  it('accepts the short offer form on the API schema', () => {
    const parsed = leadApiSchema.safeParse(shortOffer);
    assert.equal(parsed.success, true);
    if (!parsed.success) return;
    assert.equal(parsed.data.city, undefined);
    assert.equal(parsed.data.condition, undefined);
    assert.equal(parsed.data.timeframe, undefined);
    assert.equal(parsed.data.preferredContact, undefined);
    assert.equal(parsed.data.smsNonMarketingConsent, true);
  });

  it('still requires the long-form answers on the site form schema', () => {
    assert.equal(leadFormSchema.safeParse(shortOffer).success, false);
    const parsed = leadFormSchema.safeParse({
      ...shortOffer,
      phone: '+1',
      city: 'Auburn',
      condition: 'as-is',
      timeframe: 'asap',
      preferredContact: 'call',
    });
    assert.equal(parsed.success, true);
  });

  it('requires a complete phone number on the offer form only', () => {
    const withAnswer = {
      ...shortOffer,
      email: 'ada@example.com',
      listed_with_agent: 'no' as const,
      sms_consent: true,
    };
    assert.equal(offerLeadFormSchema.safeParse({ ...withAnswer, phone: '+1' }).success, false);
    assert.equal(offerLeadFormSchema.safeParse(withAnswer).success, true);
    assert.equal(leadApiSchema.safeParse({ ...shortOffer, phone: '' }).success, true);
    for (const phone of ['(253) 555-0100', '2535550100', '253-555-0100', '+12535550100']) {
      assert.equal(offerLeadFormSchema.safeParse({ ...withAnswer, phone }).success, true, phone);
      assert.equal(leadApiSchema.safeParse({ ...shortOffer, phone }).success, true, phone);
    }
    assert.equal(offerLeadFormSchema.safeParse({ ...withAnswer, phone: '253555' }).success, false);

    for (const phone of ['', '   ']) {
      const parsed = offerLeadFormSchema.safeParse({ ...withAnswer, phone });
      assert.equal(parsed.success, false, JSON.stringify(phone));
      if (!parsed.success) {
        assert.equal(
          parsed.error.issues.find((issue) => issue.path[0] === 'phone')?.message,
          'Phone is required.'
        );
      }
    }
    const missingPhone = offerLeadFormSchema.safeParse({ ...withAnswer, phone: undefined });
    assert.equal(missingPhone.success, false);
    if (!missingPhone.success) {
      assert.equal(
        missingPhone.error.issues.find((issue) => issue.path[0] === 'phone')?.message,
        'Phone is required.'
      );
    }

    const apiOffer = { ...withAnswer, sms_consent_text_version: SMS_CONSENT_TEXT_VERSION };
    for (const pagePath of ['/offer', '/offer/facebook']) {
      for (const formOrigin of ['google_ads_landing', 'facebook_ads_eddie'] as const) {
        const parsed = leadSchemaForSubmission(formOrigin, pagePath).safeParse({
          ...apiOffer,
          phone: '',
        });
        assert.equal(parsed.success, false, `${formOrigin} ${pagePath}`);
        if (!parsed.success) {
          assert.equal(
            parsed.error.issues.find((issue) => issue.path[0] === 'phone')?.message,
            'Phone is required.'
          );
        }
      }
    }
  });

  it('requires a yes or no listing answer on the offer form only', () => {
    const ready = { ...shortOffer, email: 'ada@example.com', sms_consent: true };
    assert.equal(offerLeadFormSchema.safeParse(shortOffer).success, false);
    assert.equal(
      offerLeadFormSchema.safeParse({ ...ready, listed_with_agent: 'yes' }).success,
      true
    );
    assert.equal(
      offerLeadFormSchema.safeParse({ ...ready, listed_with_agent: 'no' }).success,
      true
    );
    assert.equal(
      offerLeadFormSchema.safeParse({ ...ready, listed_with_agent: 'maybe' }).success,
      false
    );
    assert.equal(leadApiSchema.safeParse(shortOffer).success, true);
    assert.equal(
      leadApiSchema.safeParse({ ...shortOffer, listed_with_agent: 'yes' }).success,
      true
    );
    assert.equal(
      leadApiSchema.safeParse({ ...shortOffer, listed_with_agent: 'maybe' }).success,
      false
    );
    assert.equal(
      leadFormSchema.safeParse({
        ...shortOffer,
        phone: '+1',
        city: 'Auburn',
        condition: 'as-is',
        timeframe: 'asap',
        preferredContact: 'call',
      }).success,
      true
    );
  });

  it('requires a real email and checked consent on offer forms only', () => {
    const offer = {
      ...shortOffer,
      email: 'ada@example.com',
      listed_with_agent: 'no' as const,
      sms_consent: true,
    };
    assert.equal(offerLeadFormSchema.safeParse(offer).success, true);
    assert.equal(offerLeadFormSchema.safeParse({ ...offer, email: '' }).success, false);
    assert.equal(offerLeadFormSchema.safeParse({ ...offer, email: 'not-an-email' }).success, false);
    assert.equal(offerLeadFormSchema.safeParse({ ...offer, sms_consent: false }).success, false);
    const missingConsent = offerLeadFormSchema.safeParse({ ...offer, sms_consent: false });
    assert.equal(missingConsent.success, false);
    if (!missingConsent.success) {
      assert.equal(
        missingConsent.error.issues.some((issue) => issue.path[0] === 'sms_consent'),
        true
      );
    }

    assert.equal(leadApiSchema.safeParse(shortOffer).success, true);
    assert.equal(
      leadFormSchema.safeParse({
        ...shortOffer,
        city: 'Auburn',
        condition: 'as-is',
        timeframe: 'asap',
        preferredContact: 'call',
      }).success,
      true
    );

    const apiOffer = { ...offer, sms_consent_text_version: SMS_CONSENT_TEXT_VERSION };
    assert.equal(offerLeadApiSchema.safeParse(apiOffer).success, true);
    assert.equal(offerLeadApiSchema.safeParse(offer).success, false);
    assert.equal(offerHeroLeadFormSchema.safeParse({ ...offer, email: '' }).success, true);
    assert.equal(offerHeroLeadFormSchema.safeParse({ ...offer, email: '   ' }).success, true);
    assert.equal(
      offerHeroLeadFormSchema.safeParse({ ...offer, email: 'not-an-email' }).success,
      false
    );
    const heroBlankEmail = {
      ...apiOffer,
      email: '',
    };
    assert.equal(offerHeroLeadApiSchema.safeParse(heroBlankEmail).success, true);
    assert.equal(isOfferHeroPath('/offer'), true);
    assert.equal(isOfferHeroPath('/offer/facebook'), true);
    assert.equal(isOfferHeroPath('/offer/fb'), true);
    assert.equal(isOfferHeroPath('/quiz'), true);
    assert.equal(isOfferHeroPath('/offer/quiz'), true);
    assert.equal(isOfferHeroPath('/offer/inherited'), false);
    assert.equal(
      leadSchemaForSubmission('google_ads_landing', '/offer').safeParse(heroBlankEmail).success,
      true
    );
    assert.equal(
      leadSchemaForSubmission('facebook_ads_eddie', '/offer/facebook').safeParse(heroBlankEmail)
        .success,
      true
    );
    assert.equal(
      leadSchemaForSubmission('google_ads_inherited', '/offer/inherited').safeParse(heroBlankEmail)
        .success,
      false
    );
    const heroMissingPhone = offerHeroLeadFormSchema.safeParse({ ...offer, phone: '' });
    assert.equal(heroMissingPhone.success, false);
    if (!heroMissingPhone.success) {
      assert.equal(
        heroMissingPhone.error.issues.find((issue) => issue.path[0] === 'phone')?.message,
        'Phone is required.'
      );
    }
    assert.equal(
      offerLeadApiSchema.safeParse({ ...apiOffer, sms_consent_text_version: 'old' }).success,
      false
    );
    assert.equal(offerLeadApiSchema.safeParse({ ...apiOffer, sms_consent: false }).success, false);

    assert.equal(
      leadSchemaForSubmission('google_ads_inherited', '/offer/inherited').safeParse(apiOffer)
        .success,
      true
    );
    assert.equal(leadSchemaForSubmission('website', '/offer').safeParse(shortOffer).success, false);
    assert.equal(
      leadSchemaForSubmission('website', '/contact').safeParse(shortOffer).success,
      true
    );
  });

  it('accepts seller quiz answers and still requires a phone', () => {
    const quizLead = {
      name: 'Ada Lovelace',
      phone: '(253) 555-0100',
      email: '',
      propertyAddress: '123 Main St, Auburn, WA',
      listed_with_agent: 'no' as const,
      listedWithAgent: 'no' as const,
      sms_consent: true,
      sms_consent_text_version: SMS_CONSENT_TEXT_VERSION,
      smsNonMarketingConsent: true,
      smsMarketingConsent: true,
      condition: 'Needs Major Repairs',
      timeline: 'As Fast as 7 Days',
      situation:
        'Condition: Needs Major Repairs. Timeline: As Fast as 7 Days. Listed: No — Not Listed. Realtor: No.',
      notes:
        'Condition: Needs Major Repairs. Timeline: As Fast as 7 Days. Listed: No — Not Listed. Realtor: No.',
      realtor_status: 'no' as const,
      src: 'fb',
    };

    for (const pagePath of ['/quiz', '/offer/quiz']) {
      const parsed = leadSchemaForSubmission('facebook_ads_eddie', pagePath).safeParse(quizLead);
      assert.equal(parsed.success, true, pagePath);
      if (!parsed.success) continue;
      assert.equal(parsed.data.condition, 'Needs Major Repairs');
      assert.equal(parsed.data.timeline, 'As Fast as 7 Days');
      assert.equal(parsed.data.listedWithAgent, 'no');
      assert.equal(parsed.data.listed_with_agent, 'no');
      assert.equal(parsed.data.realtor_status, 'no');
      assert.equal(parsed.data.email, '');

      const missingRealtor = leadSchemaForSubmission('facebook_ads_eddie', pagePath).safeParse({
        ...quizLead,
        realtor_status: undefined,
      });
      assert.equal(missingRealtor.success, false, pagePath);

      const listedWithRealtor = leadSchemaForSubmission('facebook_ads_eddie', pagePath).safeParse({
        ...quizLead,
        realtor_status: 'listed-or-realtor',
      });
      assert.equal(listedWithRealtor.success, false, pagePath);

      const expired = leadSchemaForSubmission('facebook_ads_eddie', pagePath).safeParse({
        ...quizLead,
        realtor_status: 'expired',
      });
      assert.equal(expired.success, true, pagePath);

      const missingPhone = leadSchemaForSubmission('facebook_ads_eddie', pagePath).safeParse({
        ...quizLead,
        phone: '',
      });
      assert.equal(missingPhone.success, false, pagePath);
      if (!missingPhone.success) {
        assert.equal(
          missingPhone.error.issues.find((issue) => issue.path[0] === 'phone')?.message,
          'Phone is required.'
        );
      }
    }
  });
});
