import { ar } from "@/lib/i18n/dictionaries/ar";
import { en } from "@/lib/i18n/dictionaries/en";
import { defaultLocale, isLocale, type Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";

const map: Record<Locale, Dictionary> = {
  en,
  ar,
};

export function getDictionary(locale: string): Dictionary {
  return isLocale(locale) ? map[locale] : map[defaultLocale];
}

export { defaultLocale, isLocale, locales, type Locale } from "@/lib/i18n/config";
export type { Dictionary } from "@/lib/i18n/types";
