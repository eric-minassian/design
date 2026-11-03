import { Label } from "@/components/label"
import { Textarea } from "@/components/textarea"

export const notes =
  "It grows with its content, so skip the row count and let the layout breathe. For a composer with attachments and a send button, use an input group."

export function Default() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <Label htmlFor="textarea-commit">Commit message</Label>
      <Textarea id="textarea-commit" placeholder="Summarize the change in one line" />
    </div>
  )
}

export function States() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <Textarea defaultValue="Generated from the plan. Editing is locked while the agent runs." disabled />
      <Textarea aria-invalid defaultValue="wip" />
    </div>
  )
}
