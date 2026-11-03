import { Button } from "@/components/button"
import { Input } from "@/components/input"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetPanel,
  SheetTitle,
  SheetTrigger,
} from "@/components/sheet"

export const notes =
  "Use a sheet for side work that benefits from keeping the thread in view, like settings or a diff. Reach for a dialog when the rest of the window should wait."

export function Right() {
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>Environment</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Environment</SheetTitle>
          <SheetDescription>Variables injected into every agent run on this branch.</SheetDescription>
        </SheetHeader>
        <SheetPanel>
          <Input aria-label="DATABASE_URL" defaultValue="postgres://localhost:5432/t3" font="mono" />
          <Input aria-label="OPENAI_BASE_URL" defaultValue="https://api.openai.com/v1" font="mono" />
          <Input aria-label="LOG_LEVEL" defaultValue="debug" font="mono" />
        </SheetPanel>
        <SheetFooter>
          <SheetClose render={<Button variant="ghost" />}>Cancel</SheetClose>
          <SheetClose render={<Button />}>Save</SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

export function Inset() {
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>Thread details</SheetTrigger>
      <SheetContent variant="inset">
        <SheetHeader>
          <SheetTitle>Thread details</SheetTitle>
          <SheetDescription>Claude Opus on t3/checkout-flake, 12 commits ahead.</SheetDescription>
        </SheetHeader>
        <SheetPanel className="text-sm">
          <p className="text-muted-foreground">Started 2 hours ago from issue #482. The agent has used 41k tokens across 6 turns.</p>
        </SheetPanel>
        <SheetFooter>
          <SheetClose render={<Button variant="outline" />}>Close</SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

export function Sides() {
  return (
    <>
      <Sheet>
        <SheetTrigger render={<Button variant="outline" />}>Left</SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Projects</SheetTitle>
            <SheetDescription>Switch which repository this window points at.</SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
      <Sheet>
        <SheetTrigger render={<Button variant="outline" />}>Top</SheetTrigger>
        <SheetContent side="top">
          <SheetHeader>
            <SheetTitle>Update available</SheetTitle>
            <SheetDescription>Version 0.14 is ready to install on restart.</SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
      <Sheet>
        <SheetTrigger render={<Button variant="outline" />}>Bottom</SheetTrigger>
        <SheetContent side="bottom">
          <SheetHeader>
            <SheetTitle>Terminal</SheetTitle>
            <SheetDescription>pnpm test --filter checkout is still running.</SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  )
}
