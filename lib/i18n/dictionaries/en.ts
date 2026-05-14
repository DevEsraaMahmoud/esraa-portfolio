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
    about: "About",
    skills: "Skills",
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
    eyebrow: "Portfolio",
    role: "Senior Full-Stack Engineer — product engineering and scalable systems",
    location: "Cairo, Egypt",
    lead: "Laravel, PHP, MySQL, Redis, Vue 3 and Inertia.js — from B2B integrations and payments to performance and production reliability.",
    body: "I focus on backend architecture, secure APIs, queues and caching, end-to-end product delivery and maintainable systems that support real business outcomes.",
    viewProjects: "View Projects",
    contact: "Contact Me",
    connect: "Connect",
  },
  about: {
    kicker: "Profile",
    heading: "Product engineering & scalable systems",
    bullets: [
      "Senior Full-Stack Engineer with 5+ years of experience building scalable, production-ready systems using Laravel, PHP, MySQL, Redis, Vue 3 and Inertia.js.",
      "Experienced in backend architecture, B2B integrations, performance optimisation, payment systems and end-to-end product development.",
      "Strong interest in product engineering, scalable software architecture, testing workflows and maintainable system design.",
      "Passionate about building business-driven systems that combine technology, product thinking and operational efficiency.",
    ],
  },
  skills: {
    kicker: "Skills",
    heading: "Technical skills",
    intro: "Backend, data and performance, frontend and integrations — aligned with how I ship in production.",
    groups: [
      {
        title: "Backend",
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
        title: "Frontend",
        items: ["Vue 3", "Inertia.js", "Tailwind CSS"],
      },
      {
        title: "Integrations & quality",
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
    kicker: "Selected projects",
    heading: "Builds that mirror production work",
    github: "GitHub",
    liveDemo: "Live Demo",
    items: [
      {
        title: "Bayan POS",
        description:
          "Custom POS and operational management system for retail workflows — built for scalability and maintainability with Laravel and Vue 3.",
        stack: ["Laravel", "Vue 3", "MySQL"],
      },
      {
        title: "Scalable search (1M+ records)",
        description:
          "Chunked seeding, FULLTEXT search, Redis caching, queues and EXPLAIN-driven optimisation for large Laravel datasets.",
        stack: ["Laravel", "MySQL", "Redis", "Queues"],
      },
      {
        title: "PingMe — real-time chat",
        description:
          "WebSockets, presence channels, typing indicators and an event-driven backend using Laravel Reverb and Vue 3.",
        stack: ["Laravel Reverb", "Vue 3", "Redis", "WebSockets"],
      },
      {
        title: "Payment integration demo",
        description:
          "Secure payment flows with Stripe and PayMob — idempotent webhooks, transaction verification and production-minded error handling.",
        stack: ["Laravel", "Stripe", "PayMob", "Webhooks"],
      },
    ],
  },
  experience: {
    kicker: "Experience",
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
    kicker: "Education",
    heading: "Academic background",
    entries: [
      {
        degree: "B.Sc. in Actuarial Sciences (English)",
        schoolLine: "Cairo University · Cairo, Egypt",
      },
    ],
  },
  notes: {
    kicker: "Engineering Notes",
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
    heading: "Let's Build Something Great",
    intro:
      "Open to product engineering opportunities, backend architecture discussions and scalable web platform development.",
    contactMe: "Contact Me",
    downloadCv: "Download CV",
  },
  footer: {
    builtWith: "Built with Next.js, TypeScript and Tailwind CSS.",
  },
};
