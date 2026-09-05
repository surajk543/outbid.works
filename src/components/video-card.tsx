import Image from "next/image";

import { CategoryIcon } from "./category-icon";
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

function iconFor(categoryId: string) {
  return categories.find((c) => c.id === categoryId)?.icon ?? "film";
}

export function VideoCard({ entry }: { entry: Entry }) {
  const podium = entry.rank <= 3;

  return (
    <article
      className={`group relative overflow-hidden rounded-2xl border bg-card transition-shadow hover:shadow-lg ${
        podium ? "border-accent/50" : "border-border"
      }`}
    >
      <a
        href={`/go/${entry.id}`}
        target="_blank"
        rel="noreferrer noopener"
        className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        <div className="relative aspect-video overflow-hidden bg-chip">
          {entry.thumbnail ? (
            <Image
              src={entry.thumbnail}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            // Only YouTube gives us a poster frame from the id alone, so every
            // other provider gets a branded placeholder instead of a blank box.
            <div className="flex h-full flex-col items-center justify-center gap-2 bg-accent-soft">
              <PlayIcon />
              <span className="text-sm font-semibold text-accent">
                Watch on {PROVIDER_LABELS[entry.provider]}
              </span>
            </div>
          )}

          <span className="absolute left-3 top-3 rounded-full bg-background/90 px-2.5 py-1 font-mono text-sm font-bold backdrop-blur">
            #{entry.rank}
          </span>

          <span className="absolute right-3 top-3 rounded-full bg-accent px-3 py-1 font-mono text-sm font-bold text-white">
            ${entry.amount_in_usd}
          </span>
        </div>

        <div className="p-4">
          <h3 className="line-clamp-2 font-semibold leading-snug">{entry.title}</h3>
          {entry.description ? (
            <p className="mt-1.5 line-clamp-2 text-sm text-muted">{entry.description}</p>
          ) : null}
        </div>
      </a>

      <div className="flex items-center gap-3 border-t border-border px-4 py-3 text-sm text-muted">
        <span className="flex items-center gap-1.5">
          <CategoryIcon name={iconFor(entry.category)} />
          {categoryLabel(entry.category)}
        </span>
        <span aria-hidden="true">·</span>
        <span>{PROVIDER_LABELS[entry.provider]}</span>
        <span className="ml-auto flex items-center gap-1.5 tabular-nums">
          <EyeIcon />
          {entry.clicks.toLocaleString()}
        </span>
      </div>
    </article>
  );
}

function PlayIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="10" stroke="var(--accent)" strokeWidth="1.5" />
      <path d="M10 8.5v7l6-3.5z" fill="var(--accent)" />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6Z" />
      <circle cx="12" cy="12" r="2.5" />
    </svg>
  );
}
