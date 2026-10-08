export type ContactKind = 'email' | 'phone';

export const reverse = (value: string) => [...value].reverse().join('');

export const prefersReducedMotion = () => matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Read a contact value back from its reversed DOM text. */
export function contact(kind: ContactKind): string {
  const el = document.querySelector<HTMLElement>(`[data-contact="${kind}"]`);
  return reverse(el?.textContent ?? '');
}

export function openContact(kind: ContactKind) {
  const value = contact(kind);
  if (!value) return;
  location.href = kind === 'email' ? `mailto:${value}` : `tel:${value.replace(/\s+/g, '')}`;
}

let toastTimer: number | undefined;

export function showToast() {
  const el = document.getElementById('toast');
  if (!el) return;
  el.dataset.open = 'true';
  clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => (el.dataset.open = 'false'), 1800);
}

export async function copy(text: string) {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const area = document.createElement('textarea');
    area.value = text;
    Object.assign(area.style, { position: 'fixed', opacity: '0' });
    document.body.append(area);
    area.select();
    document.execCommand('copy');
    area.remove();
  }
  showToast();
}
