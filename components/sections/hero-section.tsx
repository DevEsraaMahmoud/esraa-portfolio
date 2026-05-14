"use client";

import { HeroAvatar } from "@/components/illustrations/hero-avatar";
import { TechMarquee } from "@/components/tech-marquee";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/brands";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cvDownloadFilename, cvHref, social } from "@/lib/content";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  },
};

type Props = { dict: Dictionary; locale: Locale };

export function HeroSection({ dict, locale }: Props) {
  const reduceMotion = useReducedMotion();
  const prefix = `/${locale}`;
  const rtl = locale === "ar";

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-cyan-950/30 bg-[#050a14] pb-0 pt-4 dark:border-cyan-950/40 sm:pt-6"
    >
      <div
        className="pointer-events-none absolute -start-24 top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl sm:-start-32 sm:h-[420px] sm:w-[420px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute end-0 top-16 h-48 w-48 rounded-full bg-teal-600/10 blur-3xl sm:top-24 sm:h-64 sm:w-64"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-[max(1rem,env(safe-area-inset-left))] pe-[max(1rem,env(safe-area-inset-right))] pb-12 pt-6 sm:px-6 sm:pb-16 sm:pt-10 lg:px-8 lg:pb-20 lg:pt-14">
        <motion.div
          variants={container}
          initial={reduceMotion ? "show" : "hidden"}
          animate="show"
          className="max-w-3xl"
        >
          <motion.div
            variants={item}
            className="flex items-start gap-3 sm:gap-5"
          >
            <HeroAvatar
              alt={dict.hero.portraitAlt}
              inline
              className="drop-shadow-[0_0_28px_rgba(34,211,238,0.2)]"
            />
            <div className="min-w-0 flex-1 pt-0.5">
              <p className="text-balance font-display text-lg font-semibold tracking-tight text-white sm:text-2xl md:text-3xl lg:text-[2.1rem] lg:leading-tight">
                {dict.hero.hi}
              </p>
              <p className="mt-1 text-balance font-display text-base font-bold text-cyan-400 sm:mt-2 sm:text-xl md:text-2xl lg:text-[1.65rem]">
                {dict.hero.titleAccent}
              </p>
            </div>
          </motion.div>

          <motion.p
            variants={item}
            className="mt-3 text-base leading-snug text-slate-300 sm:mt-5 sm:text-lg md:text-xl"
          >
            {dict.hero.subtitle}
          </motion.p>
          <motion.p
            variants={item}
            className="mt-1 text-xs font-medium text-cyan-500/90 sm:text-sm"
          >
            {dict.hero.location}
          </motion.p>
          <motion.p
            variants={item}
            className="mt-5 max-w-xl text-sm leading-relaxed text-slate-400 sm:mt-6 sm:text-base"
          >
            {dict.hero.tagline}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex w-full max-w-md flex-col gap-3 sm:mt-10 sm:max-w-none sm:flex-row sm:flex-wrap"
          >
            <a
              href={cvHref}
              download={cvDownloadFilename}
              className="inline-flex h-12 min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-300 sm:h-11 sm:min-h-0 sm:w-auto"
            >
              <FileText className="size-4 shrink-0" />
              {dict.hero.viewCv}
            </a>
            <Button
              variant="outline"
              size="lg"
              className="h-12 min-h-12 w-full rounded-xl border-cyan-500/50 bg-transparent text-cyan-100 hover:bg-cyan-500/10 hover:text-white sm:h-11 sm:min-h-0 sm:w-auto"
              asChild
            >
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full justify-center sm:w-auto"
              >
                {dict.hero.linkedInCta}
              </a>
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="h-12 min-h-12 w-full rounded-xl text-slate-400 hover:bg-white/5 hover:text-cyan-200 sm:h-11 sm:min-h-0 sm:w-auto"
              asChild
            >
              <a
                href={`${prefix}#projects`}
                className="inline-flex w-full justify-center gap-2 sm:w-auto"
              >
                {dict.hero.viewProjects}
                <ArrowRight className="size-4 shrink-0 rtl:rotate-180" />
              </a>
            </Button>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-8 flex flex-col gap-4 border-t border-white/5 pt-6 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6 sm:pt-8"
          >
            <span className="text-[11px] font-medium uppercase tracking-wider text-slate-500 sm:text-xs">
              {dict.aria.github} · {dict.aria.email}
            </span>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                className="size-11 rounded-xl border-cyan-900/50 bg-[#0a1220] text-cyan-200 hover:bg-cyan-500/10 sm:size-10"
                asChild
              >
                <a
                  href={social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={dict.aria.github}
                >
                  <GitHubIcon className="size-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="size-11 rounded-xl border-cyan-900/50 bg-[#0a1220] text-cyan-200 hover:bg-cyan-500/10 sm:size-10"
                asChild
              >
                <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={dict.aria.linkedin}
                >
                  <LinkedInIcon className="size-5" />
                </a>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <TechMarquee rtl={rtl} />
    </section>
  );
}
