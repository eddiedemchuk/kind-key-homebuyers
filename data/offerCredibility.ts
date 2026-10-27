/**
 * Published quotes only. Mark Zhuk is a Google review the owner supplied.
 * Do not add names, stars, or review counts.
 */

export const GOOGLE_REVIEWS_URL =
  'https://search.google.com/local/reviews?placeid=ChIJX1FtVb1dNm8RpEnaJQW6Mvk';

export const BBB_TRUST_LINE = 'Kindkey Home Buyers, LLC – BBB A- rating';

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
