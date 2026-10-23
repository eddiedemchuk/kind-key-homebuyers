import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { createElement, type ReactElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import SellerQuizLanding from './SellerQuizLanding';
import { SellerQuizScreen, type SellerQuizScreenProps } from './SellerQuiz';
import { FACEBOOK_OFFER_PHONE, GOOGLE_ADS_PHONE } from '../lib/phones';
import {
  chooseQuizCondition,
  chooseQuizListed,
  chooseQuizTimeline,
  editQuizAnswers,
  goBackQuiz,
  initialSellerQuizState,
  type SellerQuizState,
} from '../lib/seller-quiz';

function screen(state: SellerQuizState, extra: Partial<SellerQuizScreenProps> = {}) {
  const props: SellerQuizScreenProps = {
    step: state.step,
    answers: state.answers,
    onCondition: () => undefined,
    onTimeline: () => undefined,
    onListed: () => undefined,
    onBack: () => undefined,
    onEdit: () => undefined,
    propertyAddress: '',
    name: '',
    phone: '',
    email: '',
    smsConsent: false,
    onPropertyAddress: () => undefined,
    onName: () => undefined,
    onPhone: () => undefined,
    onEmail: () => undefined,
    onSmsConsent: () => undefined,
    onSubmit: () => undefined,
    ...extra,
  };
  return renderToStaticMarkup(createElement(SellerQuizScreen, props) as ReactElement);
}

function telHrefs(html: string): string[] {
  return [...html.matchAll(/href="tel:([^"]+)"/g)].map((match) => match[1]);
}

describe('seller quiz screen', () => {
  it('renders the four taps, keeps the previous choice, and asks for a phone', () => {
    let state = initialSellerQuizState;
    let html = screen(state);
    assert.match(html, /Step 1 of 4/);
    assert.match(html, /What condition is the property in\?/);
    assert.equal(html.includes('← Back'), false);
    for (const option of [
      'Needs Major Repairs',
      'Needs Cosmetics / Updating',
      'Full of Stuff / Needs Cleanout',
      'Good Shape — Just Want a Fast Sale',
    ]) {
      assert.equal(html.includes(option), true, option);
    }

    state = chooseQuizCondition(state, 'Needs Major Repairs');
    html = screen(state);
    assert.match(html, /Step 2 of 4/);
    assert.match(html, /How soon would you like to close\?/);
    assert.match(html, /← Back/);
    for (const option of [
      'As Fast as 7 Days',
      'Within 30 Days',
      '1–3 Months',
      'Just Exploring Options',
    ]) {
      assert.equal(html.includes(option), true, option);
    }

    const backToCondition = goBackQuiz(state);
    assert.equal(backToCondition.answers.condition, 'Needs Major Repairs');
    html = screen(backToCondition);
    assert.match(html, /Step 1 of 4/);
    assert.match(html, /aria-pressed="true"/);
    assert.match(html, /Needs Major Repairs/);

    state = chooseQuizTimeline(state, 'Within 30 Days');
    html = screen(state);
    assert.match(html, /Step 3 of 4/);
    assert.match(html, /Is the property currently listed with a real estate agent\?/);
    assert.match(html, /No — Not Listed/);
    assert.match(html, /Yes — Currently Listed/);

    const backToTimeline = goBackQuiz(state);
    html = screen(backToTimeline);
    assert.match(html, /Step 2 of 4/);
    assert.match(html, /aria-pressed="true"/);
    assert.match(html, /Within 30 Days/);
    assert.equal(backToTimeline.answers.condition, 'Needs Major Repairs');

    state = chooseQuizListed(state, 'no');
    html = screen(state);
    assert.match(html, /Step 4 of 4/);
    assert.match(html, /Where should we send your cash offer\?/);
    assert.match(html, /Needs Major Repairs/);
    assert.match(html, /Within 30 Days/);
    assert.match(html, /No — Not Listed/);
    assert.match(html, /id="hero-phone"/);
    assert.match(html, /Get My Cash Offer →/);
    assert.equal(html.includes('Phone is required.'), false);

    html = screen(state, { phoneError: 'Phone is required.' });
    assert.match(html, /Phone is required\./);
    assert.match(html, /id="hero-phone"/);

    const edited = editQuizAnswers(state);
    assert.equal(edited.step, 1);
    assert.equal(edited.answers.timeline, 'Within 30 Days');
    assert.equal(edited.answers.listedWithAgent, 'no');
    html = screen(edited);
    assert.match(html, /Step 1 of 4/);
    assert.match(html, /aria-pressed="true"/);
  });
});

describe('seller quiz phone links', () => {
  it('shows the Facebook number on every tel link for a Facebook quiz visit', () => {
    for (const pathname of ['/quiz', '/offer/quiz'] as const) {
      const html = renderToStaticMarkup(
        createElement(SellerQuizLanding, {
          pathname,
          initialSearch: 'src=fb',
          initialPhone: FACEBOOK_OFFER_PHONE,
        })
      );
      const hrefs = telHrefs(html);
      assert.ok(hrefs.length >= 4, `${pathname} rendered ${hrefs.length} tel links`);
      for (const href of hrefs) {
        assert.equal(href, '+12534538597', href);
      }
      assert.equal(html.includes('(253) 453-8597'), true, pathname);
      assert.equal(html.includes('(253) 352-4379'), false, pathname);
      assert.equal(html.includes('+12533524379'), false, pathname);
      assert.equal(html.includes('info@kindkeyhomebuyers.com'), true, pathname);
      assert.match(
        html,
        /KindKey Home Buyers LLC is a local cash home buyer in King, Pierce, and Kitsap County/
      );
      assert.match(html, /Close in 7 Days/);
      assert.equal(html.includes('we pay closing costs'), false);
      assert.equal(html.includes('no closing costs'), false);
    }
  });

  it('can render a non-Facebook src on the Google Ads number', () => {
    const html = renderToStaticMarkup(
      createElement(SellerQuizLanding, {
        pathname: '/quiz',
        initialSearch: 'src=google',
        initialPhone: GOOGLE_ADS_PHONE,
      })
    );
    for (const href of telHrefs(html)) {
      assert.equal(href, GOOGLE_ADS_PHONE.tel);
    }
  });
});
