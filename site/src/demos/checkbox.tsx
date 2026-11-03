import * as React from "react"

import { Checkbox, CheckboxMark } from "@/components/checkbox"
import { Label } from "@/components/label"

export const notes =
  "Use a checkbox when the choice applies on save, and a switch when it applies immediately. Reach for CheckboxMark when the whole row is the button."

export function Default() {
  return (
    <div className="flex flex-col gap-3">
      <Label className="font-normal">
        <Checkbox defaultChecked />
        Run tests before push
      </Label>
      <Label className="font-normal">
        <Checkbox />
        Sign commits with SSH key
      </Label>
    </div>
  )
}

export function Indeterminate() {
  const checks = ["typecheck", "lint", "e2e"]
  const [enabled, setEnabled] = React.useState(["typecheck"])
  const allOn = enabled.length === checks.length

  return (
    <div className="flex flex-col gap-3">
      <Label className="font-normal">
        <Checkbox
          checked={allOn}
          indeterminate={enabled.length > 0 && !allOn}
          onCheckedChange={(checked) => setEnabled(checked ? checks : [])}
        />
        All checks
      </Label>
      <div className="flex flex-col gap-3 ps-6">
        {checks.map((check) => (
          <Label className="font-normal" key={check}>
            <Checkbox
              checked={enabled.includes(check)}
              onCheckedChange={(checked) =>
                setEnabled((current) =>
                  checked
                    ? [...current, check]
                    : current.filter((item) => item !== check)
                )
              }
            />
            {check}
          </Label>
        ))}
      </div>
    </div>
  )
}

export function States() {
  return (
    <div className="flex flex-col gap-3">
      <Label className="font-normal text-muted-foreground">
        <Checkbox disabled />
        Force push (blocked by policy)
      </Label>
      <Label className="font-normal text-muted-foreground">
        <Checkbox defaultChecked disabled />
        Protected branch
      </Label>
      <Label className="font-normal">
        <Checkbox aria-invalid />
        Accept the license to continue
      </Label>
    </div>
  )
}

export function RowMark() {
  const [selected, setSelected] = React.useState(["t3/fix-sidebar"])
  const branches = ["main", "t3/fix-sidebar", "t3/new-composer"]

  return (
    <div className="flex w-64 flex-col gap-0.5 rounded-lg border bg-popover p-1">
      {branches.map((branch) => (
        <button
          className="flex min-h-8 cursor-pointer items-center gap-2 rounded-sm px-2 py-1 text-left text-base outline-none hover:bg-accent focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring sm:min-h-7 sm:text-sm"
          key={branch}
          type="button"
          onClick={() =>
            setSelected((current) =>
              current.includes(branch)
                ? current.filter((item) => item !== branch)
                : [...current, branch]
            )
          }
        >
          <CheckboxMark checked={selected.includes(branch)} />
          <span className="truncate font-mono text-xs">{branch}</span>
        </button>
      ))}
    </div>
  )
}
