# Tim Curry in NZ

Single-page memorial for Tim Curry (19 April 1946 - 25 August 2026), told
honestly from Aotearoa: he never performed in New Zealand, but the role he
made famous toured here three times while he lived - 1978, 1986 and 2010.
Deploys to Vercel only.

## Run it

```sh
npm install
npm run dev        # http://localhost:3000
npm run check      # full gate: format, lint, typecheck, tests, build, smoke, e2e
```

## Deploying

Vercel is the only host. `vercel.json` limits automatic deployments to `main`
and `development`, and `autoJobCancelation` cancels queued or running builds
when a newer push lands. The Vercel project uses the Other framework preset
with `outputDirectory` pointing at `out/`, so Vercel serves the static export
directly instead of running the Next.js preset. No preview deployments happen
for other branches. Import the repo in Vercel, set the framework preset to
Other, and push to `main`; no environment variables are required.

## How it is built

- Next.js static export (`output: 'export'`) served at the root, deployed by
  Vercel from project config in `vercel.json`.
- Tailwind 4 theme: heavenly angel palette of ivory, blush pink, gold and
  silver with drifting clouds and twinkling sparkles, Cormorant Garamond
  display serif. Light page, `prefers-reduced-motion` respected, no
  autoplay: the gapless cover playlist only starts when the visitor presses
  play, and keeps playing when the panel is hidden.
- All copy and sources live in `src/data/memorialContent.ts`. Every fact is
  sourced to Wikipedia's Tim Curry and Rocky Horror Show records,
  AudioCulture's history of the show in New Zealand, the 2025 Guardian
  interview, and the obituaries written the day he died. Nothing is
  invented - including the central honest framing that Tim Curry never
  toured Aotearoa.
- Photographs are Wikimedia Commons files under their licenses. Credits
  appear inline in the gallery and in `public/images/ATTRIBUTION.md`.

[![CI](https://github.com/olitreadwell/tim-curry-in-nz/actions/workflows/ci.yml/badge.svg)](https://github.com/olitreadwell/tim-curry-in-nz/actions/workflows/ci.yml)
