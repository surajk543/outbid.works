# outbid.works

Monorepo. Two independent apps.

```
.
├── frontend/   Next.js 16 · TypeScript · Tailwind 4
└── backend/    Node.js · TypeScript · Express 5 · SQLite
```

## Prerequisites

- Node 22+

No database server to install — SQLite is a file, created on first run.

## Backend

```bash
cd backend
npm install
npm run dev
```

Runs on http://localhost:8080. Smoke test:

```bash
curl http://localhost:8080/health
```

| Route | Response |
| --- | --- |
| `GET /` | `ok` |
| `GET /health` | `{"status":"up","database":"up","time":...}` |
| `GET /api/health` | same as `/health` |

Returns 503 if the SQLite file can't be read.

### Configuration

Every value is an environment variable with a default:

| Variable | Default |
| --- | --- |
| `PORT` | `8080` |
| `DATABASE_FILE` | `data/outbid.db` (use `:memory:` for a throwaway DB) |
| `CORS_ALLOWED_ORIGINS` | `http://localhost:3000` (comma-separated) |

The database file and its WAL sidecars are gitignored.

### Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | tsx watch, restarts on change |
| `npm run build` | compiles to `dist/` |
| `npm start` | runs `dist/index.js` |
| `npm run typecheck` | `tsc --noEmit` |

## Frontend

```bash
cd frontend
npm install
npm run dev
```

Runs on http://localhost:3000.
