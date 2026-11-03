import { Checkbox } from "@/components/checkbox"
import { Input } from "@/components/input"
import { Label } from "@/components/label"
import { Switch } from "@/components/switch"

export const notes =
  "Every control gets a label, even when it is visually hidden. Wrapping the control extends the hit area to the text."

export function WithInput() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <Label htmlFor="label-worktree">Worktree path</Label>
      <Input defaultValue="~/.t3/worktrees/design" id="label-worktree" />
    </div>
  )
}

export function Wrapping() {
  return (
    <div className="flex flex-col gap-3">
      <Label>
        <Checkbox defaultChecked />
        Open diff after each turn
      </Label>
      <Label>
        <Switch />
        Auto-approve read-only tools
      </Label>
    </div>
  )
}
