import { z } from 'zod';
import { type FormOrigin, isOfferFormOrigin } from './form-origin';
import { isCompleteUsPhone } from './phone';
import { SMS_CONSENT_REQUIRED_MESSAGE, SMS_CONSENT_TEXT_VERSION } from './sms-consent';

const optionalPhoneSchema = z.string().refine(
  (val) => {
    const v = (val ?? '').trim();
    if (v === '' || v === '+1') return true;
    return isCompleteUsPhone(v);
  },
  { message: 'Enter a valid US phone number, or leave this blank.' }
);

const requiredPhoneSchema = z
  .string()
  .refine((val) => isCompleteUsPhone(val), { message: 'Enter a valid US phone number.' });

const optionalCitySchema = z.union([z.string().trim().min(2).max(100), z.literal('')]).optional();

const conditionSchema = z.enum(['as-is', 'cosmetic', 'major-repair'], {
  required_error: 'Please select property condition',
});

const timeframeSchema = z.enum(['asap', '7-14-days', '30-plus'], {
  required_error: 'Please select timeframe',
});

const preferredContactSchema = z.enum(['call', 'sms', 'email'], {
  required_error: 'Please select a contact method',
});

const listedWithAgentSchema = z.enum(['yes', 'no'], {
  required_error: 'Please choose yes or no.',
  invalid_type_error: 'Please choose yes or no.',
});

/**
 * API schema. City, condition, timeframe, and preferred contact are optional so
 * the /offer short form can submit without inventing answers. The full-site
 * form still requires those fields through leadFormSchema.
 */
export const leadApiSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  phone: optionalPhoneSchema,
  email: z
    .union([z.string().email('Invalid email address'), z.string().length(0), z.undefined()])
    .optional(),
  reasonForSelling: z.string().optional(),
  propertyAddress: z.string().min(5, 'Address is required').max(200),
  city: optionalCitySchema,
  condition: conditionSchema.optional(),
  timeframe: timeframeSchema.optional(),
  preferredContact: preferredContactSchema.optional(),
  smsNonMarketingConsent: z.boolean().default(false),
  smsMarketingConsent: z.boolean().default(false),
  /** Optional so website forms can omit it. The /offer form requires yes or no. */
  listed_with_agent: listedWithAgentSchema.optional(),
  recaptchaToken: z.string().optional(),
  /** Optional src from /offer. Facebook visits send fb, fb_static, or an empty string. */
  src: z.string().trim().max(40).optional(),
});

export const leadFormSchema = leadApiSchema.extend({
  city: z.string().min(2).max(100),
  condition: conditionSchema,
  timeframe: timeframeSchema,
  preferredContact: preferredContactSchema,
});

const requiredEmailSchema = z
  .string({ required_error: 'Email is required.', invalid_type_error: 'Email is required.' })
  .trim()
  .min(1, 'Email is required.')
  .email('Enter a valid email address.');

const offerConsentSchema = z
  .boolean()
  .refine((value) => value === true, { message: SMS_CONSENT_REQUIRED_MESSAGE });

/** Paid-ads short form. Email, phone, listing answer, and consent are required. */
export const offerLeadFormSchema = leadApiSchema.extend({
  phone: requiredPhoneSchema,
  email: requiredEmailSchema,
  listed_with_agent: listedWithAgentSchema,
  sms_consent: offerConsentSchema,
});

/** Server schema for /offer submissions. Consent must be the current text version. */
export const offerLeadApiSchema = offerLeadFormSchema.extend({
  sms_consent: z.literal(true, {
    errorMap: () => ({ message: SMS_CONSENT_REQUIRED_MESSAGE }),
  }),
  sms_consent_text_version: z.literal(SMS_CONSENT_TEXT_VERSION, {
    errorMap: () => ({ message: SMS_CONSENT_REQUIRED_MESSAGE }),
  }),
});

export function isOfferLeadSubmission(formOrigin: FormOrigin, pagePath: string): boolean {
  return isOfferFormOrigin(formOrigin) || pagePath === '/offer' || pagePath.startsWith('/offer/');
}

export function leadSchemaForSubmission(formOrigin: FormOrigin, pagePath: string) {
  return isOfferLeadSubmission(formOrigin, pagePath) ? offerLeadApiSchema : leadApiSchema;
}

export const extendedLeadFormSchema = leadFormSchema.extend({
  propertyType: z.string().optional(),
  bedrooms: z.string().optional(),
  bathrooms: z.string().optional(),
  squareFeet: z.string().optional(),
  desiredPrice: z.string().optional(),
  photos: z.string().optional(),
  notes: z.string().max(1000).optional(),
});

export type LeadFormData = z.infer<typeof leadFormSchema>;
export type OfferLeadFormData = z.infer<typeof offerLeadFormSchema>;
export type ExtendedLeadFormData = z.infer<typeof extendedLeadFormSchema>;
