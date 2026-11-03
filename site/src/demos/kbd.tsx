import { CommandIcon, CornerDownLeftIcon } from "lucide-react"

import { Button } from "@/components/button"
import { Kbd, KbdGroup } from "@/components/kbd"

export const notes =
  "A hint, not a control. Show shortcuts where people already look, like menu rows and tooltips, and only for actions they repeat."

export function Default() {
  return (
    <>
      <Kbd>K</Kbd>
      <Kbd>Esc</Kbd>
      <Kbd><CommandIcon /></Kbd>
      <Kbd><CornerDownLeftIcon /></Kbd>
    </>
  )
}

export function Group() {
  return (
    <KbdGroup>
      <Kbd><CommandIcon /></Kbd>
      <Kbd>Shift</Kbd>
      <Kbd>P</Kbd>
    </KbdGroup>
  )
}

export function InContext() {
  return (
    <>
      <p className="text-muted-foreground text-sm">
        Press <Kbd>/</Kbd> to search threads
      </p>
      <Button variant="outline">
        Send
        <Kbd className="-me-1"><CornerDownLeftIcon /></Kbd>
      </Button>
    </>
  )
}
