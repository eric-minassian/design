import * as React from "react"
import { cn } from "@/lib/utils"

function MessageGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="message-group"
      className={cn("flex min-w-0 flex-col gap-4", className)}
      {...props}
    />
  )
}

function Message({
  className,
  align = "start",
  ...props
}: React.ComponentProps<"div"> & { align?: "start" | "end" }) {
  return (
    <div
      data-slot="message"
      data-align={align}
      className={cn(
        "group/message relative flex w-full min-w-0 gap-2.5 text-sm/relaxed text-foreground data-[align=end]:flex-row-reverse",
        className
      )}
      {...props}
    />
  )
}

function MessageAvatar({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="message-avatar"
      className={cn(
        "flex w-fit min-w-6 shrink-0 items-center justify-center self-start overflow-hidden rounded-full bg-accent text-2xs font-medium text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

function MessageContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="message-content"
      className={cn(
        "flex w-full min-w-0 flex-col gap-2.5 wrap-break-word group-data-[align=end]/message:*:data-slot:self-end [&_:not(pre)>code]:rounded-sm [&_:not(pre)>code]:bg-foreground/10 [&_:not(pre)>code]:px-[0.35em] [&_:not(pre)>code]:py-[0.1em] [&_:not(pre)>code]:text-[0.85em] [&_:not(pre)>code]:box-decoration-clone [&_a:not([data-slot])]:text-info-foreground [&_a:not([data-slot])]:hover:underline [&_a:not([data-slot])]:hover:decoration-dotted [&_a:not([data-slot])]:hover:underline-offset-4 [&_li+li]:mt-1 [&_ol]:list-decimal [&_ol]:ps-5 [&_ul]:list-disc [&_ul]:ps-5",
        className
      )}
      {...props}
    />
  )
}

function MessageHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="message-header"
      className={cn(
        "-mb-1.5 flex max-w-full min-w-0 items-center gap-1.5 text-2xs text-muted-foreground tabular-nums group-has-data-[slot=bubble]/message:px-1 group-has-data-[variant=ghost]/message:px-0",
        className
      )}
      {...props}
    />
  )
}

function MessageFooter({
  className,
  reveal = false,
  ...props
}: React.ComponentProps<"div"> & {
  /** Hide until the turn is hovered or focused. Touch keeps it visible. */
  reveal?: boolean
}) {
  return (
    <div
      data-slot="message-footer"
      data-reveal={reveal || undefined}
      className={cn(
        "-mt-1.5 flex min-h-6 max-w-full min-w-0 items-center gap-1.5 text-2xs text-muted-foreground tabular-nums group-has-data-[slot=bubble]/message:px-1 group-has-data-[variant=ghost]/message:px-0 group-data-[align=end]/message:justify-end data-reveal:opacity-0 data-reveal:transition-opacity data-reveal:duration-200 data-reveal:group-hover/message:opacity-100 data-reveal:focus-within:opacity-100 data-reveal:pointer-coarse:opacity-100",
        className
      )}
      {...props}
    />
  )
}

export {
  MessageGroup,
  Message,
  MessageAvatar,
  MessageContent,
  MessageFooter,
  MessageHeader,
}
