import { CopyIcon, GitBranchIcon, RotateCcwIcon, TerminalIcon } from "lucide-react"

import { Button } from "@/components/button"
import { Kbd } from "@/components/kbd"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/tooltip"

export const notes =
  "Name what an icon-only button does, and nothing more. If the words matter enough to read twice, they belong on the page."

export function Default() {
  return (
    <Tooltip>
      <TooltipTrigger render={<Button aria-label="Copy" size="icon" variant="outline" />}>
        <CopyIcon />
      </TooltipTrigger>
      <TooltipContent>Copy commit hash</TooltipContent>
    </Tooltip>
  )
}

export function Toolbar() {
  return (
    <TooltipProvider delay={200}>
      <div className="flex items-center gap-1">
        <Tooltip>
          <TooltipTrigger render={<Button aria-label="Branches" size="icon-sm" variant="ghost" />}>
            <GitBranchIcon />
          </TooltipTrigger>
          <TooltipContent>Branches</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger render={<Button aria-label="Terminal" size="icon-sm" variant="ghost" />}>
            <TerminalIcon />
          </TooltipTrigger>
          <TooltipContent>Terminal</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger render={<Button aria-label="Retry" size="icon-sm" variant="ghost" />}>
            <RotateCcwIcon />
          </TooltipTrigger>
          <TooltipContent>Retry last turn</TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  )
}

export function WithShortcut() {
  return (
    <Tooltip>
      <TooltipTrigger render={<Button variant="outline" />}>New thread</TooltipTrigger>
      <TooltipContent side="bottom">
        Start a thread
        <Kbd>⌘N</Kbd>
      </TooltipContent>
    </Tooltip>
  )
}

export function Code() {
  return (
    <Tooltip>
      <TooltipTrigger render={<Button variant="ghost" />}>payment.test.ts</TooltipTrigger>
      <TooltipContent variant="code">src/checkout/__tests__/payment.test.ts:128</TooltipContent>
    </Tooltip>
  )
}
