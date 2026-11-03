import * as React from "react"
import { Menu as MenuPrimitive } from "@base-ui/react/menu"
import { CheckIcon, ChevronRightIcon, SearchIcon } from "lucide-react"

import { buttonVariants } from "@/components/button"
import { Input, type InputProps } from "@/components/input"
import { Spinner } from "@/components/spinner"
import { cn } from "@/lib/utils"

function DropdownMenu({ ...props }: MenuPrimitive.Root.Props) {
  return <MenuPrimitive.Root data-slot="dropdown-menu" {...props} />
}

function DropdownMenuPortal({ ...props }: MenuPrimitive.Portal.Props) {
  return <MenuPrimitive.Portal data-slot="dropdown-menu-portal" {...props} />
}

function DropdownMenuTrigger({ ...props }: MenuPrimitive.Trigger.Props) {
  return <MenuPrimitive.Trigger data-slot="dropdown-menu-trigger" {...props} />
}

function DropdownMenuContent({
  align = "start",
  alignOffset = 0,
  side = "bottom",
  sideOffset = 4,
  anchor,
  collisionAvoidance,
  width = "default",
  className,
  children,
  ...props
}: MenuPrimitive.Popup.Props &
  Pick<
    MenuPrimitive.Positioner.Props,
    | "align"
    | "alignOffset"
    | "anchor"
    | "collisionAvoidance"
    | "side"
    | "sideOffset"
  > & {
    /** `content` hugs the rows instead of holding a minimum width. */
    width?: "default" | "content"
  }) {
  return (
    <MenuPrimitive.Portal>
      <MenuPrimitive.Positioner
        data-slot="dropdown-menu-positioner"
        className="isolate z-[130] outline-none"
        align={align}
        alignOffset={alignOffset}
        anchor={anchor}
        collisionAvoidance={collisionAvoidance}
        side={side}
        sideOffset={sideOffset}
      >
        <MenuPrimitive.Popup
          data-slot="dropdown-menu-content"
          className={cn(
            "dropdown-glass relative flex max-w-[calc(100vw-2rem)] origin-(--transform-origin) rounded-lg text-popover-foreground outline-none transition-[scale,opacity] duration-100 focus:outline-none data-ending-style:scale-98 data-ending-style:opacity-0 data-starting-style:scale-98 data-starting-style:opacity-0",
            width === "content"
              ? "w-max min-w-0"
              : "min-w-[min(10rem,calc(100vw-2rem))]",
            className
          )}
          {...props}
        >
          <div className="max-h-(--available-height) w-full overflow-y-auto p-1">
            {children}
          </div>
        </MenuPrimitive.Popup>
      </MenuPrimitive.Positioner>
    </MenuPrimitive.Portal>
  )
}

/** A menu's filter field: a hairline row that sits flush at the top of the popup. */
function DropdownMenuSearchInput({
  busy = false,
  onKeyDown,
  ...props
}: Omit<InputProps, "className" | "size" | "unstyled"> & { busy?: boolean }) {
  return (
    <div
      data-slot="dropdown-menu-search-input"
      className="min-w-0 shrink-0 px-2 pt-1.5 pb-1"
    >
      <div className="relative -translate-y-px border-b border-border/70 pb-1.5 transition-colors focus-within:border-ring">
        {busy ? (
          <Spinner
            aria-hidden="true"
            size="md"
            tone="muted"
            className="pointer-events-none absolute top-1.5 left-0"
          />
        ) : (
          <SearchIcon
            aria-hidden="true"
            className="pointer-events-none absolute top-1.5 left-0 size-4 shrink-0 text-muted-foreground/55"
          />
        )}
        <Input
          {...props}
          className="rounded-none bg-transparent text-sm [&_input]:h-6.5 [&_input]:ps-5 [&_input]:font-sans [&_input]:leading-6.5"
          size="sm"
          unstyled
          onKeyDown={(event) => {
            // Menu typeahead would otherwise take the letters; arrows still reach the items.
            if (event.key !== "ArrowDown" && event.key !== "Escape") {
              event.stopPropagation()
            }
            onKeyDown?.(event)
          }}
        />
      </div>
    </div>
  )
}

function DropdownMenuGroup({ ...props }: MenuPrimitive.Group.Props) {
  return <MenuPrimitive.Group data-slot="dropdown-menu-group" {...props} />
}

function DropdownMenuLabel({
  className,
  inset,
  ...props
}: MenuPrimitive.GroupLabel.Props & {
  inset?: boolean
}) {
  return (
    <MenuPrimitive.GroupLabel
      data-slot="dropdown-menu-label"
      data-inset={inset}
      className={cn(
        "px-2 py-1.5 font-medium text-muted-foreground text-xs data-inset:ps-9 sm:data-inset:ps-8",
        className
      )}
      {...props}
    />
  )
}

function DropdownMenuItem({
  className,
  inset,
  density = "default",
  variant = "default",
  ...props
}: MenuPrimitive.Item.Props & {
  inset?: boolean
  density?: "default" | "touch"
  variant?: "default" | "destructive" | "ghost"
}) {
  return (
    <MenuPrimitive.Item
      data-slot="dropdown-menu-item"
      data-density={density}
      data-inset={inset}
      data-variant={variant}
      className={cn(
        "flex min-h-8 cursor-pointer select-none items-center gap-2 rounded-sm px-2 py-1 text-base text-foreground outline-none data-disabled:pointer-events-none data-disabled:cursor-not-allowed data-highlighted:bg-accent data-inset:ps-9 data-[variant=destructive]:text-destructive-foreground data-highlighted:text-accent-foreground data-[variant=destructive]:data-highlighted:bg-destructive/8 data-[variant=destructive]:data-highlighted:text-destructive-foreground data-disabled:opacity-64 sm:min-h-7 sm:text-sm sm:data-inset:ps-8 dark:data-[variant=destructive]:data-highlighted:bg-destructive/16 [&>svg]:-mx-0.5 [&>svg:not([class*='opacity-'])]:opacity-80 [&>svg:not([class*='size-'])]:size-4.5 sm:[&>svg:not([class*='size-'])]:size-4 [&>svg:not([class*='text-'])]:text-muted-foreground data-[variant=destructive]:[&>svg:not([class*='text-'])]:text-current [&>svg]:pointer-events-none [&>svg]:shrink-0",
        variant === "ghost" &&
          buttonVariants({
            variant: "ghost",
            size: "compact",
            className: "h-auto min-h-7 w-full sm:text-xs",
          }),
        density === "touch" && "min-h-10 sm:min-h-10",
        className
      )}
      {...props}
    />
  )
}

function DropdownMenuSub({ ...props }: MenuPrimitive.SubmenuRoot.Props) {
  return <MenuPrimitive.SubmenuRoot data-slot="dropdown-menu-sub" {...props} />
}

function DropdownMenuSubTrigger({
  className,
  inset,
  density = "default",
  children,
  ...props
}: MenuPrimitive.SubmenuTrigger.Props & {
  inset?: boolean
  density?: "default" | "touch"
}) {
  return (
    <MenuPrimitive.SubmenuTrigger
      data-slot="dropdown-menu-sub-trigger"
      data-density={density}
      data-inset={inset}
      className={cn(
        // Exclude the last SVG so leading-icon margin rules cannot remove the chevron's ms-auto alignment.
        "flex min-h-8 cursor-pointer select-none items-center gap-2 rounded-sm px-2 py-1 text-base text-foreground outline-none data-disabled:pointer-events-none data-disabled:cursor-not-allowed data-highlighted:bg-accent data-popup-open:bg-accent data-inset:ps-9 data-highlighted:text-accent-foreground data-popup-open:text-accent-foreground data-disabled:opacity-64 sm:min-h-7 sm:text-sm sm:data-inset:ps-8 [&>svg:not(:last-child)]:-mx-0.5 [&>svg:not(:last-child):not([class*='opacity-'])]:opacity-80 [&_svg:not([class*='size-'])]:size-4.5 sm:[&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground [&_svg]:pointer-events-none [&>svg]:shrink-0",
        density === "touch" && "min-h-10 sm:min-h-10",
        className
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="-me-0.5 ms-auto opacity-80" />
    </MenuPrimitive.SubmenuTrigger>
  )
}

function DropdownMenuSubContent({
  align = "start",
  alignOffset,
  side = "inline-end",
  sideOffset = 0,
  ...props
}: React.ComponentProps<typeof DropdownMenuContent>) {
  return (
    <DropdownMenuContent
      data-slot="dropdown-menu-sub-content"
      align={align}
      // The popup's padding and border, so the first row lines up with its trigger.
      alignOffset={alignOffset ?? (align !== "center" ? -5 : undefined)}
      side={side}
      sideOffset={sideOffset}
      {...props}
    />
  )
}

function DropdownMenuCheckboxItem({
  className,
  children,
  checked,
  inset,
  variant = "default",
  ...props
}: MenuPrimitive.CheckboxItem.Props & {
  inset?: boolean
  variant?: "default" | "icon" | "switch"
}) {
  return (
    <MenuPrimitive.CheckboxItem
      data-slot="dropdown-menu-checkbox-item"
      data-inset={inset}
      className={cn(
        "group/menu-checkbox grid min-h-8 cursor-pointer select-none items-center gap-2 rounded-sm py-1 ps-2 text-base text-foreground outline-none data-disabled:pointer-events-none data-disabled:cursor-not-allowed data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:opacity-64 sm:min-h-7 sm:text-sm [&_svg:not([class*='size-'])]:size-4.5 sm:[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        variant === "switch"
          ? "grid-cols-[1fr_auto] gap-4 pe-1.5"
          : "grid-cols-[1rem_minmax(0,1fr)] pe-4",
        variant === "icon" && "grid-cols-[0.625rem_minmax(0,1fr)]",
        className
      )}
      checked={checked}
      {...props}
    >
      {variant === "switch" ? (
        <>
          <span className="col-start-1">{children}</span>
          <MenuPrimitive.CheckboxItemIndicator
            data-slot="dropdown-menu-checkbox-item-indicator"
            className="inline-flex h-[calc(var(--thumb-size)+2px)] w-[calc(var(--thumb-size)*2-2px)] shrink-0 items-center rounded-full p-px inset-shadow-[0_1px_--theme(--color-black/4%)] outline-none transition-[background-color,box-shadow] duration-200 [--thumb-size:--spacing(4)] data-checked:bg-primary data-disabled:opacity-64 data-unchecked:bg-input sm:[--thumb-size:--spacing(3)]"
            keepMounted
          >
            <span className="pointer-events-none block aspect-square h-full origin-left rounded-(--thumb-size) bg-white shadow-sm/5 [transition:translate_.15s,border-radius_.15s,scale_.1s_.1s,transform-origin_.15s] group-data-checked/menu-checkbox:origin-[var(--thumb-size)_50%] group-data-checked/menu-checkbox:translate-x-[calc(var(--thumb-size)-4px)] group-active/menu-checkbox:scale-x-110 group-active/menu-checkbox:rounded-[var(--thumb-size)/calc(var(--thumb-size)*1.10)]" />
          </MenuPrimitive.CheckboxItemIndicator>
        </>
      ) : (
        <>
          <MenuPrimitive.CheckboxItemIndicator
            data-slot="dropdown-menu-checkbox-item-indicator"
            className={cn("col-start-1", variant === "icon" && "-mx-0.5")}
          >
            <svg
              className={variant === "icon" ? "size-3.5" : undefined}
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.75"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5.252 12.7 10.2 18.63 18.748 5.37" />
            </svg>
          </MenuPrimitive.CheckboxItemIndicator>
          <span className="col-start-2">{children}</span>
        </>
      )}
    </MenuPrimitive.CheckboxItem>
  )
}

function DropdownMenuRadioGroup({ ...props }: MenuPrimitive.RadioGroup.Props) {
  return (
    <MenuPrimitive.RadioGroup
      data-slot="dropdown-menu-radio-group"
      {...props}
    />
  )
}

function DropdownMenuRadioItem({
  className,
  children,
  inset,
  hideIndicator = false,
  ...props
}: MenuPrimitive.RadioItem.Props & {
  inset?: boolean
  /** Leave only the row fill to mark the selection. */
  hideIndicator?: boolean
}) {
  return (
    <MenuPrimitive.RadioItem
      data-slot="dropdown-menu-radio-item"
      data-inset={inset}
      className={cn(
        "flex min-h-8 cursor-pointer select-none items-center gap-2 rounded-sm px-2 py-1 text-base text-foreground outline-none data-checked:bg-foreground/[0.08] data-disabled:pointer-events-none data-disabled:cursor-not-allowed data-highlighted:bg-accent data-inset:ps-9 data-highlighted:text-accent-foreground data-disabled:opacity-64 sm:min-h-7 sm:text-sm sm:data-inset:ps-8 [&_svg:not([class*='size-'])]:size-4.5 sm:[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      )}
      {...props}
    >
      <span className="min-w-0 flex-1">{children}</span>
      {!hideIndicator && <DropdownMenuRadioItemIndicator />}
    </MenuPrimitive.RadioItem>
  )
}

function DropdownMenuRadioItemIndicator({
  className,
  children,
  ...props
}: MenuPrimitive.RadioItemIndicator.Props) {
  return (
    <MenuPrimitive.RadioItemIndicator
      aria-hidden
      data-slot="dropdown-menu-radio-item-indicator"
      className={cn("flex shrink-0", className)}
      {...props}
    >
      {children ?? <CheckIcon className="size-3.5" />}
    </MenuPrimitive.RadioItemIndicator>
  )
}

function DropdownMenuSeparator({
  className,
  ...props
}: MenuPrimitive.Separator.Props) {
  return (
    <MenuPrimitive.Separator
      data-slot="dropdown-menu-separator"
      className={cn("mx-2 my-1 h-px bg-border", className)}
      {...props}
    />
  )
}

function DropdownMenuShortcut({
  className,
  ...props
}: React.ComponentProps<"kbd">) {
  return (
    <kbd
      data-slot="dropdown-menu-shortcut"
      className={cn(
        "ms-auto font-medium font-sans text-secondary-label text-xs tracking-widest",
        className
      )}
      {...props}
    />
  )
}

export {
  DropdownMenu,
  DropdownMenuPortal,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuSearchInput,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuRadioItemIndicator,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
}
