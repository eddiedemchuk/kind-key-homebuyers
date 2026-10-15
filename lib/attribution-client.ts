'use client';

import {
  ATTRIBUTION_COOKIE_NAME,
  ATTRIBUTION_MAX_AGE_SECONDS,
  ATTRIBUTION_STORAGE_KEY,
  type AdsLandingChannel,
  type AttributionTouch,
  attributionToPayload,
  decodeStoredAttribution,
  encodeAttribution,
  mergeAttribution,
  preferStoredTouch,
  touchFromLanding,
  withAdsLandingDefaults,
} from '@/lib/attribution';

function readLocal(now: number): AttributionTouch | null {
  try {
    const raw = localStorage.getItem(ATTRIBUTION_STORAGE_KEY);
    if (!raw) return null;
    return decodeStoredAttribution(raw, now);
  } catch {
    return null;
  }
}

function readBrowserCookie(now: number): AttributionTouch | null {
  try {
    const parts = document.cookie ? document.cookie.split(';') : [];
    for (const part of parts) {
      const separator = part.indexOf('=');
      if (separator === -1) continue;
      if (part.slice(0, separator).trim() !== ATTRIBUTION_COOKIE_NAME) continue;
      return decodeStoredAttribution(part.slice(separator + 1).trim(), now);
    }
  } catch {
    return null;
  }
  return null;
}

function writeLocal(touch: AttributionTouch): void {
  try {
    localStorage.setItem(ATTRIBUTION_STORAGE_KEY, JSON.stringify(touch));
  } catch {
    // Private mode and full storage still allow the form to post the in-memory touch.
  }
}

function writeBrowserCookie(touch: AttributionTouch): void {
  try {
    const encoded = encodeAttribution(touch);
    if (encoded.length > 3800) return;
    const secure = window.location.protocol === 'https:' ? '; Secure' : '';
    document.cookie = `${ATTRIBUTION_COOKIE_NAME}=${encoded}; Path=/; Max-Age=${ATTRIBUTION_MAX_AGE_SECONDS}; SameSite=Lax${secure}`;
  } catch {
    // The JSON body still carries attribution when the cookie cannot be written.
  }
}

function currentLandingTouch(now: Date): AttributionTouch {
  const url = new URL(window.location.href);
  url.hash = '';
  return touchFromLanding({
    search: url.search,
    referrer: document.referrer,
    landingPage: url.origin + url.pathname + url.search,
    capturedAt: now.toISOString(),
  });
}

/** Reads the current URL, merges it with the stored first touch, and persists the winner. */
export function captureAttribution(
  now = new Date(),
  incoming?: AttributionTouch
): AttributionTouch {
  const timestamp = now.getTime();
  const existing = preferStoredTouch(readLocal(timestamp), readBrowserCookie(timestamp), timestamp);
  const merged = mergeAttribution(existing, incoming ?? currentLandingTouch(now), timestamp);
  writeLocal(merged);
  writeBrowserCookie(merged);
  return merged;
}

/**
 * Records /offer as Google Ads or Facebook Ads when the visit has no campaign
 * params of its own. A stored paid click still wins, and gclid / fbclid on this
 * URL are kept.
 */
export function captureOfferLandingAttribution(
  channel: AdsLandingChannel,
  now = new Date()
): AttributionTouch {
  const url = new URL(window.location.href);
  url.hash = '';
  return captureAttribution(
    now,
    touchFromLanding({
      search: withAdsLandingDefaults(url.search, channel),
      referrer: document.referrer,
      landingPage: url.origin + url.pathname + url.search,
      capturedAt: now.toISOString(),
    })
  );
}

export function attributionFieldsForSubmit(now = new Date()): Record<string, string> {
  return attributionToPayload(captureAttribution(now));
}

export function offerAttributionFieldsForSubmit(
  channel: AdsLandingChannel,
  now = new Date()
): Record<string, string> {
  return attributionToPayload(captureOfferLandingAttribution(channel, now));
}
