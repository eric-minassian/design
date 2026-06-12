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

## Adding components

Run the shadcn CLI inside this repo — `components.json` is configured for the `radix-mira` style and `#` package-import aliases, so generated code lands in `src/components/` with correct imports:

```sh
pnpm dlx shadcn@latest add calendar
pnpm build
```

Heavier components (chart, form, carousel, command, …) add their own dependencies automatically.

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
