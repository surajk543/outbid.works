import Link from "next/link";

import { BidForm } from "@/components/bid-form";
import { VideoBoard } from "@/components/video-board";
import { MIN_BID, priceOfFirst } from "@/lib/bidding";
import { getStats, listEntries } from "@/lib/entries";

// The board changes the moment somebody bids, so nothing here is prerendered.
export const dynamic = "force-dynamic";

export default async function Page() {
  const [stats, entries] = await Promise.all([
    getStats(),
    listEntries({ limit: 12 }),
  ]);

  const nextTopBid = priceOfFirst(stats.topBid);

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-6 pb-20 pt-14">
      <section className="text-center">
        <p className="text-6xl font-extrabold tracking-tight text-success sm:text-7xl tabular-nums">
          ${stats.totalUsd.toLocaleString()}
        </p>
        <p className="mt-2 font-semibold text-muted">
          bid by creators to get their work seen
        </p>

        <p className="mt-6 inline-flex flex-wrap items-center justify-center gap-2 rounded-full bg-chip px-4 py-2 text-sm">
          <span className="size-2 rounded-full bg-success" aria-hidden="true" />
          <span className="font-semibold text-success">
            {stats.entries} {stats.entries === 1 ? "video" : "videos"} on the board
          </span>
          <span className="text-muted">
            · {stats.totalClicks.toLocaleString()} click-throughs delivered
          </span>
        </p>

        <h1 className="mt-12 text-5xl font-extrabold tracking-tight sm:text-6xl">
          Claim #1 for{" "}
          <span className="text-accent tabular-nums">${nextTopBid}</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg">
          <span className="text-accent">New videos start at ${MIN_BID}.</span>{" "}
          Bidding less than the top price still puts you on the board — at
          whatever place that bid can take.
        </p>
        <p className="mt-3 text-muted">
          No algorithm, no subscriber count, no history. The whole ranking is
          one number, and you set it.
        </p>
      </section>

      <BidForm topBid={stats.topBid} />

      <div className="mt-20">
        <VideoBoard entries={entries} heading="Trending right now" />
      </div>

      {stats.entries > 12 ? (
        <p className="mt-10 text-center">
          <Link
            href="/leaderboard"
            className="rounded-full border border-border bg-card px-6 py-3 font-semibold transition-colors hover:bg-chip"
          >
            See the full leaderboard
          </Link>
        </p>
      ) : null}
    </main>
  );
}
