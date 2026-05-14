"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";

type Props = {
  locale: Locale;
  dict: Dictionary["lang"];
};

export function LanguageSwitcher({ locale, dict }: Props) {
  const pathname = usePathname();
  const next: Locale = locale === "en" ? "ar" : "en";
  const segments = pathname.split("/").filter(Boolean);
  if (segments[0] === "en" || segments[0] === "ar") {
    segments[0] = next;
  } else {
    segments.unshift(next);
  }
  const href = `/${segments.join("/")}`;

  const label = next === "ar" ? dict.switchToArabic : dict.switchToEnglish;

  return (
    <Button
      variant="outline"
      size="sm"
      className="min-h-10 shrink-0 rounded-xl border-slate-300 px-2.5 text-xs font-medium text-slate-700 hover:bg-cyan-500/10 hover:text-cyan-800 sm:min-h-9 sm:px-3 sm:text-sm dark:border-cyan-900/50 dark:text-cyan-100/90 dark:hover:text-cyan-50"
      asChild
    >
      <Link href={href} hrefLang={next} lang={next} prefetch={false}>
        {label}
      </Link>
    </Button>
  );
}
