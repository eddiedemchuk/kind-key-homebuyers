import { z } from 'zod';

const optionalPhoneSchema = z.string().refine(
  (val) => {
    const v = (val ?? '').trim();
    if (v === '' || v === '+1') return true;
    return /^\+1\(\d{3}\) \d{3}-\d{4}$/.test(v);
  },
  { message: 'Invalid phone number format. Use +1(XXX) XXX-XXXX or leave blank.' }
);

const requiredPhoneSchema = z
  .string()
  .regex(/^\+1\(\d{3}\) \d{3}-\d{4}$/, 'Enter a valid phone number.');

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
});

export const leadFormSchema = leadApiSchema.extend({
  city: z.string().min(2).max(100),
  condition: conditionSchema,
  timeframe: timeframeSchema,
  preferredContact: preferredContactSchema,
});

/** Paid-ads short form. Phone and the listing question are required here. */
export const offerLeadFormSchema = leadApiSchema.extend({
  phone: requiredPhoneSchema,
  listed_with_agent: listedWithAgentSchema,
});

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
