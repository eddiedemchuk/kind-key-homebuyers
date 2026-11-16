import type { FormOrigin } from '@/lib/form-origin';

export interface OfferStep {
  title: string;
  body: string;
}

export interface OfferFaq {
  question: string;
  answer: string;
}

export interface OfferSituation {
  title: string;
  body: string;
}

export interface OfferLandingContent {
  title: string;
  description: string;
  headline: string;
  subhead: string;
  cta: string;
  formOrigin: FormOrigin;
  trustPoints: string[];
  steps: OfferStep[];
  faqs: OfferFaq[];
  /** Situation-specific copy. The general /offer block is separate. */
  pageSituations?: readonly OfferSituation[];
}

/** Same three steps on every paid offer page. */
export const offerHowItWorks: OfferStep[] = [
  {
    title: 'Tell us about the house',
    body: 'Share the address and how to reach you.',
  },
  {
    title: 'Get a cash offer within 24 hours',
    body: 'Cash offer within 24 hours. Cash offer, as-is. No fees, repairs, or cleaning.',
  },
  {
    title: 'You pick the closing date',
    body: 'You pick the closing date. Close in as little as 7 days, or choose a later date.',
  },
];

/**
 * Default /offer copy. `headline` is the no-city fallback for offerPageHeadline.
 * A whitelist city in the ad URL replaces it with "We Buy Houses in {City} for Cash".
 */
export const generalOffer: OfferLandingContent = {
  title: 'We Buy Houses for Cash | Cash for Houses',
  description:
    'Cash for houses in Pierce County, South King County, and Kitsap County. We buy houses for cash, as-is, including divorce, foreclosure, tenants, an inherited or probate house, or fire damage. No fees, repairs, or cleaning. Cash offer within 24 hours. You pick the closing date.',
  headline: 'We Buy Houses for Cash',
  subhead:
    'Cash for Houses. Cash offer, as-is. No fees, repairs, or cleaning. You pick the closing date.',
  cta: 'Get your cash offer',
  formOrigin: 'google_ads_landing',
  trustPoints: ['Bought 100+ homes', 'No fees, repairs, or cleaning', 'You pick the closing date'],
  steps: offerHowItWorks,
  faqs: [
    {
      question: 'Do I need to clean or repair anything?',
      answer: 'No. Cash offer, as-is. No fees, repairs, or cleaning.',
    },
    {
      question: 'Are there fees?',
      answer: 'No fees. KindKey buys the house directly.',
    },
    {
      question: 'Who picks the closing date?',
      answer: 'You pick the closing date. Close in as little as 7 days, or choose a later date.',
    },
    {
      question: 'How soon is the cash offer?',
      answer: 'Cash offer within 24 hours.',
    },
  ],
};

/** Same hero as /offer, with its own title. The form origin is the other difference. */
export const facebookEddieOffer: OfferLandingContent = {
  ...generalOffer,
  title: 'Cash for Houses from KindKey Home Buyers',
  description:
    'Cash for houses. Cash offer, as-is. No fees, repairs, or cleaning. Cash offer within 24 hours. You pick the closing date.',
  formOrigin: 'facebook_ads_eddie',
};

/** Short claims under the foreclosure headline. Approved claims only. */
export const foreclosureTrustStrip = [
  'BBB A- Rated',
  'Bought 100+ homes',
  'Close in as little as 7 days',
  'Cash offer, as-is',
] as const;

export const foreclosureOffer: OfferLandingContent = {
  title: 'Sell Your House Before Foreclosure',
  description:
    'Sell a house before foreclosure in King County, Pierce County, or Kitsap County. Cash offer, as-is. Asking does not stop the foreclosure. No fees, repairs, or cleaning. Cash offer within 24 hours. You pick the closing date.',
  headline: 'Sell Your House Before Foreclosure',
  subhead:
    'Stop foreclosure before the sale. Cash offer, as-is. Asking does not stop the foreclosure.',
  cta: 'Get a cash offer before the foreclosure sale',
  formOrigin: 'google_ads_foreclosure',
  trustPoints: [
    'No fees, repairs, or cleaning',
    'Cash offer within 24 hours',
    'You pick the closing date',
  ],
  steps: offerHowItWorks,
  pageSituations: [
    {
      title: 'Foreclosure',
      body: 'Tell us the foreclosure sale date if you have one. You can ask for a cash offer before the sale. Asking for an offer does not stop a foreclosure.',
    },
    {
      title: 'A house that needs work',
      body: 'A house heading toward foreclosure can still need work. Cash offer, as-is. No fees, repairs, or cleaning, and you pick the closing date.',
    },
  ],
  faqs: [
    {
      question: 'Can I sell if I am behind on payments?',
      answer:
        'You can request a cash offer. What you receive at closing depends on the payoff and other amounts the title company lists. Asking for an offer does not stop a foreclosure.',
    },
    {
      question: 'Do I have to repair the house first?',
      answer:
        'No. Cash offer, as-is, including a house that needs work. No fees, repairs, or cleaning.',
    },
    {
      question: 'Will this stop the foreclosure?',
      answer:
        'No. A cash offer is not a promise to stop a foreclosure or an auction. Tell us the date, and we will say whether a closing can be scheduled before it.',
    },
    {
      question: 'Who picks the closing date?',
      answer: 'You pick the closing date. Close in as little as 7 days, or choose a later date.',
    },
  ],
};

export const inheritedOffer: OfferLandingContent = {
  title: 'Sell an Inherited or Probate House for Cash',
  description:
    'Sell an inherited or probate house as-is in King County, Pierce County, or Kitsap County. Cash offer, as-is. No fees, repairs, or cleaning. Cash offer within 24 hours. You pick the closing date.',
  headline: 'Sell an Inherited or Probate House for Cash',
  subhead:
    'Inherited or probate. Cash offer, as-is. No fees, repairs, or cleaning. You pick the closing date.',
  cta: 'Get a cash offer on the inherited house',
  formOrigin: 'google_ads_inherited',
  trustPoints: [
    'No fees, repairs, or cleaning',
    'Cash offer within 24 hours',
    'You pick the closing date',
  ],
  steps: offerHowItWorks,
  pageSituations: [
    {
      title: 'Inherited and probate',
      body: 'You can ask for a cash offer on an inherited house while probate is still open. Tell us the address and where the estate stands. KindKey does not give legal advice about the estate.',
    },
    {
      title: 'When the inherited house needs work',
      body: 'An inherited or probate house that needs work, including fire damage, can still get a cash offer, as-is. No fees, repairs, or cleaning. You pick the closing date.',
    },
  ],
  faqs: [
    {
      question: 'Do I have to clean the house out?',
      answer:
        'No fees, repairs, or cleaning. Cash offer, as-is, including belongings still inside.',
    },
    {
      question: 'What if probate is still open?',
      answer:
        'Tell us where the probate stands. You pick the closing date. KindKey does not give legal advice about the estate.',
    },
    {
      question: 'How soon is the cash offer?',
      answer: 'Cash offer within 24 hours after you tell us about the house.',
    },
    {
      question: 'Are there fees?',
      answer: 'No fees. KindKey buys the house directly.',
    },
  ],
};

export const fireDamageOffer: OfferLandingContent = {
  title: 'Sell a Fire-Damaged House As-Is for Cash',
  description:
    'Sell a fire-damaged house as-is in King County, Pierce County, or Kitsap County. Cash offer, as-is. No fees, repairs, or cleaning. Cash offer within 24 hours. You pick the closing date.',
  headline: 'Sell a Fire-Damaged House As-Is',
  subhead:
    'Fire damage, as-is. No fees, repairs, or cleaning. Cash offer within 24 hours. You pick the closing date.',
  cta: 'Get a cash offer on the fire-damaged house',
  formOrigin: 'google_ads_fire_damage',
  trustPoints: [
    'No fees, repairs, or cleaning',
    'Cash offer within 24 hours',
    'You pick the closing date',
  ],
  steps: offerHowItWorks,
  pageSituations: [
    {
      title: 'Fire damage',
      body: 'A fire-damaged house can be sold as-is. Tell us the address and what the fire did. No fees, repairs, or cleaning before you ask.',
    },
    {
      title: 'Major repairs',
      body: 'Smoke, water, or other major repairs do not have to be finished first. Cash offer within 24 hours. You pick the closing date.',
    },
  ],
  faqs: [
    {
      question: 'Do I need to clean up or repair the damage?',
      answer: 'No. Cash offer, as-is, on a fire-damaged house. No fees, repairs, or cleaning.',
    },
    {
      question: 'What if an insurance claim is open?',
      answer:
        'Tell us the claim is open when you tell us about the house. You pick the closing date.',
    },
    {
      question: 'Where do you buy?',
      answer: 'King County, Pierce County, and Kitsap County.',
    },
    {
      question: 'How soon is the cash offer?',
      answer: 'Cash offer within 24 hours.',
    },
  ],
};

export const asIsOffer: OfferLandingContent = {
  title: 'Sell a House That Needs Work As-Is for Cash',
  description:
    'Sell a house that needs work, as-is, in King County, Pierce County, or Kitsap County. Fire damage and other major repairs included. No fees, repairs, or cleaning. Cash offer within 24 hours. You pick the closing date.',
  headline: 'Sell a House That Needs Work As-Is',
  subhead:
    'A house that needs work. Cash offer, as-is. No fees, repairs, or cleaning. You pick the closing date.',
  cta: 'Get a cash offer on a house that needs work',
  formOrigin: 'google_ads_as_is',
  trustPoints: ['Bought 100+ homes', 'No fees, repairs, or cleaning', 'Cash offer within 24 hours'],
  steps: offerHowItWorks,
  pageSituations: [
    {
      title: 'A house that needs work',
      body: 'Sell a house that needs work as-is. Roof, foundation, mold, fire damage, or an open code notice can stay as they are. No fees, repairs, or cleaning.',
    },
    {
      title: 'Fire damage and major repairs',
      body: 'Fire damage is one kind of house that needs work. Leave the cleanup. Cash offer within 24 hours, and you pick the closing date.',
    },
  ],
  faqs: [
    {
      question: 'Do you buy a house that needs work?',
      answer:
        'Yes. Cash offer, as-is, including fire damage, water, mold, and other major repairs. No fees, repairs, or cleaning.',
    },
    {
      question: 'What about code violations?',
      answer:
        'You can request a cash offer without clearing the notice first. KindKey does not give legal advice about a city notice.',
    },
    {
      question: 'How soon is the cash offer?',
      answer: 'Cash offer within 24 hours after you tell us about the house.',
    },
    {
      question: 'Who picks the closing date?',
      answer: 'You pick the closing date. Close in as little as 7 days, or choose a later date.',
    },
  ],
};
