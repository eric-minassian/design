import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const errorVariant =
  "border-destructive/32 bg-destructive-surface text-destructive-foreground [&_[data-slot=alert-description]]:text-destructive-foreground/80 [&_[data-slot=alert-icon]]:text-destructive"

const alertVariants = cva(
  "group/alert relative w-full rounded-xl border px-3.5 py-3 text-left text-card-foreground text-sm",
  {
    variants: {
      surface: {
        default: "",
        glass: "alert-glass",
      },
      variant: {
        default:
          "bg-transparent dark:bg-input/32 [&_[data-slot=alert-icon]]:text-muted-foreground",
        sidebar:
          "rounded-lg border-sidebar-border bg-sidebar-control-surface px-2 py-1.5 text-2xs [&_[data-slot=alert-description]]:block [&_[data-slot=alert-description]]:text-sidebar-muted-foreground",
        destructive: errorVariant,
        error: errorVariant,
        info: "border-info/32 bg-info/4 [&_[data-slot=alert-icon]]:text-info",
        success:
          "border-success/32 bg-success/4 [&_[data-slot=alert-icon]]:text-success",
        warning:
          "border-warning/32 bg-warning-surface text-warning-foreground [&_[data-slot=alert-description]]:text-warning-foreground/80 [&_[data-slot=alert-icon]]:text-warning",
      },
    },
    defaultVariants: {
      surface: "default",
      variant: "default",
    },
  }
)

function alertChildSlot(child: React.ReactElement): string | undefined {
  const propsSlot = (child.props as Record<string, string | undefined>)[
    "data-slot"
  ]
  if (propsSlot) {
    return propsSlot
  }

  const type = child.type as { displayName?: string; name?: string }
  switch (type.displayName ?? type.name) {
    case "AlertAction":
      return "alert-action"
    case "AlertTitle":
      return "alert-title"
    case "AlertDescription":
      return "alert-description"
    default:
      return undefined
  }
}

function Alert({
  className,
  variant,
  surface,
  controlAlignment = "center",
  children,
  ...props
}: React.ComponentProps<"div"> &
  VariantProps<typeof alertVariants> & {
    controlAlignment?: "center" | "first-line"
  }) {
  const icon: React.ReactNode[] = []
  const content: React.ReactNode[] = []
  const action: React.ReactNode[] = []

  React.Children.forEach(children, (child) => {
    if (!React.isValidElement(child)) {
      content.push(child)
      return
    }
    const slot = alertChildSlot(child)
    if (slot === "alert-action") {
      action.push(child)
    } else if (slot === "alert-title" || slot === "alert-description") {
      content.push(child)
    } else {
      icon.push(child)
    }
  })

  return (
    <div
      data-slot="alert"
      // The glass surface tints from data-variant, which only knows "error".
      data-variant={variant === "destructive" ? "error" : (variant ?? "default")}
      role="alert"
      className={cn(alertVariants({ surface, variant }), className)}
      {...props}
    >
      <div
        className={cn(
          "flex gap-2",
          controlAlignment === "first-line" ? "items-start" : "items-center",
          controlAlignment === "first-line" &&
            action.length > 0 &&
            "min-h-7 pt-1 sm:min-h-6 sm:pt-0.5"
        )}
      >
        {icon.length > 0 && (
          <div
            data-slot="alert-icon"
            className={cn(
              "flex shrink-0 items-center justify-center",
              controlAlignment === "first-line"
                ? "h-lh w-4 [&>svg]:size-4"
                : "size-4 [&>svg]:size-full"
            )}
          >
            {React.Children.toArray(icon)}
          </div>
        )}
        {content.length > 0 && (
          <div className="flex min-w-0 flex-1 flex-col gap-0.5">
            {React.Children.toArray(content)}
          </div>
        )}
        {action.length > 0 && (
          <div
            className={cn(
              "flex shrink-0 items-center",
              controlAlignment === "first-line" ? "h-lh self-start" : "self-center"
            )}
          >
            {React.Children.toArray(action)}
          </div>
        )}
      </div>
    </div>
  )
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        "font-medium [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground",
        className
      )}
      {...props}
    />
  )
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        "flex flex-col gap-2.5 text-muted-foreground [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground",
        className
      )}
      {...props}
    />
  )
}

function AlertAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-action"
      className={cn("flex gap-1", className)}
      {...props}
    />
  )
}

AlertTitle.displayName = "AlertTitle"
AlertDescription.displayName = "AlertDescription"
AlertAction.displayName = "AlertAction"

export { Alert, AlertTitle, AlertDescription, AlertAction }
