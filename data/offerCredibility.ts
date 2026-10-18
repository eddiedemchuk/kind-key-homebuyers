/**
 * Published quotes only. Google lines are the reviews the owner supplied.
 * Customer stories are the three cards already on the site, which the owner
 * confirmed are real customers. Do not add names, stars, or counts beyond these.
 */

export const GOOGLE_REVIEWS_URL =
  'https://search.google.com/local/reviews?placeid=ChIJX1FtVb1dNm8RpEnaJQW6Mvk';

export const BBB_TRUST_LINE = 'Kindkey Home Buyers, LLC – BBB A- rating';

export interface GoogleReview {
  id: string;
  name: string;
  text: string;
}

export const googleReviews: GoogleReview[] = [
  {
    id: 'megan-white',
    name: 'Megan White',
    text: "I worked with Angie to sell a distressed property off market for my seller clients who had no other choice but to sell fast. They didn't have all the necessary documents and the foreclosure auction was coming fast. Angie partnered with me to get what needed to be done done, and went above and beyond her part to assist. I was so impressed with Angie and her willingness to bring a buyer to solve the unique problems of these sellers. It was a successful deal, and we remain in touch today.",
  },
  {
    id: 'mark-zhuk',
    name: 'Mark Zhuk',
    text: 'Kind people who make selling easy!',
  },
];

export interface CustomerStory {
  id: string;
  name: string;
  location: string;
  text: string;
}

export const customerStories: CustomerStory[] = [
  {
    id: 'sarah-johnson',
    name: 'Sarah Johnson',
    location: 'Kent, WA',
    text: 'KindKey Home Buyers made selling our house so easy. We needed to relocate quickly for a job, and they closed in just 10 days. No repairs, no hassle, and the process was completely transparent. Highly recommend!',
  },
  {
    id: 'michael-chen',
    name: 'Michael Chen',
    location: 'Federal Way, WA',
    text: "As a family business, they really care about their customers. We felt like we were working with neighbors, not a big corporation. Fair offer, fast closing, and they handled everything. Couldn't be happier.",
  },
  {
    id: 'jennifer-martinez',
    name: 'Jennifer Martinez',
    location: 'Auburn, WA',
    text: 'We inherited a property that needed major repairs. KindKey bought it as-is and closed quickly. The team was professional, respectful, and made a stressful situation much easier. Thank you!',
  },
];
