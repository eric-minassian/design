import { CircleAlertIcon, GitBranchIcon, Minimize2Icon, RefreshCwIcon } from "lucide-react"

import { Marker, MarkerContent, MarkerIcon } from "@/components/marker"

export const notes =
  "For things that happen to a thread rather than in it, such as a branch switch, a compaction, or a turn that was interrupted. If you need to act on it, use an Alert instead."

export function Separator() {
  return (
    <div className="flex w-full max-w-xl flex-col">
      <Marker variant="separator">
        <MarkerIcon>
          <GitBranchIcon />
        </MarkerIcon>
        <MarkerContent>
          <span className="font-medium">Switched to fix/queue-retry</span>
        </MarkerContent>
      </Marker>
      <Marker variant="separator">
        <MarkerIcon>
          <Minimize2Icon />
        </MarkerIcon>
        <MarkerContent>
          <span className="font-medium">Context compacted</span>
          <span className="opacity-72"> · 182k to 41k tokens</span>
        </MarkerContent>
      </Marker>
      <Marker className="text-destructive-foreground" variant="separator">
        <MarkerIcon>
          <CircleAlertIcon />
        </MarkerIcon>
        <MarkerContent>
          <span className="font-medium">Turn interrupted</span>
        </MarkerContent>
      </Marker>
    </div>
  )
}

export function Working() {
  return (
    <div className="w-full max-w-xl">
      <Marker variant="border">
        <MarkerContent>Working for 1m 12s</MarkerContent>
      </Marker>
    </div>
  )
}

export function Inline() {
  return (
    <div className="flex w-full max-w-xl flex-col gap-2">
      <Marker>
        <MarkerIcon>
          <RefreshCwIcon />
        </MarkerIcon>
        <MarkerContent>Model switched to Opus</MarkerContent>
      </Marker>
      <Marker>
        <MarkerContent>
          Forked from <a href="#/components/marker">the queue retry thread</a>
        </MarkerContent>
      </Marker>
    </div>
  )
}
