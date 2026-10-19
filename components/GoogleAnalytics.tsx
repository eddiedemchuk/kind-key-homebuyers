/**
 * GA4 and Google Ads share the single gtag loader in the root layout.
 * This component must not load a second gtag.js or send another page_view.
 */
export default function GoogleAnalytics() {
  return null;
}
