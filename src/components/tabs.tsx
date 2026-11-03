"use client"

import { Tabs as TabsPrimitive } from "@base-ui/react/tabs"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

function Tabs({
  className,
  orientation = "horizontal",
  ...props
}: TabsPrimitive.Root.Props) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      data-orientation={orientation}
      orientation={orientation}
      className={cn(
        "group/tabs flex gap-3 data-horizontal:flex-col",
        className
      )}
      {...props}
    />
  )
}

const tabsListVariants = cva(
  "group/tabs-list relative inline-flex items-center text-muted-foreground group-data-vertical/tabs:h-fit group-data-vertical/tabs:flex-col",
  {
    variants: {
      variant: {
        default:
          "w-fit justify-center gap-0.5 rounded-lg bg-accent p-0.5 group-data-horizontal/tabs:h-9 sm:group-data-horizontal/tabs:h-8",
        line: "gap-1 border-border group-data-horizontal/tabs:w-full group-data-horizontal/tabs:justify-start group-data-horizontal/tabs:border-b group-data-vertical/tabs:border-r",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function TabsList({
  className,
  variant = "default",
  ...props
}: TabsPrimitive.List.Props & VariantProps<typeof tabsListVariants>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      data-variant={variant}
      className={cn(tabsListVariants({ variant }), className)}
      {...props}
    />
  )
}

function TabsTrigger({ className, ...props }: TabsPrimitive.Tab.Props) {
  return (
    <TabsPrimitive.Tab
      data-slot="tabs-trigger"
      className={cn(
        "relative inline-flex cursor-pointer select-none items-center justify-center gap-1.5 whitespace-nowrap rounded-md border border-transparent px-[calc(--spacing(2.5)-1px)] font-medium text-base text-muted-foreground outline-none transition-[color,background-color,box-shadow] duration-100 hover:text-foreground focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-64 aria-disabled:pointer-events-none aria-disabled:opacity-64 data-active:text-foreground sm:text-sm [&_svg:not([class*='size-'])]:size-4.5 sm:[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        "group-data-horizontal/tabs:h-full group-data-vertical/tabs:h-8 group-data-vertical/tabs:w-full group-data-vertical/tabs:justify-start sm:group-data-vertical/tabs:h-7",
        // Pill tray.
        "group-data-[variant=default]/tabs-list:flex-1 group-data-[variant=default]/tabs-list:hover:bg-background/55 group-data-[variant=default]/tabs-list:data-active:bg-background group-data-[variant=default]/tabs-list:data-active:shadow-xs/10 dark:group-data-[variant=default]/tabs-list:hover:bg-input/32 dark:group-data-[variant=default]/tabs-list:data-active:bg-input/72",
        // Underline.
        "group-data-horizontal/tabs:group-data-[variant=line]/tabs-list:h-9 sm:group-data-horizontal/tabs:group-data-[variant=line]/tabs-list:h-8 group-data-[variant=line]/tabs-list:hover:bg-accent after:pointer-events-none after:absolute after:rounded-full after:bg-primary after:opacity-0 after:transition-opacity group-data-horizontal/tabs:after:inset-x-0 group-data-horizontal/tabs:after:-bottom-px group-data-horizontal/tabs:after:h-0.5 group-data-vertical/tabs:after:inset-y-0 group-data-vertical/tabs:after:-right-px group-data-vertical/tabs:after:w-0.5 group-data-[variant=line]/tabs-list:data-active:after:opacity-100",
        className
      )}
      {...props}
    />
  )
}

function TabsContent({ className, ...props }: TabsPrimitive.Panel.Props) {
  return (
    <TabsPrimitive.Panel
      data-slot="tabs-content"
      className={cn("flex-1 text-sm outline-none", className)}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent, tabsListVariants }
