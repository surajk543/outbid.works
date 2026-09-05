"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { MAX_BID, MIN_BID, priceOfFirst } from "@/lib/bidding";
import { categories } from "@/lib/categories";

type FieldError = { field: string; message: string } | null;

export function BidForm({ topBid }: { topBid: number }) {
  const router = useRouter();

  // Opening at the price of #1 makes the pitch concrete: this is exactly what
  // the top spot costs right now.
  const [amount, setAmount] = useState(priceOfFirst(topBid));
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [error, setError] = useState<FieldError>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  // The Terms require an explicit tick before a bid is placed, so the form has
  // a second step rather than one button that does everything.
  const [confirming, setConfirming] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const complete =
    url.trim() !== "" && title.trim() !== "" && category !== "";

  async function submit(event: React.FormEvent) {
    event.preventDefault();

    // First press moves to the consent step; only the second one bids.
    if (!confirming) {
      if (!complete) return;
      setError(null);
      setSuccess(null);
      setConfirming(true);
      return;
    }

    if (!agreed) return;

    setPending(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch("/api/entries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          url,
          title,
          description,
          category,
          amount_in_usd: amount,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError({ field: data.field ?? "url", message: data.error });
        return;
      }

      setSuccess(`"${data.entry.title}" is live at #${data.entry.rank}.`);
      setUrl("");
      setTitle("");
      setDescription("");
      setCategory("");
      setConfirming(false);
      setAgreed(false);
      router.refresh();
    } catch {
      setError({ field: "url", message: "Could not reach the server. Try again." });
    } finally {
      setPending(false);
    }
  }

  const invalid = (field: string) => error?.field === field;

  return (
    <form onSubmit={submit} className="mx-auto mt-10 max-w-3xl">
      <div className="rounded-3xl border border-border bg-card p-5 shadow-sm sm:p-6">
        <div className="space-y-4">
          <Field
            label="Video link"
            hint="YouTube, Vimeo, TikTok, Twitch, Dailymotion, Streamable, or an .mp4"
            invalid={invalid("url")}
          >
            <input
              required
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://youtube.com/watch?v=..."
              className={inputClass(invalid("url"))}
            />
          </Field>

          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Title" invalid={invalid("title")}>
              <input
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                maxLength={120}
                placeholder="What is this video?"
                className={inputClass(invalid("title"))}
              />
            </Field>

            <Field label="Category" invalid={invalid("category")}>
              <select
                required
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className={inputClass(invalid("category"))}
              >
                <option value="" disabled>
                  Choose a category
                </option>
                {categories.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.label}
                  </option>
                ))}
              </select>
            </Field>
          </div>

          <Field
            label="One-line pitch"
            hint="Optional — 280 characters"
            invalid={invalid("description")}
          >
            <input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              maxLength={280}
              placeholder="Why should someone press play?"
              className={inputClass(invalid("description"))}
            />
          </Field>
        </div>

        <div className="mt-5 flex flex-col gap-4 border-t border-border pt-5 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold text-muted">Your bid</span>
            <div className="flex items-center gap-2">
              <StepButton
                label="Lower bid"
                onClick={() => setAmount((a) => Math.max(MIN_BID, a - 1))}
                disabled={amount <= MIN_BID}
              >
                −
              </StepButton>
              <span className="w-20 text-center font-mono text-2xl font-bold tabular-nums text-accent">
                ${amount}
              </span>
              <StepButton
                label="Raise bid"
                onClick={() => setAmount((a) => Math.min(MAX_BID, a + 1))}
                disabled={amount >= MAX_BID}
              >
                +
              </StepButton>
            </div>
          </div>

          <button
            type="submit"
            disabled={!complete || (confirming && !agreed) || pending}
            aria-describedby={!complete ? "bid-incomplete" : undefined}
            className="h-13 flex-1 rounded-full bg-accent px-8 text-lg font-bold text-white transition-opacity hover:opacity-90 disabled:opacity-50"
          >
            {pending
              ? "Placing bid…"
              : confirming
                ? `Confirm bid of $${amount}`
                : `Outbid for $${amount}`}
          </button>
        </div>

        {!complete ? (
          <p id="bid-incomplete" className="mt-3 text-center text-sm text-muted">
            Add a video link, a title, and a category to place a bid.
          </p>
        ) : null}

        {confirming ? (
          <div className="mt-4 rounded-2xl border border-accent bg-accent-soft p-4">
            <label className="flex cursor-pointer items-start gap-3">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-0.5 size-5 shrink-0 accent-accent"
              />
              <span className="leading-relaxed">
                I have read and agree to the{" "}
                <Link
                  href="/terms"
                  target="_blank"
                  className="font-semibold text-accent underline underline-offset-4"
                >
                  Terms of Service
                </Link>{" "}
                of outbid.works
              </span>
            </label>

            <button
              type="button"
              onClick={() => {
                setConfirming(false);
                setAgreed(false);
              }}
              className="mt-3 text-sm font-medium text-muted underline underline-offset-4 transition-colors hover:text-foreground"
            >
              Back to editing
            </button>
          </div>
        ) : null}

        {error ? (
          <p className="mt-4 text-center font-medium text-accent" role="alert">
            {error.message}
          </p>
        ) : null}

        {success ? (
          <p className="mt-4 text-center font-medium text-success" role="status">
            {success} Checkout is not wired up yet — no payment was taken.
          </p>
        ) : null}
      </div>

      <p className="mt-4 text-center text-sm text-muted">
        Already on the board? Submit the same link with a higher bid to climb.
      </p>
    </form>
  );
}

function inputClass(invalid: boolean) {
  return `h-12 w-full rounded-xl border bg-background px-4 outline-none transition-colors placeholder:text-muted focus:ring-2 focus:ring-accent/40 ${
    invalid ? "border-accent" : "border-border"
  }`;
}

function Field({
  label,
  hint,
  invalid,
  children,
}: {
  label: string;
  hint?: string;
  invalid?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 flex flex-wrap items-baseline gap-x-2">
        <span className="text-sm font-semibold">{label}</span>
        {hint ? <span className="text-xs text-muted">{hint}</span> : null}
      </span>
      {children}
      {invalid ? <span className="sr-only">This field needs fixing.</span> : null}
    </label>
  );
}

function StepButton({
  children,
  label,
  onClick,
  disabled,
}: {
  children: React.ReactNode;
  label: string;
  onClick: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      disabled={disabled}
      className="flex size-10 items-center justify-center rounded-full bg-accent-soft text-2xl text-accent transition-opacity hover:opacity-80 disabled:opacity-40"
    >
      {children}
    </button>
  );
}
