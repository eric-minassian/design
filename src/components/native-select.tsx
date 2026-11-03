import * as React from "react"
import { ChevronDownIcon } from "lucide-react"

import { cn } from "@/lib/utils"

type NativeSelectProps = Omit<React.ComponentProps<"select">, "size"> & {
  size?: "sm" | "compact" | "default" | "lg"
}

function NativeSelect({
  className,
  size = "default",
  ...props
}: NativeSelectProps) {
  return (
    <div
      data-slot="native-select-wrapper"
      data-size={size}
      className={cn(
        "group/native-select relative w-fit min-w-36 text-base text-foreground before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-lg)-1px)] not-has-[select:disabled,select:focus-visible,select[aria-invalid=true]]:before:shadow-[0_1px_--theme(--color-black/4%)] has-[select:disabled]:opacity-64 data-[size=compact]:min-w-28 data-[size=compact]:text-xs data-[size=compact]:before:rounded-[calc(var(--radius-md)-1px)] sm:text-sm sm:data-[size=compact]:text-xs dark:not-has-[select:disabled,select:focus-visible,select[aria-invalid=true]]:before:shadow-[0_-1px_--theme(--color-white/6%)]",
        className
      )}
    >
      <select
        data-slot="native-select"
        data-size={size}
        className="h-9 w-full min-w-0 cursor-pointer appearance-none truncate rounded-lg border border-input bg-background not-dark:bg-clip-padding ps-[calc(--spacing(3)-1px)] pe-8 shadow-xs/5 outline-none ring-ring/24 transition-shadow focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-inset disabled:pointer-events-none aria-invalid:border-destructive/36 focus-visible:aria-invalid:border-destructive/64 focus-visible:aria-invalid:ring-destructive/16 data-[size=compact]:h-7 data-[size=compact]:rounded-md data-[size=compact]:ps-[calc(--spacing(2)-1px)] data-[size=compact]:pe-6.5 data-[size=lg]:h-10 data-[size=sm]:h-8 data-[size=sm]:ps-[calc(--spacing(2.5)-1px)] sm:h-8 sm:data-[size=compact]:h-7 sm:data-[size=lg]:h-9 sm:data-[size=sm]:h-7 dark:bg-input/32 dark:aria-invalid:ring-destructive/24 [:disabled,:focus-visible,[aria-invalid=true]]:shadow-none"
        {...props}
      />
      <ChevronDownIcon
        aria-hidden="true"
        data-slot="native-select-icon"
        className="pointer-events-none absolute end-2.5 top-1/2 size-3.5 -translate-y-1/2 select-none text-muted-foreground opacity-70 group-data-[size=compact]/native-select:end-2"
      />
    </div>
  )
}

function NativeSelectOption({
  className,
  ...props
}: React.ComponentProps<"option">) {
  return (
    <option
      data-slot="native-select-option"
      className={cn("bg-[Canvas] text-[CanvasText]", className)}
      {...props}
    />
  )
}

function NativeSelectOptGroup({
  className,
  ...props
}: React.ComponentProps<"optgroup">) {
  return (
    <optgroup
      data-slot="native-select-optgroup"
      className={cn("bg-[Canvas] text-[CanvasText]", className)}
      {...props}
    />
  )
}

export { NativeSelect, NativeSelectOptGroup, NativeSelectOption }
