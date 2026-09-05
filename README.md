# outbid.works

One Next.js app. UI and API live in the same project.

```
.
├── src/app/          pages and API route handlers
├── src/components/   shared UI
├── src/lib/          SQLite connection and config
└── data/            SQLite file, created on first run (gitignored)
```

Next.js 16 · TypeScript · Tailwind 4 · SQLite (better-sqlite3)

## Prerequisites

- Node 22+

No database server to install — SQLite is a file, created on first run.

## Run

```bash
npm install
npm run dev
```

Runs on http://localhost:3000. Smoke test:

```bash
curl http://localhost:3000/api/health
```

| Route | Response |
| --- | --- |
| `GET /api/health` | `{"status":"up","database":"up","time":...}` |

Returns 503 if the SQLite file can't be read.

## Configuration

| Variable | Default |
| --- | --- |
| `DATABASE_FILE` | `data/outbid.db` (use `:memory:` for a throwaway DB) |

The database file and its WAL sidecars are gitignored.

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Next dev server with hot reload |
| `npm run build` | production build |
| `npm start` | serves the build |
| `npm run lint` | ESLint |
| `npm run typecheck` | `tsc --noEmit` |
