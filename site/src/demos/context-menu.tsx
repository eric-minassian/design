import * as React from "react"
import { ClipboardIcon, FileIcon, GitCommitIcon, Trash2Icon } from "lucide-react"

import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/context-menu"

export const notes =
  "A shortcut for people who already know what they want. Everything in here must also be reachable some other way, because nobody can see it until they right-click."

export function FileRow() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex w-72 items-center gap-2 rounded-lg border border-dashed px-3 py-6 font-mono text-muted-foreground text-xs">
        <FileIcon className="size-4" />
        src/checkout/payment.ts
      </ContextMenuTrigger>
      <ContextMenuContent className="w-52">
        <ContextMenuItem>
          <ClipboardIcon />
          Copy path
          <ContextMenuShortcut>⌘⇧C</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSub>
          <ContextMenuSubTrigger>
            <GitCommitIcon />
            Stage
          </ContextMenuSubTrigger>
          <ContextMenuSubContent>
            <ContextMenuItem>Whole file</ContextMenuItem>
            <ContextMenuItem>Selected hunk</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSeparator />
        <ContextMenuItem variant="destructive">
          <Trash2Icon />
          Discard changes
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}

export function ViewOptions() {
  const [wrap, setWrap] = React.useState(true)
  const [layout, setLayout] = React.useState("split")
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex w-72 items-center justify-center rounded-lg border border-dashed px-3 py-6 text-muted-foreground text-sm">
        Right-click the diff
      </ContextMenuTrigger>
      <ContextMenuContent className="w-48">
        <ContextMenuGroup>
          <ContextMenuLabel>Layout</ContextMenuLabel>
          <ContextMenuRadioGroup value={layout} onValueChange={setLayout}>
            <ContextMenuRadioItem value="split">Side by side</ContextMenuRadioItem>
            <ContextMenuRadioItem value="unified">Unified</ContextMenuRadioItem>
          </ContextMenuRadioGroup>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuCheckboxItem checked={wrap} variant="switch" onCheckedChange={setWrap}>
          Wrap lines
        </ContextMenuCheckboxItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}
