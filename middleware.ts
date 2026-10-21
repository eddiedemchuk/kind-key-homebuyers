import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import {
  META_PIXEL_REWRITE_HEADER,
  META_PIXEL_REWRITE_PATH,
  isMetaPixelOfferSrc,
} from '@/lib/meta-pixel';

/**
 * /offer?src=fb and /offer?src=fb_static render the Facebook-offer document so
 * the pixel base code is in the HTML <head>. The browser URL stays /offer.
 * A direct hit on the internal path redirects back to /offer.
 */
export function middleware(request: NextRequest) {
  if (request.headers.get(META_PIXEL_REWRITE_HEADER) === '1') {
    return NextResponse.next();
  }

  const { pathname, searchParams } = request.nextUrl;

  if (pathname === '/offer' && isMetaPixelOfferSrc(searchParams.get('src'))) {
    const url = request.nextUrl.clone();
    url.pathname = META_PIXEL_REWRITE_PATH;
    const headers = new Headers(request.headers);
    headers.set(META_PIXEL_REWRITE_HEADER, '1');
    return NextResponse.rewrite(url, { request: { headers } });
  }

  if (pathname === META_PIXEL_REWRITE_PATH) {
    const url = request.nextUrl.clone();
    url.pathname = '/offer';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/offer', '/offer/fb'],
};
