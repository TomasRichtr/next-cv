# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development
npm run dev          # Start dev server with Turbopack
npm run build        # Production build (auto-runs DB migrations via postbuild)
npm run start        # Start production server

# Code quality
npm run lint         # ESLint check
npm run lint:fix     # ESLint auto-fix
npm run lint:style   # Stylelint CSS/Tailwind check
npm run tsc          # TypeScript type check (no emit)

# Database
npm run seed:data    # Seed database with initial data
```

There are no automated tests configured in this project.

## Architecture

Next.js 15 App Router CV/portfolio website with an admin interface, session-based authentication, PostgreSQL, and Czech/English internationalization.

### Routing

- `src/app/[locale]/` — all user-facing pages are locale-prefixed (`/en/`, `/cs/`)
- `src/app/[locale]/(auth)/` — login/signup route group
- `src/app/[locale]/(cv)/` — CV display route group
- `src/app/api/` — API routes (e.g. `/api/quote`)
- `src/middleware.ts` — handles i18n routing and cookie consent logic

### Data layer

- `src/db/db.ts` — PostgreSQL connection pool (via `pg`, uses `DATABASE_URL`)
- `src/db/auth.ts` — Lucia 3 session-based auth (30-day sessions, secure HttpOnly cookie)
- `src/db/dao/` — data access objects
- `src/db/migrations/` — schema migration files (auto-run on `postbuild`)
- `src/actions/` — Next.js Server Actions (message, user, reference)

### State management

Redux Toolkit (`src/store/`) with slices for app and reference state.

### i18n

i18next + next-i18n-router. Translation files in `src/locales/en/` and `src/locales/cs/`. The `[locale]` segment in the URL is the source of truth; middleware also sanitizes a locale cookie based on cookie consent preferences.

### File storage

AWS S3 for user-uploaded files. The `NEXT_PUBLIC_AWS_BUCKET_URL` is configured in `next.config.ts` as a remote image pattern for `next/image`.

## Code Style

ESLint (`eslint.config.mjs`) enforces:
- **Imports**: alphabetically ordered by group (builtin → external → internal → parent → sibling), newline between groups, newline after all imports
- **JSX**: max 1 prop per line, props always on new line, self-closing components required
- **Formatting**: 2-space indent, double quotes, semicolons, trailing commas in multiline, max 120-char lines
- **No `console.log`** (warn), no `debugger` (error)
- Unused vars allowed when prefixed with `_` (args) or matching `^[A-Z_]` (vars)

TypeScript strict mode is enabled. Path alias `@/*` maps to `src/*`.

## Environment Variables

See `.env.example` for all required variables. Key ones:
- `DATABASE_URL` — PostgreSQL connection string
- `ALLOW_USERS_REGISTRATION` — set to `true`/`false` to gate the signup page
- `ADMIN_USER_EMAIL` / `ADMIN_USER_PASSWORD` — seeded via `npm run seed:data`
- `EMAIL_LOGIN` / `EMAIL_PASSWORD` — Gmail app password for Nodemailer
- `AWS_*` — S3 credentials and bucket configuration
