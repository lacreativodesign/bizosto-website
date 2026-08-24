# Bizosto marketing website

The public website for Bizosto, the Operating System for Service Businesses. It uses the Next.js App Router and is deployed separately from the Bizosto application.

## Local development

Use Node.js 22 and the committed lockfile:

```bash
npm ci
cp .env.example .env.local
npm run dev
```

The lead forms intentionally do not write to Firebase. The server route validates the request, verifies reCAPTCHA in production, and proxies a tenant-scoped request to the canonical application endpoint at `/api/ingest/leads`. Configure the server-only ingest API key and the reCAPTCHA values listed in `.env.example`; never prefix a secret with `NEXT_PUBLIC_`. Local and preview environments fail closed if they point at `app.bizosto.com`, so use an isolated application endpoint and tenant key for form testing.

## Quality gate

```bash
npm run check
```

The check runs ESLint with zero warnings, TypeScript, lead-contract tests, and a production build. The same sequence runs for pull requests in `.github/workflows/quality.yml`.

## Release constraints

- Marketing claims must match the current application behavior and locked plan matrix.
- Provider integrations and AI features remain controlled-beta capabilities until their current release is verified for the target workspace.
- Production form submission requires HTTPS ingest, a tenant-scoped API key, reCAPTCHA action and hostname validation, and explicit visitor consent.
- Analytics is optional and loads only after visitor consent when a valid GTM ID is configured.
- Do not deploy from an audit branch or run write-capable browser tests against shared production or preview data.
