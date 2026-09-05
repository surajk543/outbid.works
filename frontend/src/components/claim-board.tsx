"use client";

import { useMemo, useState } from "react";
import { CauseIcon } from "./cause-icon";
import { causes } from "@/lib/causes";

const TOP_BID = 55;
const MIN_BID = 5;
const CLAIM_PRICE = TOP_BID + 1;

const trending = [
  { rank: 1, name: "linear.app", bid: 55, cause: "malaria" },
  { rank: 2, name: "@swyx", bid: 41, cause: "poverty" },
  { rank: 3, name: "raycast.com", bid: 34, cause: "water" },
  { rank: 4, name: "@hnshah", bid: 22, cause: "sight" },
  { rank: 5, name: "posthog.com", bid: 18, cause: "rainforest" },
];

const activity = [
  { who: "posthog.com", what: "took #5 for $18", when: "2m ago" },
  { who: "@hnshah", what: "outbid @dhh for #4", when: "18m ago" },
  { who: "raycast.com", what: "took #3 for $34", when: "1h ago" },
  { who: "@swyx", what: "raised their bid to $41", when: "3h ago" },
  { who: "linear.app", what: "reclaimed #1 for $55", when: "5h ago" },
];

export function ClaimBoard() {
  const [bid, setBid] = useState(CLAIM_PRICE);
  const [filter, setFilter] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const visible = useMemo(
    () => (filter ? trending.filter((t) => t.cause === filter) : trending),
    [filter],
  );

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-6 pb-20 pt-14">
      <section className="text-center">
        <p className="text-6xl font-extrabold tracking-tight text-success sm:text-7xl">
          $173
        </p>
        <p className="mt-2 font-semibold text-muted">donated to charity so far</p>

        <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-chip px-4 py-2 text-sm">
          <span
            className="size-2 rounded-full bg-success"
            aria-hidden="true"
          />
          <span className="font-semibold text-success">1 online</span>
          <span className="text-muted">· 2,596 visitors since launch</span>
        </p>

        <h1 className="mt-12 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-5xl font-extrabold tracking-tight sm:text-6xl">
          <span>Claim #1 for</span>
          <span className="flex items-center gap-3">
            <StepButton
              label="Lower bid"
              onClick={() => setBid((b) => Math.max(MIN_BID, b - 1))}
              disabled={bid <= MIN_BID}
            >
              −
            </StepButton>
            <span className="text-accent tabular-nums">${bid}</span>
            <StepButton label="Raise bid" onClick={() => setBid((b) => b + 1)}>
              +
            </StepButton>
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg">
          <span className="text-accent">New spots start at ${MIN_BID}.</span>{" "}
          Paying less than the #1 price still puts you on the board at whatever
          place that bid can take.
        </p>
        <p className="mt-3 text-muted">
          All proceeds are donated. You pick the cause your bid fights for.
        </p>
      </section>

      <form
        className="mx-auto mt-8 max-w-5xl"
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitted(true);
        }}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <span className="pointer-events-none absolute inset-y-0 left-5 flex items-center text-muted">
              <GlobeIcon />
            </span>
            <input
              required
              name="target"
              aria-label="Your product URL or @handle"
              placeholder="Your product URL or @handle"
              className="h-14 w-full rounded-full border border-accent bg-card pl-13 pr-5 text-lg outline-none placeholder:text-muted focus:ring-2 focus:ring-accent/40"
            />
          </div>

          <select
            name="cause"
            defaultValue=""
            aria-label="Choose a cause"
            className="h-14 rounded-full border border-border bg-card px-5 text-lg outline-none focus:ring-2 focus:ring-accent/40"
          >
            <option value="" disabled>
              Choose a cause
            </option>
            {causes.map((c) => (
              <option key={c.id} value={c.id}>
                {c.label}
              </option>
            ))}
          </select>

          <button
            type="submit"
            className="h-14 rounded-full bg-accent px-10 text-lg font-bold text-white transition-opacity hover:opacity-90"
          >
            Outbid
          </button>
        </div>

        <input
          name="description"
          aria-label="One-line description (optional)"
          placeholder="One-line description (optional)"
          className="mx-auto mt-3 block h-13 w-full max-w-3xl rounded-full border border-border bg-card px-6 outline-none placeholder:text-muted focus:ring-2 focus:ring-accent/40"
        />

        <p className="mt-4 text-center text-muted">
          Already on the list? Enter the same URL or @handle and up your bid.
        </p>

        {submitted ? (
          <p className="mt-3 text-center font-medium text-accent" role="status">
            Checkout isn&apos;t wired up yet — no payment was taken.
          </p>
        ) : null}
      </form>

      <div className="mt-12 flex gap-2 overflow-x-auto pb-2">
        <Chip active={filter === null} onClick={() => setFilter(null)}>
          <GridIcon />
          All
        </Chip>
        {causes.map((c) => (
          <Chip
            key={c.id}
            active={filter === c.id}
            onClick={() => setFilter(filter === c.id ? null : c.id)}
          >
            <CauseIcon name={c.icon} />
            {c.label}
          </Chip>
        ))}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <Panel title="Trending right now" dot={<span aria-hidden="true">🔥</span>}>
          {visible.length === 0 ? (
            <p className="px-6 py-5 text-muted">No bids for this cause yet.</p>
          ) : (
            <ul>
              {visible.map(({ rank, name, bid: amount, cause }) => (
                <li
                  key={name}
                  className="flex items-center gap-4 border-t border-border px-6 py-4 first:border-t-0"
                >
                  <span className="w-6 font-mono text-muted">{rank}</span>
                  <span className="flex-1 font-semibold">{name}</span>
                  <span className="hidden text-sm text-muted sm:inline">
                    {causes.find((c) => c.id === cause)?.label}
                  </span>
                  <span className="font-mono font-bold text-accent">
                    ${amount}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </Panel>

        <Panel
          title="Latest activity"
          dot={
            <span
              className="size-2.5 rounded-full bg-accent"
              aria-hidden="true"
            />
          }
        >
          <ul>
            {activity.map(({ who, what, when }) => (
              <li
                key={`${who}-${when}`}
                className="flex items-center gap-3 border-t border-border px-6 py-4 first:border-t-0"
              >
                <span className="font-semibold">{who}</span>
                <span className="flex-1 text-muted">{what}</span>
                <span className="text-sm text-muted">{when}</span>
              </li>
            ))}
          </ul>
        </Panel>
      </div>
    </main>
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
      className="flex size-10 items-center justify-center rounded-full bg-accent-soft text-2xl font-normal text-accent transition-opacity hover:opacity-80 disabled:opacity-40"
    >
      {children}
    </button>
  );
}

function Chip({
  children,
  active,
  onClick,
}: {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full border px-4 py-2.5 font-semibold transition-colors ${
        active
          ? "border-accent bg-accent text-white"
          : "border-border bg-card hover:bg-chip"
      }`}
    >
      {children}
    </button>
  );
}

function Panel({
  title,
  dot,
  children,
}: {
  title: string;
  dot: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className="overflow-hidden rounded-2xl border border-border bg-card">
      <h2 className="flex items-center gap-2 px-6 pb-4 pt-5 text-xl font-bold">
        {dot}
        {title}
      </h2>
      {children}
    </section>
  );
}

function GlobeIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18Z" />
    </svg>
  );
}

function GridIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </svg>
  );
}
