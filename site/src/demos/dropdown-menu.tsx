import * as React from "react"
import {
  ArchiveIcon,
  CopyIcon,
  EllipsisIcon,
  GitBranchIcon,
  PencilIcon,
  Trash2Icon,
} from "lucide-react"

import { Button } from "@/components/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSearchInput,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/dropdown-menu"

export const notes =
  "For actions you only need occasionally. If one of them gets used constantly, pull it out into a button next to the trigger."

export function Actions() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" />}>Open</DropdownMenuTrigger>
      <DropdownMenuContent className="w-52">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Thread</DropdownMenuLabel>
          <DropdownMenuItem>
            <PencilIcon />
            Rename
            <DropdownMenuShortcut>⌘R</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CopyIcon />
            Duplicate
          </DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <GitBranchIcon />
              Move to branch
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem>main</DropdownMenuItem>
              <DropdownMenuItem>t3/checkout-flake</DropdownMenuItem>
              <DropdownMenuItem>t3/cart-totals</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
          <DropdownMenuItem disabled>
            <ArchiveIcon />
            Archive
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">
          <Trash2Icon />
          Delete
          <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export function Selection() {
  const [model, setModel] = React.useState("opus")
  const [webSearch, setWebSearch] = React.useState(true)
  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" />}>Model</DropdownMenuTrigger>
      <DropdownMenuContent className="w-52">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Model</DropdownMenuLabel>
          <DropdownMenuRadioGroup value={model} onValueChange={setModel}>
            <DropdownMenuRadioItem value="opus">Claude Opus</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="sonnet">Claude Sonnet</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="codex">GPT-5 Codex</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem checked={webSearch} onCheckedChange={setWebSearch}>
          Web search
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export function Switches() {
  const [autoCommit, setAutoCommit] = React.useState(true)
  const [autoPush, setAutoPush] = React.useState(false)
  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button aria-label="Thread settings" size="icon" variant="ghost" />}>
        <EllipsisIcon />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-52">
        <DropdownMenuCheckboxItem
          checked={autoCommit}
          closeOnClick={false}
          variant="switch"
          onCheckedChange={setAutoCommit}
        >
          Commit each turn
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={autoPush}
          closeOnClick={false}
          variant="switch"
          onCheckedChange={setAutoPush}
        >
          Push to origin
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export function Searchable() {
  const branches = ["main", "t3/checkout-flake", "t3/cart-totals", "t3/session-refresh", "release/0.14"]
  const [query, setQuery] = React.useState("")
  const matches = branches.filter((branch) => branch.includes(query.toLowerCase()))
  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" />}>Switch branch</DropdownMenuTrigger>
      <DropdownMenuContent className="w-60">
        <DropdownMenuSearchInput
          aria-label="Filter branches"
          autoFocus
          placeholder="Filter branches"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        {matches.map((branch) => (
          <DropdownMenuItem key={branch}>
            <GitBranchIcon />
            {branch}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
