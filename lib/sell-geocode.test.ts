import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import {
  locationFromPlaceParts,
  parseCensusGeocode,
  serviceAreaStatus,
  stateFromAddressText,
} from './sell-geocode';

describe('sell service area', () => {
  it('keeps King, Pierce, and Kitsap in area', () => {
    assert.equal(serviceAreaStatus({ county: 'King County', state: 'WA' }), 'in_area');
    assert.equal(serviceAreaStatus({ county: 'Pierce', state: 'Washington' }), 'in_area');
    assert.equal(serviceAreaStatus({ county: 'Kitsap County', state: 'WA' }), 'in_area');
  });

  it('tags another Washington county and another state as out of area', () => {
    assert.equal(serviceAreaStatus({ county: 'Thurston County', state: 'WA' }), 'out_of_area');
    assert.equal(serviceAreaStatus({ county: 'Multnomah', state: 'OR' }), 'out_of_area');
    assert.equal(serviceAreaStatus({ state: 'OR' }), 'out_of_area');
  });

  it('leaves a missing county unknown', () => {
    assert.equal(serviceAreaStatus({ state: 'WA' }), 'unknown');
    assert.equal(serviceAreaStatus({}), 'unknown');
    assert.equal(stateFromAddressText('123 Main St, Portland, OR 97201'), 'OR');
    assert.equal(stateFromAddressText('123 Main St, Auburn, WA'), 'WA');
  });
});

describe('census geocode parsing', () => {
  it('reads the county and lat/lng from a Census match', () => {
    const location = parseCensusGeocode(
      {
        result: {
          addressMatches: [
            {
              matchedAddress: '100 MAIN ST, AUBURN, WA, 98002',
              coordinates: { x: -122.22, y: 47.31 },
              geographies: {
                Counties: [{ BASENAME: 'King', NAME: 'King County' }],
                States: [{ STUSAB: 'WA' }],
              },
            },
          ],
        },
      },
      '100 Main St, Auburn, WA'
    );
    assert.equal(location.county, 'King');
    assert.equal(location.state, 'WA');
    assert.equal(location.status, 'in_area');
    assert.equal(location.lat, 47.31);
    assert.equal(location.lng, -122.22);
  });

  it('stays unknown when Census has no match', () => {
    const location = parseCensusGeocode({ result: { addressMatches: [] } }, 'somewhere');
    assert.equal(location.status, 'unknown');
    assert.equal(location.formattedAddress, 'somewhere');
  });
});

describe('places address parts', () => {
  it('uses the county component', () => {
    const location = locationFromPlaceParts(
      '1 A St',
      [
        { longName: 'Auburn', shortName: 'Auburn', types: ['locality'] },
        {
          longName: 'Pierce County',
          shortName: 'Pierce County',
          types: ['administrative_area_level_2'],
        },
        { longName: 'Washington', shortName: 'WA', types: ['administrative_area_level_1'] },
      ],
      { lat: 47.2, lng: -122.2 },
      '1 A St, Auburn, WA'
    );
    assert.equal(location.city, 'Auburn');
    assert.equal(location.county, 'Pierce County');
    assert.equal(location.state, 'WA');
    assert.equal(location.status, 'in_area');
  });
});
