"use client";

import { useEffect, useRef, useState, useTransition } from "react";

import { setLocale } from "@/lib/i18n/actions";
import { locales, type Locale } from "@/lib/i18n/locales";

export function LanguageSwitcher({
  current,
  label,
}: {
  current: Locale;
  label: string;
}) {
  const [open, setOpen] = useState(false);
  const [pending, startTransition] = useTransition();
  const wrapper = useRef<HTMLDivElement>(null);

  // A dropdown that only closes on its own button is a trap on touch devices.
  useEffect(() => {
    if (!open) return;

    function onPointerDown(event: MouseEvent | TouchEvent) {
      if (!wrapper.current?.contains(event.target as Node)) setOpen(false);
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  function choose(code: Locale) {
    setOpen(false);
    startTransition(() => {
      void setLocale(code);
    });
  }

  const active = locales.find((l) => l.code === current);

  return (
    <div ref={wrapper} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        disabled={pending}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={label}
        className="flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-[15px] text-muted transition-colors hover:bg-chip hover:text-foreground disabled:opacity-50"
      >
        <GlobeIcon />
        <span className="hidden sm:inline">{active?.label ?? current}</span>
        <span className="sm:hidden">{current.toUpperCase()}</span>
      </button>

      {open ? (
        <ul
          role="listbox"
          aria-label={label}
          // end-0 rather than right-0 so the menu hangs from the correct edge
          // once the page is flipped for a right-to-left language.
          className="absolute end-0 z-50 mt-2 max-h-80 w-48 overflow-y-auto rounded-xl border border-border bg-card py-1 shadow-lg"
        >
          {locales.map((locale) => {
            const selected = locale.code === current;
            return (
              <li key={locale.code}>
                <button
                  type="button"
                  role="option"
                  aria-selected={selected}
                  onClick={() => choose(locale.code)}
                  lang={locale.code}
                  dir={locale.dir}
                  className={`flex w-full items-center justify-between gap-3 px-4 py-2 text-start text-[15px] transition-colors hover:bg-chip ${
                    selected ? "font-semibold text-accent" : "text-foreground"
                  }`}
                >
                  <span>{locale.label}</span>
                  {selected ? <CheckIcon /> : null}
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}

function GlobeIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18Z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m5 13 4 4L19 7" />
    </svg>
  );
}
