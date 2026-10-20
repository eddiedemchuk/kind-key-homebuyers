export const META_PIXEL_ID = '1352513176647290';

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
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
