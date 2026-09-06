import Link from "next/link";

const links = [
  { href: "/leaderboard", label: "Leaderboard" },
  { href: "/categories", label: "Categories" },
  { href: "/about", label: "About" },
  { href: "/rules", label: "Rules" },
  { href: "/terms", label: "Terms" },
  { href: "/privacy", label: "Privacy" },
] as const;

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">
          <span className="font-semibold text-foreground">
            outbid<span className="px-0.5 text-accent">.</span>works
          </span>{" "}
          — rank is what you pay.
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
        Payments are handled by Dodo Payments. A listing goes on the board
        once its payment confirms.
      </p>
    </footer>
  );
}
