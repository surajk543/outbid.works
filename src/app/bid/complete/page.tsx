import Link from "next/link";

import { PageShell } from "@/components/page-shell";

export const metadata = { title: "Payment received · outbid.works" };

/**
 * Where Dodo returns the customer. The listing is written by the webhook, not
 * here, so this page never claims the rank is live — it may be a second or two
 * behind, and saying otherwise would be a promise we cannot keep from the
 * browser.
 */
export default function Page() {
  return (
    <PageShell
      title="Payment received"
      description="Your listing goes on the board as soon as the payment confirms."
    >
      <div className="rounded-2xl border border-border bg-card p-6">
        <p className="leading-relaxed">
          Confirmation usually lands within a few seconds. Open the leaderboard
          and your video should be there at the rank your bid earned.
        </p>
        <p className="mt-3 text-muted">
          If it has not appeared after a minute, do not pay again — email us and
          we will place it by hand.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/leaderboard"
            className="rounded-full bg-accent px-6 py-3 font-bold text-white transition-opacity hover:opacity-90"
          >
            See the leaderboard
          </Link>
          <Link
            href="/"
            className="rounded-full border border-border bg-card px-6 py-3 font-semibold transition-colors hover:bg-chip"
          >
            Back to the board
          </Link>
        </div>
      </div>
    </PageShell>
  );
}
