import * as React from "react"
import { AlertDialog as AlertDialogPrimitive } from "@base-ui/react/alert-dialog"

import { Button } from "@/components/button"
import {
  DIALOG_BACKDROP_CLASS,
  DIALOG_MOBILE_SHEET_CLASS,
  DIALOG_MOBILE_VIEWPORT_CLASS,
  DIALOG_POPUP_CLASS,
  DIALOG_VIEWPORT_CLASS,
} from "@/components/dialog"
import { cn } from "@/lib/utils"

function AlertDialog({ ...props }: AlertDialogPrimitive.Root.Props) {
  return <AlertDialogPrimitive.Root data-slot="alert-dialog" {...props} />
}

function AlertDialogTrigger({ ...props }: AlertDialogPrimitive.Trigger.Props) {
  return (
    <AlertDialogPrimitive.Trigger data-slot="alert-dialog-trigger" {...props} />
  )
}

function AlertDialogPortal({ ...props }: AlertDialogPrimitive.Portal.Props) {
  return (
    <AlertDialogPrimitive.Portal data-slot="alert-dialog-portal" {...props} />
  )
}

function AlertDialogClose({ ...props }: AlertDialogPrimitive.Close.Props) {
  return <AlertDialogPrimitive.Close data-slot="alert-dialog-close" {...props} />
}

function AlertDialogOverlay({
  className,
  ...props
}: AlertDialogPrimitive.Backdrop.Props) {
  return (
    <AlertDialogPrimitive.Backdrop
      data-slot="alert-dialog-overlay"
      className={cn(DIALOG_BACKDROP_CLASS, className)}
      {...props}
    />
  )
}

function AlertDialogContent({
  className,
  size = "default",
  bottomStickOnMobile = true,
  ...props
}: AlertDialogPrimitive.Popup.Props & {
  size?: "default" | "sm"
  /** Below `sm`, dock to the bottom edge as a full-width sheet. */
  bottomStickOnMobile?: boolean
}) {
  return (
    <AlertDialogPortal>
      <AlertDialogOverlay />
      <AlertDialogPrimitive.Viewport
        data-slot="alert-dialog-viewport"
        className={cn(
          DIALOG_VIEWPORT_CLASS,
          bottomStickOnMobile && DIALOG_MOBILE_VIEWPORT_CLASS
        )}
      >
        <AlertDialogPrimitive.Popup
          data-slot="alert-dialog-content"
          data-size={size}
          className={cn(
            DIALOG_POPUP_CLASS,
            "group/alert-dialog-content row-start-2 max-h-full text-popover-foreground data-[size=default]:max-w-lg data-[size=sm]:max-w-xs",
            bottomStickOnMobile && DIALOG_MOBILE_SHEET_CLASS,
            className
          )}
          {...props}
        />
      </AlertDialogPrimitive.Viewport>
    </AlertDialogPortal>
  )
}

function AlertDialogHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-dialog-header"
      className={cn(
        "flex min-h-0 flex-col items-center gap-2 p-6 text-center max-sm:pb-4 sm:group-data-[size=default]/alert-dialog-content:items-start sm:group-data-[size=default]/alert-dialog-content:text-left",
        className
      )}
      {...props}
    />
  )
}

function AlertDialogFooter({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<"div"> & {
  variant?: "default" | "bare"
}) {
  return (
    <div
      data-slot="alert-dialog-footer"
      className={cn(
        "flex flex-col-reverse gap-2 px-6 group-data-[size=sm]/alert-dialog-content:grid group-data-[size=sm]/alert-dialog-content:grid-cols-2 sm:flex-row sm:justify-end sm:rounded-b-[calc(var(--radius-2xl)-1px)]",
        variant === "default" && "border-t bg-muted/72 py-4",
        variant === "bare" && "pb-6",
        className
      )}
      {...props}
    />
  )
}

function AlertDialogMedia({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-dialog-media"
      className={cn(
        "mb-2 inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground *:[svg:not([class*='size-'])]:size-5",
        className
      )}
      {...props}
    />
  )
}

function AlertDialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Title>) {
  return (
    <AlertDialogPrimitive.Title
      data-slot="alert-dialog-title"
      className={cn(
        "wrap-anywhere shrink-0 font-semibold text-xl leading-none",
        className
      )}
      {...props}
    />
  )
}

function AlertDialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Description>) {
  return (
    <AlertDialogPrimitive.Description
      data-slot="alert-dialog-description"
      className={cn(
        "wrap-anywhere max-h-[min(24rem,60dvh)] min-h-0 select-text overflow-y-auto overscroll-contain text-base text-muted-foreground sm:text-sm *:[a]:underline *:[a]:underline-offset-3 *:[a]:hover:text-foreground",
        className
      )}
      {...props}
    />
  )
}

/** The confirming button. Closes the dialog after `onClick`; call `event.preventBaseUIHandler()` to keep it open. */
function AlertDialogAction({
  className,
  variant,
  size,
  ...props
}: AlertDialogPrimitive.Close.Props &
  Pick<React.ComponentProps<typeof Button>, "variant" | "size">) {
  return (
    <AlertDialogPrimitive.Close
      data-slot="alert-dialog-action"
      className={cn(className)}
      render={<Button variant={variant} size={size} />}
      {...props}
    />
  )
}

function AlertDialogCancel({
  className,
  variant = "outline",
  size = "default",
  ...props
}: AlertDialogPrimitive.Close.Props &
  Pick<React.ComponentProps<typeof Button>, "variant" | "size">) {
  return (
    <AlertDialogPrimitive.Close
      data-slot="alert-dialog-cancel"
      className={cn(className)}
      render={<Button variant={variant} size={size} />}
      {...props}
    />
  )
}

export {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogClose,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger,
}
