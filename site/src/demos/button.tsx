import { ArrowUpIcon, PlusIcon, SettingsIcon, Trash2Icon } from "lucide-react"

import { Button } from "@/components/button"
import { Spinner } from "@/components/spinner"

export const notes =
  "Solid means act now, so a screen gets one. Reach for ghost and outline for everything around it, and compact in toolbars."

export function Variants() {
  return (
    <>
      <Button>Commit</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="ghost-muted">Ghost muted</Button>
      <Button variant="link">Link</Button>
    </>
  )
}

export function Destructive() {
  return (
    <>
      <Button variant="destructive">
        <Trash2Icon />
        Delete thread
      </Button>
      <Button variant="destructive-outline">Revoke</Button>
      <Button variant="ghost-destructive">Remove</Button>
      <Button variant="warning-outline">Review changes</Button>
    </>
  )
}

export function Sizes() {
  return (
    <>
      <Button size="micro" variant="outline">Micro</Button>
      <Button size="xs" variant="outline">Extra small</Button>
      <Button size="compact" variant="outline">Compact</Button>
      <Button size="sm" variant="outline">Small</Button>
      <Button variant="outline">Default</Button>
      <Button size="lg" variant="outline">Large</Button>
      <Button size="xl" variant="outline">Extra large</Button>
    </>
  )
}

export function IconOnly() {
  return (
    <>
      <Button aria-label="Add" size="icon-micro" variant="ghost"><PlusIcon /></Button>
      <Button aria-label="Add" size="icon-xs" variant="ghost"><PlusIcon /></Button>
      <Button aria-label="Settings" size="icon-sm" variant="outline"><SettingsIcon /></Button>
      <Button aria-label="Send" size="icon"><ArrowUpIcon /></Button>
      <Button aria-label="Send" size="icon-lg" variant="glass"><ArrowUpIcon /></Button>
    </>
  )
}

export function States() {
  return (
    <>
      <Button disabled>Disabled</Button>
      <Button disabled variant="outline">Disabled</Button>
      <Button disabled>
        <Spinner />
        Pushing
      </Button>
    </>
  )
}
