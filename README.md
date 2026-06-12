# @eric-minassian/design

Personal design system built on [shadcn/ui](https://ui.shadcn.com) — `radix-mira` style, sky theme on neutral base, Geist font, small radius (preset [`b5KHubhs8`](https://ui.shadcn.com/create?preset=b5KHubhs8)).

Ships compiled ESM + type declarations (`dist/`) plus source (`src/`), with per-component exports so apps only bundle what they import.

## Install

```sh
# from GitHub (after pushing this repo)
pnpm add github:eric-minassian/design

# or while developing locally
pnpm add ~/projects/design
```

Requires React 18/19 and Tailwind CSS v4 in the consuming app.

## App setup

In your Tailwind CSS root (e.g. `src/index.css`):

```css
@import "tailwindcss";
@import "@eric-minassian/design/globals.css";
@source "../node_modules/@eric-minassian/design";
```

- `globals.css` brings in the theme tokens, dark mode variant, Geist, and base styles.
- `@source` tells Tailwind to scan this package for component classes.

## Usage

```tsx
import { Button } from "@eric-minassian/design/components/button"
import { Card, CardContent } from "@eric-minassian/design/components/card"
import { cn } from "@eric-minassian/design/lib/utils"
```

Dark mode: toggle the `dark` class on `<html>` (works with `next-themes` or a manual toggle).

## Components

All 55 components available for the `radix-mira` style are included (the registry's `form` item ships no files for this style — use `field` with your form library instead). To pull future components or updates, run the shadcn CLI inside this repo — `components.json` is configured so generated code lands in `src/components/` with correct `#` imports:

```sh
pnpm dlx shadcn@latest add <component>
pnpm build
```

Note: `react-day-picker` is pinned to v9 (via `pnpm-workspace.yaml` overrides and the dependency spec) because the registry's calendar component targets the v9 API while `@latest` resolves to v10. If a CLI add bumps the spec in `package.json`, set it back to `^9`.

## Storybook

Stories for every component (from the [shadcn-storybook-registry](https://github.com/lloydrichards/shadcn-storybook-registry), `@storybook` namespace in `components.json`) live next to the components as `src/components/*.stories.tsx`, plus design-token docs (Color, Radius, Shadow, Spacing, Typography).

```sh
pnpm storybook         # dev server on :6006
pnpm build-storybook   # static build to storybook-static/
```

Stories resolve `#components/*` straight to `src/` (the `source` condition in `.storybook/main.ts`), so component edits hot-reload without rebuilding. Stories are excluded from the npm package and `dist/`.

`.github/workflows/deploy-storybook.yml` deploys Storybook to GitHub Pages on every push to `main`. One-time setup after pushing the repo: Settings → Pages → Source → "GitHub Actions" (or `gh api -X POST repos/{owner}/{repo}/pages -f build_type=workflow`).

## Changing the theme

Apply a new preset from [ui.shadcn.com/create](https://ui.shadcn.com/create) without touching components:

```sh
pnpm dlx shadcn@latest apply <preset-code> --only theme
```

Or edit the CSS variables in `src/styles/globals.css` directly.

## How resolution works

Internal imports use Node package imports (`#components/*`, `#lib/*`) with conditional targets:

- `source` → `src/*.tsx` — used inside this repo (`tsconfig.json` sets `customConditions: ["source"]`) and available to monorepo consumers that opt in
- `types` → `dist/*.d.ts` — consumers' TypeScript
- `default` → `dist/*.js` — consumers' bundlers

`tsc` leaves the `#` specifiers untouched in the build output, so the same compiled files work everywhere. The `prepare` script builds `dist/` automatically on install (including git installs).
