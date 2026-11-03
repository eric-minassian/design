import * as React from "react"
import { Popover as PopoverPrimitive } from "@base-ui/react/popover"

import { cn } from "@/lib/utils"

const popoverWidthClassName = {
  default: "w-72",
  auto: "",
  sm: "w-64",
  md: "w-80",
  lg: "w-96",
} as const

const popoverPaddingClassName = {
  default: "gap-4 p-4",
  compact: "gap-2 px-3 py-2",
  none: "gap-0 p-0",
} as const

function Popover({ ...props }: PopoverPrimitive.Root.Props) {
  return <PopoverPrimitive.Root data-slot="popover" {...props} />
}

function PopoverTrigger({ ...props }: PopoverPrimitive.Trigger.Props) {
  return <PopoverPrimitive.Trigger data-slot="popover-trigger" {...props} />
}

function PopoverClose({ ...props }: PopoverPrimitive.Close.Props) {
  return <PopoverPrimitive.Close data-slot="popover-close" {...props} />
}

function PopoverContent({
  className,
  align = "center",
  alignOffset = 0,
  side = "bottom",
  sideOffset = 4,
  anchor,
  collisionAvoidance,
  padding = "default",
  width = "default",
  ...props
}: PopoverPrimitive.Popup.Props &
  Pick<
    PopoverPrimitive.Positioner.Props,
    | "align"
    | "alignOffset"
    | "anchor"
    | "collisionAvoidance"
    | "side"
    | "sideOffset"
  > & {
    padding?: keyof typeof popoverPaddingClassName
    width?: keyof typeof popoverWidthClassName
  }) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Positioner
        align={align}
        alignOffset={alignOffset}
        anchor={anchor}
        collisionAvoidance={collisionAvoidance}
        side={side}
        sideOffset={sideOffset}
        data-slot="popover-positioner"
        className="isolate z-[130] max-w-(--available-width)"
      >
        <PopoverPrimitive.Popup
          data-slot="popover-content"
          className={cn(
            "dropdown-glass relative flex max-h-(--available-height) max-w-[calc(100vw-2rem)] origin-(--transform-origin) flex-col overflow-y-auto rounded-lg text-base text-popover-foreground outline-none transition-[scale,opacity] duration-100 before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-lg)-1px)] before:shadow-[0_1px_--theme(--color-black/4%)] has-data-[slot=calendar]:rounded-xl has-data-[slot=calendar]:before:rounded-[calc(var(--radius-xl)-1px)] data-ending-style:scale-98 data-ending-style:opacity-0 data-starting-style:scale-98 data-starting-style:opacity-0 sm:text-sm dark:before:shadow-[0_-1px_--theme(--color-white/6%)]",
            popoverWidthClassName[width],
            popoverPaddingClassName[padding],
            className
          )}
          {...props}
        />
      </PopoverPrimitive.Positioner>
    </PopoverPrimitive.Portal>
  )
}

function PopoverHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="popover-header"
      className={cn("flex flex-col gap-1.5", className)}
      {...props}
    />
  )
}

function PopoverTitle({ className, ...props }: PopoverPrimitive.Title.Props) {
  return (
    <PopoverPrimitive.Title
      data-slot="popover-title"
      className={cn("font-semibold text-base leading-none sm:text-sm", className)}
      {...props}
    />
  )
}

function PopoverDescription({
  className,
  ...props
}: PopoverPrimitive.Description.Props) {
  return (
    <PopoverPrimitive.Description
      data-slot="popover-description"
      className={cn("text-muted-foreground", className)}
      {...props}
    />
  )
}

export {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
}
