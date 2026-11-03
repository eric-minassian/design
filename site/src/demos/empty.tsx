import { GitBranchIcon, MessagesSquareIcon, PlusIcon, SearchXIcon } from "lucide-react"

import { Button } from "@/components/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/empty"

export const notes =
  "Say what would be here and how to get it there, in one sentence and one action. The stacked icon does the decorating, so add nothing else."

export function Default() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon"><MessagesSquareIcon /></EmptyMedia>
        <EmptyTitle>No threads yet</EmptyTitle>
        <EmptyDescription>Start a thread and it will get its own worktree and branch.</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button>
          <PlusIcon />
          New thread
        </Button>
      </EmptyContent>
    </Empty>
  )
}

export function Compact() {
  return (
    <Empty size="compact">
      <EmptyMedia variant="icon"><SearchXIcon /></EmptyMedia>
      <EmptyHeader>
        <EmptyTitle>No matching commits</EmptyTitle>
        <EmptyDescription>Try a shorter query or search all branches.</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button size="sm" variant="outline">Clear search</Button>
      </EmptyContent>
    </Empty>
  )
}

export function Hero() {
  return (
    <Empty size="hero">
      <EmptyHeader>
        <EmptyMedia variant="icon"><GitBranchIcon /></EmptyMedia>
        <EmptyTitle>Pick a project</EmptyTitle>
        <EmptyDescription>
          Open a repository to see its threads. Or <a href="#/components/empty">read how worktrees work</a>.
        </EmptyDescription>
      </EmptyHeader>
    </Empty>
  )
}
