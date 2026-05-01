# Ayush Meshram Portfolio

Premium static portfolio website for Ayush Meshram, built from the provided resume. The site focuses on data science, machine learning, analytics automation, and real-time data engineering projects.

Live deployment:

```text
https://portfolio-two-orcin-btti7o0q2p.vercel.app
```

## Tech Stack

- React
- Vite
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

No backend, database, paid API, analytics script, CMS, authentication, or server-side rendering is required.

## Run Locally

```bash
npm install
npm run dev
```

Then open the local URL shown by Vite.

## Build

```bash
npm run build
```

The production files are generated in `dist`.

## Update Personal Information

Edit:

```text
src/data/profile.ts
```

Update the name, headline, summary, email, LinkedIn, GitHub, location, and featured stats:

```text
https://github.com/Ayush141910
```

## Update Projects

Edit:

```text
src/data/projects.ts
```

Each project supports:

- Project name
- Category
- Summary
- Tech stack
- Highlights
- Metrics
- Links

Project GitHub, live demo, and case study links are intentionally placeholders because those URLs were not present in the resume.

## Update Contact Links

Edit:

```text
src/data/profile.ts
```

The contact section reads email, LinkedIn, GitHub, and location from that file.

## GitHub Actions

This repository includes a GitHub Actions workflow at:

```text
.github/workflows/ci.yml
```

The workflow installs dependencies and runs `npm run build` on every push to `main`, so GitHub can show a green check when the portfolio is healthy.

## GitHub Pages Deployment

This portfolio is currently deployed on Vercel using the live link above. GitHub Pages can also host the same static build for free if you want a `github.io` URL later.

### Steps

1. Push this project to a GitHub repository.
2. Go to `Repository Settings -> Pages`.
3. Set `Source` to `GitHub Actions`.
4. Add or enable a GitHub Pages deployment workflow.
5. Push to the `main` branch.

### Vite Base Path

Vite needs the correct `base` path when deploying to GitHub Pages.

If your site deploys to:

```text
https://username.github.io/repository-name/
```

the base path must be:

```ts
base: "/repository-name/"
```

If your site deploys to:

```text
https://username.github.io/
```

the base path must be:

```ts
base: "/"
```

This project's `vite.config.ts` can use `/${repository-name}/` during GitHub Actions for normal repository pages, and `/` for `username.github.io` repositories.

You can override it manually:

```bash
VITE_BASE_PATH=/repository-name/ npm run build
```

For a user or organization site:

```bash
VITE_BASE_PATH=/ npm run build
```

## Cloudflare Pages Deployment

Cloudflare Pages is also free for this static site.

### Steps

1. Push the project to GitHub.
2. In Cloudflare, create a new Pages project.
3. Connect the GitHub repository.
4. Choose the `Vite` framework preset if available. If not, choose `None`.
5. Set the build command:

```bash
npm run build
```

6. Set the build output directory:

```text
dist
```

7. Save and deploy.

For Cloudflare Pages, keep the Vite base path as `/`.

## Optional Vercel Hobby Deployment

Vercel Hobby can also host the static app for free, but GitHub Pages and Cloudflare Pages are the primary recommendations for this project.

Use:

```bash
npm run build
```

and let Vercel detect Vite. The output directory is `dist`.

## Troubleshooting

### Blank Page After GitHub Pages Deployment

This usually means the Vite base path is wrong.

For `https://username.github.io/repository-name/`, make sure the base path is `/repository-name/`.

For `https://username.github.io/`, make sure the base path is `/`.

If you build manually, set `VITE_BASE_PATH`.

### Dependency Install Issues

Use a current Node.js version:

```bash
node -v
```

Node 20 or newer is recommended.
