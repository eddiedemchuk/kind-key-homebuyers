import { normalizeOfferSrc } from '@/lib/offer-facebook-visit';

export const META_PIXEL_ID = '1352513176647290';

/**
 * Internal rewrite target for /offer?src=fb and /offer?src=fb_static.
 * That route uses the Facebook-offer document so the pixel can live in <head>
 * without opting the rest of the site into dynamic rendering.
 */
export const META_PIXEL_REWRITE_PATH = '/offer/fb';

/** Set on the rewritten request so a direct /offer/fb visit can still redirect. */
export const META_PIXEL_REWRITE_HEADER = 'x-kk-meta-pixel-rewrite';

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

/** src=fb and src=fb_static, case-insensitive. Other values do not qualify. */
export function isMetaPixelOfferSrc(value: string | null | undefined): boolean {
  return normalizeOfferSrc(value) !== null;
}

/**
 * Official Meta base code. Inline in <head> so the browser runs PageView while
 * parsing HTML, before Next.js boots. next/script beforeInteractive only queues
 * this on __next_s and runs it after the framework runtime.
 */
export function metaPixelInlineScript(): string {
  return `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${META_PIXEL_ID}');
fbq('track', 'PageView');`;
}

/**
 * Client-bundle fallback for visits that are not in the initial HTML
 * (utm_source=facebook, or a stored /offer visit). Does not init or send
 * PageView when the head snippet already installed fbq.
 */
export function metaPixelFallbackScript(): string {
  return `if (typeof window.fbq !== 'function') {\n${metaPixelInlineScript()}\n}`;
}

/** Standard Lead event. No-op until the Facebook page has installed fbq. */
export function trackMetaLead(): void {
  if (typeof window === 'undefined' || typeof window.fbq !== 'function') return;

  try {
    window.fbq('track', 'Lead');
  } catch (error) {
    console.error('Meta pixel Lead error:', error);
  }
}
