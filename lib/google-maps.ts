/**
 * Browser Maps/Places loader. The script stays out of the initial HTML so the
 * /sell hero can paint before Google's library arrives. An empty key skips it.
 */

export function googleMapsBrowserKey(): string {
  return (process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? '').trim();
}

export interface GoogleAddressComponent {
  long_name: string;
  short_name: string;
  types: string[];
}

export interface GooglePlaceResult {
  formatted_address?: string;
  address_components?: GoogleAddressComponent[];
  geometry?: { location?: { lat: () => number; lng: () => number } };
}

interface GoogleAutocomplete {
  addListener: (event: string, handler: () => void) => { remove: () => void };
  getPlace: () => GooglePlaceResult;
  setFields?: (fields: string[]) => void;
}

export interface GoogleMapsNamespace {
  Map: new (
    element: HTMLElement,
    options: {
      center: { lat: number; lng: number };
      zoom: number;
      disableDefaultUI?: boolean;
      gestureHandling?: string;
      clickableIcons?: boolean;
    }
  ) => unknown;
  Marker: new (options: { map: unknown; position: { lat: number; lng: number } }) => unknown;
  LatLng: new (lat: number, lng: number) => unknown;
  LatLngBounds: new (sw: unknown, ne: unknown) => unknown;
  places?: {
    Autocomplete: new (
      input: HTMLInputElement,
      options: Record<string, unknown>
    ) => GoogleAutocomplete;
  };
}

let loading: Promise<void> | null = null;

export function googleMapsNamespace(): GoogleMapsNamespace | null {
  if (typeof window === 'undefined') return null;
  const maps = (window as Window & { google?: { maps?: GoogleMapsNamespace } }).google?.maps;
  return maps ?? null;
}

export function loadGoogleMaps(key: string): Promise<void> {
  const apiKey = key.trim();
  if (!apiKey || typeof window === 'undefined') return Promise.resolve();
  if (googleMapsNamespace()) return Promise.resolve();
  if (loading) return loading;

  loading = new Promise<void>((resolve, reject) => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(apiKey)}&libraries=places`;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => {
      loading = null;
      reject(new Error('Google Maps failed to load'));
    };
    document.head.appendChild(script);
  });
  return loading;
}

/** Washington bounds so Places suggestions stay in the state. */
export function washingtonAutocompleteOptions(maps: GoogleMapsNamespace): Record<string, unknown> {
  const bounds = new maps.LatLngBounds(
    new maps.LatLng(45.54, -124.85),
    new maps.LatLng(49, -116.92)
  );
  return {
    types: ['address'],
    componentRestrictions: { country: 'us' },
    bounds,
    strictBounds: true,
    fields: ['formatted_address', 'address_components', 'geometry'],
  };
}
