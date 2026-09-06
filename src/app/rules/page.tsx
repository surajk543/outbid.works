import Link from "next/link";

import { PageShell } from "@/components/page-shell";
import { MAX_BID, MIN_BID, OUTBID_STEP, RAISE_STEP } from "@/lib/bidding";

export const metadata = { title: "Rules · outbid.works" };

export default function Page() {
  return (
    <PageShell
      title="Rules"
      description="outbid.works is a public leaderboard. No ads, no API keys, no revenue share. You pay to stand above everyone else. Rank is what you pay — nothing else."
    >
      <div className="space-y-10">
        <Section title="The boards">
          <p className="-mt-1 mb-1 text-muted">
            One payment ranks you on every board that includes that spend. The
            boards just look at different windows of time.
          </p>
          <Rule status="live">
            <strong>All-time</strong> is the main board. Rank is everything you
            have ever paid for that listing. It does not expire.
          </Rule>
          <Rule status="planned">
            <strong>Today</strong> is a rolling 24 hours. Each payment counts
            from the moment you paid, then drops off a day later. Whoever spent
            the most in that window is #1.
          </Rule>
          <Rule status="planned">
            <strong>Daily</strong> is a UTC calendar day — midnight to midnight.
            The current day stays live until it closes; past days freeze as an
            archive. Rank is what you spent that day, not the last 24 hours.
          </Rule>
        </Section>

        <Section title="How ranking works">
          <Rule>
            New listings are whole US dollars, ${MIN_BID} minimum, $
            {MAX_BID.toLocaleString()} maximum, $1 at a time. Listings already on
            the board keep their amount until they raise or get outranked.
          </Rule>
          <Rule>
            Taking #1 costs at least ${OUTBID_STEP} more than the current #1.
            Paying less still puts you on the board at whatever rank that amount
            can take. Equal amounts stay in the order they were placed — the
            older listing keeps the higher rank.
          </Rule>
          <Rule>
            Already on the list? Enter the same link again and raise your rank.
            The new amount must be at least ${RAISE_STEP} above your current one.
            Nobody else can take your rank by paying that difference.
          </Rule>
          <Rule>
            Tracking query strings are ignored, and platform links are keyed by
            their full path — so two videos on the same site never share a rank.
          </Rule>
        </Section>

        <Section title="What you can list">
          <Rule>
            A video. YouTube, Vimeo, TikTok, Twitch, Dailymotion, Streamable, or
            a direct video file. Links that do not resolve to a video are
            rejected at submit time.
          </Rule>
          <Rule>
            Chat and invite links are not allowed — Telegram, WhatsApp, Discord,
            Messenger, Signal, and similar. The board is for published work, not
            group chats.
          </Rule>
          <Rule>
            Links to sexual content are not allowed. If it is porn, NSFW, or an
            adult platform, it does not belong on the board.
          </Rule>
          <Rule>
            Query parameters are stripped from listing links. Affiliate,
            referral, and tracking URLs will not work.
          </Rule>
          <Rule>
            Link shortener URLs are not allowed. Submit the destination instead.
          </Rule>
        </Section>

        <Section title="Categories">
          <Rule>
            You pick your own category when you submit. If a listing is in the
            wrong one, resubmit the same link with the right category — it
            updates the existing entry rather than creating a second.
          </Rule>
        </Section>

        <Section title="After you pay">
          <Rule>
            Your listing is public. Clicks go to the URL you submitted, without
            query parameters, and the count is shown on your card.
          </Rule>
          <Rule>
            A completed payment is what claims the rank. Payments are not
            refundable.
          </Rule>
        </Section>
      </div>

      <div className="mt-10 rounded-2xl border border-accent/40 bg-accent-soft p-6">
        <h2 className="font-bold">Not built yet</h2>
        <ul className="mt-2 space-y-1.5 text-muted">
          <li>
            <strong className="text-foreground">Refunds and receipts.</strong>{" "}
            Payment goes through Dodo Payments, but there is no self-serve way
            to see past payments or ask for a listing to be removed — email us
            instead.
          </li>
          <li>
            <strong className="text-foreground">Time-windowed boards.</strong>{" "}
            Ranking a rolling day or a calendar day means summing individual
            payments inside a window, and the schema stores one row per listing
            with no payment history. Those boards need a second table.
          </li>
          <li>
            <strong className="text-foreground">
              Content and shortener enforcement.
            </strong>{" "}
            The chat, adult-content, and link-shortener rules above are policy,
            not code. Only the video-URL check runs automatically.
          </li>
          <li>
            <strong className="text-foreground">Legal documents.</strong> The{" "}
            <Link
              href="/terms"
              className="text-accent underline underline-offset-4"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="text-accent underline underline-offset-4"
            >
              Privacy Policy
            </Link>{" "}
            are drafted, but both still have blanks to fill and neither has been
            reviewed by a lawyer.
          </li>
        </ul>
        <Link
          href="/about"
          className="mt-4 inline-block font-semibold text-accent underline underline-offset-4"
        >
          Why this exists
        </Link>
      </div>
    </PageShell>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-xl font-bold tracking-tight">{title}</h2>
      <ul className="mt-4 space-y-3">{children}</ul>
    </section>
  );
}

function Rule({
  children,
  status,
}: {
  children: React.ReactNode;
  status?: "live" | "planned";
}) {
  return (
    <li className="flex gap-3 rounded-2xl border border-border bg-card px-5 py-4">
      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
      <p className="leading-relaxed">
        {children}
        {status ? (
          <span
            className={`ml-2 whitespace-nowrap rounded-full px-2 py-0.5 align-middle text-xs font-semibold ${
              status === "live"
                ? "bg-success/15 text-success"
                : "bg-chip text-muted"
            }`}
          >
            {status === "live" ? "Live" : "Not built yet"}
          </span>
        ) : null}
      </p>
    </li>
  );
}
