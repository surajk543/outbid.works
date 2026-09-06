import Link from "next/link";

import { BidForm } from "@/components/bid-form";
import { VideoBoard } from "@/components/video-board";
import { MIN_BID, priceOfFirst } from "@/lib/bidding";
import { getBidAmounts, getStats, listEntries } from "@/lib/entries";
import { fill, getTranslations } from "@/lib/i18n";

// The board changes the moment somebody bids, so nothing here is prerendered.
export const dynamic = "force-dynamic";

export default async function Page() {
  const [stats, entries, amounts, { t }] = await Promise.all([
    getStats(),
    listEntries({ limit: 12 }),
    getBidAmounts(),
    getTranslations(),
  ]);

  const nextTopBid = priceOfFirst(stats.topBid);

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-6 pb-20 pt-14">
      <section className="text-center">
        <p className="text-6xl font-extrabold tracking-tight text-success sm:text-7xl tabular-nums">
          ${stats.totalUsd.toLocaleString()}
        </p>
        <p className="mt-2 font-semibold text-muted">{t.home.bidSubtitle}</p>

        <p className="mt-6 inline-flex flex-wrap items-center justify-center gap-2 rounded-full bg-chip px-4 py-2 text-sm">
          <span className="size-2 rounded-full bg-success" aria-hidden="true" />
          <span className="font-semibold text-success">
            {fill(
              stats.entries === 1 ? t.home.videoOnBoard : t.home.videosOnBoard,
              { count: stats.entries },
            )}
          </span>
          <span className="text-muted">
            ·{" "}
            {fill(t.home.clicksDelivered, {
              count: stats.totalClicks.toLocaleString(),
            })}
          </span>
        </p>

        <h1 className="mt-12 text-5xl font-extrabold tracking-tight sm:text-6xl">
          {t.home.claimFor}{" "}
          <span className="text-accent tabular-nums">${nextTopBid}</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg">
          <span className="text-accent">
            {fill(t.home.startAt, { amount: `$${MIN_BID}` })}
          </span>{" "}
          {t.home.bidLess}
        </p>
        <p className="mt-3 text-muted">{t.home.noAlgorithm}</p>
      </section>

      <BidForm topBid={stats.topBid} amounts={amounts} t={t} />

      <div className="mt-20">
        <VideoBoard entries={entries} heading={t.board.trending} t={t} />
      </div>

      {stats.entries > 12 ? (
        <p className="mt-10 text-center">
          <Link
            href="/leaderboard"
            className="rounded-full border border-border bg-card px-6 py-3 font-semibold transition-colors hover:bg-chip"
          >
            {t.home.seeFull}
          </Link>
        </p>
      ) : null}
    </main>
  );
}
