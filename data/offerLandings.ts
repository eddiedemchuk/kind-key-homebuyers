import type { FormOrigin } from '@/lib/form-origin';

export interface OfferStep {
  title: string;
  body: string;
}

export interface OfferFaq {
  question: string;
  answer: string;
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
}

const sharedSteps: OfferStep[] = [
  {
    title: 'Tell us about the house',
    body: 'Share your name, phone, and the property address. It takes about a minute.',
  },
  {
    title: 'Get a cash offer',
    body: 'Get your cash offer within 24 hours. No obligation.',
  },
  {
    title: 'Pick your closing date',
    body: 'You choose when to close. No repairs, and no agent commission.',
  },
];

export const generalOffer: OfferLandingContent = {
  title: 'Sell Your House As-Is for Cash',
  description:
    'Local King & Pierce County home buyer. No repairs, no commissions, you pick the closing date.',
  headline: 'Sell your house as-is for cash',
  subhead: 'No repairs. You choose the closing date.',
  cta: 'Get your no-obligation cash offer: takes 30 seconds',
  formOrigin: 'google_ads_landing',
  trustPoints: [
    "We've bought hundreds of homes",
    'Any condition, no cleaning or repairs',
    'Local Auburn, WA company',
  ],
  steps: sharedSteps,
  faqs: [
    {
      question: 'Do I need to clean or repair anything?',
      answer: 'No. We buy the house as-is, in any condition. Leave the cleaning and repairs to us.',
    },
    {
      question: 'Are there commissions or fees?',
      answer:
        'No. KindKey buys the house directly. We do not charge the seller an agent commission or a separate service or assignment fee.',
    },
    {
      question: 'Who picks the closing date?',
      answer: 'You do. Close in a few days, or pick a later date that works for you.',
    },
    {
      question: 'Am I obligated if I ask for an offer?',
      answer: 'No. The cash offer is free, and you can say no.',
    },
  ],
};

/** Same copy as /offer. The form origin is the only difference. */
export const facebookEddieOffer: OfferLandingContent = {
  ...generalOffer,
  formOrigin: 'facebook_ads_eddie',
};

export const foreclosureOffer: OfferLandingContent = {
  title: 'Sell Before the Auction for Cash',
  description:
    'Behind on the mortgage in King or Pierce County? Request a cash offer and see if you can sell before the auction date. No repairs.',
  headline: 'Sell before the auction for cash',
  subhead: 'As-is, no repairs. Asking does not stop the auction.',
  cta: 'Get a cash offer before the auction date',
  formOrigin: 'google_ads_foreclosure',
  trustPoints: [
    'No repairs before you sell',
    'Tell us the auction date',
    'You choose the closing date',
  ],
  steps: [
    {
      title: 'Tell us the situation',
      body: 'Share the address, your phone number, and the auction or sale date if you have one.',
    },
    {
      title: 'Get a cash offer',
      body: 'Get your cash offer within 24 hours. No obligation.',
    },
    {
      title: 'Close on a date you pick',
      body: 'You pick the date. We do not promise to stop the auction.',
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
      answer: 'No. We buy houses as-is, including houses that need work.',
    },
    {
      question: 'Will this stop the auction?',
      answer:
        'No. A cash offer is not a promise to stop a foreclosure or an auction. Tell us the date, and we will say whether a closing can be scheduled before it.',
    },
    {
      question: 'Am I obligated if I ask?',
      answer: 'No. The offer is free, and you can say no.',
    },
  ],
};

export const inheritedOffer: OfferLandingContent = {
  title: 'Sell an Inherited House As-Is for Cash',
  description:
    'Sell an inherited or probate house in King or Pierce County as-is. No clean-out required. KindKey works with probate timelines and out-of-state heirs.',
  headline: 'Sell an inherited house for cash',
  subhead: 'No clean-out. We can work with a probate timeline.',
  cta: 'Get a cash offer on the inherited house',
  formOrigin: 'google_ads_inherited',
  trustPoints: ['No clean-out', 'Works with a probate timeline', 'Out-of-state heirs can call'],
  steps: [
    {
      title: 'Tell us about the house',
      body: 'Share the address and where the estate stands. You do not have to empty the house first.',
    },
    {
      title: 'Get a cash offer',
      body: 'Get your cash offer within 24 hours. No obligation.',
    },
    {
      title: "Close on the estate's timeline",
      body: 'You pick a date that fits probate. We do not give legal advice about the estate.',
    },
  ],
  faqs: [
    {
      question: 'Do I have to clean the house out?',
      answer: 'No. We can buy the house with belongings still inside.',
    },
    {
      question: 'What if probate is still open?',
      answer:
        'Tell us where it stands. Closing can be timed with the estate. KindKey does not advise you on probate.',
    },
    {
      question: 'I live out of state. Can I still sell?',
      answer:
        'Yes. Share the address and a phone number. You do not have to be at the house to ask for an offer.',
    },
    {
      question: 'Are there commissions?',
      answer:
        'KindKey buys directly and does not charge the seller an agent commission or a separate service fee.',
    },
  ],
};

export const fireDamageOffer: OfferLandingContent = {
  title: 'Sell a Fire-Damaged House As-Is for Cash',
  description:
    'Sell a fire- or smoke-damaged house in King or Pierce County as-is. No cleanup or repairs. KindKey can work with an open insurance claim.',
  headline: 'Sell a fire-damaged house for cash',
  subhead: 'As-is. No cleanup or repairs. We can work with an open insurance claim.',
  cta: 'Get a cash offer on the fire-damaged house',
  formOrigin: 'google_ads_fire_damage',
  trustPoints: [
    'Fire or smoke damage, bought as-is',
    'Local King and Pierce County buyer',
    'We keep most homes as rentals',
  ],
  steps: [
    {
      title: 'Tell us about the house',
      body: 'Share the address. You do not need to clean up or repair the fire or smoke damage.',
    },
    {
      title: 'Get a cash offer',
      body: 'Get your cash offer within 24 hours. No obligation. An open insurance claim is fine.',
    },
    {
      title: 'Pick your closing date',
      body: 'You choose the date. No cleanup and no repairs before closing.',
    },
  ],
  faqs: [
    {
      question: 'Do I need to clean up or repair the damage?',
      answer: 'No. We buy fire- and smoke-damaged houses as-is. Leave the cleanup and repairs.',
    },
    {
      question: 'Can you work with an open insurance claim?',
      answer: 'Yes. Tell us the claim is open. You do not have to finish repairs before you ask.',
    },
    {
      question: 'Where do you buy?',
      answer: 'King and Pierce County. We keep most of the houses as rentals.',
    },
    {
      question: 'Am I obligated if I ask for an offer?',
      answer: 'No. The cash offer is free, and you can say no.',
    },
  ],
};

export const asIsOffer: OfferLandingContent = {
  title: 'Sell a Damaged House As-Is for Cash',
  description:
    'Sell a house that needs major work in King or Pierce County. Fire, water, mold, hoarder houses, foundation issues, and code violations. No repairs first.',
  headline: 'Sell a damaged house for cash',
  subhead: 'Fire, water, mold, or major repairs. No fix-up first.',
  cta: 'Get a cash offer without making repairs',
  formOrigin: 'google_ads_as_is',
  trustPoints: ['Any condition', 'No repairs required', "We've bought hundreds of homes"],
  steps: [
    {
      title: 'Tell us the condition',
      body: 'Share the address and what is wrong with the house. Photos help, and they are optional.',
    },
    {
      title: 'Get a cash offer',
      body: 'Get your cash offer within 24 hours. No obligation.',
    },
    {
      title: 'Close without a fix-up list',
      body: 'You pick the date. Leave the repairs to us after closing.',
    },
  ],
  faqs: [
    {
      question: 'Do you buy fire, water, or mold damage?',
      answer:
        'Yes. We buy those houses as-is. You do not have to remediate them before you ask for an offer.',
    },
    {
      question: 'What about code violations?',
      answer:
        'You can request an offer without clearing the notice first. KindKey does not give legal advice about a city notice.',
    },
    {
      question: 'Foundation or a hoarder house?',
      answer: 'Yes. Major repairs and houses full of belongings are situations we buy as-is.',
    },
    {
      question: 'Am I obligated?',
      answer: 'No. The cash offer is free, and you can say no.',
    },
  ],
};
