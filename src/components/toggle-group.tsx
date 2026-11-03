import * as React from "react"
import { Toggle as TogglePrimitive } from "@base-ui/react/toggle"
import { ToggleGroup as ToggleGroupPrimitive } from "@base-ui/react/toggle-group"
import { type VariantProps } from "class-variance-authority"

import { toggleVariants } from "@/components/toggle"
import { cn } from "@/lib/utils"

const ToggleGroupContext = React.createContext<
  VariantProps<typeof toggleVariants>
>({
  size: "default",
  variant: "default",
})

const fused = {
  horizontal:
    "*:not-first:before:-start-[0.5px] *:not-last:before:-end-[0.5px] *:not-first:rounded-s-none *:not-last:rounded-e-none *:not-first:border-s-0 *:not-first:before:rounded-s-none *:not-last:before:rounded-e-none",
  vertical:
    "*:not-first:before:-top-[0.5px] *:not-last:before:-bottom-[0.5px] *:not-first:rounded-t-none *:not-last:rounded-b-none *:not-first:border-t-0 *:not-first:before:rounded-t-none *:not-last:before:rounded-b-none",
}

function ToggleGroup({
  className,
  variant = "default",
  size: sizeProp,
  spacing,
  orientation = "horizontal",
  style,
  children,
  ...props
}: ToggleGroupPrimitive.Props &
  VariantProps<typeof toggleVariants> & {
    /** Gap between items, in spacing units. 0 fuses them; outline fuses by default. */
    spacing?: number
  }) {
  const size =
    sizeProp ?? (variant === "segmented" ? "segmented" : "default")
  const isFused =
    variant !== "segmented" &&
    (spacing === 0 || (spacing === undefined && variant === "outline"))
  const gap = spacing ?? 0.5
  const value = React.useMemo(() => ({ size, variant }), [size, variant])

  return (
    <ToggleGroupPrimitive
      data-slot="toggle-group"
      data-variant={variant}
      data-size={size}
      data-spacing={spacing}
      style={(state) =>
        ({
          "--gap": gap,
          ...(typeof style === "function" ? style(state) : style),
        }) as React.CSSProperties
      }
      className={cn(
        "group/toggle-group flex w-fit items-center *:focus-visible:z-10 data-vertical:flex-col data-vertical:items-stretch",
        orientation === "horizontal"
          ? "*:pointer-coarse:after:min-w-auto"
          : "*:pointer-coarse:after:min-h-auto",
        !isFused && "gap-[--spacing(var(--gap))]",
        variant === "segmented" && "rounded-lg bg-accent p-0.5",
        isFused && fused[orientation],
        className
      )}
      orientation={orientation}
      {...props}
    >
      <ToggleGroupContext.Provider value={value}>
        {children}
      </ToggleGroupContext.Provider>
    </ToggleGroupPrimitive>
  )
}

function ToggleGroupItem({
  className,
  children,
  variant,
  size,
  ...props
}: TogglePrimitive.Props & VariantProps<typeof toggleVariants>) {
  const context = React.useContext(ToggleGroupContext)
  const resolvedVariant = variant ?? context.variant
  const resolvedSize = size ?? context.size

  return (
    <TogglePrimitive
      data-slot="toggle-group-item"
      data-variant={resolvedVariant}
      data-size={resolvedSize}
      className={cn(
        toggleVariants({ variant: resolvedVariant, size: resolvedSize }),
        className
      )}
      {...props}
    >
      {children}
    </TogglePrimitive>
  )
}

export { ToggleGroup, ToggleGroupItem }
