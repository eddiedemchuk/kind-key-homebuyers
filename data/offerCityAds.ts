import type { Metadata } from 'next';
import type { OfferFaq, OfferStep } from '@/data/offerLandings';
import { pageMetadata } from '@/lib/seo';

/**
 * Same origin as /offer, so the page tag stays general.
 * GoHighLevel source stays Google Ads unless the landing URL is a YouTube ad.
 */
export const OFFER_CITY_ADS_FORM_ORIGIN = 'google_ads_landing' as const;

export const OFFER_CITY_ADS_TRUST = [
  'BBB A- Rated',
  'Bought 100+ homes',
  'Close in as little as 7 days',
  'We have a solution for any situation',
] as const;

export const OFFER_CITY_ADS_COMPARISON = [
  {
    label: 'Fees',
    cash: 'No fees',
    agent: 'An agent commission',
  },
  {
    label: 'Repairs and cleaning',
    cash: 'No repairs and no cleaning',
    agent: 'You arrange repairs and cleaning',
  },
  {
    label: 'Showings',
    cash: 'No open houses or showings',
    agent: 'Showings and open houses',
  },
  {
    label: 'Timeline',
    cash: 'Close in as little as 7 days, or a date you pick',
    agent: 'A listing timeline, and buyer financing can fall through',
  },
] as const;

export const OFFER_CITY_ADS_SITUATIONS = [
  {
    title: 'Inherited and probate homes',
    body: 'You can ask while probate is open. You do not have to empty the house first. KindKey does not give legal advice about the estate.',
  },
  {
    title: 'Tenant-occupied rentals',
    body: 'Tenants can stay in place. You do not have to end a rental before you ask for an offer.',
  },
  {
    title: 'Fire or water damage',
    body: 'Leave the cleanup. No repairs and no cleaning before you ask.',
  },
  {
    title: 'Foreclosure',
    body: 'Tell us the sale date if you have one. Asking for an offer does not stop a foreclosure.',
  },
  {
    title: 'Behind on payments',
    body: 'You can request an offer when payments are behind. What you receive depends on the payoff and the other amounts the title company lists.',
  },
  {
    title: 'Short sale',
    body: 'If the loan is more than the house can sell for, tell us. A short sale still depends on the lender. We do not promise an approval.',
  },
  {
    title: 'Houses that need major repairs',
    body: 'Roof, foundation, mold, or an open code notice. You do not have to fix any of it first.',
  },
] as const;

export const OFFER_CITY_ADS_STEPS: OfferStep[] = [
  {
    title: 'Tell us about the house',
    body: 'Share your name, phone, email, and the property address. Use this form when the house is not listed with an agent.',
  },
  {
    title: 'Get a cash offer',
    body: 'We look at the house and send a no-obligation cash offer. We have a solution for any situation.',
  },
  {
    title: 'Pick your closing date',
    body: 'Close in as little as 7 days, or choose a later date. No repairs and no cleaning.',
  },
];

export const OFFER_CITY_ADS_FAQS: OfferFaq[] = [
  {
    question: 'Do I pay fees, or repair and clean the house first?',
    answer: 'No. There are no fees, no repairs, and no cleaning.',
  },
  {
    question: 'Which situations can you buy?',
    answer:
      'Inherited and probate homes, tenant-occupied rentals, fire or water damage, foreclosure, houses behind on payments, short sales, and houses that need major repairs. We have a solution for any situation.',
  },
  {
    question: 'How is a cash offer different from listing with an agent?',
    answer:
      'A listing means showings, repairs, cleaning, and an agent commission. A cash offer has no fees, no repairs, and no cleaning. You can close in as little as 7 days, or pick another date.',
  },
  {
    question: 'Is this for a house that is already listed?',
    answer:
      'No. This page is for an off-market house that is not listed with an agent. If it is listed, say so on the form.',
  },
];

export interface OfferCityAdsPage {
  path: `/offer/${string}`;
  title: string;
  description: string;
  headline: string;
  subhead: string;
  areaHeading: string;
  areaBody: string;
}

export const tacomaPuyallupOffer: OfferCityAdsPage = {
  path: '/offer/tacoma-puyallup',
  title: 'Sell Your Tacoma, Puyallup, Lakewood, or Edgewood House Fast for Cash',
  description:
    'Cash offer for an off-market house in Tacoma, Puyallup, Lakewood, Edgewood, Milton, Sumner, Fife, South Hill, University Place, Spanaway, or Gig Harbor. No fees, no repairs, no cleaning.',
  headline: 'Sell Your Tacoma, Puyallup, Lakewood, or Edgewood House Fast for Cash',
  subhead:
    'Off-market houses in Tacoma, Puyallup, Lakewood, Edgewood, Milton, Sumner, and Fife. No fees, no repairs, and no cleaning. The house should not be listed with an agent.',
  areaHeading: 'Tacoma, Puyallup, Lakewood, Edgewood, and nearby',
  areaBody:
    'KindKey buys off-market houses in Tacoma, Puyallup, South Hill, Lakewood, University Place, Spanaway, Edgewood, Milton, Sumner, Fife, and Gig Harbor. In Tacoma, that includes the North End, Hilltop, the Stadium District, the Lincoln District, and South Tacoma. Around Puyallup, that includes downtown Puyallup and South Hill. In Lakewood, that includes Tillicum and Oakbrook. University Place and Spanaway are included. Edgewood is in Pierce County, including North Hill. Milton sits on the King County and Pierce County line. Sumner includes downtown and the valley. Fife is in Pierce County, between Tacoma and Milton. Gig Harbor runs from downtown to Artondale.',
};

export const kitsapBremertonOffer: OfferCityAdsPage = {
  path: '/offer/kitsap-bremerton',
  title: 'Sell Your Bremerton, Port Orchard, or Gig Harbor House Fast for Cash',
  description:
    'Cash offer for an off-market Bremerton, Port Orchard, Silverdale, Poulsbo, or Gig Harbor house. We buy houses in Gig Harbor for cash. No fees and no cleaning.',
  headline: 'Sell Your Bremerton, Port Orchard, or Gig Harbor House Fast for Cash',
  subhead:
    'Off-market houses in Kitsap County and Gig Harbor. We buy houses in Gig Harbor for cash. No fees, no repairs, and no cleaning. The house should not be listed with an agent.',
  areaHeading: 'Bremerton, Port Orchard, Gig Harbor, and nearby',
  areaBody:
    'KindKey buys off-market houses in Bremerton, Port Orchard, Silverdale, Poulsbo, and Gig Harbor. We buy houses in Gig Harbor for cash. You can sell a Gig Harbor house fast, with no fees, no repairs, and no cleaning. Gig Harbor is in Pierce County, across the Tacoma Narrows, from downtown to Artondale. In Bremerton, that includes Manette, downtown Bremerton, Charleston, and Navy Yard City. In Port Orchard, that includes downtown, Annapolis, Mile Hill, and McCormick Woods. Silverdale includes Old Town Silverdale. Poulsbo includes downtown Poulsbo and Viking Avenue.',
};

export const kentAuburnOffer: OfferCityAdsPage = {
  path: '/offer/kent-auburn',
  title: 'Sell Your Kent or Auburn House Fast for Cash',
  description:
    'Cash offer for an off-market Kent, Auburn, Federal Way, Renton, Covington, or Maple Valley house. No fees, no repairs, and no cleaning.',
  headline: 'Sell Your Kent or Auburn House Fast for Cash',
  subhead:
    'Off-market houses in South King County. No fees, no repairs, and no cleaning. The house should not be listed with an agent.',
  areaHeading: 'Kent, Auburn, and South King County',
  areaBody:
    'KindKey buys off-market houses in Kent, Auburn, Federal Way, Renton, Covington, and Maple Valley. In Kent, that includes East Hill, West Hill, downtown Kent, and the Kent Valley. In Auburn, that includes downtown Auburn, Lea Hill, and Lakeland Hills. Federal Way includes Twin Lakes, Dash Point, and Steel Lake. Renton includes the Renton Highlands, Kennydale, and Fairwood. Covington and Maple Valley, including Lake Wilderness, are included too.',
};

export const offerCityAdsPages = [
  tacomaPuyallupOffer,
  kitsapBremertonOffer,
  kentAuburnOffer,
] as const;

/** Indexable city ad pages. Other /offer routes stay noindex and off the sitemap. */
export function offerCityAdsMetadata(content: OfferCityAdsPage): Metadata {
  return {
    ...pageMetadata(content),
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
  };
}
