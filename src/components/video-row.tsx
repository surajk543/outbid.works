"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { CategoryIcon } from "./category-icon";
import { VideoThumbnail } from "./video-thumbnail";
import { categories, categoryLabel } from "@/lib/categories";
import type { Entry } from "@/lib/entries";

const PROVIDER_LABELS: Record<Entry["provider"], string> = {
  youtube: "YouTube",
  vimeo: "Vimeo",
  tiktok: "TikTok",
  twitch: "Twitch",
  dailymotion: "Dailymotion",
  streamable: "Streamable",
  file: "Video",
};

/** Podium styling, by rank. Everything below third is plain. */
const PODIUM: Record<number, { badge: string; row: string; rule: string }> = {
  1: {
    badge: "bg-gold-soft text-gold ring-1 ring-gold/30",
    row: "bg-gold-soft/40",
    rule: "before:bg-gold",
  },
  2: {
    badge: "bg-silver-soft text-silver ring-1 ring-silver/30",
    row: "bg-silver-soft/40",
    rule: "before:bg-silver",
  },
  3: {
    badge: "bg-bronze-soft text-bronze ring-1 ring-bronze/30",
    row: "bg-bronze-soft/40",
    rule: "before:bg-bronze",
  },
};

function iconFor(categoryId: string) {
  return categories.find((c) => c.id === categoryId)?.icon ?? "dots";
}

export function VideoRow({
  entry,
  playing,
  onPlay,
  onClose,
}: {
  entry: Entry;
  playing: boolean;
  onPlay: () => void;
  onClose: () => void;
}) {
  const router = useRouter();
  const podium = PODIUM[entry.rank];
  // Optimistic, so the count moves the moment you press play rather than
  // waiting on the round trip.
  const [clicks, setClicks] = useState(entry.clicks);

  function play() {
    onPlay();
    setClicks((c) => c + 1);

    // Fire and forget: a failed count must not stop the video.
    fetch(`/go/${entry.id}`, { method: "POST" })
      .then(() => router.refresh())
      .catch(() => {});
  }

  return (
    <li
      className={`relative border-t border-border first:border-t-0 ${
        podium
          ? `${podium.row} before:absolute before:inset-y-0 before:left-0 before:w-1 ${podium.rule}`
          : ""
      }`}
    >
      <div className="flex items-center gap-4 px-4 py-3 sm:gap-5 sm:px-5 sm:py-4">
        <span
          className={`flex size-9 shrink-0 items-center justify-center rounded-full font-mono text-sm font-bold tabular-nums sm:size-10 sm:text-base ${
            podium ? podium.badge : "bg-chip text-muted"
          }`}
        >
          {podium ? (
            <>
              <TrophyIcon />
              {/* The trophy carries the rank visually; keep it readable aloud. */}
              <span className="sr-only">Rank {entry.rank}</span>
            </>
          ) : (
            entry.rank
          )}
        </span>

        <Poster entry={entry} playing={playing} onPlay={play} />

        <div className="min-w-0 flex-1">
          <a
            href={`/go/${entry.id}`}
            target="_blank"
            rel="noreferrer noopener"
            className="block truncate font-semibold hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            {entry.title}
          </a>
          {entry.description ? (
            <p className="mt-0.5 truncate text-sm text-muted">
              {entry.description}
            </p>
          ) : null}
          <p className="mt-1 flex items-center gap-2 text-xs text-muted">
            <span className="flex items-center gap-1.5">
              <CategoryIcon name={iconFor(entry.category)} />
              {categoryLabel(entry.category)}
            </span>
            <span aria-hidden="true">·</span>
            <span className="hidden sm:inline">
              {PROVIDER_LABELS[entry.provider]}
            </span>
            <span className="hidden sm:inline" aria-hidden="true">
              ·
            </span>
            <span className="tabular-nums">
              {clicks.toLocaleString()} {clicks === 1 ? "click" : "clicks"}
            </span>
          </p>
        </div>

        <span className="shrink-0 font-mono text-lg font-bold tabular-nums text-accent sm:text-xl">
          ${entry.amount_in_usd.toLocaleString()}
        </span>
      </div>

      {playing && entry.embed ? (
        <div className="px-4 pb-4 sm:px-5 sm:pb-5">
          {/* Capped so one open player does not push the rest of the board off
              the screen. */}
          <div className="relative aspect-video w-full max-w-2xl overflow-hidden rounded-xl bg-black">
            {entry.provider === "file" ? (
              <video
                src={entry.embed}
                controls
                autoPlay
                className="size-full"
              />
            ) : (
              <iframe
                src={entry.embed}
                title={entry.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="size-full border-0"
              />
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="mt-2 text-sm font-medium text-muted underline underline-offset-4 transition-colors hover:text-foreground"
          >
            Close player
          </button>
        </div>
      ) : null}
    </li>
  );
}

/**
 * The thumbnail doubles as the play control when the provider can be embedded.
 * When it cannot — Twitch, or a TikTok short link with no id — it opens the
 * video at the source instead, so the affordance never lies.
 */
function Poster({
  entry,
  playing,
  onPlay,
}: {
  entry: Entry;
  playing: boolean;
  onPlay: () => void;
}) {
  const label = PROVIDER_LABELS[entry.provider];
  const inner = (
    <>
      <VideoThumbnail src={entry.thumbnail} label={label} />
      <span className="absolute inset-0 flex items-center justify-center bg-black/25 opacity-0 transition-opacity group-hover:opacity-100">
        <PlayBadge />
      </span>
    </>
  );

  const shell =
    "group relative hidden aspect-video w-24 shrink-0 overflow-hidden rounded-lg bg-chip sm:block lg:w-32";

  if (!entry.embed) {
    return (
      <a
        href={`/go/${entry.id}`}
        target="_blank"
        rel="noreferrer noopener"
        aria-label={`Open "${entry.title}" on ${label}`}
        className={shell}
      >
        {inner}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onPlay}
      aria-label={playing ? `Playing "${entry.title}"` : `Play "${entry.title}"`}
      className={shell}
    >
      {inner}
    </button>
  );
}

function PlayBadge() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="11" fill="rgba(0,0,0,0.55)" />
      <path d="M10 8.2v7.6l6-3.8z" fill="white" />
    </svg>
  );
}

/** Takes its colour from the badge, so one shape serves gold, silver and bronze. */
function TrophyIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 4h10v5a5 5 0 0 1-10 0V4Z" />
      <path d="M17 5h2.6a2.4 2.4 0 0 1 0 4.8H17M7 5H4.4a2.4 2.4 0 0 0 0 4.8H7" />
      <path d="M12 14v3.5M8.5 20h7" />
    </svg>
  );
}
