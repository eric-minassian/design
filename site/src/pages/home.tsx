import { ArrowRightIcon } from "lucide-react"

import { Button } from "@/components/button"
import { Separator } from "@/components/separator"
import { AppPreview } from "~/components/app-preview"
import { Code } from "~/components/code"
import { allComponents, foundations, patterns } from "~/nav"
import { href } from "~/router"

const principles = [
  {
    title: "Quiet by default",
    body: "Zinc canvas, hairline borders, muted labels. Color is spent on one thing: the action you should take next.",
  },
  {
    title: "Dense, but touchable",
    body: "Compact on desktop, larger on touch. Hit areas extend past the visuals, so the layout never has to choose.",
  },
  {
    title: "True black in dark",
    body: "Surfaces barely lift and borders do the separating. Fills are alpha whites, so they sit on anything.",
  },
  {
    title: "Floating things are glass",
    body: "Menus, popovers and dialogs blur what is behind them. Things that sit stay opaque.",
  },
  {
    title: "Motion is earned",
    body: "Short and decelerating. Indicators are duty-cycled, so an idle screen does no work.",
  },
  {
    title: "shadcn underneath",
    body: "Base UI primitives and shadcn's API. Its docs and its CLI still apply, in a sharper voice.",
  },
]

function SectionLink({ to, title, description }: { to: string; title: string; description: string }) {
  return (
    <a
      className="group flex items-center gap-3 rounded-xl border bg-card/40 p-4 outline-none transition-colors hover:bg-accent/50 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring dark:bg-card"
      href={href(to)}
    >
      <span className="min-w-0 flex-1">
        <span className="block font-medium text-sm">{title}</span>
        <span className="block text-muted-foreground text-xs">{description}</span>
      </span>
      <ArrowRightIcon className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
    </a>
  )
}

export function HomePage() {
  return (
    <div className="flex flex-col gap-14">
      <section className="flex flex-col items-start gap-5">
        <h1 className="max-w-2xl text-balance font-semibold text-3xl tracking-tight sm:text-4xl">
          One design language for every app I build.
        </h1>
        <p className="max-w-xl text-pretty text-muted-foreground text-base">
          shadcn on Base UI, rebuilt in the design language of T3 Code: dense, quiet, and true black
          in the dark. {allComponents.length} components, ready to install. Press{" "}
          <span className="text-foreground">⌘K</span> to find one, or change the accent up top and
          watch everything follow.
        </p>
        <div className="flex flex-wrap gap-2">
          <Button nativeButton={false} render={<a href={href("/get-started")} />}>
            Get started
          </Button>
          <Button nativeButton={false} render={<a href={href("/components/button")} />} variant="outline">
            Browse components
          </Button>
        </div>
      </section>

      <AppPreview />

      <section className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
        {principles.map((principle) => (
          <div key={principle.title} className="flex flex-col gap-1">
            <h2 className="font-medium text-sm">{principle.title}</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">{principle.body}</p>
          </div>
        ))}
      </section>

      <Separator />

      <section className="flex flex-col gap-3">
        <h2 className="font-medium text-sm">Two lines to set up</h2>
        <div className="overflow-hidden rounded-xl border">
          <Code
            code={`@import "tailwindcss";\n@import "@eric-minassian/design/styles.css";`}
            lang="css"
          />
        </div>
      </section>

      <section className="grid gap-3 sm:grid-cols-3">
        <SectionLink
          description={`${foundations.length} pages: color, type, motion`}
          title="Foundations"
          to="/foundations/color"
        />
        <SectionLink
          description={`${patterns.length} whole screens to copy`}
          title="Patterns"
          to="/patterns/app-shell"
        />
        <SectionLink
          description={`${allComponents.length} live, with source`}
          title="Components"
          to="/components/button"
        />
      </section>
    </div>
  )
}
