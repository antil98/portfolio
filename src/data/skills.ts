import { same, type L } from '../i18n';

export type SkillGroup = 'web' | 'sys' | 'ai';

export interface Skill {
  symbol: string;
  name: L;
  group: SkillGroup;
  /** Keys of `places` where the skill shows up. */
  foundIn: readonly string[];
}

export const places: Record<string, string> = {
  crm: 'CRM Ayudamos a tu Familia',
  exavault: 'Exavault',
  iberzal: 'Iberzal',
  globales: 'Globales',
  cruzroja: 'Cruz Roja',
  smr: 'FP SMR',
  daw: 'FP DAW',
};

const s = (
  symbol: string,
  name: string | L,
  group: SkillGroup,
  foundIn: string[] = [],
): Skill => ({ symbol, name: typeof name === 'string' ? same(name) : name, group, foundIn });

export const skills: Skill[] = [
  s('Ht', 'HTML', 'web', ['crm', 'exavault', 'globales', 'iberzal']),
  s('Cs', 'CSS', 'web', ['crm', 'exavault', 'globales', 'iberzal']),
  s('Tw', 'Tailwind', 'web', ['crm', 'exavault']),
  s('Js', 'JavaScript', 'web', ['crm', 'exavault', 'globales']),
  s('Nx', 'Next.js', 'web', ['crm', 'exavault']),
  s('Ph', 'PHP', 'web', ['globales', 'iberzal']),
  s('My', 'MySQL', 'web', ['daw']),
  s('Pg', 'PostgreSQL', 'web', ['crm', 'exavault']),
  s('Gt', 'Git', 'web'),
  s('Lx', 'Linux', 'sys', ['smr']),
  s('Ls', 'Linux Server', 'sys', ['smr']),
  s('Wn', 'Windows', 'sys', ['cruzroja']),
  s('Ws', 'Windows Server', 'sys', ['smr']),
  s('Ad', 'Active Directory', 'sys', ['smr']),
  s('Hw', { en: 'Hardware maintenance', es: 'Mantenimiento de equipos' }, 'sys', ['cruzroja']),
  s('Nt', { en: 'Network troubleshooting', es: 'Resolución de redes' }, 'sys', ['cruzroja']),
  s('Of', { en: 'Office suites', es: 'Suites ofimáticas' }, 'sys'),
  s('Ai', { en: 'AI-assisted coding', es: 'Programación asistida por IA' }, 'ai'),
  s('Cp', 'GitHub Copilot', 'ai'),
  s('Pe', { en: 'Prompt engineering', es: 'Prompt engineering' }, 'ai'),
  s('Cl', 'ChatGPT / Claude', 'ai'),
  s('Ag', { en: 'Agent workflows', es: 'Flujos con agentes' }, 'ai'),
];
