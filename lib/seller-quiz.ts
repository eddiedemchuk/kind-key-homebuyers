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

/** Asked immediately before the name and phone step. */
export const SELLER_QUIZ_REALTOR_OPTIONS = [
  { value: 'no', label: 'No' },
  { value: 'listed-or-realtor', label: "Yes, it's listed or I have a realtor" },
  { value: 'expired', label: 'It was listed but expired' },
] as const;

/** Answers that continue to the contact step and a GoHighLevel submit. */
export const SELLER_QUIZ_QUALIFYING_REALTOR = ['no', 'expired'] as const;

export const SELLER_QUIZ_STEP_COUNT = 5;

export const SELLER_QUIZ_QUESTIONS = {
  1: 'What condition is the property in?',
  2: 'How soon would you like to close?',
  3: 'Is the property currently listed with a real estate agent?',
  4: 'Is the home listed or are you working with a realtor?',
  5: 'Where should we send your cash offer?',
} as const;

export type SellerQuizCondition = (typeof SELLER_QUIZ_CONDITIONS)[number];
export type SellerQuizTimeline = (typeof SELLER_QUIZ_TIMELINES)[number];
export type SellerQuizListed = (typeof SELLER_QUIZ_LISTED_OPTIONS)[number]['value'];
export type SellerQuizRealtor = (typeof SELLER_QUIZ_REALTOR_OPTIONS)[number]['value'];
export type SellerQuizQualifyingRealtor = (typeof SELLER_QUIZ_QUALIFYING_REALTOR)[number];
export type SellerQuizStep = 1 | 2 | 3 | 4 | 5;
export type SellerQuizOutcome = 'quiz' | 'not-a-fit';

export interface SellerQuizAnswers {
  condition: SellerQuizCondition | null;
  timeline: SellerQuizTimeline | null;
  listedWithAgent: SellerQuizListed | null;
  realtorStatus: SellerQuizRealtor | null;
}

export interface SellerQuizState {
  step: SellerQuizStep;
  outcome: SellerQuizOutcome;
  answers: SellerQuizAnswers;
}

export const initialSellerQuizState: SellerQuizState = {
  step: 1,
  outcome: 'quiz',
  answers: {
    condition: null,
    timeline: null,
    listedWithAgent: null,
    realtorStatus: null,
  },
};

export function sellerQuizStepLabel(step: SellerQuizStep): string {
  return `Step ${step} of ${SELLER_QUIZ_STEP_COUNT}`;
}

export function sellerQuizProgress(step: SellerQuizStep): number {
  return (step / SELLER_QUIZ_STEP_COUNT) * 100;
}

/** "Yes, it's listed or I have a realtor" is not submitted. */
export function isDisqualifyingRealtor(value: SellerQuizRealtor | null | undefined): boolean {
  return value === 'listed-or-realtor';
}

export function isQualifyingRealtor(value: unknown): value is SellerQuizQualifyingRealtor {
  return value === 'no' || value === 'expired';
}

export function chooseQuizCondition(
  state: SellerQuizState,
  condition: SellerQuizCondition
): SellerQuizState {
  return { step: 2, outcome: 'quiz', answers: { ...state.answers, condition } };
}

export function chooseQuizTimeline(
  state: SellerQuizState,
  timeline: SellerQuizTimeline
): SellerQuizState {
  return { step: 3, outcome: 'quiz', answers: { ...state.answers, timeline } };
}

export function chooseQuizListed(
  state: SellerQuizState,
  listedWithAgent: SellerQuizListed
): SellerQuizState {
  return { step: 4, outcome: 'quiz', answers: { ...state.answers, listedWithAgent } };
}

/**
 * Qualifying answers continue to name and phone.
 * "Yes, it's listed or I have a realtor" stops on the not-a-fit page.
 */
export function chooseQuizRealtor(
  state: SellerQuizState,
  realtorStatus: SellerQuizRealtor
): SellerQuizState {
  const answers = { ...state.answers, realtorStatus };
  if (isDisqualifyingRealtor(realtorStatus)) {
    return { step: 4, outcome: 'not-a-fit', answers };
  }
  return { step: 5, outcome: 'quiz', answers };
}

/** Previous step. Selections already stored on the state stay in place. */
export function goBackQuiz(state: SellerQuizState): SellerQuizState {
  if (state.outcome === 'not-a-fit') {
    return { ...state, outcome: 'quiz' };
  }
  if (state.step === 1) return state;
  return { ...state, outcome: 'quiz', step: (state.step - 1) as SellerQuizStep };
}

/** Jump back to the first question without clearing stored answers. */
export function editQuizAnswers(state: SellerQuizState): SellerQuizState {
  return { ...state, step: 1, outcome: 'quiz' };
}

/** Contact step with a qualifying realtor answer. Disqualified visits never submit. */
export function shouldSubmitQuizLead(state: SellerQuizState): state is SellerQuizState & {
  outcome: 'quiz';
  step: 5;
  answers: {
    condition: SellerQuizCondition;
    timeline: SellerQuizTimeline;
    listedWithAgent: SellerQuizListed;
    realtorStatus: SellerQuizQualifyingRealtor;
  };
} {
  const { condition, timeline, listedWithAgent, realtorStatus } = state.answers;
  return (
    state.outcome === 'quiz' &&
    state.step === 5 &&
    condition !== null &&
    timeline !== null &&
    listedWithAgent !== null &&
    isQualifyingRealtor(realtorStatus)
  );
}

export function listedOptionLabel(value: SellerQuizListed): string {
  return SELLER_QUIZ_LISTED_OPTIONS.find((option) => option.value === value)?.label ?? value;
}

export function realtorOptionLabel(value: SellerQuizRealtor): string {
  return SELLER_QUIZ_REALTOR_OPTIONS.find((option) => option.value === value)?.label ?? value;
}

/** Label for a qualifying realtor answer. Disqualified values return null and are not submitted. */
export function qualifyingRealtorLabel(value: unknown): string | null {
  if (!isQualifyingRealtor(value as SellerQuizRealtor)) return null;
  return realtorOptionLabel(value as SellerQuizRealtor);
}

export function quizAnswerSummary(answers: {
  condition: string;
  timeline: string;
  listedWithAgent: SellerQuizListed;
  realtorStatus: SellerQuizQualifyingRealtor;
}): string {
  return `Condition: ${answers.condition}. Timeline: ${answers.timeline}. Listed: ${listedOptionLabel(answers.listedWithAgent)}. Realtor: ${realtorOptionLabel(answers.realtorStatus)}.`;
}

export function sellerQuizNotAFitMessage(phoneDisplay: string): string {
  return `Thanks! Based on your answers, we may not be the best fit right now, but feel free to call us at ${phoneDisplay}.`;
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
  realtorStatus: SellerQuizQualifyingRealtor;
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
    realtor_status: input.realtorStatus,
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
    'Answer five quick questions for a cash offer from KindKey Home Buyers LLC, a local cash home buyer in King, Pierce, and Kitsap County. Close in 7 Days.',
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
    },
  },
};
