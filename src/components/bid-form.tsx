"use client";

import Link from "next/link";
import { useRef, useState } from "react";

import { MAX_BID, MIN_BID, priceOfFirst } from "@/lib/bidding";
import { categories } from "@/lib/categories";
import { fill } from "@/lib/i18n/fill";
import type { Dictionary } from "@/lib/i18n/dictionaries/en";

type FieldError = { field: string; message: string } | null;

export function BidForm({
  topBid,
  amounts,
  t,
}: {
  topBid: number;
  /** Every bid currently on the board, so the modal can show the rank. */
  amounts: number[];
  t: Dictionary;
}) {
  // Opening at the price of #1 makes the pitch concrete: this is exactly what
  // the top spot costs right now.
  const [amount, setAmount] = useState(priceOfFirst(topBid));
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [error, setError] = useState<FieldError>(null);
  const [pending, setPending] = useState(false);

  // The Terms require an explicit tick before a bid is placed, so confirming
  // happens in a dialog rather than inline under the button.
  const [agreed, setAgreed] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);

  const complete = url.trim() !== "" && title.trim() !== "" && category !== "";

  // Matches the server's ranking: equal amounts keep placement order, and a new
  // listing is always the newest, so an existing tie stays ahead of it.
  const projectedRank = amounts.filter((a) => a >= amount).length + 1;

  function openConfirm(event: React.FormEvent) {
    event.preventDefault();
    if (!complete) return;
    setError(null);
    setAgreed(false);
    dialog.current?.showModal();
  }

  function closeConfirm() {
    dialog.current?.close();
    setAgreed(false);
  }

  async function placeBid() {
    if (!agreed) return;

    setPending(true);
    setError(null);

    try {
      const response = await fetch("/api/checkout", {
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
        closeConfirm();
        setError({ field: data.field ?? "url", message: data.error });
        return;
      }

      // Leaving for Dodo's hosted checkout. The listing is written when the
      // payment confirms, so nothing is reset here — a cancelled payment
      // should come back to a form that still has the bid in it.
      window.location.href = data.checkout_url;
    } catch {
      closeConfirm();
      setError({ field: "url", message: t.form.serverUnreachable });
    } finally {
      setPending(false);
    }
  }

  const invalid = (field: string) => error?.field === field;

  return (
    <form onSubmit={openConfirm} className="mx-auto mt-10 max-w-3xl">
      <div className="rounded-3xl border border-border bg-card p-5 shadow-sm sm:p-6">
        <div className="space-y-4">
          <Field
            label={t.form.videoLink}
            hint={t.form.videoLinkHint}
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
            <Field label={t.form.title} invalid={invalid("title")}>
              <input
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                maxLength={120}
                placeholder={t.form.titlePlaceholder}
                className={inputClass(invalid("title"))}
              />
            </Field>

            <Field label={t.form.category} invalid={invalid("category")}>
              <select
                required
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className={inputClass(invalid("category"))}
              >
                <option value="" disabled>
                  {t.form.categoryPlaceholder}
                </option>
                {categories.map((c) => (
                  <option key={c.id} value={c.id}>
                    {t.categories[c.id as keyof typeof t.categories] ?? c.label}
                  </option>
                ))}
              </select>
            </Field>
          </div>

          <Field
            label={t.form.pitch}
            hint={t.form.pitchHint}
            invalid={invalid("description")}
          >
            <input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              maxLength={280}
              placeholder={t.form.pitchPlaceholder}
              className={inputClass(invalid("description"))}
            />
          </Field>
        </div>

        <div className="mt-5 flex flex-col gap-4 border-t border-border pt-5 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold text-muted">{t.form.yourBid}</span>
            <div className="flex items-center gap-2">
              <StepButton
                label={t.form.lowerBid}
                onClick={() => setAmount((a) => Math.max(MIN_BID, a - 1))}
                disabled={amount <= MIN_BID}
              >
                −
              </StepButton>
              <span className="w-20 text-center font-mono text-2xl font-bold tabular-nums text-accent">
                ${amount}
              </span>
              <StepButton
                label={t.form.raiseBid}
                onClick={() => setAmount((a) => Math.min(MAX_BID, a + 1))}
                disabled={amount >= MAX_BID}
              >
                +
              </StepButton>
            </div>
          </div>

          <button
            type="submit"
            disabled={!complete || pending}
            aria-describedby={!complete ? "bid-incomplete" : undefined}
            className="h-13 flex-1 rounded-full bg-accent px-8 text-lg font-bold text-white transition-opacity hover:opacity-90 disabled:opacity-50"
          >
            {pending
              ? t.form.startingCheckout
              : fill(t.form.outbidFor, { amount: `$${amount}` })}
          </button>
        </div>

        {!complete ? (
          <p id="bid-incomplete" className="mt-3 text-center text-sm text-muted">
            {t.form.incomplete}
          </p>
        ) : null}

        {error ? (
          <p className="mt-4 text-center font-medium text-accent" role="alert">
            {error.message}
          </p>
        ) : null}
      </div>

      <p className="mt-4 text-center text-sm text-muted">
        {t.form.alreadyOnBoard}
      </p>

      <ConfirmDialog
        ref={dialog}
        rank={projectedRank}
        amount={amount}
        category={category}
        title={title}
        agreed={agreed}
        onAgreedChange={setAgreed}
        pending={pending}
        onCancel={closeConfirm}
        onConfirm={placeBid}
        t={t}
      />
    </form>
  );
}

function ConfirmDialog({
  ref,
  rank,
  amount,
  category,
  title,
  agreed,
  onAgreedChange,
  pending,
  onCancel,
  onConfirm,
  t,
}: {
  ref: React.RefObject<HTMLDialogElement | null>;
  rank: number;
  amount: number;
  category: string;
  title: string;
  agreed: boolean;
  onAgreedChange: (value: boolean) => void;
  pending: boolean;
  onCancel: () => void;
  onConfirm: () => void;
  t: Dictionary;
}) {
  return (
    <dialog
      ref={ref}
      // Esc fires cancel; route it through the same reset as the buttons.
      onCancel={(e) => {
        e.preventDefault();
        onCancel();
      }}
      onClick={(e) => {
        // The backdrop is the dialog element itself, so a click landing on it
        // rather than on the panel means the user clicked outside.
        if (e.target === ref.current) onCancel();
      }}
      // m-auto restores the centring that Tailwind's preflight strips off the
      // dialog's UA margin.
      className="m-auto w-[min(30rem,calc(100vw-2rem))] rounded-2xl border border-border bg-card p-0 text-foreground shadow-2xl backdrop:bg-black/50 backdrop:backdrop-blur-sm"
      aria-labelledby="confirm-title"
    >
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <h2 id="confirm-title" className="text-xl font-bold tracking-tight">
            {t.modal.title}
          </h2>
          <button
            type="button"
            onClick={onCancel}
            aria-label={t.modal.close}
            className="-mr-1 -mt-1 flex size-8 shrink-0 items-center justify-center rounded-full text-muted transition-colors hover:bg-chip hover:text-foreground"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <p className="mt-2 text-muted">{t.modal.subtitle}</p>

        <div className="mt-5 flex items-start justify-between gap-4 rounded-xl bg-chip p-4">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted">
              {t.modal.rank}
            </p>
            <p className="mt-0.5 font-mono text-3xl font-bold tabular-nums">
              #{rank}
            </p>
            <p className="mt-1 truncate text-sm text-muted">
              {category
                ? (t.categories[category as keyof typeof t.categories] ?? category)
                : "—"}
            </p>
          </div>
          <div className="shrink-0 text-right">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted">
              {t.modal.price}
            </p>
            <p className="mt-0.5 font-mono text-3xl font-bold tabular-nums text-accent">
              ${amount.toLocaleString()}
            </p>
            <p className="mt-1 text-sm text-muted">{t.modal.dueNow}</p>
          </div>
        </div>

        <p className="mt-4 leading-relaxed">
          <span className="font-semibold">{title || t.modal.yourVideo}</span>{" "}
          {t.modal.goesOnBoard}
        </p>

        <p className="mt-2 text-sm text-muted">{t.modal.paymentTaken}</p>

        <label className="mt-5 flex cursor-pointer items-start gap-3 rounded-xl border border-border p-3">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => onAgreedChange(e.target.checked)}
            className="mt-0.5 size-5 shrink-0 accent-accent"
          />
          <span className="leading-relaxed">
            {t.modal.agreeBefore}{" "}
            <Link
              href="/terms"
              target="_blank"
              className="font-semibold text-accent underline underline-offset-4"
            >
              {t.modal.agreeTerms}
            </Link>{" "}
            {t.modal.agreeAfter}
          </span>
        </label>

        <p className="mt-3 text-sm text-muted">
          <Link href="/privacy" target="_blank" className="underline underline-offset-4 hover:text-foreground">
            {t.nav.privacy}
          </Link>
          {" · "}
          <Link href="/rules" target="_blank" className="underline underline-offset-4 hover:text-foreground">
            {t.nav.rules}
          </Link>
        </p>
      </div>

      <div className="flex justify-end gap-3 border-t border-border bg-background/60 px-6 py-4">
        <button
          type="button"
          onClick={onCancel}
          className="rounded-full border border-border bg-card px-5 py-2.5 font-semibold transition-colors hover:bg-chip"
        >
          {t.modal.cancel}
        </button>
        <button
          type="button"
          onClick={onConfirm}
          disabled={!agreed || pending}
          className="rounded-full bg-accent px-6 py-2.5 font-bold text-white transition-opacity hover:opacity-90 disabled:opacity-50"
        >
          {pending ? t.form.startingCheckout : t.modal.continue}
        </button>
      </div>
    </dialog>
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
