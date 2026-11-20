/**
 * Published quotes only. Mark Zhuk is a Google review the owner supplied.
 * Do not add names, stars, or review counts.
 */

export const GOOGLE_REVIEWS_URL =
  'https://search.google.com/local/reviews?placeid=ChIJX1FtVb1dNm8RpEnaJQW6Mvk';

/**
 * Public BBB profile for Kindkey Home Buyers, LLC, 640 1st St SW, Auburn, WA 98001
 * (https://www.bbb.org/us/wa/auburn/profile/home-buyers/kindkey-home-buyers-llc-1296-1000200620)
 * shows BBB Rating A- and lists the business on BBB Accredited results. Checked 2026-11-20.
 */
export const BBB_TRUST_LINE = 'KindKey Home Buyers LLC – BBB A- rating';

export interface GoogleReview {
  id: string;
  name: string;
  text: string;
}

export const shortGoogleReviews: GoogleReview[] = [
  {
    id: 'mark-zhuk',
    name: 'Mark Zhuk',
    text: 'Kind people who make selling easy!',
  },
];

export const googleReviews: GoogleReview[] = [
  {
    id: 'mark-zhuk',
    name: 'Mark Zhuk',
    text: 'Kind people who make selling easy!',
  },
];
