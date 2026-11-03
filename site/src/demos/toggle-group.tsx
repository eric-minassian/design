import * as React from "react"
import {
  AlignCenterIcon,
  AlignLeftIcon,
  AlignRightIcon,
  BotIcon,
  CodeIcon,
  EyeIcon,
  GitCompareIcon,
  TerminalIcon,
} from "lucide-react"

import { ToggleGroup, ToggleGroupItem } from "@/components/toggle-group"

export const notes =
  "Reach for the segmented look when switching a view: the tray keeps it quiet and the pressed tab lifts. Use outline when the items are tools rather than tabs."

export function Segmented() {
  const [view, setView] = React.useState(["diff"])

  return (
    <ToggleGroup
      value={view}
      variant="segmented"
      onValueChange={(next) => {
        if (next.length > 0) setView(next)
      }}
    >
      <ToggleGroupItem value="chat">Chat</ToggleGroupItem>
      <ToggleGroupItem value="diff">Diff</ToggleGroupItem>
      <ToggleGroupItem value="terminal">Terminal</ToggleGroupItem>
    </ToggleGroup>
  )
}

export function SegmentedWithIcons() {
  return (
    <ToggleGroup defaultValue={["code"]} size="sm" variant="segmented">
      <ToggleGroupItem className="px-2.5" value="code">
        <CodeIcon />
        Code
      </ToggleGroupItem>
      <ToggleGroupItem className="px-2.5" value="preview">
        <EyeIcon />
        Preview
      </ToggleGroupItem>
    </ToggleGroup>
  )
}

export function Outline() {
  return (
    <ToggleGroup defaultValue={["left"]} variant="outline">
      <ToggleGroupItem aria-label="Align left" value="left">
        <AlignLeftIcon />
      </ToggleGroupItem>
      <ToggleGroupItem aria-label="Align center" value="center">
        <AlignCenterIcon />
      </ToggleGroupItem>
      <ToggleGroupItem aria-label="Align right" value="right">
        <AlignRightIcon />
      </ToggleGroupItem>
    </ToggleGroup>
  )
}

export function Multiple() {
  return (
    <ToggleGroup defaultValue={["agents", "diffs"]} multiple>
      <ToggleGroupItem aria-label="Agents" value="agents">
        <BotIcon />
      </ToggleGroupItem>
      <ToggleGroupItem aria-label="Diffs" value="diffs">
        <GitCompareIcon />
      </ToggleGroupItem>
      <ToggleGroupItem aria-label="Terminal" value="terminal">
        <TerminalIcon />
      </ToggleGroupItem>
    </ToggleGroup>
  )
}

export function Vertical() {
  return (
    <>
      <ToggleGroup defaultValue={["agents"]} orientation="vertical" variant="outline">
        <ToggleGroupItem aria-label="Agents" value="agents">
          <BotIcon />
        </ToggleGroupItem>
        <ToggleGroupItem aria-label="Diffs" value="diffs">
          <GitCompareIcon />
        </ToggleGroupItem>
        <ToggleGroupItem aria-label="Terminal" value="terminal">
          <TerminalIcon />
        </ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup defaultValue={["diff"]} orientation="vertical" variant="segmented">
        <ToggleGroupItem value="chat">Chat</ToggleGroupItem>
        <ToggleGroupItem value="diff">Diff</ToggleGroupItem>
        <ToggleGroupItem value="terminal">Terminal</ToggleGroupItem>
      </ToggleGroup>
    </>
  )
}

export function Disabled() {
  return (
    <ToggleGroup defaultValue={["chat"]} disabled variant="segmented">
      <ToggleGroupItem value="chat">Chat</ToggleGroupItem>
      <ToggleGroupItem value="diff">Diff</ToggleGroupItem>
    </ToggleGroup>
  )
}
