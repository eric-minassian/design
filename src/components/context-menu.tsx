"use client"

import * as React from "react"
import { ContextMenu as ContextMenuPrimitive } from "@base-ui/react/context-menu"

import {
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "@/components/dropdown-menu"
import { cn } from "@/lib/utils"

// Base UI's context menu parts are its menu parts, so the rows are shared with
// the dropdown and only the root and trigger differ.

function ContextMenu({ ...props }: ContextMenuPrimitive.Root.Props) {
  return <ContextMenuPrimitive.Root data-slot="context-menu" {...props} />
}

function ContextMenuPortal({ ...props }: ContextMenuPrimitive.Portal.Props) {
  return (
    <ContextMenuPrimitive.Portal data-slot="context-menu-portal" {...props} />
  )
}

function ContextMenuTrigger({
  className,
  ...props
}: ContextMenuPrimitive.Trigger.Props) {
  return (
    <ContextMenuPrimitive.Trigger
      data-slot="context-menu-trigger"
      className={cn("select-none", className)}
      {...props}
    />
  )
}

function ContextMenuContent({
  align = "start",
  alignOffset = 4,
  side = "right",
  sideOffset = 0,
  ...props
}: React.ComponentProps<typeof DropdownMenuContent>) {
  return (
    <DropdownMenuContent
      data-slot="context-menu-content"
      align={align}
      alignOffset={alignOffset}
      side={side}
      sideOffset={sideOffset}
      {...props}
    />
  )
}

function ContextMenuGroup({
  ...props
}: React.ComponentProps<typeof DropdownMenuGroup>) {
  return <DropdownMenuGroup data-slot="context-menu-group" {...props} />
}

function ContextMenuLabel({
  ...props
}: React.ComponentProps<typeof DropdownMenuLabel>) {
  return <DropdownMenuLabel data-slot="context-menu-label" {...props} />
}

function ContextMenuItem({
  ...props
}: React.ComponentProps<typeof DropdownMenuItem>) {
  return <DropdownMenuItem data-slot="context-menu-item" {...props} />
}

function ContextMenuSub({
  ...props
}: React.ComponentProps<typeof DropdownMenuSub>) {
  return <DropdownMenuSub data-slot="context-menu-sub" {...props} />
}

function ContextMenuSubTrigger({
  ...props
}: React.ComponentProps<typeof DropdownMenuSubTrigger>) {
  return (
    <DropdownMenuSubTrigger data-slot="context-menu-sub-trigger" {...props} />
  )
}

function ContextMenuSubContent({
  ...props
}: React.ComponentProps<typeof DropdownMenuSubContent>) {
  return (
    <DropdownMenuSubContent data-slot="context-menu-sub-content" {...props} />
  )
}

function ContextMenuCheckboxItem({
  ...props
}: React.ComponentProps<typeof DropdownMenuCheckboxItem>) {
  return (
    <DropdownMenuCheckboxItem
      data-slot="context-menu-checkbox-item"
      {...props}
    />
  )
}

function ContextMenuRadioGroup({
  ...props
}: React.ComponentProps<typeof DropdownMenuRadioGroup>) {
  return (
    <DropdownMenuRadioGroup data-slot="context-menu-radio-group" {...props} />
  )
}

function ContextMenuRadioItem({
  ...props
}: React.ComponentProps<typeof DropdownMenuRadioItem>) {
  return <DropdownMenuRadioItem data-slot="context-menu-radio-item" {...props} />
}

function ContextMenuSeparator({
  ...props
}: React.ComponentProps<typeof DropdownMenuSeparator>) {
  return <DropdownMenuSeparator data-slot="context-menu-separator" {...props} />
}

function ContextMenuShortcut({
  ...props
}: React.ComponentProps<typeof DropdownMenuShortcut>) {
  return <DropdownMenuShortcut data-slot="context-menu-shortcut" {...props} />
}

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
}
