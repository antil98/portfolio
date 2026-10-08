/**
 * Single source of truth for personal data.
 * `email` and `phone` are only read at build time and rendered reversed
 * (see ReverseText.astro); never import this file from client scripts.
 */
export const profile = {
  name: 'Antonio Iliyanov',
  email: 'antil98@proton.me',
  phone: '+34 657 39 40 96',
  location: 'Segovia, España',
  availableForHire: true,
  cvPath: '/Antonio-Iliyanov-CV.pdf',
  social: {
    github: 'https://github.com/antil98',
    linkedin: '', // add a URL and the button appears automatically
  },
} as const;
