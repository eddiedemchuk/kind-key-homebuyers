/**
 * County check for the /sell funnel. King, Pierce, and Kitsap stay in area.
 * A missing county is unknown, not out of area, so a geocoder miss does not tag the lead.
 */

export const SELL_SERVICE_COUNTIES = ['king', 'pierce', 'kitsap'] as const;

export type ServiceAreaStatus = 'in_area' | 'out_of_area' | 'unknown';

export interface AddressLocation {
  formattedAddress: string;
  county: string;
  state: string;
  city: string;
  lat: number | null;
  lng: number | null;
  status: ServiceAreaStatus;
}

export function emptyAddressLocation(formattedAddress: string): AddressLocation {
  return {
    formattedAddress,
    county: '',
    state: '',
    city: '',
    lat: null,
    lng: null,
    status: 'unknown',
  };
}

function countyKey(value: string): string {
  return value
    .toLowerCase()
    .replace(/\./g, '')
    .replace(/\bcounty\b/g, '')
    .replace(/[^a-z]/g, '');
}

export function isWashingtonState(value: string): boolean {
  const normalized = value.trim().toLowerCase().replace(/\./g, '');
  return normalized === 'wa' || normalized === 'wash' || normalized === 'washington';
}

/** Two-letter state at the end of a typed address, such as "Portland, OR 97201". */
export function stateFromAddressText(address: string): string {
  const match = address.match(/,\s*([A-Za-z]{2})(?:\s+\d{5}(?:-\d{4})?)?\s*$/);
  return match ? match[1].toUpperCase() : '';
}

export function serviceAreaStatus(input: { county?: string; state?: string }): ServiceAreaStatus {
  const state = (input.state ?? '').trim();
  if (state && !isWashingtonState(state)) return 'out_of_area';
  const county = countyKey(input.county ?? '');
  if (!county) return 'unknown';
  return (SELL_SERVICE_COUNTIES as readonly string[]).includes(county) ? 'in_area' : 'out_of_area';
}

function asRecord(value: unknown): Record<string, unknown> | null {
  return value && typeof value === 'object' ? (value as Record<string, unknown>) : null;
}

function stringField(record: Record<string, unknown> | null, key: string): string {
  const value = record?.[key];
  return typeof value === 'string' ? value.trim() : '';
}

function numberField(record: Record<string, unknown> | null, key: string): number | null {
  const value = record?.[key];
  return typeof value === 'number' && Number.isFinite(value) ? value : null;
}

/**
 * US Census oneline geocoder payload. Counties come from geographies, and
 * coordinates use x = longitude, y = latitude.
 */
export function parseCensusGeocode(payload: unknown, fallbackAddress: string): AddressLocation {
  const result = asRecord(asRecord(payload)?.result);
  const matches = result?.addressMatches;
  const match = Array.isArray(matches) ? asRecord(matches[0]) : null;
  if (!match) return emptyAddressLocation(fallbackAddress);

  const geographies = asRecord(match.geographies);
  const counties = geographies?.Counties;
  const states = geographies?.States;
  const countyRecord = Array.isArray(counties) ? asRecord(counties[0]) : null;
  const stateRecord = Array.isArray(states) ? asRecord(states[0]) : null;
  const coordinates = asRecord(match.coordinates);
  const county = stringField(countyRecord, 'BASENAME') || stringField(countyRecord, 'NAME');
  const state = stringField(stateRecord, 'STUSAB') || stringField(stateRecord, 'NAME');
  const formatted = stringField(match, 'matchedAddress') || fallbackAddress;

  return {
    formattedAddress: formatted,
    county,
    state,
    city: '',
    lat: numberField(coordinates, 'y'),
    lng: numberField(coordinates, 'x'),
    status: serviceAreaStatus({ county, state }),
  };
}

export interface PlaceAddressPart {
  longName: string;
  shortName: string;
  types: string[];
}

function part(parts: PlaceAddressPart[], type: string): PlaceAddressPart | undefined {
  return parts.find((item) => item.types.includes(type));
}

/** Google Places address components. County is administrative_area_level_2. */
export function locationFromPlaceParts(
  fallbackAddress: string,
  parts: PlaceAddressPart[],
  coords?: { lat: number | null; lng: number | null },
  formattedAddress?: string
): AddressLocation {
  const county = part(parts, 'administrative_area_level_2')?.longName ?? '';
  const statePart = part(parts, 'administrative_area_level_1');
  const state = statePart?.shortName || statePart?.longName || '';
  const city =
    part(parts, 'locality')?.longName ||
    part(parts, 'postal_town')?.longName ||
    part(parts, 'sublocality')?.longName ||
    '';
  return {
    formattedAddress: formattedAddress?.trim() || fallbackAddress,
    county,
    state,
    city,
    lat: coords?.lat ?? null,
    lng: coords?.lng ?? null,
    status: serviceAreaStatus({ county, state }),
  };
}
