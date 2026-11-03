import { NavigationMenu as NavigationMenuPrimitive } from "@base-ui/react/navigation-menu"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { ChevronDownIcon } from "lucide-react"

function NavigationMenu({
  align = "start",
  className,
  children,
  ...props
}: NavigationMenuPrimitive.Root.Props &
  Pick<NavigationMenuPrimitive.Positioner.Props, "align">) {
  return (
    <NavigationMenuPrimitive.Root
      data-slot="navigation-menu"
      className={cn(
        "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
        className
      )}
      {...props}
    >
      {children}
      <NavigationMenuPositioner align={align} />
    </NavigationMenuPrimitive.Root>
  )
}

function NavigationMenuList({
  className,
  ...props
}: React.ComponentPropsWithRef<typeof NavigationMenuPrimitive.List>) {
  return (
    <NavigationMenuPrimitive.List
      data-slot="navigation-menu-list"
      className={cn(
        "group flex flex-1 list-none items-center justify-center gap-0.5",
        className
      )}
      {...props}
    />
  )
}

function NavigationMenuItem({
  className,
  ...props
}: React.ComponentPropsWithRef<typeof NavigationMenuPrimitive.Item>) {
  return (
    <NavigationMenuPrimitive.Item
      data-slot="navigation-menu-item"
      className={cn("relative", className)}
      {...props}
    />
  )
}

const navigationMenuTriggerStyle = cva(
  "group/navigation-menu-trigger inline-flex h-9 w-max cursor-pointer items-center justify-center rounded-[var(--control-radius)] px-3 font-medium text-base text-foreground outline-none transition-colors duration-100 hover:bg-accent focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-64 data-popup-open:bg-accent sm:h-8 sm:text-sm"
)

function NavigationMenuTrigger({
  className,
  children,
  ...props
}: NavigationMenuPrimitive.Trigger.Props) {
  return (
    <NavigationMenuPrimitive.Trigger
      data-slot="navigation-menu-trigger"
      className={cn(navigationMenuTriggerStyle(), "group", className)}
      {...props}
    >
      {children}{" "}
      <ChevronDownIcon
        className="relative top-px ml-1 size-3.5 text-muted-foreground transition-transform duration-200 group-data-popup-open/navigation-menu-trigger:rotate-180 motion-reduce:transition-none"
        aria-hidden="true"
      />
    </NavigationMenuPrimitive.Trigger>
  )
}

function NavigationMenuContent({
  className,
  ...props
}: NavigationMenuPrimitive.Content.Props) {
  return (
    <NavigationMenuPrimitive.Content
      data-slot="navigation-menu-content"
      className={cn(
        "h-full w-auto p-1 text-popover-foreground transition-[opacity,translate] duration-200 ease-drawer data-ending-style:opacity-0 data-starting-style:opacity-0 data-ending-style:data-[activation-direction=left]:translate-x-1/2 data-ending-style:data-[activation-direction=right]:-translate-x-1/2 data-starting-style:data-[activation-direction=left]:-translate-x-1/2 data-starting-style:data-[activation-direction=right]:translate-x-1/2 motion-reduce:transition-none",
        className
      )}
      {...props}
    />
  )
}

function NavigationMenuPositioner({
  className,
  side = "bottom",
  sideOffset = 6,
  align = "start",
  alignOffset = 0,
  ...props
}: NavigationMenuPrimitive.Positioner.Props) {
  return (
    <NavigationMenuPrimitive.Portal>
      <NavigationMenuPrimitive.Positioner
        side={side}
        sideOffset={sideOffset}
        align={align}
        alignOffset={alignOffset}
        className={cn(
          // The ::before bridges the gap under the trigger, so the popup survives the pointer crossing it.
          "isolate z-50 h-(--positioner-height) w-(--positioner-width) max-w-(--available-width) transition-[top,left,right,bottom] duration-200 ease-drawer before:absolute data-instant:transition-none data-[side=bottom]:before:inset-x-0 data-[side=bottom]:before:-top-2 data-[side=bottom]:before:h-2 motion-reduce:transition-none",
          className
        )}
        {...props}
      >
        <NavigationMenuPrimitive.Popup
          data-slot="navigation-menu-popup"
          className="dropdown-glass relative h-(--popup-height) w-(--popup-width) origin-(--transform-origin) rounded-lg text-popover-foreground outline-none transition-[scale,opacity,width,height] duration-200 ease-drawer data-ending-style:scale-98 data-ending-style:opacity-0 data-ending-style:duration-100 data-starting-style:scale-98 data-starting-style:opacity-0 motion-reduce:transition-none"
        >
          <NavigationMenuPrimitive.Viewport
            data-slot="navigation-menu-viewport"
            className="relative size-full overflow-hidden rounded-[inherit]"
          />
        </NavigationMenuPrimitive.Popup>
      </NavigationMenuPrimitive.Positioner>
    </NavigationMenuPrimitive.Portal>
  )
}

function NavigationMenuLink({
  className,
  ...props
}: NavigationMenuPrimitive.Link.Props) {
  return (
    <NavigationMenuPrimitive.Link
      data-slot="navigation-menu-link"
      className={cn(
        "flex min-h-9 cursor-pointer items-center gap-2 rounded-[var(--control-radius)] px-3 py-1 font-medium text-base outline-none transition-colors duration-100 hover:bg-accent focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background data-active:bg-accent sm:min-h-8 sm:text-sm",
        "in-data-[slot=navigation-menu-content]:min-h-8 in-data-[slot=navigation-menu-content]:rounded-sm in-data-[slot=navigation-menu-content]:px-2 in-data-[slot=navigation-menu-content]:font-normal sm:in-data-[slot=navigation-menu-content]:min-h-7",
        "[&_svg:not([class*='opacity-'])]:opacity-80 [&_svg:not([class*='size-'])]:size-4.5 sm:[&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground [&_svg]:shrink-0",
        className
      )}
      {...props}
    />
  )
}

function NavigationMenuIndicator({
  className,
  ...props
}: React.ComponentPropsWithRef<typeof NavigationMenuPrimitive.Icon>) {
  return (
    <NavigationMenuPrimitive.Icon
      data-slot="navigation-menu-indicator"
      className={cn(
        "top-full z-1 flex h-1.5 items-end justify-center overflow-hidden data-ending-style:opacity-0 data-starting-style:opacity-0",
        className
      )}
      {...props}
    >
      <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border" />
    </NavigationMenuPrimitive.Icon>
  )
}

export {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuPositioner,
}
