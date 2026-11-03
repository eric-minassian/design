"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

function Label({ className, ...props }: React.ComponentProps<"label">) {
  return (
    <label
      data-slot="label"
      className={cn(
        "inline-flex select-none items-center gap-2 font-medium text-base/4.5 text-foreground has-[:disabled,[data-disabled]]:text-muted-foreground group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-64 peer-disabled:cursor-not-allowed peer-disabled:opacity-64 sm:text-sm/4",
        className
      )}
      {...props}
    />
  )
}

export { Label }
