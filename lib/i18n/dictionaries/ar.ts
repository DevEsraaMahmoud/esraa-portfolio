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
    home: "الرئيسية",
    about: "نبذة",
    skills: "خدمات",
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
    hi: "مرحباً — أنا إسراء محمود",
    titleAccent: "مهندسة Full-Stack",
    subtitle: "هندسة المنتجات والأنظمة القابلة للتوسع",
    location: "القاهرة، مصر",
    tagline:
      "أركز على منصات Laravel القابلة للتوسع، وتكاملات B2B، والمدفوعات والأداء — أنظمة قابلة للصيانة بحس منتجي.",
    viewCv: "عرض السيرة الذاتية",
    linkedInCta: "ملف LinkedIn",
    viewProjects: "عرض المشاريع",
    portraitAlt: "إسراء محمود — صورة شخصية احترافية",
  },
  about: {
    kicker: "// نبذة",
    heading: "أسلوب عملي",
    bullets: [
      "مهندسة Full-Stack بأكثر من 5 أعوام في بناء أنظمة جاهزة للإنتاج وقابلة للتوسع باستخدام Laravel وPHP وMySQL وRedis وVue 3 وInertia.js.",
      "خبرة في بنية الخلفية، وتكاملات B2B، وتحسين الأداء، وأنظمة المدفوعات، وتطوير المنتج من البداية للنهاية.",
      "اهتمام قوي بهندسة المنتجات، وبنية البرمجيات القابلة للتوسع، وسير عمل الاختبار، وتصميم أنظمة قابلة للصيانة.",
      "شغف ببناء أنظمة مدفوعة بالأعمال تجمع بين التكنولوجيا، والتفكير المنتجي، والكفاءة التشغيلية.",
    ],
  },
  skills: {
    kicker: "// الخدمات / العروض",
    heading: "ما أتقنه في التنفيذ",
    intro:
      "تسليم يركز على الخلفية مع واجهة عملية — من التكاملات إلى البحث والطوابير وCI.",
    groups: [
      {
        title: "منصات Laravel وPHP",
        blurb: "خدمات ومستودعات وأحداث نطاق وواجهات برمجة مبنية لحركة مرور حقيقية.",
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
        blurb: "فهرسة وEXPLAIN وRedis وعمل غير متزامن وتصميم مخططات بعناية.",
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
        title: "Vue 3 وInertia",
        blurb: "واجهات منتج مع Tailwind وحدود واضحة بين العميل والخادم.",
        items: ["Vue 3", "Inertia.js", "Tailwind CSS"],
      },
      {
        title: "التكاملات والجودة",
        blurb: "مدفوعات وWebhooks وواجهات B2B وخطوط أنابيب تبقى مستقرة في الإنتاج.",
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
    kicker: "// أعمال مختارة",
    heading: "مشاريع ومنصات",
    github: "GitHub",
    liveDemo: "عرض مباشر",
    items: [
      {
        title: "Real Eatste",
        company: "عقارات · قوائم وتشغيل",
        bullets: [
          "قوائم عقارات وبحث وتتبع عملاء بما يناسب فرق العقارات.",
          "Laravel وVue 3 مع صلاحيات، وسائط، وكتالوجات قابلة للتوسع.",
        ],
        stack: ["Laravel", "Vue 3", "MySQL", "Redis"],
      },
      {
        title: "Bayan POS",
        company: "تجارة · تشغيل",
        bullets: [
          "نقطة بيع وإدارة تشغيلية لتجارة التجزئة.",
          "Laravel وVue 3 مع تصميم للتوسع وقابلية الصيانة.",
        ],
        stack: ["Laravel", "Vue 3", "MySQL"],
      },
      {
        title: "بحث قابل للتوسع (+1 مليون سجل)",
        company: "مشروع مفتوح المصدر",
        bullets: [
          "توليد بيانات على دفعات وبحث FULLTEXT مع Redis وطوابير.",
          "تحسين باستخدام EXPLAIN لمجموعات Laravel الكبيرة.",
        ],
        stack: ["Laravel", "MySQL", "Redis", "Queues"],
      },
      {
        title: "PingMe — دردشة فورية",
        company: "مشروع مفتوح المصدر",
        bullets: [
          "WebSockets والحضور ومؤشرات الكتابة مع Laravel Reverb.",
          "خلفية قائمة على الأحداث مع عميل Vue 3.",
        ],
        stack: ["Laravel Reverb", "Vue 3", "Redis", "WebSockets"],
      },
      {
        title: "تجربة تكامل المدفوعات",
        company: "عرض هندسي",
        bullets: [
          "تدفقات Stripe وPayMob مع Webhooks آمنة من التكرار.",
          "التحقق من المعاملات ومعالجة أخطاء بعقلية الإنتاج.",
        ],
        stack: ["Laravel", "Stripe", "PayMob", "Webhooks"],
      },
    ],
  },
  experience: {
    kicker: "// الخبرة",
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
          "حل مشكلات إنتاج حرجة في المدفوعات ومزامنة المخزون والمصادقة.",
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
    kicker: "// التعليم",
    heading: "المسار الأكاديمي",
    entries: [
      {
        degree: "بكالوريوس العلوم الأكتوارية (باللغة الإنجليزية)",
        schoolLine: "جامعة القاهرة · القاهرة، مصر",
      },
    ],
  },
  notes: {
    kicker: "// ملاحظات هندسية",
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
