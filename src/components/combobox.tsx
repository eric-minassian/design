"use client"

import * as React from "react"
import { Combobox as ComboboxPrimitive } from "@base-ui/react/combobox"
import { ChevronsUpDownIcon, SearchIcon, XIcon } from "lucide-react"

import { Input, type InputProps } from "@/components/input"
import { cn } from "@/lib/utils"

const Combobox = ComboboxPrimitive.Root

const inputActionClassName =
  "-translate-y-1/2 absolute top-1/2 inline-flex size-8 shrink-0 cursor-pointer items-center justify-center rounded-md border border-transparent opacity-80 outline-none transition-opacity pointer-coarse:after:absolute pointer-coarse:after:min-h-11 pointer-coarse:after:min-w-11 hover:opacity-100 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring has-[+[data-slot=combobox-clear]]:hidden disabled:pointer-events-none sm:size-7 [&_svg:not([class*='size-'])]:size-4.5 sm:[&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0"

function ComboboxValue({ ...props }: ComboboxPrimitive.Value.Props) {
  return <ComboboxPrimitive.Value data-slot="combobox-value" {...props} />
}

function ComboboxTrigger({
  className,
  children,
  ...props
}: ComboboxPrimitive.Trigger.Props) {
  return (
    <ComboboxPrimitive.Trigger
      data-slot="combobox-trigger"
      className={className}
      {...props}
    >
      {children}
      <ChevronsUpDownIcon className="pointer-events-none text-muted-foreground opacity-80" />
    </ComboboxPrimitive.Trigger>
  )
}

function ComboboxClear({ className, ...props }: ComboboxPrimitive.Clear.Props) {
  return (
    <ComboboxPrimitive.Clear
      data-slot="combobox-clear"
      aria-label="Clear"
      className={className}
      {...props}
    >
      <XIcon className="pointer-events-none" />
    </ComboboxPrimitive.Clear>
  )
}

function ComboboxInput({
  className,
  children,
  disabled = false,
  showTrigger = true,
  showClear = false,
  startAddon,
  size = "default",
  font,
  unstyled = false,
  ...props
}: Omit<ComboboxPrimitive.Input.Props, "size"> &
  Pick<InputProps, "size" | "font" | "unstyled"> & {
    showTrigger?: boolean
    showClear?: boolean
    startAddon?: React.ReactNode
  }) {
  return (
    <div
      data-slot="combobox-input-control"
      className="relative not-has-[>*.w-full]:w-fit w-full text-foreground has-disabled:opacity-64"
    >
      {startAddon && (
        <div
          aria-hidden="true"
          data-slot="combobox-start-addon"
          className="[&_svg]:-mx-0.5 pointer-events-none absolute inset-y-0 start-px z-10 flex items-center ps-[calc(--spacing(3)-1px)] opacity-80 has-[+[data-size=sm]]:ps-[calc(--spacing(2.5)-1px)] [&_svg:not([class*='size-'])]:size-4.5 sm:[&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground"
        >
          {startAddon}
        </div>
      )}
      <ComboboxPrimitive.Input
        data-slot="combobox-input"
        className={cn(
          startAddon &&
            "data-[size=sm]:*:data-[slot=combobox-input]:ps-[calc(--spacing(7.5)-1px)] *:data-[slot=combobox-input]:ps-[calc(--spacing(8.5)-1px)] sm:data-[size=sm]:*:data-[slot=combobox-input]:ps-[calc(--spacing(7)-1px)] sm:*:data-[slot=combobox-input]:ps-[calc(--spacing(8)-1px)]",
          size === "sm"
            ? "has-[+[data-slot=combobox-trigger],+[data-slot=combobox-clear]]:*:data-[slot=combobox-input]:pe-6.5"
            : "has-[+[data-slot=combobox-trigger],+[data-slot=combobox-clear]]:*:data-[slot=combobox-input]:pe-7",
          className
        )}
        disabled={disabled}
        render={
          <Input
            className={cn(
              "has-disabled:opacity-100",
              unstyled && "w-full rounded-none bg-transparent"
            )}
            font={font}
            size={size}
            unstyled={unstyled}
          />
        }
        {...props}
      />
      {showTrigger && (
        <ComboboxTrigger
          className={cn(
            inputActionClassName,
            size === "sm" ? "end-0" : "end-0.5"
          )}
          disabled={disabled}
        />
      )}
      {showClear && (
        <ComboboxClear
          className={cn(
            inputActionClassName,
            size === "sm" ? "end-0" : "end-0.5"
          )}
          disabled={disabled}
        />
      )}
      {children}
    </div>
  )
}

/** A search row for the top of a popup, on a hairline instead of a field surface. */
function ComboboxSearchInput(
  props: React.ComponentProps<typeof ComboboxInput>
) {
  return (
    <div
      data-slot="combobox-search-input"
      className="min-w-0 shrink-0 px-3 pt-2.5"
    >
      <div className="relative -translate-y-px border-border/70 border-b pb-1.5 transition-colors focus-within:border-ring">
        <SearchIcon
          aria-hidden="true"
          className="pointer-events-none absolute top-1.5 left-0 size-4 shrink-0 text-muted-foreground/55"
        />
        <ComboboxInput
          {...props}
          className="[&_input]:h-6.5 [&_input]:w-0 [&_input]:min-w-full [&_input]:ps-5 [&_input]:font-sans [&_input]:leading-6.5"
          showTrigger={false}
          size="sm"
          unstyled
        />
      </div>
    </div>
  )
}

function ComboboxContent({
  className,
  children,
  side = "bottom",
  sideOffset = 4,
  align = "start",
  alignOffset = 0,
  anchor,
  ...props
}: ComboboxPrimitive.Popup.Props &
  Pick<
    ComboboxPrimitive.Positioner.Props,
    "side" | "align" | "sideOffset" | "alignOffset" | "anchor"
  >) {
  return (
    <ComboboxPrimitive.Portal>
      <ComboboxPrimitive.Positioner
        data-slot="combobox-positioner"
        side={side}
        sideOffset={sideOffset}
        align={align}
        alignOffset={alignOffset}
        anchor={anchor}
        className="isolate z-50 select-none"
      >
        <ComboboxPrimitive.Popup
          data-slot="combobox-content"
          data-chips={!!anchor}
          className={cn(
            "group/combobox-content dropdown-glass relative flex max-h-[min(var(--available-height),23rem)] min-w-(--anchor-width) max-w-(--available-width) origin-(--transform-origin) flex-col overflow-hidden rounded-lg text-foreground outline-none transition-[scale,opacity] duration-100 data-ending-style:scale-98 data-ending-style:opacity-0 data-starting-style:scale-98 data-starting-style:opacity-0 *:data-[slot=combobox-input-control]:w-auto *:data-[slot=combobox-input-control]:p-1",
            className
          )}
          {...props}
        >
          {children}
        </ComboboxPrimitive.Popup>
      </ComboboxPrimitive.Positioner>
    </ComboboxPrimitive.Portal>
  )
}

function ComboboxList({ className, ...props }: ComboboxPrimitive.List.Props) {
  return (
    <ComboboxPrimitive.List
      data-slot="combobox-list"
      className={cn(
        "min-h-0 flex-1 overflow-y-auto overscroll-contain not-empty:scroll-py-1 not-empty:p-1",
        className
      )}
      {...props}
    />
  )
}

function ComboboxItem({
  className,
  children,
  selectedFill = true,
  ...props
}: ComboboxPrimitive.Item.Props & {
  /** Off for rows that mark selection themselves, so a fill only means hover or highlight. */
  selectedFill?: boolean
}) {
  return (
    <ComboboxPrimitive.Item
      data-slot="combobox-item"
      className={cn(
        "flex min-h-8 in-data-[side=none]:min-w-[calc(var(--anchor-width)+1.25rem)] cursor-pointer items-center rounded-sm px-2 py-1 text-base outline-none not-data-disabled:hover:bg-foreground/[0.09] data-disabled:pointer-events-none data-disabled:cursor-not-allowed data-[selected]:text-foreground data-highlighted:bg-foreground/[0.09] data-highlighted:text-accent-foreground [&[data-highlighted][data-selected]]:bg-foreground/[0.09] [&[data-highlighted][data-selected]]:text-accent-foreground data-disabled:opacity-64 sm:min-h-7 sm:text-sm [&_svg:not([class*='size-'])]:size-4.5 sm:[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        selectedFill && "data-[selected]:bg-foreground/[0.06]",
        className
      )}
      {...props}
    >
      <div
        data-slot="combobox-item-content"
        className="flex min-w-0 flex-1 items-center gap-2 [&_svg:not([class*='opacity-'])]:opacity-80 [&_svg:not([class*='text-'])]:text-muted-foreground"
      >
        {children}
      </div>
    </ComboboxPrimitive.Item>
  )
}

function ComboboxGroup({ className, ...props }: ComboboxPrimitive.Group.Props) {
  return (
    <ComboboxPrimitive.Group
      data-slot="combobox-group"
      className={className}
      {...props}
    />
  )
}

function ComboboxLabel({
  className,
  ...props
}: ComboboxPrimitive.GroupLabel.Props) {
  return (
    <ComboboxPrimitive.GroupLabel
      data-slot="combobox-label"
      className={cn(
        "px-2 py-1.5 font-medium text-muted-foreground text-xs",
        className
      )}
      {...props}
    />
  )
}

function ComboboxCollection({ ...props }: ComboboxPrimitive.Collection.Props) {
  return (
    <ComboboxPrimitive.Collection data-slot="combobox-collection" {...props} />
  )
}

function ComboboxEmpty({ className, ...props }: ComboboxPrimitive.Empty.Props) {
  return (
    <ComboboxPrimitive.Empty
      data-slot="combobox-empty"
      className={cn(
        "not-empty:p-2 text-center text-base text-muted-foreground sm:text-sm",
        className
      )}
      {...props}
    />
  )
}

function ComboboxStatus({
  className,
  ...props
}: ComboboxPrimitive.Status.Props) {
  return (
    <ComboboxPrimitive.Status
      data-slot="combobox-status"
      className={cn(
        "px-3 py-2 font-medium text-muted-foreground text-xs empty:m-0 empty:p-0",
        className
      )}
      {...props}
    />
  )
}

function ComboboxSeparator({
  className,
  ...props
}: ComboboxPrimitive.Separator.Props) {
  return (
    <ComboboxPrimitive.Separator
      data-slot="combobox-separator"
      className={cn("-mx-1 my-1 h-px bg-border", className)}
      {...props}
    />
  )
}

function ComboboxChips({
  className,
  ...props
}: React.ComponentPropsWithRef<typeof ComboboxPrimitive.Chips> &
  ComboboxPrimitive.Chips.Props) {
  return (
    <ComboboxPrimitive.Chips
      data-slot="combobox-chips"
      className={cn(
        "relative flex min-h-9 w-full flex-wrap items-center gap-1 rounded-lg border border-input bg-background not-dark:bg-clip-padding px-[calc(--spacing(3)-1px)] py-[calc(--spacing(1)-1px)] text-base text-foreground shadow-xs/5 ring-ring/24 transition-shadow before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-lg)-1px)] not-has-disabled:not-focus-within:not-has-aria-invalid:before:shadow-[0_1px_--theme(--color-black/4%)] focus-within:border-ring focus-within:ring-[3px] focus-within:ring-inset has-aria-invalid:border-destructive/36 focus-within:has-aria-invalid:border-destructive/64 focus-within:has-aria-invalid:ring-destructive/16 has-disabled:opacity-64 has-data-[slot=combobox-chip]:ps-[calc(--spacing(1)-1px)] sm:min-h-8 sm:text-sm dark:bg-input/32 dark:has-aria-invalid:ring-destructive/24 dark:not-has-disabled:not-focus-within:not-has-aria-invalid:before:shadow-[0_-1px_--theme(--color-white/6%)] [:focus-within]:shadow-none has-disabled:shadow-none has-aria-invalid:shadow-none",
        className
      )}
      {...props}
    />
  )
}

function ComboboxChip({
  className,
  children,
  showRemove = true,
  ...props
}: ComboboxPrimitive.Chip.Props & {
  showRemove?: boolean
}) {
  return (
    <ComboboxPrimitive.Chip
      data-slot="combobox-chip"
      className={cn(
        "flex h-6 w-fit items-center justify-center gap-0.5 whitespace-nowrap rounded-sm bg-accent ps-1.5 pe-1.5 font-medium text-foreground text-xs outline-none has-data-[slot=combobox-chip-remove]:pe-0.5 has-disabled:pointer-events-none has-disabled:opacity-64 data-highlighted:bg-foreground/[0.09] sm:h-5.5",
        className
      )}
      {...props}
    >
      {children}
      {showRemove && (
        <ComboboxPrimitive.ChipRemove
          data-slot="combobox-chip-remove"
          aria-label="Remove"
          className="flex size-4.5 cursor-pointer items-center justify-center rounded-[3px] text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
        >
          <XIcon className="pointer-events-none size-3" />
        </ComboboxPrimitive.ChipRemove>
      )}
    </ComboboxPrimitive.Chip>
  )
}

function ComboboxChipsInput({
  className,
  ...props
}: ComboboxPrimitive.Input.Props) {
  return (
    <ComboboxPrimitive.Input
      data-slot="combobox-chip-input"
      className={cn(
        "min-w-16 flex-1 bg-transparent ps-1 outline-none placeholder:text-placeholder",
        className
      )}
      {...props}
    />
  )
}

function useComboboxAnchor() {
  return React.useRef<HTMLDivElement | null>(null)
}

const useComboboxFilter = ComboboxPrimitive.useFilter

export {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxClear,
  ComboboxCollection,
  ComboboxContent,
  ComboboxContent as ComboboxPopup,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxLabel,
  ComboboxList,
  ComboboxSearchInput,
  ComboboxSeparator,
  ComboboxStatus,
  ComboboxTrigger,
  ComboboxValue,
  useComboboxAnchor,
  useComboboxFilter,
}
