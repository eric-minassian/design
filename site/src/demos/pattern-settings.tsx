import { Badge } from "@/components/badge"
import { Button } from "@/components/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/select"
import { Switch } from "@/components/switch"
import { ToggleGroup, ToggleGroupItem } from "@/components/toggle-group"

export const notes =
  "Settings are rows, not forms: label on the left, control on the right, and a change applies the moment you make it. Save buttons are only for things that can fail."

const models = [
  { value: "opus", label: "Opus 5.5" },
  { value: "sonnet", label: "Sonnet 5.5" },
  { value: "haiku", label: "Haiku 5.5" },
]

export function Preferences() {
  return (
    <div className="w-full max-w-xl divide-y rounded-2xl border bg-card">
      <div className="flex items-center gap-4 p-4">
        <div className="min-w-0 flex-1">
          <p className="font-medium text-sm">Appearance</p>
          <p className="text-muted-foreground text-xs">Follows your system unless you pick one.</p>
        </div>
        <ToggleGroup defaultValue={["system"]} variant="segmented">
          <ToggleGroupItem value="system">System</ToggleGroupItem>
          <ToggleGroupItem value="light">Light</ToggleGroupItem>
          <ToggleGroupItem value="dark">Dark</ToggleGroupItem>
        </ToggleGroup>
      </div>
      <div className="flex items-center gap-4 p-4">
        <div className="min-w-0 flex-1">
          <p className="font-medium text-sm">Default model</p>
          <p className="text-muted-foreground text-xs">Used for new threads.</p>
        </div>
        <Select defaultValue="opus" items={models}>
          <SelectTrigger className="w-36" size="sm">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {models.map((model) => (
              <SelectItem key={model.value} value={model.value}>
                {model.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="flex items-center gap-4 p-4">
        <div className="min-w-0 flex-1">
          <p className="font-medium text-sm">Notify when a thread finishes</p>
          <p className="text-muted-foreground text-xs">Only while the window is in the background.</p>
        </div>
        <Switch defaultChecked />
      </div>
      <div className="flex items-center gap-4 p-4">
        <div className="min-w-0 flex-1">
          <p className="flex items-center gap-2 font-medium text-sm">
            Worktrees
            <Badge size="sm" variant="info">Beta</Badge>
          </p>
          <p className="text-muted-foreground text-xs">Give each thread its own checkout.</p>
        </div>
        <Switch />
      </div>
    </div>
  )
}

export function DangerZone() {
  return (
    <div className="w-full max-w-xl rounded-2xl border bg-card">
      <div className="flex items-center gap-4 p-4">
        <div className="min-w-0 flex-1">
          <p className="font-medium text-sm">Delete project</p>
          <p className="text-muted-foreground text-xs">Removes its threads. Your repository is untouched.</p>
        </div>
        <Button size="sm" variant="destructive-outline">
          Delete
        </Button>
      </div>
    </div>
  )
}
