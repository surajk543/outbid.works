/**
 * The languages the interface is offered in. Labels are written in the
 * language itself — someone looking for their own language is not helped by
 * seeing it named in English.
 */
export const locales = [
  { code: "en", label: "English", dir: "ltr" },
  { code: "hi", label: "हिन्दी", dir: "ltr" },
  { code: "es", label: "Español", dir: "ltr" },
  { code: "fr", label: "Français", dir: "ltr" },
  { code: "de", label: "Deutsch", dir: "ltr" },
  { code: "pt", label: "Português", dir: "ltr" },
  { code: "zh", label: "中文", dir: "ltr" },
  { code: "ja", label: "日本語", dir: "ltr" },
  { code: "ko", label: "한국어", dir: "ltr" },
  { code: "ar", label: "العربية", dir: "rtl" },
  { code: "ru", label: "Русский", dir: "ltr" },
  { code: "id", label: "Bahasa Indonesia", dir: "ltr" },
  { code: "tr", label: "Türkçe", dir: "ltr" },
  { code: "vi", label: "Tiếng Việt", dir: "ltr" },
  { code: "bn", label: "বাংলা", dir: "ltr" },
] as const;

export type Locale = (typeof locales)[number]["code"];

export const DEFAULT_LOCALE: Locale = "en";

/** Name of the cookie holding the reader's choice. */
export const LOCALE_COOKIE = "outbid_locale";

export function isLocale(value: string | undefined): value is Locale {
  return locales.some((l) => l.code === value);
}

export function localeDir(code: Locale): "ltr" | "rtl" {
  return locales.find((l) => l.code === code)?.dir ?? "ltr";
}

export function localeLabel(code: Locale): string {
  return locales.find((l) => l.code === code)?.label ?? code;
}
