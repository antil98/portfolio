import { contact, copy, openContact, reverse, type ContactKind } from './shared';
import type { Lang, Theme } from '../types';

const root = document.documentElement;

/* Theme + language buttons (event delegation) and contact actions */
document.addEventListener('click', (event) => {
  const target = event.target as HTMLElement;

  const theme = target.closest<HTMLElement>('[data-theme-set]');
  if (theme) return window.__prefs.setTheme(theme.dataset.themeSet as Theme);

  const lang = target.closest<HTMLElement>('[data-lang-set]');
  if (lang) return window.__prefs.setLang(lang.dataset.langSet as Lang);

  const copyBtn = target.closest<HTMLElement>('[data-contact-copy]');
  if (copyBtn) return void copy(contact(copyBtn.dataset.contactCopy as ContactKind));

  const openBtn = target.closest<HTMLElement>('[data-contact-open]');
  if (openBtn) return openContact(openBtn.dataset.contactOpen as ContactKind);
});

/* Keep aria-pressed in sync with the active preferences */
const syncPressed = () => {
  document.querySelectorAll<HTMLElement>('[data-theme-set]').forEach((el) =>
    el.setAttribute('aria-pressed', String(el.dataset.themeSet === window.__prefs.theme)));
  document.querySelectorAll<HTMLElement>('[data-lang-set]').forEach((el) =>
    el.setAttribute('aria-pressed', String(el.dataset.langSet === window.__prefs.lang)));
};
syncPressed();
document.addEventListener('prefs:change', syncPressed);

/* Show ⌘ on Apple devices, Ctrl elsewhere */
if (/Mac|iPhone|iPad/i.test(navigator.platform || navigator.userAgent)) {
  document.querySelectorAll('[data-mod]').forEach((el) => (el.textContent = '⌘'));
}

/* Screen readers get the real value; the reversed visual copy is hidden from them */
document.querySelectorAll<HTMLElement>('[data-contact]').forEach((el) => {
  const real = document.createElement('span');
  real.className = 'sr-only';
  real.textContent = reverse(el.textContent ?? '');
  el.setAttribute('aria-hidden', 'true');
  el.after(real);
});

/* Scroll reveal */
const reveal = new IntersectionObserver(
  (entries) => entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('in');
    reveal.unobserve(entry.target);
  }),
  { threshold: 0.1 },
);
document.querySelectorAll('.reveal').forEach((el) => reveal.observe(el));

/* Scroll-spy for the header navigation */
const navLinks = new Map(
  [...document.querySelectorAll<HTMLElement>('[data-nav]')].map((el) => [el.dataset.nav!, el]),
);
const spy = new IntersectionObserver(
  (entries) => entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    navLinks.forEach((link, id) => link.toggleAttribute('data-active', id === entry.target.id));
  }),
  { rootMargin: '-45% 0px -50% 0px' },
);
document.querySelectorAll('section[data-section]').forEach((el) => spy.observe(el));

/* Pointer spotlight in the background */
if (matchMedia('(pointer: fine)').matches) {
  let frame = 0;
  addEventListener('pointermove', (e) => {
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(() => {
      root.style.setProperty('--mx', `${e.clientX}px`);
      root.style.setProperty('--my', `${e.clientY}px`);
    });
  }, { passive: true });
}
