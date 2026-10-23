import { cities } from '@/data/cities';
import { cityDistressedPages } from '@/data/cityDistressedPages';
import {
  cityFirePages,
  type CitySituationKind,
  type CitySituationPage,
} from '@/data/cityFirePages';
import { cityForeclosurePages } from '@/data/cityForeclosurePages';
import {
  edgewoodDistressedPages,
  edgewoodFirePage,
  edgewoodForeclosurePage,
} from '@/data/edgewoodSituations';

export type { CitySituationPage, CitySituationKind };

export const CITY_SITUATION_SLUGS = [
  'auburn',
  'kent',
  'federal-way',
  'tacoma',
  'puyallup',
  'edgewood',
] as const;

export const DISTRESSED_SITUATION_KINDS = [
  'inherited',
  'code',
  'tenants',
  'hoarder',
  'vacant',
] as const satisfies readonly CitySituationKind[];

export const citySituations: CitySituationPage[] = [
  ...cityFirePages,
  edgewoodFirePage,
  ...cityForeclosurePages,
  edgewoodForeclosurePage,
  ...cityDistressedPages,
  ...edgewoodDistressedPages,
];

for (const city of cities) {
  for (const kind of DISTRESSED_SITUATION_KINDS) {
    if (!citySituations.some((page) => page.citySlug === city.slug && page.kind === kind)) {
      throw new Error(`Missing ${kind} page for ${city.slug}`);
    }
  }
}

for (const slug of CITY_SITUATION_SLUGS) {
  for (const kind of ['fire', 'foreclosure'] as const) {
    if (!citySituations.some((page) => page.citySlug === slug && page.kind === kind)) {
      throw new Error(`Missing ${kind} page for ${slug}`);
    }
  }
}

export function getCitySituation(citySlug: string, kind: CitySituationPage['kind']) {
  return citySituations.find((page) => page.citySlug === citySlug && page.kind === kind);
}

export function getCitySituationLinks(citySlug: string) {
  return citySituations
    .filter((page) => page.citySlug === citySlug)
    .map((page) => ({
      href: page.path,
      label: page.h1,
      description: page.description,
    }));
}
