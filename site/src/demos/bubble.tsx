import { ThumbsUpIcon } from "lucide-react"

import { Bubble, BubbleContent, BubbleGroup, BubbleReactions } from "@/components/bubble"

export const notes =
  "Default is the soft message surface and it is the one a thread needs. Reach for the others to mark a turn as different: a guest, a failure, or a system note."

export function UserTurn() {
  return (
    <div className="flex w-full max-w-xl flex-col">
      <Bubble align="end">
        <BubbleContent>
          Rename worker-pool to job-runner and update every import. Leave the public API alone.
        </BubbleContent>
      </Bubble>
    </div>
  )
}

export function Variants() {
  return (
    <div className="flex w-full max-w-xl flex-col gap-2">
      <Bubble>
        <BubbleContent>Default: run the tests again.</BubbleContent>
      </Bubble>
      <Bubble variant="secondary">
        <BubbleContent>Secondary: a queued follow-up.</BubbleContent>
      </Bubble>
      <Bubble variant="muted">
        <BubbleContent>Muted: sent by an automation.</BubbleContent>
      </Bubble>
      <Bubble variant="tinted">
        <BubbleContent>Tinted: steering the active turn.</BubbleContent>
      </Bubble>
      <Bubble variant="outline">
        <BubbleContent>Outline: a note from a guest.</BubbleContent>
      </Bubble>
      <Bubble variant="ghost">
        <BubbleContent>Ghost: no surface at all.</BubbleContent>
      </Bubble>
      <Bubble variant="destructive">
        <BubbleContent>Destructive: this message failed to send.</BubbleContent>
      </Bubble>
    </div>
  )
}

export function Grouped() {
  return (
    <BubbleGroup className="w-full max-w-xl">
      <Bubble align="end">
        <BubbleContent>Skip the snapshot tests for now.</BubbleContent>
      </Bubble>
      <Bubble align="end">
        <BubbleContent>They need the new fixtures, and those land in a separate PR.</BubbleContent>
      </Bubble>
      <Bubble align="end">
        <BubbleContent>Everything else should stay green.</BubbleContent>
      </Bubble>
    </BubbleGroup>
  )
}

export function Interactive() {
  return (
    <div className="flex w-full max-w-xl flex-col gap-6 pb-2">
      <Bubble align="end">
        <BubbleContent render={<button type="button" />}>
          Show the prompt this automation sent
        </BubbleContent>
      </Bubble>
      <Bubble align="end">
        <BubbleContent>Ship it once CI is green.</BubbleContent>
        <BubbleReactions>
          <ThumbsUpIcon aria-label="Thumbs up" className="size-3 text-muted-foreground" />
          2
        </BubbleReactions>
      </Bubble>
    </div>
  )
}
