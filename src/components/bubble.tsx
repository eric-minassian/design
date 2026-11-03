import * as React from "react"
import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

function BubbleGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="bubble-group"
      className={cn(
        "flex min-w-0 flex-col gap-1 [&>:not(:first-child):not([data-align=end],[data-align=end]_*)>[data-slot=bubble-content]]:rounded-ss-md [&>:not(:last-child):not([data-align=end],[data-align=end]_*)>[data-slot=bubble-content]]:rounded-es-md [&>:not(:first-child):is([data-align=end],[data-align=end]_*)>[data-slot=bubble-content]]:rounded-se-md [&>:not(:last-child):is([data-align=end],[data-align=end]_*)>[data-slot=bubble-content]]:rounded-ee-md",
        className
      )}
      {...props}
    />
  )
}

const bubbleVariants = cva(
  "group/bubble relative flex w-fit max-w-[80%] min-w-0 flex-col gap-1 group-data-[align=end]/message:self-end data-[align=end]:self-end data-[variant=ghost]:max-w-full",
  {
    variants: {
      variant: {
        default:
          "*:data-[slot=bubble-content]:bg-message *:data-[slot=bubble-content]:text-message-foreground [&>[data-slot=bubble-content]:is(button,a):hover]:bg-[color-mix(in_srgb,var(--message-surface),var(--foreground)_6%)]",
        secondary:
          "*:data-[slot=bubble-content]:bg-secondary *:data-[slot=bubble-content]:text-secondary-foreground [&>[data-slot=bubble-content]:is(button,a):hover]:bg-accent",
        muted:
          "*:data-[slot=bubble-content]:bg-muted *:data-[slot=bubble-content]:text-muted-foreground [&>[data-slot=bubble-content]:is(button,a):hover]:bg-accent",
        tinted:
          "*:data-[slot=bubble-content]:bg-primary/8 *:data-[slot=bubble-content]:text-foreground dark:*:data-[slot=bubble-content]:bg-primary/16 [&>[data-slot=bubble-content]:is(button,a):hover]:bg-primary/12 dark:[&>[data-slot=bubble-content]:is(button,a):hover]:bg-primary/24",
        outline:
          "*:data-[slot=bubble-content]:border-border *:data-[slot=bubble-content]:bg-background dark:*:data-[slot=bubble-content]:bg-input/32 [&>[data-slot=bubble-content]:is(button,a):hover]:bg-accent dark:[&>[data-slot=bubble-content]:is(button,a):hover]:bg-input/64",
        ghost:
          "*:data-[slot=bubble-content]:rounded-none *:data-[slot=bubble-content]:bg-transparent *:data-[slot=bubble-content]:p-0 [&>[data-slot=bubble-content]:is(button,a):hover]:text-muted-foreground",
        destructive:
          "*:data-[slot=bubble-content]:bg-destructive/8 *:data-[slot=bubble-content]:text-destructive-foreground dark:*:data-[slot=bubble-content]:bg-destructive/16 [&>[data-slot=bubble-content]:is(button,a):hover]:bg-destructive/12 dark:[&>[data-slot=bubble-content]:is(button,a):hover]:bg-destructive/24",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Bubble({
  variant = "default",
  align = "start",
  className,
  ...props
}: React.ComponentProps<"div"> &
  VariantProps<typeof bubbleVariants> & {
    align?: "start" | "end"
  }) {
  return (
    <div
      data-slot="bubble"
      data-variant={variant}
      data-align={align}
      className={cn(bubbleVariants({ variant }), className)}
      {...props}
    />
  )
}

function BubbleContent({
  className,
  render,
  ...props
}: useRender.ComponentProps<"div">) {
  return useRender({
    defaultTagName: "div",
    props: mergeProps<"div">(
      {
        className: cn(
          "w-fit max-w-full min-w-0 overflow-hidden rounded-2xl border border-transparent p-3 text-sm/relaxed wrap-break-word group-data-[align=end]/bubble:self-end [button]:cursor-pointer [button]:text-left [button,a]:transition-colors [button,a]:outline-none [button,a]:focus-visible:ring-2 [button,a]:focus-visible:ring-inset [button,a]:focus-visible:ring-ring [button,a]:focus-visible:ring-offset-1 [button,a]:focus-visible:ring-offset-background",
          className
        ),
      },
      props
    ),
    render,
    state: {
      slot: "bubble-content",
    },
  })
}

const bubbleReactionsVariants = cva(
  "absolute z-10 flex w-fit shrink-0 items-center justify-center gap-1 rounded-full border bg-card px-1.5 py-0.5 text-2xs tabular-nums shadow-xs/5 has-[button]:p-0",
  {
    variants: {
      side: {
        top: "top-0 -translate-y-3/4",
        bottom: "bottom-0 translate-y-3/4",
      },
      align: {
        start: "start-3",
        end: "end-3",
      },
    },
    defaultVariants: {
      side: "bottom",
      align: "end",
    },
  }
)

function BubbleReactions({
  side = "bottom",
  align = "end",
  className,
  ...props
}: React.ComponentProps<"div"> & {
  align?: "start" | "end"
  side?: "top" | "bottom"
}) {
  return (
    <div
      data-slot="bubble-reactions"
      data-align={align}
      data-side={side}
      className={cn(bubbleReactionsVariants({ side, align }), className)}
      {...props}
    />
  )
}

export { BubbleGroup, Bubble, BubbleContent, BubbleReactions }
