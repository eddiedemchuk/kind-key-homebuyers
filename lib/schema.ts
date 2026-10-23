import { z } from 'zod';
import { type FormOrigin, isOfferFormOrigin } from './form-origin';
import { isCompleteUsPhone } from './phone';
import { isSellerQuizPath } from './phones';
import { SELLER_QUIZ_CONDITIONS, SELLER_QUIZ_TIMELINES } from './seller-quiz';
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
  .string({ required_error: 'Phone is required.', invalid_type_error: 'Phone is required.' })
  .trim()
  .superRefine((val, ctx) => {
    if (!val) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: 'Phone is required.' });
      return;
    }
    if (!isCompleteUsPhone(val)) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: 'Enter a valid US phone number.' });
    }
  });

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
  condition: z.union([conditionSchema, z.enum(SELLER_QUIZ_CONDITIONS)]).optional(),
  /** Seller quiz step 2. The long site form still uses timeframe. */
  timeline: z.enum(SELLER_QUIZ_TIMELINES).optional(),
  /** Seller quiz summary so GoHighLevel receives every tap answer. */
  situation: z.string().trim().max(500).optional(),
  notes: z.string().trim().max(1000).optional(),
  timeframe: timeframeSchema.optional(),
  preferredContact: preferredContactSchema.optional(),
  /** Same yes/no as listed_with_agent. The quiz posts both names. */
  listedWithAgent: listedWithAgentSchema.optional(),
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

/** Situation offer pages. Email, phone, listing answer, and consent are required. */
export const offerLeadFormSchema = leadApiSchema.extend({
  phone: requiredPhoneSchema,
  email: requiredEmailSchema,
  listed_with_agent: listedWithAgentSchema,
  sms_consent: offerConsentSchema,
});

/** Two-step /offer hero. Email may be blank. Phone, listing answer, and consent stay required. */
const optionalOfferEmailSchema = z
  .string()
  .trim()
  .refine((value) => value === '' || z.string().email().safeParse(value).success, {
    message: 'Enter a valid email address.',
  });

export const offerHeroLeadFormSchema = offerLeadFormSchema.extend({
  email: optionalOfferEmailSchema,
});

const offerConsentApiFields = {
  sms_consent: z.literal(true, {
    errorMap: () => ({ message: SMS_CONSENT_REQUIRED_MESSAGE }),
  }),
  sms_consent_text_version: z.literal(SMS_CONSENT_TEXT_VERSION, {
    errorMap: () => ({ message: SMS_CONSENT_REQUIRED_MESSAGE }),
  }),
};

/** Server schema for situation /offer submissions. Consent must be the current text version. */
export const offerLeadApiSchema = offerLeadFormSchema.extend(offerConsentApiFields);

/** Server schema for the two-step hero on /offer and /offer/facebook. */
export const offerHeroLeadApiSchema = offerHeroLeadFormSchema.extend(offerConsentApiFields);

export function isOfferLeadSubmission(formOrigin: FormOrigin, pagePath: string): boolean {
  return (
    isOfferFormOrigin(formOrigin) ||
    pagePath === '/offer' ||
    pagePath.startsWith('/offer/') ||
    isSellerQuizPath(pagePath)
  );
}

/**
 * Paths that allow a blank email. /offer/fb is the internal rewrite of ?src=fb.
 * The seller quiz collects an optional email on the last step.
 */
export function isOfferHeroPath(pagePath: string): boolean {
  return (
    pagePath === '/offer' ||
    pagePath === '/offer/facebook' ||
    pagePath === '/offer/fb' ||
    isSellerQuizPath(pagePath)
  );
}

export function leadSchemaForSubmission(formOrigin: FormOrigin, pagePath: string) {
  if (!isOfferLeadSubmission(formOrigin, pagePath)) return leadApiSchema;
  return isOfferHeroPath(pagePath) ? offerHeroLeadApiSchema : offerLeadApiSchema;
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
export type OfferHeroLeadFormData = z.infer<typeof offerHeroLeadFormSchema>;
export type ExtendedLeadFormData = z.infer<typeof extendedLeadFormSchema>;
