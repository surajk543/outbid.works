import { PageShell } from "@/components/page-shell";
import { VideoBoard } from "@/components/video-board";
import { getStats, listEntries } from "@/lib/entries";

export const dynamic = "force-dynamic";

export const metadata = { title: "Leaderboard · outbid.works" };

export default async function Page() {
  const [stats, entries] = await Promise.all([
    getStats(),
    listEntries({ limit: 200 }),
  ]);

  return (
    <PageShell
      title="Leaderboard"
      description="Every video on the board, ranked by bid. Ties go to whoever got here first."
    >
      <dl className="mb-10 grid gap-4 sm:grid-cols-3">
        <Stat label="Videos" value={stats.entries.toLocaleString()} />
        <Stat label="Total bid" value={`$${stats.totalUsd.toLocaleString()}`} />
        <Stat label="Click-throughs" value={stats.totalClicks.toLocaleString()} />
      </dl>

      <VideoBoard entries={entries} />
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
