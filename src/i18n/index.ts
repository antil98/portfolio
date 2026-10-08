import { en, es, type Dict } from './ui';
import type { Lang } from '../types';

export type { Lang };
/** A string available in every supported language. */
export type L = Record<Lang, string>;

type Paths<T> = {
  [K in keyof T & string]: T[K] extends string ? K : `${K}.${Paths<T[K]>}`;
}[keyof T & string];

/** Dot-path to any string in the UI dictionary, e.g. `"hero.badge"`. */
export type UiKey = Paths<Dict>;

const dictionaries: Record<Lang, Dict> = { en, es };

export function t(lang: Lang, key: UiKey): string {
  const value = key
    .split('.')
    .reduce<unknown>((node, part) => (node as Record<string, unknown>)?.[part], dictionaries[lang]);
  return value as string;
}

/** Resolve a dictionary key into both languages. */
export const l = (key: UiKey): L => ({ en: t('en', key), es: t('es', key) });

/** For proper nouns and anything identical in both languages. */
export const same = (value: string): L => ({ en: value, es: value });
