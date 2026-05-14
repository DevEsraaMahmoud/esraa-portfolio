export const social = {
  github: "https://github.com/",
  linkedin: "https://www.linkedin.com/in/",
  email: "mailto:hello@example.com",
} as const;

export const skillGroups = [
  {
    title: "Backend",
    items: [
      "PHP",
      "Laravel",
      "REST APIs",
      "Queues",
      "Multi-Tenancy",
      "GraphQL",
    ],
  },
  {
    title: "Frontend",
    items: ["Vue.js", "Inertia.js", "Livewire", "React", "Tailwind"],
  },
  {
    title: "Engineering",
    items: [
      "CI/CD",
      "DDD",
      "Testing",
      "Performance Optimization",
      "Architecture",
    ],
  },
] as const;

export const projects = [
  {
    title: "Bayan POS",
    description:
      "Product-focused POS system with inventory management, reporting and scalable architecture.",
    stack: ["Laravel", "Vue", "MySQL", "CI/CD"],
    github: "https://github.com",
    demo: "#contact",
  },
  {
    title: "EWPR B2B Integration",
    description:
      "Secure government-affiliated integrations connecting electricity providers and backend systems.",
    stack: ["Laravel", "APIs", "Secure File Handling"],
    github: "https://github.com",
    demo: "#contact",
  },
  {
    title: "E-Commerce Platform",
    description:
      "Large-scale multi-vendor platform optimized for performance, checkout workflows and search systems.",
    stack: ["Laravel", "Vue", "Algolia", "Typesense"],
    github: "https://github.com",
    demo: "#contact",
  },
  {
    title: "CI/CD Automation",
    description:
      "Automated deployment pipelines with GitHub Actions, testing workflows and deployment optimization.",
    stack: ["GitHub Actions", "Docker", "Testing"],
    github: "https://github.com",
    demo: "#contact",
  },
] as const;

export const experience = [
  {
    role: "Senior Full-Stack Engineer",
    company: "Sejel Technology",
    period: "2025 — Present",
    description:
      "Working on government-affiliated B2B integrations, APIs and scalable backend systems.",
  },
  {
    role: "Senior Full-Stack Developer",
    company: "Aloha E-Commerce",
    period: "2023 — 2024",
    description:
      "Led backend development, performance optimization and production debugging for a multi-vendor platform.",
  },
] as const;

export const engineeringNotes = [
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
] as const;
