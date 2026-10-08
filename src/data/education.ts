import { same, type L } from '../i18n';

export const education = [
  {
    title: {
      en: 'Master’s in Corporate Cybersecurity & Ethical Hacking',
      es: 'Máster en Ciberseguridad Corporativa y Hacking Ético',
    },
    school: 'Intecssa',
    period: same('2025 – 2026'),
  },
  {
    title: {
      en: 'Vocational training (FP 2) – Web Application Development',
      es: 'FP 2 – Desarrollo de Aplicaciones Web',
    },
    school: 'IES María Moliner',
    period: same('2022 – 2024'),
  },
  {
    title: {
      en: 'Vocational training (FP 1) – Microcomputer Systems & Networks',
      es: 'FP 1 – Sistemas Microinformáticos y Redes',
    },
    school: 'IES María Moliner',
    period: same('2020 – 2022'),
  },
] satisfies { title: L; school: string; period: L }[];

export const languages = [
  { name: { en: 'Spanish', es: 'Español' }, level: { en: 'Native', es: 'Nativo' } },
  { name: { en: 'Bulgarian', es: 'Búlgaro' }, level: { en: 'Native', es: 'Nativo' } },
  { name: { en: 'English', es: 'Inglés' }, level: { en: 'Advanced', es: 'Avanzado' } },
] satisfies { name: L; level: L }[];

export const extras = {
  licence: { en: 'Driving licence (type B)', es: 'Carnet de conducir tipo B' },
  certificate: {
    en: 'Professional certificate in web application development',
    es: 'Certificado de profesionalidad de desarrollo de aplicaciones web',
  },
} satisfies Record<string, L>;
