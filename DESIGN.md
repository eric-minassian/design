# Design language

The rules every component in this repo follows. They are distilled from
[T3 Code](https://github.com/pingdotgg/t3code) and applied on top of shadcn's
Base UI components. If a screen looks wrong, it probably broke one of these.

## Principles

1. **Quiet by default.** Zinc canvas, hairline borders, muted labels. Color is
   spent on one thing: the action you should take next.
2. **Dense, but touchable.** Controls are compact on desktop and grow on touch:
   sizes are written mobile first (`h-9 sm:h-8`, `text-base sm:text-sm`), and
   `pointer-coarse:after:min-h-11` extends hit areas without changing the layout.
   16px text on phones also stops iOS zooming into inputs.
3. **True black in dark mode.** Surfaces barely lift, borders do the separating,
   and fills are alpha whites so they composite over anything.
4. **Things that float are glass.** Menus, popovers, tooltips and dialogs blur
   what is behind them. Things that sit are opaque.
5. **Motion is earned.** Short, decelerating, and duty-cycled. Idle screens stay
   idle.

## Recipes

Use these exact values.

| Concern | Recipe |
| --- | --- |
| Control radius | `rounded-[var(--control-radius)]` or `rounded-lg`; compact controls `rounded-md`; rows inside a popup `rounded-sm` |
| Control heights | `h-9 sm:h-8` default, `h-8 sm:h-7` sm, `h-10 sm:h-9` lg, `h-7` compact (`text-xs`) |
| Control text | `text-base sm:text-sm`, `font-medium` for actions, regular for values |
| Horizontal padding | `px-[calc(--spacing(3)-1px)]` accounts for the 1px border |
| Disabled | `disabled:opacity-64` / `data-disabled:opacity-64`, plus `pointer-events-none` |
| Focus, controls | `focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background` |
| Focus, fields | `focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-inset ring-ring/24` |
| Invalid | `aria-invalid:border-destructive/36 focus-visible:aria-invalid:border-destructive/64 focus-visible:aria-invalid:ring-destructive/16` |
| Field surface | `border border-input bg-background not-dark:bg-clip-padding shadow-xs/5 dark:bg-input/32` |
| Field top highlight | `before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-lg)-1px)] before:shadow-[0_1px_--theme(--color-black/4%)] dark:before:shadow-[0_-1px_--theme(--color-white/6%)]` |
| Hover fill | `hover:bg-accent` (solid: `hover:bg-primary/90`) |
| Press | `[&:active:not([aria-haspopup])]:scale-[0.97]` on buttons only |
| Popup surface | `dropdown-glass rounded-lg` (the utility carries border and shadow) |
| Popup row | `min-h-8 sm:min-h-7 rounded-sm px-2 py-1 text-base sm:text-sm data-highlighted:bg-accent data-highlighted:text-accent-foreground` |
| Popup row icons | `[&>svg:not([class*='size-'])]:size-4.5 sm:[&>svg:not([class*='size-'])]:size-4 [&>svg:not([class*='text-'])]:text-muted-foreground [&>svg:not([class*='opacity-'])]:opacity-80` |
| Popup animation | `origin-(--transform-origin) transition-[scale,opacity] duration-100 data-ending-style:scale-98 data-ending-style:opacity-0 data-starting-style:scale-98 data-starting-style:opacity-0` |
| Tooltip | `dropdown-glass rounded-md px-2 py-1 text-xs text-foreground` |
| Dialog surface | `dialog-glass rounded-2xl border` over `dialog-backdrop` |
| Dialog animation | `transition-[scale,opacity,translate] duration-200 ease-in-out data-ending-style:scale-98 data-ending-style:opacity-0 data-starting-style:scale-98 data-starting-style:opacity-0` |
| Sheet / drawer motion | `ease-drawer duration-300` |
| Card | `rounded-xl border bg-card text-card-foreground` |
| Section title in a popup | `px-2 py-1.5 font-medium text-muted-foreground text-xs` |
| Metadata text | `text-2xs text-muted-foreground`, or `text-3xs` for counters |
| Status tint | `bg-warning/8 text-warning-foreground dark:bg-warning/16`, same for `success`, `info`, `destructive` |
| Alert | `rounded-xl border px-3.5 py-3 text-sm`, tinted `border-warning/32 bg-warning-surface` |
| Icons | Lucide; `size-4.5 sm:size-4`, `text-muted-foreground` in chrome; stroke is 1.75 globally |
| Scrollbar | Global 6px thumb; `ScrollArea` when you need fades |

## Tokens

Use semantic tokens only (`bg-card`, `text-muted-foreground`, `border-input`).
No raw palette colors in components, and no `dark:` color overrides that a
token could express. The exceptions are the alpha-white mixes in the recipes
above, which are how a control sits on true black.

Hierarchy of text: `text-foreground` > `text-secondary-label` >
`text-muted-foreground` > `text-placeholder`.

Status colors come in pairs: `bg-warning` is the signal for dots and icons,
`text-warning-foreground` is the readable text color.

Accents: `data-accent` on `<html>` swaps `--primary`. Never hard-code a brand
color.

## Keep the shadcn API

Component names, slots and props stay as shadcn ships them, so its docs and the
CLI keep working. Add variants; do not rename. `data-slot` attributes stay.
