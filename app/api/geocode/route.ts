import { NextRequest, NextResponse } from 'next/server';
import { emptyAddressLocation, parseCensusGeocode } from '@/lib/sell-geocode';

export const runtime = 'nodejs';

const CENSUS_URL = 'https://geocoding.geo.census.gov/geocoder/geographies/onelineaddress';

/**
 * Free county lookup for /sell when NEXT_PUBLIC_GOOGLE_MAPS_API_KEY is unset.
 * A Census miss returns the typed address with status unknown so the funnel continues.
 */
export async function GET(request: NextRequest) {
  const address = request.nextUrl.searchParams.get('address')?.trim() ?? '';
  if (address.length < 5 || address.length > 200) {
    return NextResponse.json({ message: 'Enter a property address.' }, { status: 400 });
  }

  const url = new URL(CENSUS_URL);
  url.searchParams.set('address', address);
  url.searchParams.set('benchmark', 'Public_AR_Current');
  url.searchParams.set('vintage', 'Current_Current');
  url.searchParams.set('format', 'json');

  try {
    const response = await fetch(url, {
      headers: { Accept: 'application/json' },
      signal: AbortSignal.timeout(4000),
    });
    if (!response.ok) {
      return NextResponse.json(emptyAddressLocation(address));
    }
    const payload: unknown = await response.json();
    return NextResponse.json(parseCensusGeocode(payload, address));
  } catch (error) {
    console.error('Census geocode error:', error);
    return NextResponse.json(emptyAddressLocation(address));
  }
}
