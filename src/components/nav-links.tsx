"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * Split out of SiteNav because marking the current page needs the pathname,
 * which is client-only, while the labels come from the server-read locale.
 */
export function NavLinks({
  links,
}: {
  links: { href: string; label: string }[];
}) {
  const pathname = usePathname();

  return (
    <ul className="flex items-center gap-1">
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
    </ul>
  );
}
