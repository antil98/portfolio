import {
  Briefcase, Download, FolderGit2, GraduationCap, House, Languages,
  Layers, Link as LinkIcon, Mail, Monitor, Moon, Phone, Send, Sun,
} from '@lucide/astro';
import type { UiKey } from '../i18n';
import type { Icon } from '../types';

export interface Command {
  label: UiKey;
  cmd: string;
  arg?: string;
  icon?: Icon;
  brand?: 'github';
  /** Extra search terms in both languages. */
  keywords: string;
}

export interface CommandGroup {
  title: UiKey;
  items: Command[];
}

export const commandGroups: CommandGroup[] = [
  {
    title: 'palette.navigate',
    items: [
      { label: 'nav.home', cmd: 'go', arg: 'top', icon: House, keywords: 'home top inicio arriba' },
      { label: 'nav.skills', cmd: 'go', arg: 'skills', icon: Layers, keywords: 'skills stack tech habilidades' },
      { label: 'nav.experience', cmd: 'go', arg: 'experience', icon: Briefcase, keywords: 'experience work jobs experiencia trabajo' },
      { label: 'nav.projects', cmd: 'go', arg: 'projects', icon: FolderGit2, keywords: 'projects proyectos portfolio' },
      { label: 'nav.education', cmd: 'go', arg: 'education', icon: GraduationCap, keywords: 'education studies educacion estudios master fp' },
      { label: 'nav.contact', cmd: 'go', arg: 'contact', icon: Send, keywords: 'contact contacto hire contratar' },
    ],
  },
  {
    title: 'palette.actions',
    items: [
      { label: 'cmd.copyEmail', cmd: 'copy-contact', arg: 'email', icon: Mail, keywords: 'copy email mail correo copiar' },
      { label: 'cmd.sendEmail', cmd: 'open-contact', arg: 'email', icon: Send, keywords: 'write send email mail escribir enviar' },
      { label: 'cmd.copyPhone', cmd: 'copy-contact', arg: 'phone', icon: Phone, keywords: 'copy phone telefono movil copiar' },
      { label: 'cmd.github', cmd: 'open-github', brand: 'github', keywords: 'github code repos codigo' },
      { label: 'cmd.cv', cmd: 'download-cv', icon: Download, keywords: 'cv resume curriculum pdf descargar download' },
      { label: 'cmd.copyLink', cmd: 'copy-link', icon: LinkIcon, keywords: 'share link url compartir enlace' },
    ],
  },
  {
    title: 'palette.appearance',
    items: [
      { label: 'cmd.themeLight', cmd: 'theme', arg: 'light', icon: Sun, keywords: 'light claro day dia theme tema' },
      { label: 'cmd.themeDark', cmd: 'theme', arg: 'dark', icon: Moon, keywords: 'dark oscuro night noche theme tema' },
      { label: 'cmd.themeSystem', cmd: 'theme', arg: 'system', icon: Monitor, keywords: 'system auto sistema theme tema' },
    ],
  },
  {
    title: 'palette.language',
    items: [
      { label: 'cmd.langEn', cmd: 'lang', arg: 'en', icon: Languages, keywords: 'english ingles language idioma' },
      { label: 'cmd.langEs', cmd: 'lang', arg: 'es', icon: Languages, keywords: 'spanish espanol castellano language idioma' },
    ],
  },
];

