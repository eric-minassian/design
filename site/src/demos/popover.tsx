import { Button } from "@/components/button"
import { Input } from "@/components/input"
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/popover"

export const notes =
  "For a few controls or a little more detail, right where the user is looking. Anything longer than a short form belongs in a dialog."

export function WithForm() {
  return (
    <Popover>
      <PopoverTrigger render={<Button variant="outline" />}>New branch</PopoverTrigger>
      <PopoverContent>
        <PopoverHeader>
          <PopoverTitle>New branch</PopoverTitle>
          <PopoverDescription>Branches from main at 5f47bdb.</PopoverDescription>
        </PopoverHeader>
        <Input aria-label="Branch name" placeholder="t3/fix-checkout" />
        <div className="flex justify-end gap-2">
          <PopoverClose render={<Button size="sm" variant="ghost" />}>Cancel</PopoverClose>
          <PopoverClose render={<Button size="sm" />}>Create</PopoverClose>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export function Details() {
  return (
    <Popover>
      <PopoverTrigger render={<Button variant="ghost" />}>41k tokens</PopoverTrigger>
      <PopoverContent padding="compact" width="sm">
        <dl className="grid grid-cols-[1fr_auto] gap-x-4 gap-y-1">
          <dt className="text-muted-foreground">Input</dt>
          <dd className="tabular-nums">36,204</dd>
          <dt className="text-muted-foreground">Output</dt>
          <dd className="tabular-nums">4,912</dd>
          <dt className="text-muted-foreground">Cached</dt>
          <dd className="tabular-nums">28,750</dd>
        </dl>
      </PopoverContent>
    </Popover>
  )
}

export function Placement() {
  return (
    <>
      <Popover>
        <PopoverTrigger render={<Button variant="outline" />}>Above</PopoverTrigger>
        <PopoverContent side="top" width="auto">
          Runs on push to main.
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger render={<Button variant="outline" />}>End aligned</PopoverTrigger>
        <PopoverContent align="end" width="auto">
          Runs on push to main.
        </PopoverContent>
      </Popover>
    </>
  )
}
