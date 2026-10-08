import { contact, copy, openContact, prefersReducedMotion, type ContactKind } from './shared';
import type { Lang, Theme } from '../types';

const dialog = document.querySelector<HTMLDialogElement>('#palette')!;
const input = dialog.querySelector<HTMLInputElement>('#palette-input')!;
const empty = dialog.querySelector<HTMLElement>('[data-empty]')!;
const groups = [...dialog.querySelectorAll<HTMLElement>('[data-group]')];
const items = [...dialog.querySelectorAll<HTMLButtonElement>('[data-cmd]')];

const normalize = (s: string) => s.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '');
const rowOf = (item: HTMLElement) => item.closest('li')!;
const visibleItems = () => items.filter((item) => !rowOf(item).hidden);

/* ───────── Commands ───────── */
const commands: Record<string, (arg: string) => void> = {
  go(id) {
    const target = document.getElementById(id);
    target?.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth', block: 'start' });
    history.replaceState(null, '', id === 'top' ? location.pathname : `#${id}`);
  },
  'copy-contact': (kind) => void copy(contact(kind as ContactKind)),
  'open-contact': (kind) => openContact(kind as ContactKind),
  'open-github': () => {
    const href = document.querySelector<HTMLAnchorElement>('a[data-github]')?.href;
    if (href) window.open(href, '_blank', 'noopener');
  },
  'download-cv': () => document.querySelector<HTMLAnchorElement>('a[data-cv]')?.click(),
  'copy-link': () => void copy(location.href),
  theme: (value) => window.__prefs.setTheme(value as Theme),
  lang: (value) => window.__prefs.setLang(value as Lang),
};

function run(item: HTMLButtonElement) {
  const { cmd, arg = '' } = item.dataset;
  close();
  // Wait a frame so the modal is gone before scrolling / navigating.
  requestAnimationFrame(() => commands[cmd!]?.(arg));
}

/* ───────── Filtering & selection ───────── */
let active = 0;

function select(index: number) {
  const list = visibleItems();
  if (!list.length) return;
  active = (index + list.length) % list.length;
  items.forEach((item) => item.setAttribute('aria-selected', 'false'));
  list[active].setAttribute('aria-selected', 'true');
  list[active].scrollIntoView({ block: 'nearest' });
}

function filter(query: string) {
  const terms = normalize(query).split(/\s+/).filter(Boolean);
  items.forEach((item) => {
    const haystack = normalize(`${item.dataset.keywords} ${item.textContent}`);
    rowOf(item).hidden = !terms.every((term) => haystack.includes(term));
  });
  groups.forEach((group) => (group.hidden = !group.querySelector('li:not([hidden])')));
  empty.classList.toggle('hidden', visibleItems().length > 0);
  select(0);
}

/* ───────── Open / close ───────── */
function open() {
  if (dialog.open) return;
  dialog.showModal();
  input.value = '';
  filter('');
  input.focus();
}
function close() {
  if (dialog.open) dialog.close();
}

const syncPlaceholder = () => {
  input.placeholder = dialog.dataset[window.__prefs.lang === 'es' ? 'phEs' : 'phEn'] ?? '';
};
syncPlaceholder();
document.addEventListener('prefs:change', syncPlaceholder);

document.addEventListener('click', (e) => {
  if ((e.target as HTMLElement).closest('[data-palette-open]')) open();
});

document.addEventListener('keydown', (e) => {
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
    e.preventDefault();
    dialog.open ? close() : open();
    return;
  }
  const typing = /^(input|textarea|select)$/i.test((e.target as HTMLElement).tagName);
  if (e.key === '/' && !dialog.open && !typing) {
    e.preventDefault();
    open();
  }
});

input.addEventListener('input', () => filter(input.value));

dialog.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowDown') { e.preventDefault(); select(active + 1); }
  else if (e.key === 'ArrowUp') { e.preventDefault(); select(active - 1); }
  else if (e.key === 'Enter') { e.preventDefault(); const item = visibleItems()[active]; if (item) run(item); }
});

dialog.addEventListener('click', (e) => {
  const target = e.target as HTMLElement;
  if (target === dialog) return close(); // backdrop
  const item = target.closest<HTMLButtonElement>('[data-cmd]');
  if (item) run(item);
});

items.forEach((item) =>
  item.addEventListener('pointermove', () => {
    const index = visibleItems().indexOf(item);
    if (index !== active) select(index);
  }));
