import { CategoryIcon } from "@/components/category-icon";
import { PageShell } from "@/components/page-shell";
import { MIN_BID } from "@/lib/bidding";
import { categories } from "@/lib/categories";
import { listEntries, type Entry } from "@/lib/entries";
import { fill, getTranslations } from "@/lib/i18n";

export const dynamic = "force-dynamic";

export const metadata = { title: "Categories · outbid.works" };

export default async function Page() {
  const [entries, { t }] = await Promise.all([
    listEntries({ limit: 200 }),
    getTranslations(),
  ]);

  const byCategory = new Map<string, Entry[]>();
  for (const entry of entries) {
    const bucket = byCategory.get(entry.category) ?? [];
    bucket.push(entry);
    byCategory.set(entry.category, bucket);
  }

  return (
    <PageShell
      title={t.categoriesPage.title}
      description={t.categoriesPage.description}
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
                {t.categories[category.id as keyof typeof t.categories] ?? category.label}
              </h2>

              <p className="mt-2 text-sm text-muted">
                {inCategory.length === 0
                  ? t.categoriesPage.nobody
                  : fill(
                      inCategory.length === 1
                        ? t.categoriesPage.countOne
                        : t.categoriesPage.count,
                      { count: inCategory.length, amount: `$${topBid}` },
                    )}
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
                  {fill(t.categoriesPage.open, { amount: `$${MIN_BID}` })}
                </p>
              )}
            </section>
          );
        })}
      </div>
    </PageShell>
  );
}
