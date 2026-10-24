import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { OFFER_CITIES, offerCityFromSearch, offerCityHeadline } from './offer-city';

describe('offer city headline', () => {
  it('reads a city out of a keyword-style utm_term', () => {
    assert.equal(offerCityFromSearch('?utm_term=sell+my+house+bremerton'), 'Bremerton');
    assert.equal(offerCityFromSearch('?utm_term=sell%20my%20house%20bremerton'), 'Bremerton');
    assert.equal(offerCityHeadline('Bremerton'), 'We Buy Houses in Bremerton');
  });

  it('keeps the default headline when the query has no known city', () => {
    assert.equal(offerCityFromSearch(''), null);
    assert.equal(offerCityFromSearch('?gclid=abc&utm_source=google'), null);
    assert.equal(offerCityFromSearch('?utm_term=sell+my+house+seattle'), null);
    assert.equal(offerCityFromSearch('?utm_term=kenton'), null);
    assert.equal(offerCityFromSearch('?keyword=hamilton'), null);
  });

  it('never returns raw parameter text', () => {
    assert.equal(offerCityFromSearch('?city=<script>alert(1)</script>'), null);
    assert.equal(offerCityFromSearch('?utm_term=We+Buy+Houses+in+Evil+City'), null);
    assert.equal(offerCityFromSearch('?city=bremerton<img+src%3Dx>'), 'Bremerton');
    assert.equal(offerCityFromSearch('?utm_term=sell+my+house+gig-harbor'), 'Gig Harbor');
  });

  it('prefers city, then keyword, then utm_term', () => {
    assert.equal(offerCityFromSearch('?city=Tacoma&keyword=bremerton&utm_term=auburn'), 'Tacoma');
    assert.equal(offerCityFromSearch('?city=seattle&keyword=gig-harbor'), 'Gig Harbor');
    assert.equal(offerCityFromSearch('?keyword=not-a-city&utm_term=port+orchard'), 'Port Orchard');
  });

  it('matches every whitelist city and ignores a city that only appears in another param', () => {
    for (const city of OFFER_CITIES) {
      const value = city.toLowerCase().replace(/ /g, '+');
      assert.equal(offerCityFromSearch(`?utm_term=${value}`), city);
      assert.equal(offerCityFromSearch(`?keyword=${city.toLowerCase().replace(/ /g, '-')}`), city);
    }
    assert.equal(offerCityFromSearch('?utm_content=bremerton&utm_campaign=kent'), null);
  });

  it('uses the city that appears first when a keyword names two', () => {
    assert.equal(offerCityFromSearch('?utm_term=auburn+and+kent'), 'Auburn');
    assert.equal(offerCityFromSearch('?keyword=federal+way'), 'Federal Way');
    assert.equal(offerCityFromSearch('?utm_term=des+moines'), 'Des Moines');
    assert.equal(offerCityFromSearch('?utm_term=university_place'), 'University Place');
    assert.equal(offerCityFromSearch('?utm_term=BONNEY+LAKE'), 'Bonney Lake');
  });
});
