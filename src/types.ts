import type { Mail } from '@lucide/astro';

/** Any Lucide icon component. */
export type Icon = typeof Mail;

export type Theme = 'light' | 'dark' | 'system';
export type Lang = 'en' | 'es';

/** Runtime preferences API exposed by the inline <head> script. */
export interface Prefs {
  theme: Theme;
  lang: Lang;
  setTheme(theme: Theme): void;
  setLang(lang: Lang): void;
}
