import { ArrowUpIcon, AtSignIcon, CopyIcon, PaperclipIcon, SearchIcon } from "lucide-react"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/input-group"
import { Kbd } from "@/components/kbd"

export const notes =
  "Attach things to an input instead of placing them beside it, so focus and invalid states read as one control."

export function WithIcon() {
  return (
    <InputGroup className="max-w-xs">
      <InputGroupAddon>
        <SearchIcon />
      </InputGroupAddon>
      <InputGroupInput placeholder="Search threads" />
      <InputGroupAddon align="inline-end">
        <Kbd>⌘K</Kbd>
      </InputGroupAddon>
    </InputGroup>
  )
}

export function WithText() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-3">
      <InputGroup>
        <InputGroupAddon>
          <InputGroupText>github.com/</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput defaultValue="pingdotgg/t3code" />
      </InputGroup>
      <InputGroup>
        <InputGroupInput className="text-right tabular-nums" defaultValue="4096" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>tokens</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}

export function WithButton() {
  return (
    <InputGroup className="max-w-xs">
      <InputGroupInput defaultValue="git checkout t3/fix-sidebar" font="mono" readOnly />
      <InputGroupAddon align="inline-end">
        <InputGroupButton aria-label="Copy" size="icon-xs">
          <CopyIcon />
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  )
}

export function Composer() {
  return (
    <InputGroup className="max-w-md">
      <InputGroupTextarea placeholder="Ask anything, @ to mention files" />
      <InputGroupAddon align="block-end">
        <InputGroupButton aria-label="Attach" size="icon-xs">
          <PaperclipIcon />
        </InputGroupButton>
        <InputGroupButton aria-label="Mention a file" size="icon-xs">
          <AtSignIcon />
        </InputGroupButton>
        <InputGroupButton aria-label="Send" className="ms-auto" size="icon-xs" variant="default">
          <ArrowUpIcon />
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  )
}

export function Variants() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-3">
      <InputGroup variant="ghost">
        <InputGroupAddon>
          <SearchIcon />
        </InputGroupAddon>
        <InputGroupInput placeholder="Ghost, for toolbars" />
      </InputGroup>
      <InputGroup variant="popover">
        <InputGroupAddon>
          <SearchIcon />
        </InputGroupAddon>
        <InputGroupInput placeholder="Popover, for floating bars" />
      </InputGroup>
    </div>
  )
}

export function States() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-3">
      <InputGroup>
        <InputGroupAddon>
          <SearchIcon />
        </InputGroupAddon>
        <InputGroupInput disabled placeholder="Indexing project" />
      </InputGroup>
      <InputGroup>
        <InputGroupAddon>
          <InputGroupText>https://</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput aria-invalid defaultValue="not a url" />
      </InputGroup>
    </div>
  )
}
