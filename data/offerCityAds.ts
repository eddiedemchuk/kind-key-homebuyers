import type { Metadata } from 'next';
import {
  offerHowItWorks,
  type OfferFaq,
  type OfferSituation,
  type OfferStep,
} from '@/data/offerLandings';
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
  'A solution for any situation',
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
    label: 'Timeline',
    cash: 'Close in as little as 7 days, or a date you pick',
    agent: 'A listing timeline',
  },
] as const;

export const OFFER_CITY_ADS_STEPS: OfferStep[] = offerHowItWorks;

export const OFFER_CITY_ADS_FAQS: OfferFaq[] = [
  {
    question: 'Do I pay fees, or repair and clean the house first?',
    answer: 'No. There are no fees, no repairs, and no cleaning.',
  },
  {
    question: 'Which situations can you buy?',
    answer:
      'Inherited and probate homes, divorce, tenant-occupied rentals, fire or water damage, foreclosure, houses behind on payments, short sales, and houses that need major repairs. A solution for any situation.',
  },
  {
    question: 'How is a cash offer different from listing with an agent?',
    answer:
      'A listing means repairs, cleaning, and an agent commission. A cash offer has no fees, no repairs, and no cleaning. You can close in as little as 7 days, or pick another date.',
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
  situations: readonly OfferSituation[];
}

export const tacomaPuyallupOffer: OfferCityAdsPage = {
  path: '/offer/tacoma-puyallup',
  title: 'Sell Your Tacoma or Puyallup House As-Is | Lakewood, Spanaway, University Place',
  description:
    'Cash offer, as-is, for an off-market house in Tacoma, Puyallup, Lakewood, Spanaway, or University Place. Also Edgewood, Milton, Sumner, Fife, South Hill, and Gig Harbor in Pierce County. No fees, repairs, or cleaning. You pick the closing date.',
  headline: 'Sell Your Tacoma or Puyallup House As-Is',
  subhead:
    'Tacoma, Puyallup, Lakewood, Spanaway, and University Place. Cash offer, as-is. No fees, repairs, or cleaning.',
  areaHeading: 'Areas we buy in',
  areaBody:
    'Pierce County. KindKey buys off-market houses in Tacoma, Puyallup, South Hill, Lakewood, University Place, Spanaway, Edgewood, Milton, Sumner, Fife, and Gig Harbor. In Tacoma, that includes the North End, Hilltop, the Stadium District, the Lincoln District, and South Tacoma. Around Puyallup, that includes downtown Puyallup and South Hill. In Lakewood, that includes Tillicum and Oakbrook. University Place and Spanaway are included. Edgewood is in Pierce County, including North Hill. Milton sits on the King County and Pierce County line. Sumner includes downtown and the valley. Fife is in Pierce County, between Tacoma and Milton. Gig Harbor runs from downtown to Artondale. The house should not be listed with an agent.',
  situations: [
    {
      title: 'Inherited and probate homes',
      body: 'An inherited or probate house in Tacoma, Puyallup, Lakewood, Spanaway, or University Place can be sold as-is. You do not have to empty the house first. KindKey does not give legal advice about the estate.',
    },
    {
      title: 'Divorce',
      body: 'You can ask for a cash offer on a Tacoma, Puyallup, Lakewood, Spanaway, or University Place house during a divorce. KindKey does not give legal advice about the divorce. You pick the closing date.',
    },
    {
      title: 'Tenant-occupied rentals',
      body: 'A tenant-occupied house in Pierce County can be sold with tenants in place. You do not have to end a rental in Tacoma, Lakewood, or Spanaway before you ask for an offer. Cash offer, as-is.',
    },
    {
      title: 'Fire or water damage',
      body: 'Fire or water damage in Tacoma, Lakewood, or another Pierce County town does not have to be cleaned up first. No fees, repairs, or cleaning. Cash offer within 24 hours.',
    },
    {
      title: 'Foreclosure',
      body: 'Tell us the foreclosure sale date if you have one for a house in Tacoma, Puyallup, or Lakewood. You can ask for a cash offer before the sale. Asking for an offer does not stop a foreclosure.',
    },
    {
      title: 'Behind on payments',
      body: 'You can request a cash offer on a Pierce County house when payments are behind. What you receive depends on the payoff and the other amounts the title company lists. You pick the closing date.',
    },
    {
      title: 'Short sale',
      body: 'If the loan on a Tacoma or Puyallup house is more than the house can sell for, tell us. A short sale still depends on the lender. We do not promise an approval.',
    },
    {
      title: 'Houses that need major repairs',
      body: 'A Spanaway, University Place, or Lakewood house that needs major repairs can be sold as-is. Roof, foundation, or fire damage can stay as they are. No fees, repairs, or cleaning.',
    },
  ],
};

export const kitsapBremertonOffer: OfferCityAdsPage = {
  path: '/offer/kitsap-bremerton',
  title: 'Sell Your Bremerton House As-Is | Port Orchard, Poulsbo, Silverdale, Gig Harbor',
  description:
    'Cash offer, as-is, for a house in Bremerton, Port Orchard, Poulsbo, Silverdale, or Gig Harbor. Kitsap County, and Gig Harbor in Pierce County. No fees, repairs, or cleaning. Cash offer within 24 hours. You pick the closing date.',
  headline: 'Sell Your Bremerton House As-Is',
  subhead:
    'Bremerton, Port Orchard, Poulsbo, Silverdale, and Gig Harbor. Cash offer, as-is. No fees, repairs, or cleaning.',
  areaHeading: 'Areas we buy in',
  areaBody:
    'Kitsap County, plus Gig Harbor in Pierce County. KindKey buys off-market houses in Bremerton, Port Orchard, Silverdale, Poulsbo, and Gig Harbor. We buy houses in Gig Harbor for cash. You can sell a Gig Harbor house fast, with no fees, no repairs, and no cleaning. Gig Harbor is in Pierce County, across the Tacoma Narrows, from downtown to Artondale. In Bremerton, that includes Manette, downtown Bremerton, Charleston, and Navy Yard City. In Port Orchard, that includes downtown, Annapolis, Mile Hill, and McCormick Woods. Silverdale includes Old Town Silverdale. Poulsbo includes downtown Poulsbo and Viking Avenue. The house should not be listed with an agent.',
  situations: [
    {
      title: 'Inherited and probate homes',
      body: 'An inherited or probate house in Bremerton, Port Orchard, Poulsbo, Silverdale, or Gig Harbor can be sold as-is. You do not have to empty the house first. KindKey does not give legal advice about the estate.',
    },
    {
      title: 'Divorce',
      body: 'You can ask for a cash offer on a Bremerton, Port Orchard, Poulsbo, Silverdale, or Gig Harbor house during a divorce. KindKey does not give legal advice about the divorce. You pick the closing date.',
    },
    {
      title: 'Tenant-occupied rentals',
      body: 'A tenant-occupied house in Kitsap County, or in Gig Harbor in Pierce County, can be sold with tenants in place. You do not have to end a rental before you ask for an offer. Cash offer, as-is.',
    },
    {
      title: 'Fire or water damage',
      body: 'Fire or water damage in Bremerton, Silverdale, or Port Orchard does not have to be cleaned up first. No fees, repairs, or cleaning. Cash offer within 24 hours.',
    },
    {
      title: 'Foreclosure',
      body: 'Tell us the foreclosure sale date if you have one for a house in Bremerton, Poulsbo, or Port Orchard. You can ask for a cash offer before the sale. Asking for an offer does not stop a foreclosure.',
    },
    {
      title: 'Behind on payments',
      body: 'You can request a cash offer on a Kitsap County house when payments are behind. What you receive depends on the payoff and the other amounts the title company lists. You pick the closing date.',
    },
    {
      title: 'Short sale',
      body: 'If the loan on a Bremerton or Silverdale house is more than the house can sell for, tell us. A short sale still depends on the lender. We do not promise an approval.',
    },
    {
      title: 'Houses that need major repairs',
      body: 'A Poulsbo, Port Orchard, or Gig Harbor house that needs major repairs can be sold as-is. Roof, foundation, or fire damage can stay as they are. No fees, repairs, or cleaning.',
    },
  ],
};

export const kentAuburnOffer: OfferCityAdsPage = {
  path: '/offer/kent-auburn',
  title: 'Sell Your Kent or Auburn House As-Is | Federal Way and Renton',
  description:
    'Cash offer, as-is, for an off-market house in Kent, Auburn, Federal Way, or Renton. South King County, including Covington and Maple Valley. No fees, repairs, or cleaning. Cash offer within 24 hours. You pick the closing date.',
  headline: 'Sell Your Kent or Auburn House As-Is',
  subhead:
    'Kent, Auburn, Federal Way, and Renton. Cash offer, as-is. No fees, repairs, or cleaning.',
  areaHeading: 'Areas we buy in',
  areaBody:
    'South King County. KindKey buys off-market houses in Kent, Auburn, Federal Way, Renton, Covington, and Maple Valley. In Kent, that includes East Hill, West Hill, downtown Kent, and the Kent Valley. In Auburn, that includes downtown Auburn, Lea Hill, and Lakeland Hills. Federal Way includes Twin Lakes, Dash Point, and Steel Lake. Renton includes the Renton Highlands, Kennydale, and Fairwood. Covington and Maple Valley, including Lake Wilderness, are included too. The house should not be listed with an agent.',
  situations: [
    {
      title: 'Inherited and probate homes',
      body: 'An inherited or probate house in Kent, Auburn, Federal Way, or Renton can be sold as-is. You do not have to empty the house first. KindKey does not give legal advice about the estate.',
    },
    {
      title: 'Divorce',
      body: 'You can ask for a cash offer on a Kent, Auburn, Federal Way, or Renton house during a divorce. KindKey does not give legal advice about the divorce. You pick the closing date.',
    },
    {
      title: 'Tenant-occupied rentals',
      body: 'A tenant-occupied house in South King County can be sold with tenants in place. You do not have to end a rental in Kent, Auburn, or Federal Way before you ask for an offer. Cash offer, as-is.',
    },
    {
      title: 'Fire or water damage',
      body: 'Fire or water damage in Kent, Auburn, or Federal Way does not have to be cleaned up first. No fees, repairs, or cleaning. Cash offer within 24 hours.',
    },
    {
      title: 'Foreclosure',
      body: 'Tell us the foreclosure sale date if you have one for a house in Kent, Auburn, or Renton. You can ask for a cash offer before the sale. Asking for an offer does not stop a foreclosure.',
    },
    {
      title: 'Behind on payments',
      body: 'You can request a cash offer on a South King County house when payments are behind. What you receive depends on the payoff and the other amounts the title company lists. You pick the closing date.',
    },
    {
      title: 'Short sale',
      body: 'If the loan on a Kent or Auburn house is more than the house can sell for, tell us. A short sale still depends on the lender. We do not promise an approval.',
    },
    {
      title: 'Houses that need major repairs',
      body: 'A Federal Way or Renton house that needs major repairs can be sold as-is. Roof, foundation, or fire damage can stay as they are. No fees, repairs, or cleaning.',
    },
  ],
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
