import { same, type L } from '../i18n';

export interface Job {
  role: L;
  org: string;
  period: L;
  bullets: L[];
}

/** Most recent first: the first item gets the pulsing "current" marker. */
export const experience: Job[] = [
  {
    role: { en: 'Web developer (internship)', es: 'Desarrollador web (prácticas)' },
    org: 'Iberzal',
    period: { en: 'Sep 2026', es: 'Sept 2026' },
    bullets: [
      { en: 'Built websites with Divi (WordPress).', es: 'Desarrollo de páginas web con Divi (WordPress).' },
      {
        en: 'Developed custom plugins focused on security and site configuration for WordPress.',
        es: 'Desarrollo de plugins personalizados dedicados a la seguridad y configuraciones de sitios WordPress.',
      },
    ],
  },
  {
    role: { en: 'Web developer (internship)', es: 'Desarrollador web (prácticas)' },
    org: 'Globales',
    period: same('Mar 2024 – Jun 2024'),
    bullets: [
      {
        en: 'Built MVC web applications: PHP backend, jQuery frontend and Bootstrap UI/UX.',
        es: 'Desarrollo de aplicaciones web MVC con backend en PHP, frontend con jQuery y UI/UX con Bootstrap.',
      },
      {
        en: 'Developed, changed and optimised UI/UX on WordPress-based sites.',
        es: 'Desarrollo, cambios, optimizaciones y mejoras de UI/UX en páginas web basadas en WordPress.',
      },
      {
        en: 'Implemented a REST API in WordPress and built custom WordPress plugins in PHP.',
        es: 'Implementación de API REST en WordPress y creación de plugins de WordPress personalizados en PHP.',
      },
    ],
  },
  {
    role: {
      en: 'Systems & network technician (internship)',
      es: 'Técnico de sistemas y redes (prácticas)',
    },
    org: 'Cruz Roja',
    period: same('Mar 2022 – Jun 2022'),
    bullets: [
      {
        en: 'Maintained computer equipment, installed hardware and ran periodic software reviews.',
        es: 'Mantenimiento de equipos informáticos, instalación de hardware y revisiones periódicas de software.',
      },
      {
        en: 'Installed and configured network printers.',
        es: 'Instalación y configuración de impresoras en red.',
      },
      {
        en: 'Carried out network installations and troubleshooting.',
        es: 'Instalaciones de red y solución de problemas de red.',
      },
    ],
  },
];
