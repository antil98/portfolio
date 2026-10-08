/**
 * UI dictionaries. `en` is the source of truth; `es` must match its shape
 * (enforced by the `Dict` type), so a missing translation is a compile error.
 */
export const en = {
  meta: {
    title: "Antonio Iliyanov — Fullstack web developer & IT technician",
    description:
      "Portfolio of Antonio Iliyanov: fullstack web developer (Next.js, PostgreSQL) and IT technician based in Segovia, Spain.",
  },
  nav: {
    home: "Home",
    skills: "Skills",
    experience: "Experience",
    projects: "Projects",
    education: "Education",
    contact: "Contact",
  },
  hero: {
    badge: "Available for hire",
    role: "Fullstack web developer · IT technician",
    lede: "I build fullstack web apps with Next.js and PostgreSQL, and I understand the infrastructure underneath: Linux servers, networks and machines. Right now I am studying corporate cybersecurity and ethical hacking.",
    ctaWork: "See my work",
    ctaContact: "Get in touch",
    hint: "Quick navigation",
  },
  term: {
    who: "fullstack developer & IT technician",
    study: "corporate cybersecurity & ethical hacking",
    langs: "Spanish, Bulgarian, English",
  },
  skills: {
    subtitle:
      "A periodic table of the tools I work with. Filter by group, then hover or focus a tile to see where it shows up.",
    all: "All",
    web: "Web development",
    sys: "Systems & networks",
    ai: "AI & agents",
    foundIn: "Found in",
    core: "Part of my everyday toolbox",
    hint: "Hover or focus a tile to inspect it.",
  },
  exp: {
    subtitle:
      "Internships where I learned to build, maintain and troubleshoot.",
    latest: "Latest",
  },
  projects: {
    subtitle: "Selected personal projects built with Next.js and PostgreSQL.",
    demo: "Live demo",
    repository: "Repository",
  },
  education: {
    subtitle: "Formal training and the languages I work in.",
    extras: "Languages & extras",
  },
  contact: {
    subtitle:
      "Open to new opportunities. The easiest way to reach me is email.",
    headline: "Have a project or an opening? Let’s talk.",
    email: "Email",
    phone: "Phone",
    location: "Location",
    copy: "Copy",
    write: "Write me an email",
    cv: "Download CV",
    shield: "Contact details are scrambled in the HTML to keep spam bots out.",
  },
  footer: {
    built: "Built with Astro and Tailwind.",
    top: "Back to top",
  },
  theme: { light: "Light", dark: "Dark", system: "System" },
  cmd: {
    search: "Search",
    copyEmail: "Copy email address",
    sendEmail: "Write an email",
    copyPhone: "Copy phone number",
    github: "Open GitHub profile",
    cv: "Download CV (PDF)",
    copyLink: "Copy page link",
    themeLight: "Theme: light",
    themeDark: "Theme: dark",
    themeSystem: "Theme: follow system",
    langEn: "Language: English",
    langEs: "Language: Spanish",
  },
  palette: {
    title: "Command palette",
    placeholder: "Type a command or search…",
    empty: "No results found.",
    navigate: "Navigate",
    actions: "Actions",
    appearance: "Appearance",
    language: "Language",
    hintMove: "navigate",
    hintSelect: "select",
  },
  toast: { copied: "Copied to clipboard" },
};

export type Dict = typeof en;

export const es: Dict = {
  meta: {
    title: "Antonio Iliyanov — Desarrollador web fullstack y técnico IT",
    description:
      "Portfolio de Antonio Iliyanov: desarrollador web fullstack (Next.js, PostgreSQL) y técnico IT en Segovia, España.",
  },
  nav: {
    home: "Inicio",
    skills: "Habilidades",
    experience: "Experiencia",
    projects: "Proyectos",
    education: "Educación",
    contact: "Contacto",
  },
  hero: {
    badge: "Disponible para trabajar",
    role: "Desarrollador web fullstack · Técnico IT",
    lede: "Desarrollo aplicaciones web fullstack con Next.js y PostgreSQL, y entiendo la infraestructura que hay debajo: servidores Linux, redes y equipos. Ahora mismo estudio ciberseguridad corporativa y hacking ético.",
    ctaWork: "Ver mi trabajo",
    ctaContact: "Hablemos",
    hint: "Navegación rápida",
  },
  term: {
    who: "desarrollador fullstack y técnico IT",
    study: "ciberseguridad corporativa y hacking ético",
    langs: "español, búlgaro, inglés",
  },
  skills: {
    subtitle:
      "Una tabla periódica de las herramientas con las que trabajo. Filtra por grupo y pasa el cursor o enfoca una casilla para ver dónde aparece.",
    all: "Todo",
    web: "Desarrollo web",
    sys: "Sistemas y redes",
    ai: "IA y agentes",
    foundIn: "Presente en",
    core: "Parte de mi caja de herramientas diaria",
    hint: "Pasa el cursor o enfoca una casilla para inspeccionarla.",
  },
  exp: {
    subtitle:
      "Prácticas donde aprendí a construir, mantener y resolver problemas.",
    latest: "Más reciente",
  },
  projects: {
    subtitle: "Proyectos personales seleccionados con Next.js y PostgreSQL.",
    demo: "Demo en vivo",
    repository: "Repositorio",
  },
  education: {
    subtitle: "Formación reglada y los idiomas con los que trabajo.",
    extras: "Idiomas y extras",
  },
  contact: {
    subtitle:
      "Abierto a nuevas oportunidades. La forma más sencilla de contactarme es el email.",
    headline: "¿Tienes un proyecto o una vacante? Hablemos.",
    email: "Email",
    phone: "Teléfono",
    location: "Ubicación",
    copy: "Copiar",
    write: "Escríbeme un email",
    cv: "Descargar CV",
    shield:
      "Los datos de contacto están ofuscados en el HTML para mantener fuera a los bots de spam.",
  },
  footer: {
    built: "Hecho con Astro y Tailwind.",
    top: "Volver arriba",
  },
  theme: { light: "Claro", dark: "Oscuro", system: "Sistema" },
  cmd: {
    search: "Buscar",
    copyEmail: "Copiar dirección de email",
    sendEmail: "Escribir un email",
    copyPhone: "Copiar teléfono",
    github: "Abrir perfil de GitHub",
    cv: "Descargar CV (PDF)",
    copyLink: "Copiar enlace de la página",
    themeLight: "Tema: claro",
    themeDark: "Tema: oscuro",
    themeSystem: "Tema: seguir al sistema",
    langEn: "Idioma: inglés",
    langEs: "Idioma: español",
  },
  palette: {
    title: "Paleta de comandos",
    placeholder: "Escribe un comando o busca…",
    empty: "Sin resultados.",
    navigate: "Navegar",
    actions: "Acciones",
    appearance: "Apariencia",
    language: "Idioma",
    hintMove: "navegar",
    hintSelect: "seleccionar",
  },
  toast: { copied: "Copiado al portapapeles" },
};
