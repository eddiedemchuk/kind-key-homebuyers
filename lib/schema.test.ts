import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { leadApiSchema, leadFormSchema, offerLeadFormSchema } from './schema';

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
    const withAnswer = { ...shortOffer, listed_with_agent: 'no' as const };
    assert.equal(offerLeadFormSchema.safeParse({ ...withAnswer, phone: '+1' }).success, false);
    assert.equal(offerLeadFormSchema.safeParse(withAnswer).success, true);
    assert.equal(leadApiSchema.safeParse({ ...shortOffer, phone: '' }).success, true);
  });

  it('requires a yes or no listing answer on the offer form only', () => {
    assert.equal(offerLeadFormSchema.safeParse(shortOffer).success, false);
    assert.equal(
      offerLeadFormSchema.safeParse({ ...shortOffer, listed_with_agent: 'yes' }).success,
      true
    );
    assert.equal(
      offerLeadFormSchema.safeParse({ ...shortOffer, listed_with_agent: 'no' }).success,
      true
    );
    assert.equal(
      offerLeadFormSchema.safeParse({ ...shortOffer, listed_with_agent: 'maybe' }).success,
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
});
