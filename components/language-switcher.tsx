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
    <Button variant="outline" size="sm" className="rounded-xl px-3 font-medium" asChild>
      <Link href={href} hrefLang={next} lang={next} prefetch={false}>
        {label}
      </Link>
    </Button>
  );
}
