# @eric-minassian/design

My design system. [shadcn](https://ui.shadcn.com) components on
[Base UI](https://base-ui.com), rebuilt in the design language of
[T3 Code](https://github.com/pingdotgg/t3code): dense, quiet, and true black in the
dark.

**Docs and live components: <https://eric-minassian.github.io/design/>**

## Use it in an app

Requires React 19 and Tailwind CSS 4.

```sh
pnpm add github:eric-minassian/design#release   # latest
pnpm add github:eric-minassian/design#v0.3.0    # pinned
```

In your Tailwind entry file:

```css
@import "tailwindcss";
@import "@eric-minassian/design/styles.css";
```

Then import what you need. Each component has its own entry point, so an app only
bundles what it uses.

```tsx
import { Button } from "@eric-minassian/design/button"
import { cn } from "@eric-minassian/design/utils"
```

Give each app its own color, and get light, dark and system handling:

```tsx
import { ThemeProvider } from "@eric-minassian/design/theme"

<ThemeProvider defaultAccent="grove">
  <App />
</ThemeProvider>
```

The accents are `indigo` (default), `rose`, `grove`, `ocean`, `ember` and `iris`. For
anything else, override `--primary`, `--primary-foreground` and `--ring` after the import.

The rules behind the system are in [DESIGN.md](./DESIGN.md), which ships with the
package. Point your coding agent at it.

## Work on it

```sh
pnpm install
pnpm dev         # docs site on http://localhost:5199/design/
pnpm typecheck
pnpm build       # the library, to dist/
pnpm build:site  # the docs, to dist-site/
```

```
src/components/   the components (shadcn base-mira, restyled)
src/styles/       tokens, accents, theme, utilities, base
site/src/demos/   one file per component; each exported function is a live example
site/src/pages/   foundations, get started, overview
```

To add a shadcn component, run `pnpm dlx shadcn@latest add <name>`, restyle it to the
recipes in `DESIGN.md`, add `site/src/demos/<name>.tsx`, and list it in `site/src/nav.ts`.

The docs are our own site rather than Storybook, so they dogfood the system: the shell
is the real `Sidebar`, the search is the real `Command`, and the code on each page is
the source of the example above it.

## How it ships

Every push to `main` runs the checks, deploys the docs to GitHub Pages, and pushes the
built package to the `release` branch. To cut a version, bump `version` in `package.json`;
CI tags it `v<version>`.

## Credits

The design language, and many of the class recipes, come from
[T3 Code](https://github.com/pingdotgg/t3code) (MIT, © T3 Tools Inc.). Components start
from [shadcn/ui](https://ui.shadcn.com) (MIT) on [Base UI](https://base-ui.com) (MIT).
