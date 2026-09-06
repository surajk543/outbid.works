import Link from "next/link";

import { PageShell } from "@/components/page-shell";
import { MIN_BID } from "@/lib/bidding";

export const metadata = { title: "About · outbid.works" };

export default function Page() {
  return (
    <PageShell
      title="Why this exists"
      description="A leaderboard where the only ranking signal is how much you paid to be on it."
    >
      <div className="space-y-6 text-lg leading-relaxed">
        <p>
          A new creator&apos;s first problem is not quality. It is that nobody
          knows the video exists. Recommendation algorithms rank on signals a
          beginner does not have yet — watch time, subscribers, a back catalogue
          — so the work that needs discovery the most is the work least likely
          to get it.
        </p>

        <p>
          outbid.works replaces all of that with one number. Bid ${MIN_BID} and
          you are on the board. Bid more than everyone else and you are #1. No
          history,
          no follower count, no cold start. The ranking is legible to everyone
          looking at it, which is the part algorithms never manage.
        </p>

        <p>
          Every card shows its click-through count, so a bid is not a black box.
          You can see exactly what the money bought, and decide whether the next
          one is worth it.
        </p>

        <p className="text-muted">
          The mechanic is lifted from{" "}
          <a
            href="https://outbid.lol/"
            target="_blank"
            rel="noreferrer noopener"
            className="text-accent underline underline-offset-4"
          >
            outbid.lol
          </a>
          , which auctions a leaderboard for charity. This one points it at
          creators who need eyes on their work.
        </p>
      </div>

      <div className="mt-10 rounded-2xl border border-border bg-card p-6">
        <h2 className="font-bold">Honest status</h2>
        <p className="mt-2 text-muted">
          Checkout is not built. Bids are stored and ranked, but no money moves
          and no payment details are collected. Treat the board as a working
          demo of the mechanic.
        </p>
        <Link
          href="/rules"
          className="mt-4 inline-block font-semibold text-accent underline underline-offset-4"
        >
          Read the rules
        </Link>
      </div>
    </PageShell>
  );
}
