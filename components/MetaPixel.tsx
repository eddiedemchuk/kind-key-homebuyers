import Script from 'next/script';
import { META_PIXEL_ID, metaPixelFallbackScript } from '@/lib/meta-pixel';

/**
 * Late pixel for a Facebook /offer visit that is not in the initial HTML
 * (utm_source=facebook, or a stored session). The head snippet owns PageView
 * on /offer?src=fb, /offer?src=fb_static, and /offer/facebook. This fallback
 * does nothing once window.fbq exists, so PageView cannot fire twice.
 */
export default function MetaPixel() {
  return (
    <>
      <Script id="meta-pixel-fallback" strategy="afterInteractive">
        {metaPixelFallbackScript()}
      </Script>
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element -- Meta requires this exact 1x1 URL */}
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          alt=""
          src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
        />
      </noscript>
    </>
  );
}
