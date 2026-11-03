import { Collapsible as CollapsiblePrimitive } from "@base-ui/react/collapsible"
import { ChevronDownIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Collapsible({ ...props }: CollapsiblePrimitive.Root.Props) {
  return <CollapsiblePrimitive.Root data-slot="collapsible" {...props} />
}

function CollapsibleTrigger({
  className,
  ...props
}: CollapsiblePrimitive.Trigger.Props) {
  return (
    <CollapsiblePrimitive.Trigger
      data-slot="collapsible-trigger"
      className={cn("cursor-pointer", className)}
      {...props}
    />
  )
}

function CollapsibleContent({
  className,
  animate = true,
  ...props
}: CollapsiblePrimitive.Panel.Props & { animate?: boolean }) {
  return (
    <CollapsiblePrimitive.Panel
      data-slot="collapsible-content"
      className={cn(
        "overflow-hidden",
        animate &&
          "h-(--collapsible-panel-height) transition-[height] duration-200 data-ending-style:h-0 data-starting-style:h-0 data-open:data-ending-style:[height:var(--collapsible-panel-height)] motion-reduce:transition-none",
        className
      )}
      {...props}
    />
  )
}

const sectionHeaderTones = {
  muted: { label: "text-muted-foreground", line: "bg-border" },
  emphasized: { label: "text-foreground/80", line: "bg-foreground/25" },
  accent: { label: "text-primary", line: "bg-primary/50" },
} as const

/**
 * A section label with a hairline leader. Compose it into a trigger with
 * `render={<CollapsibleSectionHeader />}`, or pass `expanded` to drive it yourself.
 */
function CollapsibleSectionHeader({
  children,
  className,
  expanded,
  tone = "muted",
  variant = "default",
  accessory,
  ...props
}: React.ComponentProps<"button"> & {
  expanded?: boolean
  tone?: keyof typeof sectionHeaderTones
  variant?: "default" | "panel"
  accessory?: React.ReactNode
}) {
  return (
    <button
      type="button"
      data-slot="collapsible-section-header"
      className={cn(
        "group/section-header flex h-8 w-full cursor-pointer items-center gap-2 rounded-md text-left font-medium text-xs outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background",
        variant === "panel" ? "ps-2 pe-2.5" : "px-2",
        sectionHeaderTones[tone].label,
        className
      )}
      {...props}
      {...(expanded === undefined ? {} : { "aria-expanded": expanded })}
    >
      <span className="shrink-0">{children}</span>
      <span
        aria-hidden
        // A header with a trailing count drops its rule so it doesn't read as a leader.
        className={cn(
          "h-px min-w-2 flex-1",
          sectionHeaderTones[tone].line,
          accessory ? "invisible" : undefined
        )}
      />
      {accessory}
      <ChevronDownIcon
        aria-hidden
        className="size-3 shrink-0 -rotate-90 transition-transform group-aria-expanded/section-header:rotate-0 motion-reduce:transition-none"
      />
    </button>
  )
}

function SectionHeaderStatus({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="section-header-status"
      className={cn(
        "shrink-0 text-3xs text-destructive-foreground leading-none",
        className
      )}
      {...props}
    />
  )
}

export {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
  CollapsibleContent as CollapsiblePanel,
  CollapsibleSectionHeader,
  SectionHeaderStatus,
}
