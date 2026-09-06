import { cookies } from "next/headers";

import { ar } from "./dictionaries/ar";
import { bn } from "./dictionaries/bn";
import { de } from "./dictionaries/de";
import { en, type Dictionary } from "./dictionaries/en";
import { es } from "./dictionaries/es";
import { fr } from "./dictionaries/fr";
import { hi } from "./dictionaries/hi";
import { id } from "./dictionaries/id";
import { ja } from "./dictionaries/ja";
import { ko } from "./dictionaries/ko";
import { pt } from "./dictionaries/pt";
import { ru } from "./dictionaries/ru";
import { tr } from "./dictionaries/tr";
import { vi } from "./dictionaries/vi";
import { zh } from "./dictionaries/zh";
import { DEFAULT_LOCALE, isLocale, LOCALE_COOKIE, type Locale } from "./locales";

export type { Dictionary };
export * from "./locales";

const DICTIONARIES: Record<Locale, Dictionary> = {
  en,
  hi,
  es,
  fr,
  de,
  pt,
  zh,
  ja,
  ko,
  ar,
  ru,
  id,
  tr,
  vi,
  bn,
};

/** The reader's chosen language, or English when they have not chosen one. */
export async function getLocale(): Promise<Locale> {
  const store = await cookies();
  const value = store.get(LOCALE_COOKIE)?.value;
  return isLocale(value) ? value : DEFAULT_LOCALE;
}

export function dictionary(locale: Locale): Dictionary {
  return DICTIONARIES[locale] ?? en;
}

/** Both at once, since every page that needs one needs the other. */
export async function getTranslations(): Promise<{
  locale: Locale;
  t: Dictionary;
}> {
  const locale = await getLocale();
  return { locale, t: dictionary(locale) };
}

export { fill } from "./fill";
