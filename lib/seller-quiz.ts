import type { Metadata } from 'next';
import type { FormOrigin } from '@/lib/form-origin';
import { normalizeOfferSrc, offerFacebookVisitFromSearch } from '@/lib/offer-facebook-visit';
import { toE164 } from '@/lib/phone';
import { offerDisplayPhone, type DisplayPhone } from '@/lib/phones';
import { SMS_CONSENT_TEXT_VERSION } from '@/lib/sms-consent';

export const SELLER_QUIZ_CONDITIONS = [
  'Needs Major Repairs',
  'Needs Cosmetics / Updating',
  'Full of Stuff / Needs Cleanout',
  'Good Shape — Just Want a Fast Sale',
] as const;

export const SELLER_QUIZ_TIMELINES = [
  'As Fast as 7 Days',
  'Within 30 Days',
  '1–3 Months',
  'Just Exploring Options',
] as const;

export const SELLER_QUIZ_LISTED_OPTIONS = [
  { value: 'no', label: 'No — Not Listed' },
  { value: 'yes', label: 'Yes — Currently Listed' },
] as const;

export const SELLER_QUIZ_QUESTIONS = {
  1: 'What condition is the property in?',
  2: 'How soon would you like to close?',
  3: 'Is the property currently listed with a real estate agent?',
  4: 'Where should we send your cash offer?',
} as const;

export type SellerQuizCondition = (typeof SELLER_QUIZ_CONDITIONS)[number];
export type SellerQuizTimeline = (typeof SELLER_QUIZ_TIMELINES)[number];
export type SellerQuizListed = (typeof SELLER_QUIZ_LISTED_OPTIONS)[number]['value'];
export type SellerQuizStep = 1 | 2 | 3 | 4;

export interface SellerQuizAnswers {
  condition: SellerQuizCondition | null;
  timeline: SellerQuizTimeline | null;
  listedWithAgent: SellerQuizListed | null;
}

export interface SellerQuizState {
  step: SellerQuizStep;
  answers: SellerQuizAnswers;
}

export const initialSellerQuizState: SellerQuizState = {
  step: 1,
  answers: {
    condition: null,
    timeline: null,
    listedWithAgent: null,
  },
};

export function sellerQuizStepLabel(step: SellerQuizStep): string {
  return `Step ${step} of 4`;
}

export function sellerQuizProgress(step: SellerQuizStep): number {
  return (step / 4) * 100;
}

export function chooseQuizCondition(
  state: SellerQuizState,
  condition: SellerQuizCondition
): SellerQuizState {
  return { step: 2, answers: { ...state.answers, condition } };
}

export function chooseQuizTimeline(
  state: SellerQuizState,
  timeline: SellerQuizTimeline
): SellerQuizState {
  return { step: 3, answers: { ...state.answers, timeline } };
}

export function chooseQuizListed(
  state: SellerQuizState,
  listedWithAgent: SellerQuizListed
): SellerQuizState {
  return { step: 4, answers: { ...state.answers, listedWithAgent } };
}

/** Previous step. Selections already stored on the state stay in place. */
export function goBackQuiz(state: SellerQuizState): SellerQuizState {
  if (state.step === 1) return state;
  return { ...state, step: (state.step - 1) as SellerQuizStep };
}

/** Jump back to the first question without clearing the three answers. */
export function editQuizAnswers(state: SellerQuizState): SellerQuizState {
  return { ...state, step: 1 };
}

export function listedOptionLabel(value: SellerQuizListed): string {
  return SELLER_QUIZ_LISTED_OPTIONS.find((option) => option.value === value)?.label ?? value;
}

export function quizAnswerSummary(answers: {
  condition: string;
  timeline: string;
  listedWithAgent: SellerQuizListed;
}): string {
  return `Condition: ${answers.condition}. Timeline: ${answers.timeline}. Listed: ${listedOptionLabel(answers.listedWithAgent)}.`;
}

export interface QuizLeadAttribution {
  formOrigin: Extract<FormOrigin, 'facebook_ads_eddie' | 'google_ads_landing'>;
  /** Present for a Facebook quiz visit, including the default when the URL has no src. */
  src?: string;
  facebook: boolean;
  phone: DisplayPhone;
}

/**
 * Quiz pages default to the Facebook offer number and Facebook Leads (Eddie).
 * An explicit src other than fb or fb_static keeps the Google Ads number and source.
 */
export function quizLeadAttribution(pathname: string, search: string): QuizLeadAttribution {
  const phone = offerDisplayPhone(pathname, search);
  const query = search.startsWith('?') ? search.slice(1) : search;
  const rawSrc = (new URLSearchParams(query).get('src') ?? '').trim();
  const explicitNonFacebook = rawSrc !== '' && normalizeOfferSrc(rawSrc) === null;

  if (explicitNonFacebook) {
    return {
      formOrigin: 'google_ads_landing',
      src: rawSrc,
      facebook: false,
      phone,
    };
  }

  const visit = offerFacebookVisitFromSearch(search);
  return {
    formOrigin: 'facebook_ads_eddie',
    src: visit ? visit.src : 'fb',
    facebook: true,
    phone,
  };
}

export interface SellerQuizLeadInput {
  condition: SellerQuizCondition;
  timeline: SellerQuizTimeline;
  listedWithAgent: SellerQuizListed;
  propertyAddress: string;
  name: string;
  phone: string;
  email?: string;
  src?: string;
  formOrigin: FormOrigin;
  pagePath: string;
  recaptchaToken?: string;
  attribution?: Record<string, string>;
}

/** JSON body posted to the same /api/lead route the offer form uses. */
export function buildSellerQuizLeadBody(input: SellerQuizLeadInput): Record<string, unknown> {
  const summary = quizAnswerSummary(input);
  return {
    ...input.attribution,
    propertyAddress: input.propertyAddress.trim(),
    name: input.name.trim(),
    phone: toE164(input.phone),
    email: (input.email ?? '').trim(),
    listedWithAgent: input.listedWithAgent,
    listed_with_agent: input.listedWithAgent,
    timeline: input.timeline,
    condition: input.condition,
    situation: summary,
    notes: summary,
    reasonForSelling: summary,
    ...(input.src !== undefined ? { src: input.src } : {}),
    form_origin: input.formOrigin,
    pagePath: input.pagePath,
    sms_consent: true,
    sms_consent_text_version: SMS_CONSENT_TEXT_VERSION,
    smsNonMarketingConsent: true,
    smsMarketingConsent: true,
    ...(input.recaptchaToken ? { recaptchaToken: input.recaptchaToken } : {}),
  };
}

export const sellerQuizMetadata: Metadata = {
  title: 'Get Your Cash Offer | KindKey Home Buyers',
  description:
    'Answer four quick questions for a cash offer from KindKey Home Buyers LLC, a local cash home buyer in King, Pierce, and Kitsap County. Close in 7 Days.',
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
    },
  },
};
