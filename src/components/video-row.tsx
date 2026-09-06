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

export function VideoRow({ entry }: { entry: Entry }) {
  const podium = PODIUM[entry.rank];

  return (
    <li
      className={`relative border-t border-border first:border-t-0 ${
        podium ? `${podium.row} before:absolute before:inset-y-0 before:left-0 before:w-1 ${podium.rule}` : ""
      }`}
    >
      <a
        href={`/go/${entry.id}`}
        target="_blank"
        rel="noreferrer noopener"
        className="flex items-center gap-4 px-4 py-3 transition-colors hover:bg-chip focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent sm:gap-5 sm:px-5 sm:py-4"
      >
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

        <span className="relative hidden aspect-video w-24 shrink-0 overflow-hidden rounded-lg bg-chip sm:block lg:w-32">
          <VideoThumbnail
            src={entry.thumbnail}
            label={PROVIDER_LABELS[entry.provider]}
          />
        </span>

        <span className="min-w-0 flex-1">
          <span className="block truncate font-semibold">{entry.title}</span>
          {entry.description ? (
            <span className="mt-0.5 block truncate text-sm text-muted">
              {entry.description}
            </span>
          ) : null}
          <span className="mt-1 flex items-center gap-2 text-xs text-muted">
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
              {entry.clicks.toLocaleString()}{" "}
              {entry.clicks === 1 ? "click" : "clicks"}
            </span>
          </span>
        </span>

        <span className="shrink-0 font-mono text-lg font-bold tabular-nums text-accent sm:text-xl">
          ${entry.amount_in_usd.toLocaleString()}
        </span>
      </a>
    </li>
  );
}
