export type NavLabels = {
  about: string;
  skills: string;
  projects: string;
  experience: string;
  education: string;
  notes: string;
  contact: string;
};

export type Dictionary = {
  meta: {
    description: string;
    titleDefault: string;
    ogLocale: string;
    keywords: string[];
  };
  skipMain: string;
  nav: NavLabels;
  aria: {
    primaryNav: string;
    mobileNav: string;
    openMenu: string;
    closeMenu: string;
    github: string;
    linkedin: string;
    email: string;
    toggleTheme: string;
    toggleThemeLoading: string;
    switchToLight: string;
    switchToDark: string;
  };
  lang: {
    switchToArabic: string;
    switchToEnglish: string;
    currentAria: string;
  };
  hero: {
    eyebrow: string;
    role: string;
    location: string;
    lead: string;
    body: string;
    viewProjects: string;
    contact: string;
    connect: string;
  };
  about: {
    kicker: string;
    heading: string;
    bullets: string[];
  };
  skills: {
    kicker: string;
    heading: string;
    intro: string;
    groups: { title: string; items: string[] }[];
  };
  projects: {
    kicker: string;
    heading: string;
    github: string;
    liveDemo: string;
    items: { title: string; description: string; stack: string[] }[];
  };
  experience: {
    kicker: string;
    heading: string;
    jobs: {
      role: string;
      company: string;
      location: string;
      period: string;
      highlights: string[];
    }[];
  };
  education: {
    kicker: string;
    heading: string;
    entries: { degree: string; schoolLine: string }[];
  };
  notes: {
    kicker: string;
    heading: string;
    intro: string;
    comingSoon: string;
    items: { title: string; excerpt: string }[];
  };
  contact: {
    heading: string;
    intro: string;
    contactMe: string;
    downloadCv: string;
  };
  footer: {
    builtWith: string;
  };
};
