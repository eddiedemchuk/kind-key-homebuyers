import type { Metadata } from 'next';
import { quizSubmitFields } from '@/lib/seller-quiz';
import { toE164 } from '@/lib/phone';
import { FACEBOOK_ADS_PHONE, FACEBOOK_OFFER_PHONE, type DisplayPhone } from '@/lib/phones';
import { SMS_CONSENT_TEXT_VERSION } from '@/lib/sms-consent';
import type { ServiceAreaStatus } from '@/lib/sell-geocode';

export const SELL_PATH = '/sell';
export const SELL_STEP_COUNT = 6;
export const SELL_TRACKING_STORAGE_KEY = 'kk_sell_tracking';

/** Tap-to-call on every /sell surface, including the thank-you button. */
export const SELL_CALL_PHONE: DisplayPhone = FACEBOOK_OFFER_PHONE;

/** Number Eddie or Angie call from. It is not the tap-to-call line. */
export const SELL_CALLER_ID_PHONE: DisplayPhone = FACEBOOK_ADS_PHONE;

export const SELL_HEADLINE = 'Get a cash offer on your house - as-is';
export const SELL_SUBHEAD = 'Local Auburn buyer. Takes 60 seconds. No obligation.';
export const SELL_EDDIE_LINE = "Hi, I'm Eddie, owner of KindKey in Auburn.";
export const SELL_ADDRESS_BUTTON = 'See My Offer Options';
export const SELL_CONFIRM_OK = "That's correct";
export const SELL_CONFIRM_EDIT = 'Edit address';
export const SELL_OUT_OF_AREA_MESSAGE =
  'We mostly buy in King, Pierce, and Kitsap County. We can still take your info and tell you if this address is a fit.';
export const SELL_LISTED_NOW_MESSAGE =
  "We'll check in. A home that's listed right now is a different conversation. Leave your name and mobile, and Eddie or Angie will follow up.";
export const SELL_TIMELINE_NOTE = 'Any timeline works.';
export const SELL_CONTACT_BUTTON = 'Get My Cash Offer';
export const SELL_CONTACT_REASSURANCE = 'No obligation. We never share your info.';

export const SELL_OWNER_OPTIONS = [
  { value: 'yes', label: 'Yes' },
  { value: 'helping', label: 'No, helping the owner' },
  { value: 'agent', label: "I'm a real estate agent" },
] as const;

export const SELL_LISTED_OPTIONS = [
  { value: 'no', label: 'No' },
  { value: 'expired', label: 'It was listed but expired or cancelled' },
  { value: 'listed-now', label: 'Yes, listed now' },
] as const;

export const SELL_CONDITIONS = [
  'Needs major repairs',
  'Needs updating',
  'Full of stuff',
  'Good shape',
] as const;

export const SELL_TIMELINES = ['ASAP', '2-4 weeks', '1-3 months', 'Just exploring'] as const;

export type SellOwner = (typeof SELL_OWNER_OPTIONS)[number]['value'];
export type SellListed = (typeof SELL_LISTED_OPTIONS)[number]['value'];
export type SellCondition = (typeof SELL_CONDITIONS)[number];
export type SellTimeline = (typeof SELL_TIMELINES)[number];

/**
 * Address and the confirm screen share step 1. Owner through contact are 2–6.
 */
export type SellScreen =
  | 'address'
  | 'confirm'
  | 'owner'
  | 'listed'
  | 'condition'
  | 'timeline'
  | 'contact'
  | 'thanks';

export interface SellAnswers {
  address: string;
  county: string;
  state: string;
  city: string;
  lat: number | null;
  lng: number | null;
  areaStatus: ServiceAreaStatus;
  owner: SellOwner | null;
  listed: SellListed | null;
  condition: SellCondition | null;
  timeline: SellTimeline | null;
}

export interface SellState {
  screen: SellScreen;
  answers: SellAnswers;
}

export const initialSellAnswers: SellAnswers = {
  address: '',
  county: '',
  state: '',
  city: '',
  lat: null,
  lng: null,
  areaStatus: 'unknown',
  owner: null,
  listed: null,
  condition: null,
  timeline: null,
};

export const initialSellState: SellState = {
  screen: 'address',
  answers: initialSellAnswers,
};

export function sellProgressStep(screen: SellScreen): number | null {
  switch (screen) {
    case 'address':
    case 'confirm':
      return 1;
    case 'owner':
      return 2;
    case 'listed':
      return 3;
    case 'condition':
      return 4;
    case 'timeline':
      return 5;
    case 'contact':
      return 6;
    default:
      return null;
  }
}

export function sellStepLabel(screen: SellScreen): string | null {
  const step = sellProgressStep(screen);
  return step ? `Step ${step} of ${SELL_STEP_COUNT}` : null;
}

export function sellProgressPercent(screen: SellScreen): number {
  const step = sellProgressStep(screen);
  return step ? (step / SELL_STEP_COUNT) * 100 : 0;
}

export function sellThanksMessage(callerId = SELL_CALLER_ID_PHONE.display): string {
  return `Eddie or Angie will call you shortly from ${callerId}`;
}

export function ownerOptionLabel(value: SellOwner): string {
  return SELL_OWNER_OPTIONS.find((option) => option.value === value)?.label ?? value;
}

export function listedOptionLabel(value: SellListed): string {
  return SELL_LISTED_OPTIONS.find((option) => option.value === value)?.label ?? value;
}

export function isListedNow(value: SellListed | null | undefined): boolean {
  return value === 'listed-now';
}

export interface SellAddressSelection {
  address: string;
  county: string;
  state: string;
  city: string;
  lat: number | null;
  lng: number | null;
  areaStatus: ServiceAreaStatus;
}

export function chooseSellAddress(state: SellState, selection: SellAddressSelection): SellState {
  return {
    screen: 'confirm',
    answers: {
      ...state.answers,
      address: selection.address.trim(),
      county: selection.county.trim(),
      state: selection.state.trim(),
      city: selection.city.trim(),
      lat: selection.lat,
      lng: selection.lng,
      areaStatus: selection.areaStatus,
    },
  };
}

export function confirmSellAddress(state: SellState): SellState {
  return { ...state, screen: 'owner' };
}

export function editSellAddress(state: SellState): SellState {
  return { ...state, screen: 'address' };
}

export function chooseSellOwner(state: SellState, owner: SellOwner): SellState {
  return { screen: 'listed', answers: { ...state.answers, owner } };
}

/** Listed-now skips condition and timeline and still collects name and phone. */
export function chooseSellListed(state: SellState, listed: SellListed): SellState {
  if (listed === 'listed-now') {
    return {
      screen: 'contact',
      answers: { ...state.answers, listed, condition: null, timeline: null },
    };
  }
  return { screen: 'condition', answers: { ...state.answers, listed } };
}

export function chooseSellCondition(state: SellState, condition: SellCondition): SellState {
  return { screen: 'timeline', answers: { ...state.answers, condition } };
}

export function chooseSellTimeline(state: SellState, timeline: SellTimeline): SellState {
  return { screen: 'contact', answers: { ...state.answers, timeline } };
}

export function goBackSell(state: SellState): SellState {
  switch (state.screen) {
    case 'confirm':
      return { ...state, screen: 'address' };
    case 'owner':
      return { ...state, screen: 'confirm' };
    case 'listed':
      return { ...state, screen: 'owner' };
    case 'condition':
      return { ...state, screen: 'listed' };
    case 'timeline':
      return { ...state, screen: 'condition' };
    case 'contact':
      return { ...state, screen: state.answers.listed === 'listed-now' ? 'listed' : 'timeline' };
    default:
      return state;
  }
}

export function sellAnswerSummary(answers: {
  owner: SellOwner;
  listed: SellListed;
  condition: SellCondition | null;
  timeline: SellTimeline | null;
  county: string;
  areaStatus: ServiceAreaStatus;
}): string {
  const parts = [
    `Owner: ${ownerOptionLabel(answers.owner)}`,
    `Listed: ${listedOptionLabel(answers.listed)}`,
    answers.condition ? `Condition: ${answers.condition}` : '',
    answers.timeline ? `Timeline: ${answers.timeline}` : '',
    answers.county ? `County: ${answers.county}` : '',
    answers.areaStatus === 'out_of_area' ? 'Out of area' : '',
  ];
  return `${parts.filter(Boolean).join('. ')}.`;
}

const TRACKING_SIGNAL_KEYS = [
  'src',
  'fbclid',
  'gclid',
  'gbraid',
  'wbraid',
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
] as const;

export interface SellTrackingSnapshot {
  src: string;
  attribution: Record<string, string>;
}

export function searchHasSellTrackingSignal(search: string): boolean {
  const query = search.startsWith('?') ? search.slice(1) : search;
  const params = new URLSearchParams(query);
  return TRACKING_SIGNAL_KEYS.some((key) => (params.get(key) ?? '').trim() !== '');
}

/** Same fresh-touch rules as the seller quiz, including src=fb → utm_source=facebook. */
export function sellTrackingFromLanding(input: {
  pathname?: string;
  search: string;
  referrer?: string;
  capturedAt?: string;
}): SellTrackingSnapshot {
  const fields = quizSubmitFields({
    pathname: input.pathname ?? SELL_PATH,
    search: input.search,
    referrer: input.referrer,
    capturedAt: input.capturedAt,
  });
  return { src: fields.src, attribution: fields.attribution };
}

/**
 * A URL that carries src, a click id, or any UTM replaces the stored snapshot
 * and leaves missing fields blank. A URL with none of those keeps the session.
 */
export function resolveSellTracking(input: {
  pathname?: string;
  search: string;
  referrer?: string;
  stored?: SellTrackingSnapshot | null;
  capturedAt?: string;
}): SellTrackingSnapshot {
  if (searchHasSellTrackingSignal(input.search) || !input.stored) {
    return sellTrackingFromLanding(input);
  }
  return input.stored;
}

function isSnapshot(value: unknown): value is SellTrackingSnapshot {
  if (!value || typeof value !== 'object') return false;
  const record = value as Record<string, unknown>;
  if (
    typeof record.src !== 'string' ||
    !record.attribution ||
    typeof record.attribution !== 'object'
  ) {
    return false;
  }
  return Object.values(record.attribution as Record<string, unknown>).every(
    (item) => typeof item === 'string'
  );
}

export function readSellTracking(storage: {
  getItem(key: string): string | null;
}): SellTrackingSnapshot | null {
  try {
    const raw = storage.getItem(SELL_TRACKING_STORAGE_KEY);
    if (!raw) return null;
    const parsed: unknown = JSON.parse(raw);
    return isSnapshot(parsed) ? parsed : null;
  } catch {
    return null;
  }
}

export function writeSellTracking(
  storage: { setItem(key: string, value: string): void },
  snapshot: SellTrackingSnapshot
): void {
  try {
    storage.setItem(SELL_TRACKING_STORAGE_KEY, JSON.stringify(snapshot));
  } catch {
    // The submit still sends the in-memory snapshot when storage is blocked.
  }
}

export interface SellLeadInput {
  answers: SellAnswers & { owner: SellOwner; listed: SellListed };
  firstName: string;
  lastName: string;
  phone: string;
  email?: string;
  src: string;
  attribution?: Record<string, string>;
  recaptchaToken?: string;
}

/** Final-step body for /api/lead. The address-only path cannot create a contact. */
export function buildSellLeadBody(input: SellLeadInput): Record<string, unknown> {
  const listedNow = input.answers.listed === 'listed-now';
  const listedWithAgent = listedNow ? 'yes' : 'no';
  const summary = sellAnswerSummary(input.answers);
  const firstName = input.firstName.trim();
  const lastName = input.lastName.trim();
  return {
    ...input.attribution,
    propertyAddress: input.answers.address.trim(),
    name: `${firstName} ${lastName}`.trim(),
    first_name: firstName,
    last_name: lastName,
    phone: toE164(input.phone),
    email: (input.email ?? '').trim(),
    city: input.answers.city.trim(),
    county: input.answers.county.trim(),
    listed_with_agent: listedWithAgent,
    listedWithAgent: listedWithAgent,
    owner_status: input.answers.owner,
    sell_listed: input.answers.listed,
    ...(input.answers.condition ? { condition: input.answers.condition } : {}),
    ...(input.answers.timeline ? { timeline: input.answers.timeline } : {}),
    out_of_area: input.answers.areaStatus === 'out_of_area',
    ...(listedNow ? { hot_lead: false } : {}),
    situation: summary,
    notes: summary,
    reasonForSelling: summary,
    src: input.src,
    form_origin: 'facebook_ads_eddie',
    pagePath: SELL_PATH,
    sms_consent: true,
    sms_consent_text_version: SMS_CONSENT_TEXT_VERSION,
    smsNonMarketingConsent: true,
    smsMarketingConsent: true,
    ...(input.recaptchaToken ? { recaptchaToken: input.recaptchaToken } : {}),
  };
}

export const sellPageMetadata: Metadata = {
  title: 'Get a Cash Offer | KindKey Home Buyers',
  description:
    'Ask KindKey Home Buyers, a local Auburn buyer, for a no-obligation cash offer on your house as-is. It takes about a minute.',
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};
