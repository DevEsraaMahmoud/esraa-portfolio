"use client";

import { GitHubIcon, LinkedInIcon } from "@/components/icons/brands";
import { LanguageSwitcher } from "@/components/language-switcher";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { social } from "@/lib/content";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";
import { siteName } from "@/lib/site";
import { AnimatePresence, motion } from "framer-motion";
import { Code2, Mail, Menu, X } from "lucide-react";
import Link from "next/link";
import * as React from "react";

const navKeys = [
  "home",
  "projects",
  "about",
  "skills",
  "experience",
  "education",
  "notes",
  "contact",
] as const;

type Props = {
  locale: Locale;
  dict: Dictionary;
};

export function SiteHeader({ locale, dict }: Props) {
  const [open, setOpen] = React.useState(false);
  const prefix = `/${locale}`;

  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 pt-[env(safe-area-inset-top)] backdrop-blur-xl dark:border-cyan-950/35 dark:bg-[#050a14]/92">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-2 px-[max(1rem,env(safe-area-inset-left))] pe-[max(1rem,env(safe-area-inset-right))] sm:h-16 sm:gap-4 sm:px-6 lg:px-8">
        <Link
          href={`${prefix}#top`}
          className="flex min-w-0 shrink items-center gap-1.5 font-display text-xs font-semibold tracking-tight text-slate-900 sm:gap-2 sm:text-sm dark:text-white"
        >
          <Code2 className="size-4 shrink-0 text-cyan-600 sm:size-5 dark:text-cyan-400" aria-hidden />
          <span className="truncate">{siteName}</span>
        </Link>

        <nav
          className="hidden items-center gap-0.5 md:flex"
          aria-label={dict.aria.primaryNav}
        >
          {navKeys.map((key) => (
            <a
              key={key}
              href={key === "home" ? `${prefix}#top` : `${prefix}#${key}`}
              className="flex min-h-10 items-center rounded-lg px-2 py-2 text-sm text-slate-600 transition-colors hover:bg-cyan-500/10 hover:text-cyan-800 dark:text-slate-400 dark:hover:text-cyan-100"
            >
              {dict.nav[key]}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-0.5 sm:gap-1">
          <LanguageSwitcher locale={locale} dict={dict.lang} />

          <div className="hidden items-center gap-0.5 sm:flex">
            <Button variant="ghost" size="icon" className="size-11 rounded-xl text-cyan-700 hover:bg-cyan-500/10 sm:size-10 dark:text-cyan-200/90 dark:hover:text-cyan-50" asChild>
              <a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={dict.aria.github}
              >
                <GitHubIcon className="size-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="size-11 rounded-xl text-cyan-700 hover:bg-cyan-500/10 sm:size-10 dark:text-cyan-200/90 dark:hover:text-cyan-50" asChild>
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={dict.aria.linkedin}
              >
                <LinkedInIcon className="size-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="size-11 rounded-xl text-cyan-700 hover:bg-cyan-500/10 sm:size-10 dark:text-cyan-200/90 dark:hover:text-cyan-50" asChild>
              <a href={social.email} aria-label={dict.aria.email}>
                <Mail className="size-5" />
              </a>
            </Button>
          </div>

          <ThemeToggle
            className="text-cyan-800 hover:bg-cyan-500/10 dark:text-cyan-100"
            ariaLabels={{
              toggleTheme: dict.aria.toggleTheme,
              toggleThemeLoading: dict.aria.toggleThemeLoading,
              switchToLight: dict.aria.switchToLight,
              switchToDark: dict.aria.switchToDark,
            }}
          />

          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="size-11 rounded-xl text-slate-800 hover:bg-cyan-500/10 md:hidden sm:size-10 dark:text-cyan-100"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? dict.aria.closeMenu : dict.aria.openMenu}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="border-t border-slate-200 bg-white md:hidden dark:border-cyan-950/40 dark:bg-[#050a14]"
          >
            <nav
              className="mx-auto flex max-w-6xl flex-col gap-0.5 px-[max(1rem,env(safe-area-inset-left))] pe-[max(1rem,env(safe-area-inset-right))] py-4 sm:px-6"
              aria-label={dict.aria.mobileNav}
            >
              {navKeys.map((key) => (
                <a
                  key={key}
                  href={key === "home" ? `${prefix}#top` : `${prefix}#${key}`}
                  className="min-h-12 rounded-xl px-3 py-3 text-base font-medium text-slate-800 active:bg-cyan-500/15 hover:bg-cyan-500/10 dark:text-slate-200"
                  onClick={() => setOpen(false)}
                >
                  {dict.nav[key]}
                </a>
              ))}
              <div className="mt-3 flex flex-col gap-2 border-t border-slate-200 pt-4 dark:border-cyan-950/40 sm:flex-row">
                <Button variant="secondary" className="min-h-12 w-full justify-center dark:border-cyan-900/50 dark:bg-[#0a1220] dark:text-cyan-50 sm:min-h-10 sm:flex-1" asChild>
                  <a
                    href={social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {dict.aria.github}
                  </a>
                </Button>
                <Button variant="secondary" className="min-h-12 w-full justify-center dark:border-cyan-900/50 dark:bg-[#0a1220] dark:text-cyan-50 sm:min-h-10 sm:flex-1" asChild>
                  <a
                    href={social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {dict.aria.linkedin}
                  </a>
                </Button>
                <Button variant="secondary" className="min-h-12 w-full justify-center dark:border-cyan-900/50 dark:bg-[#0a1220] dark:text-cyan-50 sm:min-h-10 sm:flex-1" asChild>
                  <a href={social.email}>{dict.aria.email}</a>
                </Button>
              </div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
