import { PageShell } from "@/components/page-shell";
import { VideoBoard } from "@/components/video-board";
import { getStats, listEntries } from "@/lib/entries";
import { getTranslations } from "@/lib/i18n";

export const dynamic = "force-dynamic";

export const metadata = { title: "Leaderboard · outbid.works" };

export default async function Page() {
  const [stats, entries, { t }] = await Promise.all([
    getStats(),
    listEntries({ limit: 200 }),
    getTranslations(),
  ]);

  return (
    <PageShell
      title={t.leaderboard.title}
      description={t.leaderboard.description}
    >
      <dl className="mb-10 grid gap-4 sm:grid-cols-3">
        <Stat label={t.leaderboard.videos} value={stats.entries.toLocaleString()} />
        <Stat label={t.leaderboard.totalBid} value={`$${stats.totalUsd.toLocaleString()}`} />
        <Stat label={t.leaderboard.clickThroughs} value={stats.totalClicks.toLocaleString()} />
      </dl>

      <VideoBoard entries={entries} t={t} />
    </PageShell>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card px-5 py-4">
      <dt className="text-sm text-muted">{label}</dt>
      <dd className="mt-1 font-mono text-2xl font-bold tabular-nums">{value}</dd>
    </div>
  );
}
