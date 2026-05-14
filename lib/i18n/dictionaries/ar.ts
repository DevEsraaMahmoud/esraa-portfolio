import type { Dictionary } from "@/lib/i18n/types";

export const ar: Dictionary = {
  meta: {
    description:
      "مهندسة Full-Stack في القاهرة. Laravel وPHP وVue 3 وتكاملات B2B والمدفوعات والأداء وهندسة المنتجات القابلة للتوسع.",
    titleDefault: "إسراء محمود — مهندسة Full-Stack",
    ogLocale: "ar_EG",
    keywords: [
      "Full-Stack",
      "Laravel",
      "Vue.js",
      "PHP",
      "واجهات برمجة",
      "Redis",
      "Inertia.js",
      "CI/CD",
      "القاهرة",
      "إسراء محمود",
    ],
  },
  skipMain: "تخطي إلى المحتوى الرئيسي",
  nav: {
    about: "نبذة",
    skills: "المهارات",
    projects: "المشاريع",
    experience: "الخبرة",
    education: "التعليم",
    notes: "ملاحظات",
    contact: "تواصل",
  },
  aria: {
    primaryNav: "التنقل الرئيسي",
    mobileNav: "التنقل — الجوال",
    openMenu: "فتح القائمة",
    closeMenu: "إغلاق القائمة",
    github: "GitHub",
    linkedin: "LinkedIn",
    email: "البريد الإلكتروني",
    toggleTheme: "تبديل سمة الألوان",
    toggleThemeLoading: "تبديل سمة الألوان",
    switchToLight: "التبديل إلى الوضع الفاتح",
    switchToDark: "التبديل إلى الوضع الداكن",
  },
  lang: {
    switchToArabic: "العربية",
    switchToEnglish: "English",
    currentAria: "اللغة الحالية",
  },
  hero: {
    eyebrow: "ملف أعمال",
    role: "مهندسة Full-Stack — هندسة المنتجات والأنظمة القابلة للتوسع",
    location: "القاهرة، مصر",
    lead: "Laravel وPHP وMySQL وRedis وVue 3 وInertia.js — من تكاملات B2B والمدفوعات إلى الأداء وموثوقية الإنتاج.",
    body: "أركز على بنية الخلفية، وواجهات REST الآمنة، والطوابير والتخزين المؤقت، وتسليم المنتج من الطرف إلى الطرف، وأنظمة قابلة للصيانة تدعم نتائج الأعمال.",
    viewProjects: "عرض المشاريع",
    contact: "تواصل معي",
    connect: "تواصل",
  },
  about: {
    kicker: "نبذة",
    heading: "هندسة المنتجات وأنظمة قابلة للتوسع",
    bullets: [
      "مهندسة Full-Stack بأكثر من 5 أعوام في بناء أنظمة جاهزة للإنتاج وقابلة للتوسع باستخدام Laravel وPHP وMySQL وRedis وVue 3 وInertia.js.",
      "خبرة في بنية الخلفية، وتكاملات B2B، وتحسين الأداء، وأنظمة المدفوعات، وتطوير المنتج من البداية للنهاية.",
      "اهتمام قوي بهندسة المنتجات، وبنية البرمجيات القابلة للتوسع، وسير عمل الاختبار، وتصميم أنظمة قابلة للصيانة.",
      "شغف ببناء أنظمة مدفوعة بالأعمال تجمع بين التكنولوجيا، والتفكير المنتجي، والكفاءة التشغيلية.",
    ],
  },
  skills: {
    kicker: "المهارات",
    heading: "المهارات التقنية",
    intro: "الخلفية، والبيانات والأداء، والواجهة، والتكاملات — بما يتماشى مع طريقة تسليمي في الإنتاج.",
    groups: [
      {
        title: "الخلفية",
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
        title: "البيانات والأداء",
        items: [
          "MySQL",
          "فهرسة",
          "تحسين الاستعلامات",
          "EXPLAIN",
          "PostgreSQL",
          "Redis",
          "WebSockets",
        ],
      },
      {
        title: "الواجهة",
        items: ["Vue 3", "Inertia.js", "Tailwind CSS"],
      },
      {
        title: "التكاملات والجودة",
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
    kicker: "مشاريع مختارة",
    heading: "أعمال تعكس تجربة الإنتاج",
    github: "GitHub",
    liveDemo: "عرض مباشر",
    items: [
      {
        title: "Bayan POS",
        description:
          "نقطة بيع وإدارة تشغيلية مخصصة لتجارة التجزئة — مبنية للتوسع وقابلية الصيانة باستخدام Laravel وVue 3.",
        stack: ["Laravel", "Vue 3", "MySQL"],
      },
      {
        title: "بحث قابل للتوسع (+1 مليون سجل)",
        description:
          "توليد بيانات على دفعات، وبحث FULLTEXT، وتخزين مؤقت Redis، وطوابير، وتحسين باستخدام EXPLAIN لمجموعات Laravel الكبيرة.",
        stack: ["Laravel", "MySQL", "Redis", "Queues"],
      },
      {
        title: "PingMe — دردشة فورية",
        description:
          "WebSockets وقنوات الحضور ومؤشرات الكتابة وخلفية قائمة على الأحداث باستخدام Laravel Reverb وVue 3.",
        stack: ["Laravel Reverb", "Vue 3", "Redis", "WebSockets"],
      },
      {
        title: "تجربة تكامل المدفوعات",
        description:
          "تدفقات دفع آمنة عبر Stripe وPayMob — Webhooks آمنة من التكرار، والتحقق من المعاملات، ومعالجة أخطاء بعقلية الإنتاج.",
        stack: ["Laravel", "Stripe", "PayMob", "Webhooks"],
      },
    ],
  },
  experience: {
    kicker: "الخبرة",
    heading: "أين بنيت وأدرت التسليم",
    jobs: [
      {
        role: "مهندسة Full-Stack (تكاملات B2B)",
        company: "Sejel Technology Co. Ltd.",
        location: "عن بُعد · المملكة العربية السعودية",
        period: "يناير 2025 — الآن",
        highlights: [
          "المساهمة في منصة طاقة سعودية تابعة للحكومة ضمن منظومة EWPR.",
          "دعم مراحل التكامل مع SEC وMarafiq وSPARK، وحل مشكلات عبر الأنظمة وضمان اتصال موثوق.",
          "بناء تكاملات B2B آمنة وواجهات REST للتواصل مع خدمات خارجية.",
          "تحسين أداء الخلفية، وسير عمل الأتمتة، وموثوقية التشغيل.",
          "المساهمة في مناقشات البنية، وترقيات الإطار، وأدوات سير العمل الداخلية.",
        ],
      },
      {
        role: "مطورة Full-Stack (قائد فريق بالنيابة)",
        company: "Aloha",
        location: "القاهرة، مصر · aloha.com.eg",
        period: "مارس 2023 — ديسمبر 2024",
        highlights: [
          "قيادة تطوير الخلفية وتخطيط السبرنت لمنصة تجارة إلكترونية متعددة البائعين.",
          "بناء أنظمة عروض متقدمة، وتكاملات دفع، وسير عمل شحن.",
          "دمج Typesense وMeilisearch وAlgolia عبر Laravel Scout.",
          "حل مشكلات إنتاج حرجة في المدفوعات ومزامنة المخزون وتدفقات المصادقة.",
          "تحسين التخزين المؤقت والاستعلامات وسير العمل — بما ساهم في تقريباً 60٪ أسرع على المنصة.",
        ],
      },
      {
        role: "مطورة Full-Stack",
        company: "SpiderSEO",
        location: "عن بُعد · المملكة العربية السعودية",
        period: "مايو 2022 — مارس 2023",
        highlights: [
          "بناء ثلاث منصات مترابطة باستخدام Laravel وVue وInertia.js.",
          "تصميم تدفقات مصادقة آمنة ومخططات قواعد بيانات قابلة للتوسع.",
          "أتمتة سير عمل SEO خفضت العمل اليدوي بنحو 50٪.",
        ],
      },
      {
        role: "مطورة Backend",
        company: "MAS ERP",
        location: "القاهرة، مصر",
        period: "يناير 2021 — أبريل 2022",
        highlights: [
          "تطوير وحدات ERP تشمل الموارد البشرية وخدمات الموظفين وإدارة العملاء.",
          "بناء واجهات تقارير استخدمها داخلياً أكثر من 200 موظف.",
          "تحسين الأداء وسير عمل مزامنة البيانات.",
        ],
      },
    ],
  },
  education: {
    kicker: "التعليم",
    heading: "المسار الأكاديمي",
    entries: [
      {
        degree: "بكالوريوس العلوم الأكتوارية (باللغة الإنجليزية)",
        schoolLine: "جامعة القاهرة · القاهرة، مصر",
      },
    ],
  },
  notes: {
    kicker: "ملاحظات هندسية",
    heading: "معاينة مدونة — قيد الإعداد",
    intro: "ملاحظات قصيرة حول Laravel والبحث والـ tenancy والتسليم. ستُنشر مقالات كاملة هنا قريباً.",
    comingSoon: "قريباً",
    items: [
      {
        title: "سير عمل CI/CD",
        excerpt:
          "أنماط لخطوط أنابيب موثوقة، ونشر تدريجي، وحلقات ملاحظات سريعة في تطبيقات Laravel.",
      },
      {
        title: "تحسين أداء Laravel",
        excerpt:
          "ضبط عملي للاستعلامات وطبقات التخزين المؤقت وإنتاجية الطوابير في أعباء الإنتاج.",
      },
      {
        title: "توسيع أنظمة البحث",
        excerpt:
          "استراتيجيات الفهرسة وضبط الصلة ومفاضلات التشغيل عندما يصبح البحث مساراً حرجاً.",
      },
      {
        title: "بنية الـ multi-tenancy",
        excerpt:
          "نماذج العزل وحدود البياناء ومخاوف التشغيل عند شحن منصات متعددة المستأجرين.",
      },
    ],
  },
  contact: {
    heading: "لنبني شيئاً رائعاً",
    intro:
      "منفتحة على فرص هندسة المنتجات، ومناقشات بنية الخلفية، وتطوير منصات ويب قابلة للتوسع.",
    contactMe: "تواصل معي",
    downloadCv: "تحميل السيرة الذاتية",
  },
  footer: {
    builtWith: "مبني باستخدام Next.js وTypeScript وTailwind CSS.",
  },
};
