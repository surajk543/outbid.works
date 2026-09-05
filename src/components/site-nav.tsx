"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./theme-toggle";

const links = [
  { href: "/leaderboard", label: "Leaderboard" },
  { href: "/causes", label: "Causes" },
  { href: "/about", label: "About" },
  { href: "/rules", label: "Rules" },
] as const;

export function SiteNav() {
  const pathname = usePathname();

  return (
    <header className="border-b border-border">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <ChevronsUp />
          <span className="text-xl font-bold tracking-tight">
            outbid<span className="px-1 text-accent">.</span>works
          </span>
        </Link>

        <ul className="flex items-center gap-1 text-[15px]">
          {links.map(({ href, label }) => {
            const active = pathname.startsWith(href);

            return (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-full px-3 py-1.5 transition-colors hover:text-foreground ${
                    active ? "font-semibold text-foreground" : "text-muted"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
          <li className="ml-1">
            <ThemeToggle />
          </li>
        </ul>
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
