# outbid.works

A video leaderboard ranked by one number: what you paid to be on it.

New creators lose to recommendation algorithms because they have none of the
signals those algorithms rank on — watch time, subscribers, a back catalogue.
This replaces all of it with a bid. $1 puts you on the board; the highest bid
is #1. Every card shows its click-through count, so a creator can see what the
money actually bought.

Mechanic borrowed from [outbid.lol](https://outbid.lol/), pointed at creators
instead of charities.

```
.
├── src/app/          pages, API routes, click-tracking redirect
├── src/components/   board, cards, bid form
└── src/lib/          database, queries, video-URL validation
```

Next.js 16 · TypeScript · Tailwind 4 · SQLite via libSQL

## Run locally

```bash
npm install
npm run dev
```

http://localhost:3000. No setup — it creates `data/outbid.db` on first request.

## Data model

One table, `metadata`:

| Column | Type | Notes |
| --- | --- | --- |
| `id` | INTEGER | primary key |
| `url` | TEXT | normalised video URL, unique per entry |
| `title` | TEXT | required, ≤120 chars |
| `description` | TEXT | optional, ≤280 chars |
| `category` | TEXT | one of the ids in `src/lib/categories.ts` |
| `amount_in_usd` | REAL | the bid: whole dollars, $1–$999,999 |
| `clicks` | INTEGER | incremented by `/go/[id]` |
| `rank` | INTEGER | recomputed on every bid |
| `created_at` | TEXT | `datetime('now')` |

`rank` is a reserved word in SQLite, so it stays double-quoted in queries.

### The money rules

Enforced in `src/lib/bidding.ts` and checked server-side on every bid:

- Whole US dollars, $1 minimum, $999,999 maximum.
- Taking #1 costs at least $1 more than the current #1. Bidding at or below the
  leader is fine — it just lands lower down the board. `OUTBID_STEP` sets that
  gap; raising it above $1 stops the top spot being taken a dollar at a time.
- Equal amounts keep placement order: the older listing holds the higher rank.
- Raising a listing you already hold costs at least $1 more than its current
  amount.

### Video URLs only

Submissions are parsed before they are stored. YouTube, Vimeo, TikTok, Twitch,
Dailymotion, Streamable, and direct video files (`.mp4`, `.webm`, `.mov`,
`.m4v`, `.ogv`, `.m3u8`) are accepted; anything else is rejected with a 400.
URLs are normalised, so `youtu.be/X`, `youtube.com/shorts/X`, and
`youtube.com/watch?v=X&t=42s` all resolve to the same entry — which is what
makes re-bidding raise your existing bid instead of duplicating it.

## API

| Route | What it does |
| --- | --- |
| `GET /api/entries` | Ranked board. Optional `?category=` and `?limit=`. |
| `POST /api/checkout` | Validates a bid and returns a Dodo `checkout_url`. 400 with `{error, field}` on invalid input. |
| `POST /api/webhooks/dodo` | Writes the listing on a verified `payment.succeeded`. |
| `GET /go/[id]` | Counts a click once per browser, then 302s to the video. |
| `GET /api/health` | `{"status":"up","database":"up",...}`, 503 if the DB is unreachable. |

There is no public write endpoint for listings. A row is created only by a
confirmed payment, so a bid cannot be placed without paying for it.

## Deploying to Vercel

Vercel's filesystem is ephemeral and read-only, so the local SQLite file cannot
come with you — writes would vanish on the next cold start. Point it at
[Turso](https://turso.tech), which serves the same SQLite over the network:

```bash
turso db create outbid
turso db show outbid --url        # → libsql://...
turso db tokens create outbid     # → the auth token
```

Set both in the Vercel project (Settings → Environment Variables), then deploy:

| Variable | Value |
| --- | --- |
| `TURSO_DATABASE_URL` | `libsql://outbid-<org>.turso.io` |
| `TURSO_AUTH_TOKEN` | the token from the command above |

The table is created on first request, so there is no migration step. With
neither variable set the app falls back to `file:data/outbid.db`, which is why
local dev needs no configuration.

## Payments

Dodo Payments takes the money, as merchant of record. Bids are arbitrary
amounts, so checkout uses a **pay-what-you-want** product with the bid passed as
an `amount` override in cents.

The listing is **not** written at checkout. `POST /api/checkout` validates the
bid, creates a Dodo checkout session carrying the listing in `metadata`, and
redirects the browser. `POST /api/webhooks/dodo` verifies the signature and
writes the row on `payment.succeeded` — which is what the Terms mean by "rank is
assigned when payment is confirmed". No pending-payment table is needed, which
keeps the schema at one table.

| Variable | Where to get it |
| --- | --- |
| `DODO_API_KEY` | Dodo dashboard → Developer → API keys. Needs **write** scope; a read-only key cannot create checkout sessions. |
| `DODO_PRODUCT_ID` | A one-time product with `pay_what_you_want: true`, minimum `$1`. |
| `DODO_WEBHOOK_SECRET` | Dodo dashboard → Webhooks, pointing at `/api/webhooks/dodo`. Starts `whsec_`. |
| `DODO_MODE` | `test` or `live`. Defaults to `test`. |

With `DODO_API_KEY` or `DODO_PRODUCT_ID` missing, `/api/checkout` returns 503
and no bid can be placed. Webhook signatures are verified per the Standard
Webhooks spec, with a five-minute timestamp window so a captured request cannot
be replayed.

A key is bound to one mode: a test key gets 401 from `live.dodopayments.com`
and vice versa, so the product, the webhook and its secret all have to be
created twice — once per mode.

The customer may pay in their own currency (Dodo converts at checkout), but the
board records the USD figure carried in `metadata`, so a rank never depends on
the payer's currency.

### Trying it without real money

```bash
DODO_MODE=test \
DODO_API_KEY=<test key> \
DODO_PRODUCT_ID=<test pay-what-you-want product> \
DODO_WEBHOOK_SECRET=<test webhook secret> \
npm run dev
```

Placing a bid then redirects to Dodo's hosted test checkout. To exercise
fulfilment without paying, POST a signed `payment.succeeded` at
`/api/webhooks/dodo`: sign `"<id>.<timestamp>.<body>"` with HMAC-SHA256 using
the base64-decoded secret, and send it as `webhook-signature: v1,<base64>`
alongside `webhook-id` and `webhook-timestamp`.

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | dev server with hot reload |
| `npm run build` | production build |
| `npm start` | serves the build |
| `npm run lint` | ESLint |
| `npm run typecheck` | `tsc --noEmit` |
