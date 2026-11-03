import * as React from "react"
import { Dialog as DialogPrimitive } from "@base-ui/react/dialog"
import { Command as CommandPrimitive } from "cmdk"
import { CheckIcon, SearchIcon, XIcon } from "lucide-react"

import { Button } from "@/components/button"
import {
  DIALOG_BACKDROP_CLASS,
  DIALOG_POPUP_CLASS,
  Dialog,
  DialogDescription,
  DialogTitle,
} from "@/components/dialog"
import { cn } from "@/lib/utils"

function Command({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive>) {
  return (
    <CommandPrimitive
      data-slot="command"
      className={cn(
        // Glass on its own; a host dialog or popover already is the surface.
        "not-in-data-[slot=dialog-content]:not-in-data-[slot=popover-content]:dialog-glass not-in-data-[slot=dialog-content]:not-in-data-[slot=popover-content]:rounded-2xl not-in-data-[slot=dialog-content]:not-in-data-[slot=popover-content]:border flex size-full min-h-0 flex-col overflow-hidden text-foreground",
        className
      )}
      {...props}
    />
  )
}

function CommandDialog({
  title = "Command Palette",
  description = "Search for a command to run...",
  children,
  className,
  showCloseButton = false,
  ...props
}: Omit<React.ComponentProps<typeof Dialog>, "children"> & {
  title?: string
  description?: string
  className?: string
  showCloseButton?: boolean
  children: React.ReactNode
}) {
  return (
    <Dialog {...props}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Backdrop
          data-slot="dialog-overlay"
          className={DIALOG_BACKDROP_CLASS}
        />
        <DialogPrimitive.Viewport
          data-slot="command-dialog-viewport"
          className="pointer-events-none fixed inset-0 z-50 flex flex-col items-center px-4 py-[max(--spacing(4),4vh)] sm:py-[10vh]"
        >
          <DialogPrimitive.Popup
            data-slot="dialog-content"
            className={cn(
              DIALOG_POPUP_CLASS,
              "pointer-events-auto max-h-105 max-w-xl overflow-hidden text-foreground",
              className
            )}
          >
            <div className="sr-only">
              <DialogTitle>{title}</DialogTitle>
              <DialogDescription>{description}</DialogDescription>
            </div>
            {children}
            {showCloseButton && (
              <DialogPrimitive.Close
                data-slot="dialog-close"
                aria-label="Close"
                className="absolute end-1.5 top-1.5"
                render={<Button size="icon" variant="ghost" />}
              >
                <XIcon />
              </DialogPrimitive.Close>
            )}
          </DialogPrimitive.Popup>
        </DialogPrimitive.Viewport>
      </DialogPrimitive.Portal>
    </Dialog>
  )
}

function CommandInput({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Input>) {
  return (
    <div
      data-slot="command-input-wrapper"
      className="flex shrink-0 items-center gap-2.5 border-b px-4"
    >
      <SearchIcon className="size-4.5 shrink-0 text-icon-muted sm:size-4" />
      <CommandPrimitive.Input
        data-slot="command-input"
        className={cn(
          "h-11 w-full min-w-0 bg-transparent text-base text-foreground outline-none placeholder:text-placeholder disabled:cursor-not-allowed disabled:opacity-64 sm:h-10 sm:text-sm",
          className
        )}
        {...props}
      />
    </div>
  )
}

function CommandList({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.List>) {
  return (
    <CommandPrimitive.List
      data-slot="command-list"
      className={cn(
        "max-h-72 min-h-0 scroll-py-2 overflow-y-auto overflow-x-hidden p-2 outline-none",
        className
      )}
      {...props}
    />
  )
}

function CommandEmpty({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Empty>) {
  return (
    <CommandPrimitive.Empty
      data-slot="command-empty"
      className={cn(
        "py-6 text-center text-base text-muted-foreground sm:text-sm",
        className
      )}
      {...props}
    />
  )
}

function CommandGroup({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Group>) {
  return (
    <CommandPrimitive.Group
      data-slot="command-group"
      className={cn(
        "not-first:mt-1.5 text-foreground **:[[cmdk-group-heading]]:px-2 **:[[cmdk-group-heading]]:py-1.5 **:[[cmdk-group-heading]]:font-medium **:[[cmdk-group-heading]]:text-muted-foreground **:[[cmdk-group-heading]]:text-xs",
        className
      )}
      {...props}
    />
  )
}

function CommandSeparator({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Separator>) {
  return (
    <CommandPrimitive.Separator
      data-slot="command-separator"
      className={cn("-mx-2 my-1.5 h-px bg-border", className)}
      {...props}
    />
  )
}

function CommandItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Item>) {
  return (
    <CommandPrimitive.Item
      data-slot="command-item"
      className={cn(
        // cmdk writes these as "true" and "false", so the bare `data-selected:` form would match every row.
        "group/command-item flex min-h-8 cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-base text-foreground outline-none data-[disabled=true]:pointer-events-none data-[selected=true]:bg-foreground/[0.09] data-[selected=true]:text-foreground data-[disabled=true]:opacity-64 sm:min-h-7 sm:text-sm [&>svg]:-mx-0.5 [&>svg:not([class*='opacity-'])]:opacity-80 [&>svg:not([class*='size-'])]:size-4.5 sm:[&>svg:not([class*='size-'])]:size-4 [&>svg:not([class*='text-'])]:text-muted-foreground [&>svg]:pointer-events-none [&>svg]:shrink-0",
        className
      )}
      {...props}
    >
      {children}
      <CheckIcon className="ms-auto opacity-0 group-has-data-[slot=command-shortcut]/command-item:hidden group-data-[checked=true]/command-item:opacity-100" />
    </CommandPrimitive.Item>
  )
}

function CommandShortcut({
  className,
  ...props
}: React.ComponentProps<"kbd">) {
  return (
    <kbd
      data-slot="command-shortcut"
      className={cn(
        "ms-auto font-medium font-sans text-secondary-label text-xs tracking-widest",
        className
      )}
      {...props}
    />
  )
}

/** The key hints along the bottom of a palette. */
function CommandFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="command-footer"
      className={cn(
        "flex shrink-0 items-center justify-between gap-2 border-t border-foreground/[0.07] bg-foreground/[0.025] px-4 py-2 font-medium text-muted-foreground text-xs [&_[data-slot=kbd]]:bg-foreground/[0.08] [&_[data-slot=kbd]]:text-foreground",
        className
      )}
      {...props}
    />
  )
}

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
  CommandFooter,
}
