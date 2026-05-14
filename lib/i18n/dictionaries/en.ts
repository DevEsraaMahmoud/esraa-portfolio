import type { Dictionary } from "@/lib/i18n/types";

export const en: Dictionary = {
  meta: {
    description:
      "Senior Full-Stack Engineer in Cairo. Laravel, PHP, Vue 3, B2B integrations, payments, performance and scalable product engineering.",
    titleDefault: "Esraa Mahmoud — Senior Full-Stack Engineer",
    ogLocale: "en_US",
    keywords: [
      "Full-Stack Engineer",
      "Laravel",
      "Vue.js",
      "PHP",
      "APIs",
      "Redis",
      "Inertia.js",
      "CI/CD",
      "Cairo",
      "Esraa Mahmoud",
    ],
  },
  skipMain: "Skip to main content",
  nav: {
    home: "Home",
    about: "About",
    skills: "Services",
    projects: "Projects",
    experience: "Experience",
    education: "Education",
    notes: "Notes",
    contact: "Contact",
  },
  aria: {
    primaryNav: "Primary",
    mobileNav: "Mobile",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    github: "GitHub",
    linkedin: "LinkedIn",
    email: "Email",
    toggleTheme: "Toggle color theme",
    toggleThemeLoading: "Toggle color theme",
    switchToLight: "Switch to light mode",
    switchToDark: "Switch to dark mode",
  },
  lang: {
    switchToArabic: "العربية",
    switchToEnglish: "English",
    currentAria: "Current language",
  },
  hero: {
    hi: "Hi — I'm Esraa Mahmoud",
    titleAccent: "Senior Full-Stack Engineer",
    subtitle: "Product engineering & scalable systems",
    location: "Cairo, Egypt",
    tagline:
      "Focused on scalable Laravel platforms, B2B integrations, payments and performance — shipping maintainable systems with product sense.",
    viewCv: "View My CV",
    linkedInCta: "LinkedIn Profile",
    viewProjects: "View Projects",
    portraitAlt: "Esraa Mahmoud — professional portrait",
  },
  about: {
    kicker: "// Profile",
    heading: "How I work",
    bullets: [
      "Senior Full-Stack Engineer with 5+ years of experience building scalable, production-ready systems using Laravel, PHP, MySQL, Redis, Vue 3 and Inertia.js.",
      "Experienced in backend architecture, B2B integrations, performance optimisation, payment systems and end-to-end product development.",
      "Strong interest in product engineering, scalable software architecture, testing workflows and maintainable system design.",
      "Passionate about building business-driven systems that combine technology, product thinking and operational efficiency.",
    ],
  },
  skills: {
    kicker: "// Services / Offers",
    heading: "What I build best",
    intro:
      "Backend-heavy delivery with pragmatic frontend craft — from integrations to search, queues and CI.",
    groups: [
      {
        title: "Laravel & PHP platforms",
        blurb: "Services, repositories, domain events, queues and APIs built for real traffic.",
        items: [
          "Laravel",
          "PHP 8+",
          "REST APIs",
          "Services",
          "Repositories",
          "Queues",
          "Events",
        ],
      },
      {
        title: "Data & performance",
        blurb: "Indexing, EXPLAIN, Redis, async work and careful schema design.",
        items: [
          "MySQL",
          "Indexing",
          "Query optimisation",
          "EXPLAIN",
          "PostgreSQL",
          "Redis",
          "WebSockets",
        ],
      },
      {
        title: "Vue 3 & Inertia",
        blurb: "Product UIs with Tailwind-first systems and predictable client/server boundaries.",
        items: ["Vue 3", "Inertia.js", "Tailwind CSS"],
      },
      {
        title: "Integrations & quality",
        blurb: "Payments, webhooks, B2B APIs and pipelines that stay green in production.",
        items: [
          "Stripe",
          "PayMob",
          "Webhooks",
          "B2B APIs",
          "CI/CD",
          "GitHub Actions",
        ],
      },
    ],
  },
  projects: {
    kicker: "// Selected work",
    heading: "Projects & platforms",
    github: "GitHub",
    liveDemo: "Live Demo",
    items: [
      {
        title: "Real Eatste",
        company: "Real estate · Listings & operations",
        bullets: [
          "Property listings, search and lead workflows tailored for real-estate teams.",
          "Laravel + Vue 3 with role-based access, media handling and scalable catalogues.",
        ],
        stack: ["Laravel", "Vue 3", "MySQL", "Redis"],
      },
      {
        title: "Bayan POS",
        company: "Retail · Operations",
        bullets: [
          "Custom POS and operational management for retail workflows.",
          "Laravel + Vue 3 stack tuned for scalability and maintainability.",
        ],
        stack: ["Laravel", "Vue 3", "MySQL"],
      },
      {
        title: "Scalable search (1M+ records)",
        company: "Open source",
        bullets: [
          "Chunked seeding and FULLTEXT search with Redis and queues.",
          "EXPLAIN-driven optimisation for large Laravel datasets.",
        ],
        stack: ["Laravel", "MySQL", "Redis", "Queues"],
      },
      {
        title: "PingMe — real-time chat",
        company: "Open source",
        bullets: [
          "WebSockets, presence and typing indicators with Laravel Reverb.",
          "Event-driven backend with Vue 3 client.",
        ],
        stack: ["Laravel Reverb", "Vue 3", "Redis", "WebSockets"],
      },
      {
        title: "Payment integration demo",
        company: "Engineering demo",
        bullets: [
          "Stripe + PayMob flows with idempotent webhooks.",
          "Transaction verification and production-minded error handling.",
        ],
        stack: ["Laravel", "Stripe", "PayMob", "Webhooks"],
      },
    ],
  },
  experience: {
    kicker: "// Experience",
    heading: "Where I have shipped and led",
    jobs: [
      {
        role: "Senior Full-Stack Engineer (B2B integrations)",
        company: "Sejel Technology Co. Ltd.",
        location: "Remote · Saudi Arabia",
        period: "Jan 2025 — Present",
        highlights: [
          "Contributing to a government-affiliated Saudi energy platform within the EWPR ecosystem.",
          "Supported integration phases with SEC, Marafiq and SPARK providers, resolving cross-system issues and ensuring reliable connectivity.",
          "Built secure B2B integrations and REST APIs for external service communication.",
          "Improved backend performance, automation workflows and operational reliability.",
          "Contributed to architecture discussions, framework upgrades and internal workflow tooling.",
        ],
      },
      {
        role: "Senior Full-Stack Developer (acting team lead)",
        company: "Aloha",
        location: "Cairo, Egypt · aloha.com.eg",
        period: "Mar 2023 — Dec 2024",
        highlights: [
          "Led backend development and sprint planning for a large-scale multi-vendor e-commerce platform.",
          "Built advanced promotion systems, payment integrations and shipping workflows.",
          "Integrated Typesense, Meilisearch and Algolia via Laravel Scout.",
          "Resolved critical production issues across payments, stock synchronisation and authentication.",
          "Optimised caching, queries and workflows — contributing to roughly 60% faster platform performance.",
        ],
      },
      {
        role: "Full-Stack Developer",
        company: "SpiderSEO",
        location: "Remote · Saudi Arabia",
        period: "May 2022 — Mar 2023",
        highlights: [
          "Built three interconnected platforms using Laravel, Vue and Inertia.js.",
          "Designed secure authentication flows and scalable database schemas.",
          "Automated SEO workflows, reducing manual work by about 50%.",
        ],
      },
      {
        role: "Backend Developer",
        company: "MAS ERP",
        location: "Cairo, Egypt",
        period: "Jan 2021 — Apr 2022",
        highlights: [
          "Developed ERP modules including HRM, employee services and client management.",
          "Built reporting APIs used internally by 200+ employees.",
          "Improved performance and data synchronisation workflows.",
        ],
      },
    ],
  },
  education: {
    kicker: "// Education",
    heading: "Academic background",
    entries: [
      {
        degree: "B.Sc. in Actuarial Sciences (English)",
        schoolLine: "Cairo University · Cairo, Egypt",
      },
    ],
  },
  notes: {
    kicker: "// Engineering notes",
    heading: "Blog preview — writing in progress",
    intro: "Short-form notes on shipping Laravel platforms, search, tenancy and delivery. Full articles will land here soon.",
    comingSoon: "Coming soon",
    items: [
      {
        title: "CI/CD Workflows",
        excerpt:
          "Patterns for reliable pipelines, staged rollouts and fast feedback loops across Laravel apps.",
      },
      {
        title: "Laravel Performance Optimization",
        excerpt:
          "Practical tuning across queries, caching layers and queue throughput for production workloads.",
      },
      {
        title: "Scaling Search Systems",
        excerpt:
          "Indexing strategies, relevance tuning and operational trade-offs when search becomes critical path.",
      },
      {
        title: "Multi-Tenancy Architecture",
        excerpt:
          "Isolation models, data boundaries and operational concerns when shipping multi-tenant platforms.",
      },
    ],
  },
  contact: {
    heading: "Let's build something great",
    intro:
      "Open to product engineering opportunities, backend architecture discussions and scalable web platform development.",
    contactMe: "Contact Me",
    downloadCv: "Download CV",
  },
  footer: {
    builtWith: "Built with Next.js, TypeScript & Tailwind CSS.",
  },
};
