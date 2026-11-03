import * as React from "react"
import {
  ArrowUpIcon,
  CheckIcon,
  ChevronRightIcon,
  CopyIcon,
  FileIcon,
  FolderIcon,
  GitBranchIcon,
  GitCommitHorizontalIcon,
  GitPullRequestIcon,
  MessageSquareIcon,
  PanelLeftIcon,
  PlusIcon,
  SearchIcon,
  SettingsIcon,
  TerminalIcon,
  Trash2Icon,
  TriangleAlertIcon,
  XIcon,
} from "lucide-react"

import { Button } from "@/components/button"
import { Skeleton } from "@/components/skeleton"
import { Spinner } from "@/components/spinner"
import { StatusDot } from "@/components/status-dot"
import { ACCENTS, useTheme } from "@/lib/theme"
import { cn } from "@/lib/utils"
import { ACCENT_SWATCH } from "~/accents"
import { Example } from "~/components/example"
import { PageHeader } from "~/components/page-header"
import type { ComponentDoc } from "~/nav"

function Section({
  title,
  description,
  children,
}: {
  title: string
  description?: string
  children: React.ReactNode
}) {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h2 className="font-medium text-base">{title}</h2>
        {description && <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>}
      </div>
      {children}
    </section>
  )
}

function Swatch({ token, label }: { token: string; label?: string }) {
  return (
    <div className="flex min-w-0 items-center gap-2.5">
      <span className="relative size-8 shrink-0 overflow-hidden rounded-md border">
        <span className="absolute inset-0" style={{ background: `var(--${token})` }} />
      </span>
      <span className="min-w-0">
        <span className="block truncate font-medium text-xs">{label ?? token}</span>
        <code className="block truncate text-2xs text-muted-foreground">--{token}</code>
      </span>
    </div>
  )
}

function SwatchGrid({ tokens }: { tokens: string[] }) {
  return (
    <div className="grid grid-cols-1 gap-x-4 gap-y-3 rounded-xl border bg-card/40 p-4 sm:grid-cols-2 lg:grid-cols-3 dark:bg-card">
      {tokens.map((token) => (
        <Swatch key={token} token={token} />
      ))}
    </div>
  )
}

function AccentPicker() {
  const { accent, setAccent } = useTheme()
  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
      {ACCENTS.map((name) => (
        <button
          key={name}
          className={cn(
            "flex cursor-pointer items-center gap-3 rounded-xl border bg-card/40 p-3 text-left outline-none transition-colors hover:bg-accent/50 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring dark:bg-card",
            accent === name && "border-ring"
          )}
          type="button"
          onClick={() => setAccent(name)}
        >
          <span className="size-4 shrink-0 rounded-full" style={{ background: ACCENT_SWATCH[name] }} />
          <span className="font-medium text-sm capitalize">{name}</span>
          {accent === name && <CheckIcon className="ms-auto size-4 text-primary" />}
        </button>
      ))}
    </div>
  )
}

function ColorPage() {
  return (
    <>
      <Section title="Action" description="One color for everything that says act now. Set it per app with data-accent. Click one to preview it across the whole site.">
        <AccentPicker />
        <div className="flex flex-wrap items-center gap-3 rounded-xl border bg-card/40 p-6 dark:bg-card">
          <Button>Commit</Button>
          <Button variant="outline">Outline stays neutral</Button>
          <StatusDot tone="primary" motion="pulse" />
          <span className="text-primary text-sm">Primary text</span>
        </div>
      </Section>
      <Section title="Surfaces" description="Canvas first, then raised surfaces. In dark mode they barely lift off true black, so borders do the separating.">
        <SwatchGrid tokens={["background", "card", "popover", "sidebar", "message-surface", "code-background", "muted", "secondary", "accent"]} />
      </Section>
      <Section title="Text" description="Four steps. Foreground for content, secondary-label for row metadata, muted for supporting text, placeholder for what is not there yet.">
        <div className="flex flex-col gap-1 rounded-xl border bg-card/40 p-4 text-sm dark:bg-card">
          <p className="text-foreground">Foreground: the thread title you came here to read</p>
          <p className="text-secondary-label">Secondary label: 2 hours ago in design</p>
          <p className="text-muted-foreground">Muted: a description of what this setting does</p>
          <p className="text-placeholder">Placeholder: ask for a follow-up</p>
        </div>
      </Section>
      <Section title="Lines" description="Border for structure, input for anything you can type in. Both are alpha whites in the dark.">
        <SwatchGrid tokens={["border", "input", "ring"]} />
      </Section>
      <Section title="Status" description="Each status is a pair. The plain token is the signal, for dots and icons. The foreground token is the one you can read.">
        <div className="grid gap-2 sm:grid-cols-2">
          {(["destructive", "warning", "success", "info"] as const).map((tone) => (
            <div
              key={tone}
              className="flex items-center gap-2.5 rounded-xl border p-3 text-sm"
              style={{ background: `var(--${tone}-surface)`, borderColor: `color-mix(in srgb, var(--${tone}) 32%, transparent)` }}
            >
              <span className="size-2 rounded-full" style={{ background: `var(--${tone})` }} />
              <span className="font-medium capitalize" style={{ color: `var(--${tone}-foreground)` }}>
                {tone}
              </span>
            </div>
          ))}
        </div>
      </Section>
      <Section title="Data" description="A fixed categorical order, validated for color-blind separation on both canvases. It doesn't follow the accent, so a series keeps its color between apps. For a single series, use the accent directly.">
        <SwatchGrid tokens={["chart-1", "chart-2", "chart-3", "chart-4", "chart-5"]} />
      </Section>
    </>
  )
}

const typeScale = [
  { name: "text-3xs", size: "10 / 14", use: "Counters and overlays" },
  { name: "text-2xs", size: "11 / 16", use: "Metadata rows, key hints" },
  { name: "text-xs", size: "12 / 16", use: "Compact controls, captions" },
  { name: "text-sm", size: "14 / 20", use: "The default for everything on desktop" },
  { name: "text-base", size: "16 / 24", use: "Controls on touch, so iOS never zooms" },
  { name: "text-lg", size: "18 / 28", use: "Dialog titles" },
  { name: "text-2xl", size: "24 / 32", use: "Page titles, the largest thing in an app" },
] as const

function TypographyPage() {
  return (
    <>
      <Section title="Typeface" description="The platform's own font comes first, so an app feels native on a Mac. Inter is the fallback everywhere else, and it ships with the package. There is no display face.">
        <div className="flex flex-col gap-4 rounded-xl border bg-card/40 p-5 dark:bg-card">
          <div>
            <p className="mb-1 text-2xs text-muted-foreground">font-sans</p>
            <p className="text-lg">The quick agent fixed the flaky retry test.</p>
          </div>
          <div>
            <p className="mb-1 text-2xs text-muted-foreground">font-mono</p>
            <p className="font-mono text-sm">pnpm test queue --reporter=dot</p>
          </div>
        </div>
      </Section>
      <Section title="Scale" description="Two steps below text-xs for dense interfaces. tailwind-merge knows about them through cn().">
        <div className="divide-y rounded-xl border bg-card/40 dark:bg-card">
          {typeScale.map((step) => (
            <div key={step.name} className="flex flex-col gap-1 p-4 sm:flex-row sm:items-center sm:gap-4">
              <code className="w-20 shrink-0 text-2xs text-muted-foreground">{step.name}</code>
              <code className="w-14 shrink-0 text-2xs text-muted-foreground">{step.size}</code>
              <p className={cn("min-w-0 flex-1 truncate", step.name)}>{step.use}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section title="Weight" description="Regular for reading, medium for labels and actions, semibold only for page titles. Hierarchy comes from color before it comes from weight.">
        <div className="flex flex-col gap-1 rounded-xl border bg-card/40 p-5 text-sm dark:bg-card">
          <p className="font-normal">Regular 400: body text and values</p>
          <p className="font-medium">Medium 500: buttons, labels, section titles</p>
          <p className="font-semibold">Semibold 600: page titles</p>
        </div>
      </Section>
    </>
  )
}

function GeometryPage() {
  return (
    <>
      <Section title="Control heights" description="28px is the working size on desktop and 32px is the default. Every size grows one step on touch.">
        <Example>
          <Button size="micro" variant="outline">20</Button>
          <Button size="xs" variant="outline">24</Button>
          <Button size="sm" variant="outline">28</Button>
          <Button variant="outline">32</Button>
          <Button size="lg" variant="outline">36</Button>
          <Button size="xl" variant="outline">40</Button>
        </Example>
      </Section>
      <Section title="Radius" description="8px on controls. Corners open up as surfaces get bigger, and rows inside a popup tighten so they nest cleanly.">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
          {[
            ["rounded-sm", "4", "Rows in popups"],
            ["rounded-md", "6", "Compact controls"],
            ["rounded-lg", "8", "Controls, menus"],
            ["rounded-xl", "12", "Cards, alerts"],
            ["rounded-2xl", "16", "Dialogs"],
          ].map(([name, size, use]) => (
            <div key={name} className="flex flex-col gap-2">
              <div className={cn("h-16 border bg-card", name)} />
              <div>
                <code className="block text-2xs">{name} · {size}px</code>
                <p className="text-2xs text-muted-foreground">{use}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
      <Section title="Layout" description="A few named lengths keep screens consistent. All of them are CSS variables you can read from your own layouts.">
        <div className="divide-y rounded-xl border bg-card/40 text-sm dark:bg-card">
          {[
            ["--topbar-height", "52px", "The bar at the top of every window"],
            ["--content-max-width", "46rem", "The reading lane for threads and long text"],
            ["--sidebar-width", "16rem", "The navigation rail"],
            ["--control-radius", "0.5rem", "Shared by every button"],
            ["--scrollbar-width", "6px", "Thin, and quiet until hovered"],
          ].map(([name, value, use]) => (
            <div key={name} className="flex flex-col gap-1 p-4 sm:flex-row sm:items-center sm:gap-4">
              <code className="w-44 shrink-0 text-xs">{name}</code>
              <code className="w-14 shrink-0 text-2xs text-muted-foreground">{value}</code>
              <p className="text-muted-foreground text-xs">{use}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}

function SurfacesPage() {
  const backdrop = (
    <div
      aria-hidden
      className="absolute inset-0"
      style={{
        background:
          "conic-gradient(from 200deg at 30% 40%, oklch(0.7 0.17 264), oklch(0.75 0.16 340), oklch(0.8 0.14 80), oklch(0.72 0.14 160), oklch(0.7 0.17 264))",
      }}
    />
  )
  return (
    <>
      <Section title="Glass" description="Anything that floats blurs what is behind it. Three strengths, one for each job, all with an opaque fallback.">
        <div className="relative grid gap-4 overflow-hidden rounded-xl border p-6 sm:grid-cols-3 sm:p-8">
          {backdrop}
          <div className="surface-glass relative rounded-lg border border-border/60 p-4">
            <code className="text-xs">surface-glass</code>
            <p className="mt-1 text-muted-foreground text-xs">Topbars and floating buttons.</p>
          </div>
          <div className="dropdown-glass relative rounded-lg p-4">
            <code className="text-xs">dropdown-glass</code>
            <p className="mt-1 text-muted-foreground text-xs">Menus, selects, tooltips.</p>
          </div>
          <div className="dialog-glass relative rounded-2xl border p-4">
            <code className="text-xs">dialog-glass</code>
            <p className="mt-1 text-muted-foreground text-xs">Dialogs and sheets.</p>
          </div>
        </div>
      </Section>
      <Section title="Grain" description="A faint noise over the canvas stops large flat areas looking dead. It is baked into the surface rather than laid over the top, so animations never have to re-blend it. Surfaces that float over the body opt in with surface-grain.">
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="flex h-28 items-end rounded-xl border bg-background p-3 text-2xs text-muted-foreground">Without</div>
          <div className="surface-grain flex h-28 items-end rounded-xl border bg-background p-3 text-2xs text-muted-foreground">surface-grain</div>
        </div>
      </Section>
      <Section title="Elevation" description="Shadows are soft and small in light mode, and in dark mode they mostly disappear. A control gets a 1px top highlight instead of a drop shadow, which is what gives it its edge.">
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="flex h-24 items-center justify-center rounded-xl border bg-card text-muted-foreground text-xs">Flat, border only</div>
          <div className="flex h-24 items-center justify-center rounded-xl border bg-card text-muted-foreground text-xs shadow-xs/5">shadow-xs/5, controls</div>
          <div className="dropdown-glass flex h-24 items-center justify-center rounded-xl text-muted-foreground text-xs">Floating</div>
        </div>
      </Section>
    </>
  )
}

function PressDemo() {
  return <Button variant="outline">Press and hold me</Button>
}

function MotionPage() {
  return (
    <>
      <Section title="Durations" description="Nothing in the system takes longer than 300ms to arrive.">
        <div className="divide-y rounded-xl border bg-card/40 text-sm dark:bg-card">
          {[
            ["100ms", "Popups and menus", "scale 98% to 100%, plus opacity"],
            ["150ms", "Color and shadow on hover", "Applied to the control, never the page"],
            ["200ms", "Dialogs", "scale 98% to 100%, plus opacity"],
            ["300ms", "Sheets and drawers", "ease-drawer: cubic-bezier(0.32, 0.72, 0, 1)"],
          ].map(([time, what, how]) => (
            <div key={time} className="flex flex-col gap-1 p-4 sm:flex-row sm:items-center sm:gap-4">
              <code className="w-14 shrink-0 text-xs">{time}</code>
              <p className="w-52 shrink-0 text-sm">{what}</p>
              <p className="text-muted-foreground text-xs">{how}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section title="Press" description="Buttons scale to 97% while held. It is the only place the system uses scale on interaction, and it doesn't apply to triggers that open a popup.">
        <Example>
          <PressDemo />
        </Example>
      </Section>
      <Section title="Indicators" description="Duty-cycled: long holds with stepped ramps, so the compositor draws a handful of frames per cycle rather than one per vsync. All of it stops under prefers-reduced-motion.">
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            ["animate-status-pulse", "Working", <StatusDot key="a" motion="pulse" tone="primary" />],
            ["animate-status-ping", "Needs you", <StatusDot key="b" motion="ping" tone="warning" />],
            ["animate-skeleton", "Loading", <Skeleton key="c" className="h-3 w-24" />],
            ["animate-spin", "Unknown length", <Spinner key="d" size="sm" tone="muted" />],
            ["shine-text", "Live activity", <span key="e" className="shine-text text-sm">Running pnpm test</span>],
          ].map(([name, label, demo]) => (
            <div key={name as string} className="flex items-center gap-3 rounded-xl border bg-card/40 p-4 dark:bg-card">
              <span className="flex w-28 shrink-0 items-center">{demo}</span>
              <span className="min-w-0">
                <span className="block font-medium text-xs">{label}</span>
                <code className="block truncate text-2xs text-muted-foreground">{name}</code>
              </span>
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}

const iconSet = [
  ArrowUpIcon, CheckIcon, ChevronRightIcon, CopyIcon, FileIcon, FolderIcon, GitBranchIcon,
  GitCommitHorizontalIcon, GitPullRequestIcon, MessageSquareIcon, PanelLeftIcon, PlusIcon,
  SearchIcon, SettingsIcon, TerminalIcon, Trash2Icon, TriangleAlertIcon, XIcon,
]

function IconsPage() {
  return (
    <>
      <Section title="Lucide, lighter" description="Every Lucide icon renders at a 1.75 stroke instead of 2. It reads closer to the type next to it, and a global rule means you don't have to do anything.">
        <div className="grid grid-cols-6 gap-1 rounded-xl border bg-card/40 p-4 sm:grid-cols-9 dark:bg-card">
          {iconSet.map((Icon, index) => (
            <span key={index} className="grid aspect-square place-items-center text-muted-foreground">
              <Icon className="size-4.5" />
            </span>
          ))}
        </div>
      </Section>
      <Section title="Sizes" description="16px on desktop and 18px on touch, set by the control. Inside a Button you don't set a size at all.">
        <Example>
          <SearchIcon className="size-3" />
          <SearchIcon className="size-3.5" />
          <SearchIcon className="size-4" />
          <SearchIcon className="size-4.5" />
          <SearchIcon className="size-5" />
        </Example>
      </Section>
      <Section title="Color" description="Icons in chrome are muted, and take on the text color when their row is hovered or selected. They only carry status color when they are the status.">
        <Example>
          <Button variant="ghost"><GitBranchIcon />Muted icon</Button>
          <TriangleAlertIcon className="size-4 text-warning" />
          <CheckIcon className="size-4 text-success" />
          <XIcon className="size-4 text-destructive" />
        </Example>
      </Section>
    </>
  )
}

const pages: Record<string, () => React.ReactElement> = {
  color: ColorPage,
  typography: TypographyPage,
  geometry: GeometryPage,
  surfaces: SurfacesPage,
  motion: MotionPage,
  icons: IconsPage,
}

export function FoundationPage({ doc }: { doc: ComponentDoc }) {
  const Page = pages[doc.slug]
  return (
    <>
      <PageHeader eyebrow="Foundation" title={doc.title} description={doc.description} />
      <div className="flex flex-col gap-10">{Page && <Page />}</div>
    </>
  )
}
