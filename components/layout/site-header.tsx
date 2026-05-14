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
import { Mail, Menu, X } from "lucide-react";
import Link from "next/link";
import * as React from "react";

const navKeys = [
  "about",
  "skills",
  "projects",
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
    <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-zinc-50/80 backdrop-blur-xl dark:border-zinc-800/70 dark:bg-zinc-950/75">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href={`${prefix}#top`}
          className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-50"
        >
          {siteName}
        </Link>

        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label={dict.aria.primaryNav}
        >
          {navKeys.map((key) => (
            <a
              key={key}
              href={`${prefix}#${key}`}
              className="rounded-lg px-3 py-2 text-sm text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-50"
            >
              {dict.nav[key]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <LanguageSwitcher locale={locale} dict={dict.lang} />

          <div className="hidden items-center gap-0.5 sm:flex">
            <Button variant="ghost" size="icon" className="rounded-xl" asChild>
              <a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={dict.aria.github}
              >
                <GitHubIcon className="size-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-xl" asChild>
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={dict.aria.linkedin}
              >
                <LinkedInIcon className="size-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-xl" asChild>
              <a href={social.email} aria-label={dict.aria.email}>
                <Mail className="size-5" />
              </a>
            </Button>
          </div>

          <ThemeToggle
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
            className="rounded-xl md:hidden"
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
            className="border-t border-zinc-200/70 dark:border-zinc-800/70 md:hidden"
          >
            <nav
              className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 sm:px-6"
              aria-label={dict.aria.mobileNav}
            >
              {navKeys.map((key) => (
                <a
                  key={key}
                  href={`${prefix}#${key}`}
                  className="rounded-xl px-3 py-3 text-sm font-medium text-zinc-800 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-900"
                  onClick={() => setOpen(false)}
                >
                  {dict.nav[key]}
                </a>
              ))}
              <div className="mt-2 flex gap-2 border-t border-zinc-200/70 pt-4 dark:border-zinc-800/70">
                <Button variant="secondary" className="flex-1" asChild>
                  <a
                    href={social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {dict.aria.github}
                  </a>
                </Button>
                <Button variant="secondary" className="flex-1" asChild>
                  <a
                    href={social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {dict.aria.linkedin}
                  </a>
                </Button>
                <Button variant="secondary" className="flex-1" asChild>
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
