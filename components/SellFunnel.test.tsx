import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { createElement, type ReactElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { SellFunnelView, type SellContactValues, type SellFunnelViewProps } from './SellFunnel';
import { BBB_TRUST_LINE, shortGoogleReviews } from '../data/offerCredibility';
import { initialSellState, type SellState } from '../lib/sell-funnel';

const contact: SellContactValues = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  smsConsent: false,
};

function view(state: SellState, extra: Partial<SellFunnelViewProps> = {}) {
  const props: SellFunnelViewProps = {
    state,
    contact,
    addressDraft: state.answers.address,
    onAddressDraft: () => undefined,
    onAddressContinue: () => undefined,
    onConfirm: () => undefined,
    onEditAddress: () => undefined,
    onOwner: () => undefined,
    onListed: () => undefined,
    onCondition: () => undefined,
    onTimeline: () => undefined,
    onBack: () => undefined,
    onContact: () => undefined,
    onSubmit: () => undefined,
    ...extra,
  };
  return renderToStaticMarkup(createElement(SellFunnelView, props) as ReactElement);
}

const forbidden = [
  'we pay closing costs',
  'no closing costs',
  'guarantee',
  'foreclosure',
  'divorce',
  'behind on payments',
];

describe('sell funnel screen', () => {
  it('shows the hero, Eddie line, published review, and the Facebook call line', () => {
    const html = view(initialSellState);
    assert.match(html, /Get a cash offer on your house - as-is/);
    assert.match(html, /Local Auburn buyer\. Takes 60 seconds\. No obligation\./);
    assert.match(html, /Hi, I&#x27;m Eddie, owner of KindKey in Auburn\./);
    assert.match(html, /See My Offer Options/);
    assert.match(html, /Step 1 of 6/);
    assert.equal(html.includes(BBB_TRUST_LINE), true);
    assert.equal(html.includes(shortGoogleReviews[0].text), true);
    assert.equal(html.includes(shortGoogleReviews[0].name), true);
    assert.equal(html.includes('tel:+12534538597'), true);
    assert.equal(html.includes('tel:+12065195463'), false);
    assert.equal(html.includes('eddie'), false);
    for (const phrase of forbidden) {
      assert.equal(html.toLowerCase().includes(phrase), false, phrase);
    }
  });

  it('confirms the address, warns outside the three counties, and offers a back link', () => {
    const html = view({
      screen: 'confirm',
      answers: {
        ...initialSellState.answers,
        address: '10 Oak St, Olympia, WA',
        county: 'Thurston',
        areaStatus: 'out_of_area',
      },
    });
    assert.match(html, /Step 1 of 6/);
    assert.match(html, /10 Oak St, Olympia, WA/);
    assert.match(html, /King, Pierce, and Kitsap County/);
    assert.match(html, /That&#x27;s correct/);
    assert.match(html, /Edit address/);
    assert.match(html, />Back</);
  });

  it('auto-advance choices use large targets and the contact step keeps the TCPA line', () => {
    const owner = view({ ...initialSellState, screen: 'owner' });
    assert.match(owner, /Step 2 of 6/);
    assert.match(owner, /No, helping the owner/);
    assert.match(owner, /I&#x27;m a real estate agent/);
    assert.match(owner, /min-h-14/);

    const listed = view({ ...initialSellState, screen: 'listed' });
    assert.match(listed, /It was listed but expired or cancelled/);
    assert.match(listed, /Yes, listed now/);

    const timeline = view({ ...initialSellState, screen: 'timeline' });
    assert.match(timeline, /Any timeline works\./);
    assert.match(timeline, /Step 5 of 6/);

    const contactHtml = view({
      screen: 'contact',
      answers: { ...initialSellState.answers, listed: 'listed-now', owner: 'yes' },
    });
    assert.match(contactHtml, /Step 6 of 6/);
    assert.match(contactHtml, /We&#x27;ll check in/);
    assert.match(contactHtml, /Get My Cash Offer/);
    assert.match(contactHtml, /No obligation\. We never share your info\./);
    assert.match(contactHtml, /type="tel"/);
    assert.match(contactHtml, /Terms of Service/);
    assert.match(contactHtml, /Reply STOP/);
  });

  it('tells the seller which number will call, and the button dials the tracking line', () => {
    const html = view({ ...initialSellState, screen: 'thanks' });
    assert.match(html, /Eddie or Angie will call you shortly from \(206\) 519-5463/);
    assert.match(html, /href="tel:\+12534538597"/);
    assert.equal(html.includes('Step 1 of 6'), false);
    for (const phrase of forbidden) {
      assert.equal(html.toLowerCase().includes(phrase), false, phrase);
    }
  });
});
