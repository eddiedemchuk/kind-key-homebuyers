import { cityFirePages, type CitySituationPage } from '@/data/cityFirePages';
import { cityForeclosurePages } from '@/data/cityForeclosurePages';

export type { CitySituationPage };

export const CITY_SITUATION_SLUGS = [
  'auburn',
  'kent',
  'federal-way',
  'tacoma',
  'puyallup',
] as const;

export const citySituations: CitySituationPage[] = [...cityFirePages, ...cityForeclosurePages];

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
