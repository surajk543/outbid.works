import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col items-center justify-center px-6 py-24 text-center">
      <p className="font-mono text-6xl font-extrabold tracking-tight text-accent">
        404
      </p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
        Nothing ranked here
      </h1>
      <p className="mt-3 text-muted">
        This page does not exist, or the listing it pointed at was taken down.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="rounded-full bg-accent px-6 py-3 font-bold text-white transition-opacity hover:opacity-90"
        >
          Back to the board
        </Link>
        <Link
          href="/leaderboard"
          className="rounded-full border border-border bg-card px-6 py-3 font-semibold transition-colors hover:bg-chip"
        >
          See the leaderboard
        </Link>
      </div>
    </main>
  );
}
