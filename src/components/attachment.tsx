import * as React from "react"
import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

import { Button } from "@/components/button"

const attachmentVariants = cva(
  "group/attachment relative flex w-fit max-w-full min-w-0 shrink-0 rounded-2xl border border-transparent bg-message text-message-foreground transition-colors has-[>a:focus-visible,>button:focus-visible]:ring-2 has-[>a:focus-visible,>button:focus-visible]:ring-inset has-[>a:focus-visible,>button:focus-visible]:ring-ring has-[>a,>button]:hover:bg-[color-mix(in_srgb,var(--message-surface),var(--foreground)_6%)] data-[state=error]:border-destructive/32 data-[state=error]:bg-destructive-surface data-[state=idle]:border-dashed data-[state=idle]:border-input data-[state=idle]:bg-transparent",
  {
    variants: {
      size: {
        default:
          "gap-3 px-3 py-2 text-sm data-[orientation=horizontal]:has-data-[slot=attachment-actions]:pe-1.5 data-[orientation=horizontal]:has-data-[slot=attachment-media]:ps-2",
        sm: "gap-2 rounded-xl px-2.5 py-1.5 text-sm data-[orientation=horizontal]:has-data-[slot=attachment-actions]:pe-1 data-[orientation=horizontal]:has-data-[slot=attachment-media]:ps-1.5",
        xs: "gap-1.5 rounded-lg px-2 py-1 text-xs data-[orientation=horizontal]:has-data-[slot=attachment-actions]:pe-0.5 data-[orientation=horizontal]:has-data-[slot=attachment-media]:ps-1",
      },
      orientation: {
        horizontal: "max-w-64 min-w-40 items-center",
        vertical: "w-24 flex-col gap-1.5 p-1.5 has-data-[slot=attachment-content]:w-30",
      },
    },
  }
)

function Attachment({
  className,
  state = "done",
  size = "default",
  orientation = "horizontal",
  ...props
}: React.ComponentProps<"div"> &
  VariantProps<typeof attachmentVariants> & {
    state?: "idle" | "uploading" | "processing" | "error" | "done"
  }) {
  return (
    <div
      data-slot="attachment"
      data-state={state}
      data-size={size}
      data-orientation={orientation}
      className={cn(attachmentVariants({ size, orientation }), className)}
      {...props}
    />
  )
}

const attachmentMediaVariants = cva(
  "relative flex aspect-square w-9 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-background/60 text-muted-foreground group-data-[orientation=vertical]/attachment:w-full group-data-[size=sm]/attachment:w-7 group-data-[size=sm]/attachment:rounded-md group-data-[size=xs]/attachment:w-5 group-data-[size=xs]/attachment:rounded-sm group-data-[state=error]/attachment:bg-destructive/8 group-data-[state=error]/attachment:text-destructive-foreground dark:group-data-[state=error]/attachment:bg-destructive/16 group-data-[orientation=vertical]/attachment:*:data-[slot=spinner]:size-5! [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 group-data-[orientation=vertical]/attachment:[&_svg:not([class*='size-'])]:size-5 group-data-[size=xs]/attachment:[&_svg:not([class*='size-'])]:size-3.5",
  {
    variants: {
      variant: {
        icon: "",
        image:
          "opacity-64 group-data-[state=done]/attachment:opacity-100 group-data-[state=idle]/attachment:opacity-100 after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] after:ring-1 after:ring-foreground/10 after:ring-inset *:[img]:aspect-square *:[img]:w-full *:[img]:object-cover",
      },
    },
    defaultVariants: {
      variant: "icon",
    },
  }
)

function AttachmentMedia({
  className,
  variant = "icon",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof attachmentMediaVariants>) {
  return (
    <div
      data-slot="attachment-media"
      data-variant={variant}
      className={cn(attachmentMediaVariants({ variant }), className)}
      {...props}
    />
  )
}

function AttachmentContent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="attachment-content"
      className={cn(
        "max-w-full min-w-0 flex-1 group-data-[orientation=vertical]/attachment:px-0.5 group-data-[orientation=vertical]/attachment:pb-0.5",
        className
      )}
      {...props}
    />
  )
}

function AttachmentTitle({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="attachment-title"
      className={cn(
        "block max-w-full min-w-0 truncate font-medium group-data-[orientation=vertical]/attachment:text-xs group-data-[state=processing]/attachment:shine-text group-data-[state=uploading]/attachment:shine-text",
        className
      )}
      {...props}
    />
  )
}

function AttachmentDescription({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="attachment-description"
      className={cn(
        "block min-w-0 truncate text-xs text-muted-foreground tabular-nums group-data-[orientation=vertical]/attachment:text-2xs group-data-[size=xs]/attachment:text-2xs group-data-[state=error]/attachment:text-destructive-foreground",
        "max-w-full",
        className
      )}
      {...props}
    />
  )
}

function AttachmentActions({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="attachment-actions"
      className={cn(
        "relative z-20 flex shrink-0 items-center gap-0.5 group-data-[orientation=vertical]/attachment:absolute group-data-[orientation=vertical]/attachment:end-2.5 group-data-[orientation=vertical]/attachment:top-2.5",
        className
      )}
      {...props}
    />
  )
}

function AttachmentAction({
  className,
  variant,
  size = "icon-xs",
  ...props
}: React.ComponentProps<typeof Button>) {
  return (
    <Button
      data-slot="attachment-action"
      variant={variant ?? "ghost-muted"}
      size={size}
      className={cn(className)}
      {...props}
    />
  )
}

function AttachmentTrigger({
  className,
  render,
  type,
  ...props
}: useRender.ComponentProps<"button">) {
  return useRender({
    defaultTagName: "button",
    props: mergeProps<"button">(
      {
        type: render ? type : (type ?? "button"),
        className: cn("absolute inset-0 z-10 cursor-pointer rounded-[inherit] outline-none", className),
      },
      props
    ),
    render,
    state: {
      slot: "attachment-trigger",
    },
  })
}

function AttachmentGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="attachment-group"
      className={cn(
        "flex min-w-0 scroll-fade-x items-start snap-x snap-mandatory scroll-px-1 no-scrollbar gap-2 overflow-x-auto overscroll-x-contain py-1 *:data-[slot=attachment]:flex-none *:data-[slot=attachment]:snap-start",
        className
      )}
      {...props}
    />
  )
}

export {
  Attachment,
  AttachmentGroup,
  AttachmentMedia,
  AttachmentContent,
  AttachmentTitle,
  AttachmentDescription,
  AttachmentActions,
  AttachmentAction,
  AttachmentTrigger,
}
