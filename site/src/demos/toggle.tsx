import { BoldIcon, GitCompareIcon, ListTreeIcon, WrapTextIcon } from "lucide-react"

import { Toggle } from "@/components/toggle"

export const notes =
  "A toggle is on or off and changes the view in place. If it writes a setting, use a switch; if it picks between options, use a toggle group."

export function Default() {
  return (
    <>
      <Toggle aria-label="Wrap lines" defaultPressed>
        <WrapTextIcon />
      </Toggle>
      <Toggle aria-label="Show tree">
        <ListTreeIcon />
      </Toggle>
      <Toggle>
        <GitCompareIcon />
        Diff
      </Toggle>
    </>
  )
}

export function Variants() {
  return (
    <>
      <Toggle defaultPressed variant="outline">
        <WrapTextIcon />
        Outline
      </Toggle>
      <Toggle defaultPressed variant="ghost">
        Ghost
      </Toggle>
      <Toggle defaultPressed variant="pill">
        Pill
      </Toggle>
      <Toggle variant="pill">Unpressed pill</Toggle>
    </>
  )
}

export function Sizes() {
  return (
    <>
      <Toggle aria-label="Extra small" defaultPressed size="xs" variant="outline">
        <BoldIcon />
      </Toggle>
      <Toggle aria-label="Compact" defaultPressed size="compact" variant="outline">
        <BoldIcon />
      </Toggle>
      <Toggle aria-label="Small" defaultPressed size="sm" variant="outline">
        <BoldIcon />
      </Toggle>
      <Toggle aria-label="Default" defaultPressed variant="outline">
        <BoldIcon />
      </Toggle>
      <Toggle aria-label="Large" defaultPressed size="lg" variant="outline">
        <BoldIcon />
      </Toggle>
    </>
  )
}

export function Disabled() {
  return (
    <>
      <Toggle disabled variant="outline">
        Off
      </Toggle>
      <Toggle defaultPressed disabled variant="outline">
        On
      </Toggle>
      <Toggle defaultPressed disabled variant="ghost">
        Ghost
      </Toggle>
    </>
  )
}
