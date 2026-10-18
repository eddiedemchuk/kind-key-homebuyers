import { GHL_BASE_TAG } from '@/lib/attribution';

/**
 * Which form created the lead. The server accepts only these values.
 * Anything else is treated as the regular website form.
 */
export const FORM_ORIGINS = [
  'website',
  'google_ads_landing',
  'facebook_ads_landing',
  'google_ads_foreclosure',
  'google_ads_inherited',
  'google_ads_as_is',
] as const;

export type FormOrigin = (typeof FORM_ORIGINS)[number];

export interface FormOriginLabel {
  source: 'Website' | 'Google Ads' | 'Facebook Ads';
  leadSource: 'Website' | 'Google Ads' | 'Facebook Ads';
  sourceTag: 'website' | 'google ads' | 'facebook ads';
  tags: string;
  formName: string;
}

const FORM_ORIGIN_LABELS: Record<FormOrigin, FormOriginLabel> = {
  website: {
    source: 'Website',
    leadSource: 'Website',
    sourceTag: 'website',
    tags: `${GHL_BASE_TAG}, website`,
    formName: 'Website Form',
  },
  google_ads_landing: {
    source: 'Google Ads',
    leadSource: 'Google Ads',
    sourceTag: 'google ads',
    tags: `${GHL_BASE_TAG}, google ads`,
    formName: 'Google Ads Landing Page',
  },
  facebook_ads_landing: {
    source: 'Facebook Ads',
    leadSource: 'Facebook Ads',
    sourceTag: 'facebook ads',
    tags: `${GHL_BASE_TAG}, facebook ads`,
    formName: 'Facebook Ads Landing Page',
  },
  google_ads_foreclosure: {
    source: 'Google Ads',
    leadSource: 'Google Ads',
    sourceTag: 'google ads',
    tags: `${GHL_BASE_TAG}, google ads, foreclosure`,
    formName: 'Google Ads Foreclosure Page',
  },
  google_ads_inherited: {
    source: 'Google Ads',
    leadSource: 'Google Ads',
    sourceTag: 'google ads',
    tags: `${GHL_BASE_TAG}, google ads, inherited`,
    formName: 'Google Ads Inherited Page',
  },
  google_ads_as_is: {
    source: 'Google Ads',
    leadSource: 'Google Ads',
    sourceTag: 'google ads',
    tags: `${GHL_BASE_TAG}, google ads, as-is`,
    formName: 'Google Ads As-Is Page',
  },
};

/** Returns the allowlisted origin, or `website` when the client value is missing or unknown. */
export function resolveFormOrigin(value: unknown): FormOrigin {
  if (typeof value !== 'string') return 'website';
  return (FORM_ORIGINS as readonly string[]).includes(value) ? (value as FormOrigin) : 'website';
}

export function formOriginLabel(origin: FormOrigin): FormOriginLabel {
  return FORM_ORIGIN_LABELS[origin];
}
