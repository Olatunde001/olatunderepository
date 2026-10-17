# Federal Training Centre, Enugu

A five-page institutional website built with Next.js App Router and TypeScript. The project is structured for GitHub source control and Vercel deployment.

## Pages

- `/` — Home and Provost welcome
- `/about` — About the Centre
- `/academics` — ND/HND pathways and accreditation information
- `/training` — In-service civil service training
- `/news` — News and announcements

## Run locally

Requires Node.js 20.9 or newer.

```bash
pnpm install
npm run dev
```

You can also run the `dev`, `build` and `start` scripts with pnpm.

Open http://localhost:3000.

## Deploy to Vercel

1. Push this repository to a GitHub repository.
2. In Vercel, import that GitHub repository.
3. Keep the detected Next.js build settings and deploy.

Vercel creates preview deployments for branches and production deployments from the configured production branch.

## Content to verify before launch

Confirm the Centre's current programme list, NBTE accreditation status, admissions dates and requirements, Provost name and approved welcome message. Current Centre contact details and its 1977 establishment date are drawn from the Centre's public website. The older NBTE directory surfaced during research is not current enough to establish accreditation status, so the design does not claim that specific programmes are currently accredited. Replace stock images with Centre-approved photography before launch.
