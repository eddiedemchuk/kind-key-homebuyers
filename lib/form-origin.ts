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
  'google_ads_fire_damage',
  'facebook_ads_eddie',
] as const;

export type FormOrigin = (typeof FORM_ORIGINS)[number];

export interface FormOriginLabel {
  source: 'Website' | 'Google Ads' | 'Facebook Ads' | 'Facebook Leads (Eddie)';
  leadSource: 'Website' | 'Google Ads' | 'Facebook Ads' | 'Facebook Leads (Eddie)';
  sourceTag: 'website' | 'google ads' | 'facebook ads' | 'Facebook Leads (Eddie)';
  /** Situation tag added beside the source tag. Empty on the website form and Facebook forms. */
  pageTag: string;
  tags: string;
  formName: string;
}

const FORM_ORIGIN_LABELS: Record<FormOrigin, FormOriginLabel> = {
  website: {
    source: 'Website',
    leadSource: 'Website',
    sourceTag: 'website',
    pageTag: '',
    tags: `${GHL_BASE_TAG}, website`,
    formName: 'Website Form',
  },
  google_ads_landing: {
    source: 'Google Ads',
    leadSource: 'Google Ads',
    sourceTag: 'google ads',
    pageTag: 'general',
    tags: `${GHL_BASE_TAG}, google ads, general`,
    formName: 'Google Ads Landing Page',
  },
  facebook_ads_landing: {
    source: 'Facebook Ads',
    leadSource: 'Facebook Ads',
    sourceTag: 'facebook ads',
    pageTag: '',
    tags: `${GHL_BASE_TAG}, facebook ads`,
    formName: 'Facebook Ads Landing Page',
  },
  google_ads_foreclosure: {
    source: 'Google Ads',
    leadSource: 'Google Ads',
    sourceTag: 'google ads',
    pageTag: 'foreclosure',
    tags: `${GHL_BASE_TAG}, google ads, foreclosure`,
    formName: 'Google Ads Foreclosure Page',
  },
  google_ads_inherited: {
    source: 'Google Ads',
    leadSource: 'Google Ads',
    sourceTag: 'google ads',
    pageTag: 'inherited',
    tags: `${GHL_BASE_TAG}, google ads, inherited`,
    formName: 'Google Ads Inherited Page',
  },
  google_ads_as_is: {
    source: 'Google Ads',
    leadSource: 'Google Ads',
    sourceTag: 'google ads',
    pageTag: 'as-is',
    tags: `${GHL_BASE_TAG}, google ads, as-is`,
    formName: 'Google Ads As-Is Page',
  },
  google_ads_fire_damage: {
    source: 'Google Ads',
    leadSource: 'Google Ads',
    sourceTag: 'google ads',
    pageTag: 'fire damage',
    tags: `${GHL_BASE_TAG}, google ads, fire damage`,
    formName: 'Google Ads Fire Damage Page',
  },
  facebook_ads_eddie: {
    source: 'Facebook Leads (Eddie)',
    leadSource: 'Facebook Leads (Eddie)',
    sourceTag: 'Facebook Leads (Eddie)',
    pageTag: '',
    tags: `${GHL_BASE_TAG}, Facebook Leads (Eddie)`,
    formName: 'Facebook Leads (Eddie) Landing Page',
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
