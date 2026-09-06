import Link from "next/link";

import { LanguageSwitcher } from "./language-switcher";
import { NavLinks } from "./nav-links";
import { ThemeToggle } from "./theme-toggle";
import { getTranslations } from "@/lib/i18n";

export async function SiteNav() {
  const { locale, t } = await getTranslations();

  const links = [
    { href: "/leaderboard", label: t.nav.leaderboard },
    { href: "/categories", label: t.nav.categories },
    { href: "/about", label: t.nav.about },
    { href: "/rules", label: t.nav.rules },
  ];

  return (
    <header className="border-b border-border">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <ChevronsUp />
          <span className="text-xl font-bold tracking-tight">
            outbid<span className="px-1 text-accent">.</span>works
          </span>
        </Link>

        <div className="flex items-center gap-1 text-[15px]">
          <NavLinks links={links} />
          <LanguageSwitcher current={locale} label={t.nav.language} />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}

function ChevronsUp() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--accent)"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m17 11-5-5-5 5M17 18l-5-5-5 5" />
    </svg>
  );
}
