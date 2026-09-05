/**
 * Only video URLs go on the board, so every submission is parsed down to a
 * known provider before it reaches the database. Anything we cannot place is
 * rejected rather than stored and rendered as a dead link.
 */

export type VideoProvider =
  | "youtube"
  | "vimeo"
  | "tiktok"
  | "twitch"
  | "dailymotion"
  | "streamable"
  | "file";

export type ParsedVideo = {
  provider: VideoProvider;
  /** Provider-side id, when the URL carries one. */
  videoId: string | null;
  /** Normalised URL actually stored, stripped of tracking params. */
  url: string;
  /** Poster image, when the provider exposes one from the id alone. */
  thumbnail: string | null;
};

const FILE_EXTENSIONS = [".mp4", ".webm", ".ogv", ".mov", ".m4v", ".m3u8"];

/** Providers whose watch pages we recognise, keyed by bare hostname. */
const HOSTS: Record<string, VideoProvider> = {
  "youtube.com": "youtube",
  "m.youtube.com": "youtube",
  "music.youtube.com": "youtube",
  "youtu.be": "youtube",
  "vimeo.com": "vimeo",
  "player.vimeo.com": "vimeo",
  "tiktok.com": "tiktok",
  "vm.tiktok.com": "tiktok",
  "twitch.tv": "twitch",
  "clips.twitch.tv": "twitch",
  "dailymotion.com": "dailymotion",
  "dai.ly": "dailymotion",
  "streamable.com": "streamable",
};

function hostKey(hostname: string): string {
  return hostname.toLowerCase().replace(/^www\./, "");
}

function youtubeId(u: URL): string | null {
  const host = hostKey(u.hostname);
  if (host === "youtu.be") {
    return u.pathname.slice(1).split("/")[0] || null;
  }

  const [, first, second] = u.pathname.split("/");
  if (first === "watch") return u.searchParams.get("v");
  if (first === "shorts" || first === "embed" || first === "live") {
    return second || null;
  }
  return null;
}

function vimeoId(u: URL): string | null {
  // /12345678 for watch pages, /video/12345678 for the player.
  const match = u.pathname.match(/\/(?:video\/)?(\d+)/);
  return match ? match[1] : null;
}

/**
 * Returns the parsed video, or null when the URL is not one we can serve.
 * Callers treat null as a validation failure.
 */
export function parseVideoUrl(input: string): ParsedVideo | null {
  const trimmed = input.trim();
  if (!trimmed) return null;

  let u: URL;
  try {
    u = new URL(trimmed.includes("://") ? trimmed : `https://${trimmed}`);
  } catch {
    return null;
  }

  // http/https only — no javascript:, data:, or file: URLs on the board.
  if (u.protocol !== "http:" && u.protocol !== "https:") return null;

  const host = hostKey(u.hostname);
  const pathname = u.pathname.toLowerCase();

  if (FILE_EXTENSIONS.some((ext) => pathname.endsWith(ext))) {
    return { provider: "file", videoId: null, url: u.toString(), thumbnail: null };
  }

  const provider = HOSTS[host];
  if (!provider) return null;

  switch (provider) {
    case "youtube": {
      const videoId = youtubeId(u);
      if (!videoId) return null;
      return {
        provider,
        videoId,
        url: `https://www.youtube.com/watch?v=${videoId}`,
        thumbnail: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
      };
    }

    case "vimeo": {
      const videoId = vimeoId(u);
      if (!videoId) return null;
      return {
        provider,
        videoId,
        url: `https://vimeo.com/${videoId}`,
        thumbnail: null,
      };
    }

    default: {
      // These need a path to point at something; a bare domain is not a video.
      if (u.pathname === "/" || u.pathname === "") return null;
      return { provider, videoId: null, url: u.toString(), thumbnail: null };
    }
  }
}

export function isVideoUrl(input: string): boolean {
  return parseVideoUrl(input) !== null;
}

export const SUPPORTED_PROVIDERS =
  "YouTube, Vimeo, TikTok, Twitch, Dailymotion, Streamable, or a direct video file";
