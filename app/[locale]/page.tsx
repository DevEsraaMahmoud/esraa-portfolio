import type { Metadata } from "next";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { EducationSection } from "@/components/sections/education-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { HeroSection } from "@/components/sections/hero-section";
import { NotesSection } from "@/components/sections/notes-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { defaultLocale, getDictionary, isLocale, locales, type Locale } from "@/lib/i18n";
import { getSiteUrl } from "@/lib/site";

type PageProps = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : defaultLocale;
  const t = getDictionary(locale);
  const base = getSiteUrl();

  return {
    title: t.meta.titleDefault,
    description: t.meta.description,
    keywords: [...t.meta.keywords],
    openGraph: {
      locale: t.meta.ogLocale,
      url: `/${locale}`,
      title: t.meta.titleDefault,
      description: t.meta.description,
    },
    twitter: {
      title: t.meta.titleDefault,
      description: t.meta.description,
    },
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: `${base.origin}/en`,
        ar: `${base.origin}/ar`,
      },
    },
  };
}

export default async function Home({ params }: PageProps) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : defaultLocale;
  const dict = getDictionary(locale);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:start-4 focus:top-4 focus:z-[100] focus:rounded-xl focus:bg-zinc-900 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white dark:focus:bg-zinc-50 dark:focus:text-zinc-900"
      >
        {dict.skipMain}
      </a>
      <SiteHeader dict={dict} locale={locale} />
      <main id="main-content" className="flex flex-1 flex-col">
        <HeroSection dict={dict} locale={locale} />
        <AboutSection dict={dict} />
        <SkillsSection dict={dict} />
        <ProjectsSection dict={dict} locale={locale} />
        <ExperienceSection dict={dict} />
        <EducationSection dict={dict} />
        <NotesSection dict={dict} />
        <ContactSection dict={dict} />
      </main>
      <SiteFooter dict={dict} />
    </>
  );
}
