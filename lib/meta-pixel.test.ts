import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import {
  META_PIXEL_ID,
  isMetaPixelOfferSrc,
  metaPixelFallbackScript,
  metaPixelInlineScript,
} from './meta-pixel';

describe('meta pixel document', () => {
  it('matches only src=fb and src=fb_static', () => {
    assert.equal(isMetaPixelOfferSrc('fb'), true);
    assert.equal(isMetaPixelOfferSrc('FB'), true);
    assert.equal(isMetaPixelOfferSrc(' fb_static '), true);
    assert.equal(isMetaPixelOfferSrc('FB_STATIC'), true);
    assert.equal(isMetaPixelOfferSrc('facebook'), false);
    assert.equal(isMetaPixelOfferSrc(''), false);
    assert.equal(isMetaPixelOfferSrc(null), false);
    assert.equal(isMetaPixelOfferSrc(undefined), false);
  });

  it('inlines one init and one PageView for the head snippet', () => {
    const script = metaPixelInlineScript();
    assert.equal(script.includes(`fbq('init', '${META_PIXEL_ID}')`), true);
    assert.equal(script.split(`fbq('track', 'PageView')`).length, 2);
    assert.equal(script.includes('https://connect.facebook.net/en_US/fbevents.js'), true);
    assert.equal(script.includes('</'), false);
  });

  it('guards the bundle fallback so an existing fbq does not send PageView again', () => {
    const script = metaPixelFallbackScript();
    assert.equal(script.startsWith(`if (typeof window.fbq !== 'function')`), true);
    assert.equal(script.split(`fbq('track', 'PageView')`).length, 2);
    assert.equal(script.includes(metaPixelInlineScript()), true);
  });
});
