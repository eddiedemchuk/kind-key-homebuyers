import { META_PIXEL_ID, metaPixelInlineScript } from '@/lib/meta-pixel';

/**
 * Meta Pixel base code for the Facebook offer document only.
 * Render this from that document's <head>, not from a shared layout.
 */
export default function MetaPixelHead() {
  return (
    <>
      <script id="meta-pixel" dangerouslySetInnerHTML={{ __html: metaPixelInlineScript() }} />
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
