import { ChevronDownIcon, GitBranchIcon, MinusIcon, PlusIcon, RefreshCwIcon } from "lucide-react"

import { Button } from "@/components/button"
import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from "@/components/button-group"
import { Input } from "@/components/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/select"

export const notes =
  "Fuse controls that act on the same thing. Outline buttons bring their own hairline; solid ones need a ButtonGroupSeparator so the seam stays visible."

export function Default() {
  return (
    <ButtonGroup>
      <Button variant="outline">Fetch</Button>
      <Button variant="outline">Pull</Button>
      <Button variant="outline">Push</Button>
    </ButtonGroup>
  )
}

export function SplitButton() {
  return (
    <>
      <ButtonGroup>
        <Button>Commit</Button>
        <ButtonGroupSeparator />
        <Button aria-label="More commit options" size="icon">
          <ChevronDownIcon />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline">
          <RefreshCwIcon />
          Sync
        </Button>
        <ButtonGroupSeparator />
        <Button aria-label="More sync options" size="icon" variant="outline">
          <ChevronDownIcon />
        </Button>
      </ButtonGroup>
    </>
  )
}

export function WithInput() {
  return (
    <ButtonGroup className="w-full max-w-sm">
      <ButtonGroupText>
        <GitBranchIcon />
        origin/
      </ButtonGroupText>
      <Input defaultValue="t3/fix-sidebar" />
      <Button variant="outline">Checkout</Button>
    </ButtonGroup>
  )
}

export function WithSelect() {
  const remotes = [
    { label: "origin", value: "origin" },
    { label: "upstream", value: "upstream" },
  ]

  return (
    <ButtonGroup>
      <Select defaultValue="origin" items={remotes}>
        <SelectTrigger className="w-32">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {remotes.map((remote) => (
            <SelectItem key={remote.value} value={remote.value}>
              {remote.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Button variant="outline">Push</Button>
    </ButtonGroup>
  )
}

export function Vertical() {
  return (
    <ButtonGroup orientation="vertical">
      <Button aria-label="Zoom in" size="icon" variant="outline">
        <PlusIcon />
      </Button>
      <Button aria-label="Zoom out" size="icon" variant="outline">
        <MinusIcon />
      </Button>
    </ButtonGroup>
  )
}

export function Nested() {
  return (
    <ButtonGroup>
      <ButtonGroup>
        <Button size="sm" variant="outline">Older</Button>
        <Button size="sm" variant="outline">Newer</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button size="sm" variant="outline">Revert</Button>
      </ButtonGroup>
    </ButtonGroup>
  )
}
