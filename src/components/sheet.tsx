import * as React from "react"
import { Dialog as SheetPrimitive } from "@base-ui/react/dialog"
import { XIcon } from "lucide-react"

import { Button } from "@/components/button"
import { cn } from "@/lib/utils"

function Sheet({ ...props }: SheetPrimitive.Root.Props) {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />
}

function SheetTrigger({ ...props }: SheetPrimitive.Trigger.Props) {
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />
}

function SheetClose({ ...props }: SheetPrimitive.Close.Props) {
  return <SheetPrimitive.Close data-slot="sheet-close" {...props} />
}

function SheetPortal({ ...props }: SheetPrimitive.Portal.Props) {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />
}

function SheetOverlay({ className, ...props }: SheetPrimitive.Backdrop.Props) {
  return (
    <SheetPrimitive.Backdrop
      data-slot="sheet-overlay"
      className={cn(
        "dialog-backdrop fixed inset-0 z-50 transition-all duration-300 ease-drawer data-ending-style:opacity-0 data-starting-style:opacity-0",
        className
      )}
      {...props}
    />
  )
}

function SheetContent({
  className,
  children,
  side = "right",
  variant = "default",
  showCloseButton = true,
  ...props
}: SheetPrimitive.Popup.Props & {
  side?: "top" | "right" | "bottom" | "left"
  /** `inset` floats the sheet off the window edges on desktop. */
  variant?: "default" | "inset"
  showCloseButton?: boolean
}) {
  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Viewport
        data-slot="sheet-viewport"
        className={cn(
          "fixed inset-0 z-50 grid",
          side === "bottom" && "grid-rows-[1fr_auto] pt-12",
          side === "top" && "grid-rows-[auto_1fr] pb-12",
          side === "left" && "flex justify-start",
          side === "right" && "flex justify-end",
          variant === "inset" && "sm:p-4"
        )}
      >
        <SheetPrimitive.Popup
          data-slot="sheet-content"
          data-side={side}
          className={cn(
            "dialog-glass relative flex max-h-full min-h-0 w-full min-w-0 flex-col text-popover-foreground outline-none transition-[opacity,translate] duration-300 ease-drawer will-change-transform before:pointer-events-none before:absolute before:inset-0 before:shadow-[0_1px_--theme(--color-black/4%)] data-ending-style:opacity-0 data-starting-style:opacity-0 max-sm:before:hidden dark:before:shadow-[0_-1px_--theme(--color-white/6%)]",
            side === "bottom" &&
              "row-start-2 border-t data-ending-style:translate-y-8 data-starting-style:translate-y-8",
            side === "top" &&
              "border-b data-ending-style:-translate-y-8 data-starting-style:-translate-y-8",
            side === "left" &&
              "w-[calc(100%-(--spacing(12)))] max-w-md border-e data-ending-style:-translate-x-8 data-starting-style:-translate-x-8",
            side === "right" &&
              "w-[calc(100%-(--spacing(12)))] max-w-md border-s data-ending-style:translate-x-8 data-starting-style:translate-x-8",
            variant === "inset" &&
              "before:hidden sm:rounded-2xl sm:border sm:**:data-[slot=sheet-footer]:rounded-b-[calc(var(--radius-2xl)-1px)]",
            className
          )}
          {...props}
        >
          {children}
          {showCloseButton && (
            <SheetPrimitive.Close
              data-slot="sheet-close"
              aria-label="Close"
              className="absolute end-2 top-2"
              render={<Button size="icon" variant="ghost" />}
            >
              <XIcon />
            </SheetPrimitive.Close>
          )}
        </SheetPrimitive.Popup>
      </SheetPrimitive.Viewport>
    </SheetPortal>
  )
}

function SheetHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-header"
      className={cn(
        "flex flex-col gap-2 p-6 in-[[data-slot=sheet-content]:has([data-slot=sheet-panel])]:pb-3 max-sm:pb-4",
        className
      )}
      {...props}
    />
  )
}

/** The scrolling body between header and footer. */
function SheetPanel({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-panel"
      className={cn(
        "min-h-0 flex-1 space-y-4 overflow-y-auto p-6 in-[[data-slot=sheet-content]:has([data-slot=sheet-header])]:pt-1",
        className
      )}
      {...props}
    />
  )
}

function SheetFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-footer"
      className={cn(
        "mt-auto flex flex-col-reverse gap-2 border-t bg-muted/72 px-6 py-4 sm:flex-row sm:justify-end",
        className
      )}
      {...props}
    />
  )
}

function SheetTitle({ className, ...props }: SheetPrimitive.Title.Props) {
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      className={cn("font-semibold text-xl leading-none", className)}
      {...props}
    />
  )
}

function SheetDescription({
  className,
  ...props
}: SheetPrimitive.Description.Props) {
  return (
    <SheetPrimitive.Description
      data-slot="sheet-description"
      className={cn("text-base text-muted-foreground sm:text-sm", className)}
      {...props}
    />
  )
}

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetOverlay,
  SheetPanel,
  SheetPortal,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}
