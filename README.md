<<<<<<< HEAD
# my_personal_web
my personal website
=======
# Academic Personal Website (Astro)

This project is a bilingual (EN/ZH) academic personal website with four sections:

- Home
- CV
- Publications (single page, Chinese first then English)
- Writing

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run check
```

## Content Editing

- Home/CV: `src/content/pages/`
- Publications: `src/content/publications/`
- Writing: `src/content/writing/`
- Research highlights on homepage: `src/content/research/`

## Deploy (GitHub Pages)

Push to `main` branch to trigger `.github/workflows/deploy.yml`.

For project pages, workflow sets:

- `SITE_URL=https://<owner>.github.io`
- `BASE_PATH=/<repo-name>`
>>>>>>> 9ee4502 (Initial academic website)
