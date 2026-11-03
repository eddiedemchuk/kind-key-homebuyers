import { z } from 'zod';
import { type FormOrigin, isOfferFormOrigin } from './form-origin';
import { isCompleteUsPhone } from './phone';
import { isSellerQuizPath } from './phones';
import {
  SELL_CONDITIONS,
  SELL_LISTED_OPTIONS,
  SELL_OWNER_OPTIONS,
  SELL_TIMELINES,
} from './sell-funnel';
import {
  SELLER_QUIZ_CONDITIONS,
  SELLER_QUIZ_QUALIFYING_REALTOR,
  SELLER_QUIZ_TIMELINES,
} from './seller-quiz';
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
  /**
   * Seller quiz realtor answer. Only qualifying values are accepted.
   * "Yes, it's listed or I have a realtor" is not a lead and is rejected.
   */
  realtor_status: z.enum(SELLER_QUIZ_QUALIFYING_REALTOR).optional(),
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

/**
 * General /offer form: address, listing answer, name, and phone.
 * Email and the consent checkbox are not on that page. /offer/facebook keeps both.
 */
export const offerTrimmedLeadFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  phone: requiredPhoneSchema,
  propertyAddress: z.string().min(5, 'Address is required').max(200),
  listed_with_agent: listedWithAgentSchema,
  email: optionalOfferEmailSchema.optional(),
});

export const offerTrimmedLeadApiSchema = leadApiSchema.extend({
  phone: requiredPhoneSchema,
  email: optionalOfferEmailSchema.optional(),
  listed_with_agent: listedWithAgentSchema,
});

const sellOwnerSchema = z.enum([
  SELL_OWNER_OPTIONS[0].value,
  SELL_OWNER_OPTIONS[1].value,
  SELL_OWNER_OPTIONS[2].value,
]);

const sellListedSchema = z.enum([
  SELL_LISTED_OPTIONS[0].value,
  SELL_LISTED_OPTIONS[1].value,
  SELL_LISTED_OPTIONS[2].value,
]);

/** /sell final step. Listed-now may omit condition and timeline and must not be a hot lead. */
export const sellLeadApiSchema = offerHeroLeadApiSchema
  .extend({
    condition: z.enum(SELL_CONDITIONS).optional(),
    timeline: z.enum(SELL_TIMELINES).optional(),
    first_name: z.string().trim().min(1, 'First name is required.').max(50),
    last_name: z.string().trim().min(1, 'Last name is required.').max(50),
    owner_status: sellOwnerSchema,
    sell_listed: sellListedSchema,
    county: z.string().trim().max(80).optional(),
    out_of_area: z.boolean().optional(),
    hot_lead: z.boolean().optional(),
  })
  .superRefine((value, ctx) => {
    if (value.sell_listed === 'listed-now') {
      if (value.hot_lead !== false) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ['hot_lead'],
          message: 'A listed home is not submitted as a hot lead.',
        });
      }
      if (value.listed_with_agent !== 'yes') {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ['listed_with_agent'],
          message: 'Choose whether the home is listed.',
        });
      }
      return;
    }
    if (value.listed_with_agent !== 'no') {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['listed_with_agent'],
        message: 'Choose whether the home is listed.',
      });
    }
    if (!value.condition) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['condition'],
        message: 'Choose the property condition.',
      });
    }
    if (!value.timeline) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['timeline'],
        message: 'Choose a timeline.',
      });
    }
  });

export function isTrimmedOfferPath(pagePath: string): boolean {
  return pagePath === '/offer' || pagePath === '/offer/fb';
}

export function isOfferLeadSubmission(formOrigin: FormOrigin, pagePath: string): boolean {
  return (
    isOfferFormOrigin(formOrigin) ||
    pagePath === '/offer' ||
    pagePath.startsWith('/offer/') ||
    pagePath === '/sell' ||
    isSellerQuizPath(pagePath)
  );
}

/**
 * Paths that allow a blank email. /offer/fb is the internal rewrite of ?src=fb.
 * The seller quiz and /sell collect an optional email on the last step.
 */
export function isOfferHeroPath(pagePath: string): boolean {
  return (
    pagePath === '/offer' ||
    pagePath === '/offer/facebook' ||
    pagePath === '/offer/fb' ||
    pagePath === '/sell' ||
    isSellerQuizPath(pagePath)
  );
}

export function leadSchemaForSubmission(formOrigin: FormOrigin, pagePath: string) {
  if (pagePath === '/sell') return sellLeadApiSchema;
  if (isTrimmedOfferPath(pagePath)) return offerTrimmedLeadApiSchema;

  const base = !isOfferLeadSubmission(formOrigin, pagePath)
    ? leadApiSchema
    : isOfferHeroPath(pagePath)
      ? offerHeroLeadApiSchema
      : offerLeadApiSchema;

  if (!isSellerQuizPath(pagePath)) return base;

  return base.superRefine((value, ctx) => {
    if (value.realtor_status !== 'no' && value.realtor_status !== 'expired') {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['realtor_status'],
        message: 'Please tell us whether the home is listed.',
      });
    }
  });
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
export type OfferTrimmedLeadFormData = z.infer<typeof offerTrimmedLeadFormSchema>;
export type ExtendedLeadFormData = z.infer<typeof extendedLeadFormSchema>;
