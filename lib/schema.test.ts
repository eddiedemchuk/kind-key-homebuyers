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
    assert.equal(offerLeadFormSchema.safeParse({ ...shortOffer, phone: '+1' }).success, false);
    assert.equal(offerLeadFormSchema.safeParse(shortOffer).success, true);
    assert.equal(leadApiSchema.safeParse({ ...shortOffer, phone: '' }).success, true);
  });
});
