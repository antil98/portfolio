import type { L } from "../i18n";

export interface Project {
  name: string;
  path: string;
  description: L;
  stack: string[];
  demoHref?: string;
  repoHref?: string;
}

export const projects: Project[] = [
  {
    name: "CRM Ayudamos a tu Familia",
    path: "~/crm-ayudamos-a-tu-familia",
    description: {
      en: "A custom CRM focused on a simpler UI/UX than commercial alternatives or SuiteCRM, with tailor-made authentication and a themed Shadcn interface.",
      es: "CRM a medida centrado en simplificar la UI/UX frente a alternativas comerciales o SuiteCRM, con autenticación custom e integración y theming de Shadcn.",
    },
    stack: ["Next.js", "PostgreSQL", "Shadcn"],
    demoHref: "https://crm-atf.vercel.app",
    repoHref: "https://github.com/antil98/crm-atf",
  },
  {
    name: "Exavault",
    path: "~/exavault",
    description: {
      en: "Cloud storage with full file management, a recycle bin and recursive folder navigation, with Clerk authentication and a themed Shadcn UI.",
      es: "Almacenamiento en la nube con gestión completa de archivos, reciclaje y navegación recursiva, con autenticación de Clerk e integración y theming de Shadcn.",
    },
    stack: ["Next.js", "PostgreSQL", "Vercel Blob", "Clerk", "Shadcn"],
    demoHref: "https://exavault.vercel.app",
    repoHref: "https://github.com/antil98/exavault",
  },
];
