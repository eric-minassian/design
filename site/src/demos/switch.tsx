import * as React from "react"

import { Label } from "@/components/label"
import { Switch } from "@/components/switch"

export const notes =
  "A switch takes effect the moment it flips. If the change waits for a save button, use a checkbox."

export function Default() {
  const [enabled, setEnabled] = React.useState(true)

  return (
    <Label>
      <Switch checked={enabled} onCheckedChange={setEnabled} />
      Sound on completion
    </Label>
  )
}

export function Sizes() {
  return (
    <>
      <Switch aria-label="Small" defaultChecked size="sm" />
      <Switch aria-label="Default" defaultChecked />
    </>
  )
}

export function Disabled() {
  return (
    <>
      <Switch aria-label="Off" disabled />
      <Switch aria-label="On" defaultChecked disabled />
    </>
  )
}

export function SettingsRow() {
  return (
    <div className="flex w-full max-w-sm flex-col divide-y rounded-xl border bg-card">
      <div className="flex items-center justify-between gap-4 px-3.5 py-3">
        <div className="flex min-w-0 flex-col gap-0.5">
          <Label htmlFor="switch-auto-commit">Auto-commit</Label>
          <p className="text-muted-foreground text-xs">Commit after each completed turn.</p>
        </div>
        <Switch defaultChecked id="switch-auto-commit" />
      </div>
      <div className="flex items-center justify-between gap-4 px-3.5 py-3">
        <div className="flex min-w-0 flex-col gap-0.5">
          <Label htmlFor="switch-worktrees">New worktree per thread</Label>
          <p className="text-muted-foreground text-xs">Keeps parallel agents from colliding.</p>
        </div>
        <Switch id="switch-worktrees" />
      </div>
    </div>
  )
}
