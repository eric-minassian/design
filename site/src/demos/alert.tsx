import {
  CheckCircle2Icon,
  CircleAlertIcon,
  InfoIcon,
  KeyRoundIcon,
  TriangleAlertIcon,
} from "lucide-react"

import { Alert, AlertAction, AlertDescription, AlertTitle } from "@/components/alert"
import { Button } from "@/components/button"

export const notes =
  "An alert stays until it is dealt with, so save it for things that block or change the work. If it can pass on its own, use a toast."

export function Default() {
  return (
    <Alert className="max-w-lg">
      <InfoIcon />
      <AlertTitle>This thread runs in a worktree</AlertTitle>
      <AlertDescription>Your checkout stays untouched until you merge.</AlertDescription>
    </Alert>
  )
}

export function Status() {
  return (
    <div className="flex w-full max-w-lg flex-col gap-2">
      <Alert variant="info">
        <InfoIcon />
        <AlertTitle>opus-4.5 is now the default model</AlertTitle>
      </Alert>
      <Alert variant="success">
        <CheckCircle2Icon />
        <AlertTitle>All 128 checks passed</AlertTitle>
      </Alert>
      <Alert variant="warning">
        <TriangleAlertIcon />
        <AlertTitle>This branch is 14 commits behind main</AlertTitle>
      </Alert>
      <Alert variant="error">
        <CircleAlertIcon />
        <AlertTitle>Push rejected by the remote</AlertTitle>
      </Alert>
    </div>
  )
}

export function WithDescription() {
  return (
    <div className="flex w-full max-w-lg flex-col gap-2">
      <Alert controlAlignment="first-line" variant="warning">
        <TriangleAlertIcon />
        <AlertTitle>Context is nearly full</AlertTitle>
        <AlertDescription>
          This thread has used 91% of its context. Compact it now, or the next turn may drop earlier messages.
        </AlertDescription>
      </Alert>
      <Alert controlAlignment="first-line" variant="destructive">
        <CircleAlertIcon />
        <AlertTitle>The agent stopped unexpectedly</AlertTitle>
        <AlertDescription>The process exited with code 137. Your changes are still in the worktree.</AlertDescription>
      </Alert>
    </div>
  )
}

export function WithAction() {
  return (
    <div className="flex w-full max-w-lg flex-col gap-2">
      <Alert>
        <KeyRoundIcon />
        <AlertTitle>Your API key expires in 3 days</AlertTitle>
        <AlertAction>
          <Button size="xs" variant="outline">Rotate</Button>
        </AlertAction>
      </Alert>
      <Alert variant="warning">
        <TriangleAlertIcon />
        <AlertTitle>2 files have merge conflicts</AlertTitle>
        <AlertAction>
          <Button size="xs" variant="warning-outline">Resolve</Button>
        </AlertAction>
      </Alert>
    </div>
  )
}
