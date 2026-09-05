# outbid.works

Monorepo. Two independent apps.

```
.
├── frontend/   Next.js 16 · TypeScript · Tailwind 4
└── backend/    Spring Boot 3.5 · Web · Security · Data JPA · PostgreSQL
```

## Prerequisites

- Node 22+
- JDK 21
- A local PostgreSQL on `127.0.0.1:5432`

## Database

Uses your existing local PostgreSQL. Create the database once:

```bash
psql -h 127.0.0.1 -p 5432 -U postgres -c 'CREATE DATABASE outbid;'
```

Hibernate creates the tables on first boot (`ddl-auto=update`).

## Backend

```bash
cd backend
./mvnw spring-boot:run
```

Runs on http://localhost:8080. Smoke test:

```bash
curl http://localhost:8080/api/health
```

Config lives in `backend/src/main/resources/application.properties`; every value
is overridable by environment variable:

| Variable | Default |
| --- | --- |
| `SERVER_PORT` | `8080` |
| `DATABASE_URL` | `jdbc:postgresql://127.0.0.1:5432/outbid` |
| `CORS_ALLOWED_ORIGINS` | `http://localhost:3000` |

Hibernate does not generate schema — create tables yourself, or add a
migration tool (Flyway/Liquibase).

Security: stateless, HTTP Basic. `/`, `/health` and `GET /api/**` are public;
every other method requires authentication. No user is configured, so Spring
Boot generates a random password for the `user` account and prints it at
startup.

## Frontend

```bash
cd frontend
npm install
npm run dev
```

Runs on http://localhost:3000.
