import Link from "next/link";

import { getTranslations } from "@/lib/i18n";

export async function SiteFooter() {
  const { t } = await getTranslations();

  const links = [
    { href: "/leaderboard", label: t.nav.leaderboard },
    { href: "/categories", label: t.nav.categories },
    { href: "/about", label: t.nav.about },
    { href: "/rules", label: t.nav.rules },
    { href: "/terms", label: t.nav.terms },
    { href: "/privacy", label: t.nav.privacy },
  ];

  return (
    <footer className="mt-auto border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">
          <span className="font-semibold text-foreground">
            outbid<span className="px-0.5 text-accent">.</span>works
          </span>{" "}
          — {t.footer.tagline}
        </p>

        <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-muted transition-colors hover:text-foreground"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <p className="border-t border-border px-6 py-3 text-center text-xs text-muted">
        {t.footer.payments}
      </p>
    </footer>
  );
}
