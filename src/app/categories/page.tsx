import { CategoryIcon } from "@/components/category-icon";
import { PageShell } from "@/components/page-shell";
import { MIN_BID } from "@/lib/bidding";
import { categories } from "@/lib/categories";
import { listEntries, type Entry } from "@/lib/entries";

export const dynamic = "force-dynamic";

export const metadata = { title: "Categories · outbid.works" };

export default async function Page() {
  const entries = await listEntries({ limit: 200 });

  const byCategory = new Map<string, Entry[]>();
  for (const entry of entries) {
    const bucket = byCategory.get(entry.category) ?? [];
    bucket.push(entry);
    byCategory.set(entry.category, bucket);
  }

  return (
    <PageShell
      title="Categories"
      description="Each category is its own race. A quiet one is the cheapest place to be #1."
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {categories.map((category) => {
          // listEntries returns rank order, so the first match is the leader.
          const inCategory = byCategory.get(category.id) ?? [];
          const leader = inCategory[0];
          const topBid = leader?.amount_in_usd ?? 0;

          return (
            <section
              key={category.id}
              className="rounded-2xl border border-border bg-card p-5"
            >
              <h2 className="flex items-center gap-2 text-lg font-bold">
                <span className="text-accent">
                  <CategoryIcon name={category.icon} />
                </span>
                {category.label}
              </h2>

              <p className="mt-2 text-sm text-muted">
                {inCategory.length === 0
                  ? "Nobody has bid here yet."
                  : `${inCategory.length} ${inCategory.length === 1 ? "video" : "videos"} · leader at $${topBid}`}
              </p>

              {leader ? (
                <a
                  href={`/go/${leader.id}`}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-4 flex items-center gap-3 rounded-xl bg-chip px-4 py-3 transition-colors hover:bg-accent-soft"
                >
                  <span className="font-mono text-sm font-bold text-muted">#1</span>
                  <span className="line-clamp-1 flex-1 font-medium">{leader.title}</span>
                  <span className="font-mono font-bold text-accent">${topBid}</span>
                </a>
              ) : (
                <p className="mt-4 rounded-xl border border-dashed border-border px-4 py-3 text-sm text-muted">
                  Open — ${MIN_BID} takes the top spot.
                </p>
              )}
            </section>
          );
        })}
      </div>
    </PageShell>
  );
}
