import type { ReactNode } from "react";

/**
 * A detail that must be filled in before these terms are published. Rendered
 * loud on purpose — an unfilled operator name or jurisdiction is the kind of
 * thing that ships by accident and cannot be shipped by accident here.
 */
export function Blank({ children }: { children: ReactNode }) {
  return (
    <mark className="rounded bg-accent-soft px-1.5 py-0.5 font-mono text-[0.9em] font-semibold text-accent">
      [{children}]
    </mark>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="mt-10 scroll-mt-8">
      <h2 className="text-xl font-bold tracking-tight">{title}</h2>
      <div className="mt-3 space-y-3 leading-relaxed text-foreground/90">
        {children}
      </div>
    </section>
  );
}

export function LegalList({ children }: { children: ReactNode }) {
  return (
    <ul className="ml-1 space-y-2">
      {children}
    </ul>
  );
}

export function LegalItem({ children }: { children: ReactNode }) {
  return (
    <li className="flex gap-3">
      <span
        className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent"
        aria-hidden="true"
      />
      <span className="leading-relaxed">{children}</span>
    </li>
  );
}
