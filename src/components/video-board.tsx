"use client";

import { useMemo, useState } from "react";

import { CategoryIcon } from "./category-icon";
import { VideoRow } from "./video-row";
import { categories } from "@/lib/categories";
import type { Entry } from "@/lib/entries";

export function VideoBoard({
  entries,
  heading,
}: {
  entries: Entry[];
  heading?: string;
}) {
  const [filter, setFilter] = useState<string | null>(null);
  // One player at a time, so opening a video stops whatever else was running.
  const [playingId, setPlayingId] = useState<number | null>(null);

  // Only offer a chip for a category somebody has actually bid in, so the
  // filter row never leads to an empty board.
  const available = useMemo(
    () => categories.filter((c) => entries.some((e) => e.category === c.id)),
    [entries],
  );

  const visible = useMemo(
    () => (filter ? entries.filter((e) => e.category === filter) : entries),
    [entries, filter],
  );

  if (entries.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-border px-6 py-16 text-center">
        <p className="text-lg font-semibold">The board is empty.</p>
        <p className="mt-2 text-muted">
          Be the first creator on it — any bid takes #1 right now.
        </p>
      </div>
    );
  }

  return (
    <section>
      {heading ? (
        <h2 className="mb-5 flex items-center gap-2 text-2xl font-bold">
          <span aria-hidden="true">🔥</span>
          {heading}
        </h2>
      ) : null}

      {available.length > 1 ? (
        <div className="mb-6 flex gap-2 overflow-x-auto pb-2">
          <Chip active={filter === null} onClick={() => setFilter(null)}>
            <GridIcon />
            All
          </Chip>
          {available.map((c) => (
            <Chip
              key={c.id}
              active={filter === c.id}
              onClick={() => setFilter(filter === c.id ? null : c.id)}
            >
              <CategoryIcon name={c.icon} />
              {c.label}
            </Chip>
          ))}
        </div>
      ) : null}

      <ol className="overflow-hidden rounded-2xl border border-border bg-card">
        {visible.map((entry) => (
          <VideoRow
            key={entry.id}
            entry={entry}
            playing={playingId === entry.id}
            onPlay={() => setPlayingId(entry.id)}
            onClose={() => setPlayingId(null)}
          />
        ))}
      </ol>
    </section>
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
      className={`flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full border px-4 py-2.5 text-sm font-semibold transition-colors ${
        active
          ? "border-accent bg-accent text-white"
          : "border-border bg-card hover:bg-chip"
      }`}
    >
      {children}
    </button>
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
