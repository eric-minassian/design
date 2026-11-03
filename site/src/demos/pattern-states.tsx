import { GitBranchIcon, PlusIcon, RotateCcwIcon, TriangleAlertIcon } from "lucide-react"

import { Alert, AlertAction, AlertDescription, AlertTitle } from "@/components/alert"
import { Button } from "@/components/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/empty"
import { Skeleton } from "@/components/skeleton"
import { Spinner } from "@/components/spinner"

export const notes =
  "Every screen has three other faces. Empty says what would be here and how to get it there. Loading holds the shape of what is coming. Errors say what happened and offer the next step."

export function NothingYet() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon"><GitBranchIcon /></EmptyMedia>
        <EmptyTitle>No branches yet</EmptyTitle>
        <EmptyDescription>Start a thread and it will get a branch of its own.</EmptyDescription>
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

export function Loading() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      {[64, 80, 48].map((width) => (
        <div key={width} className="flex items-center gap-3">
          <Skeleton className="size-8" shape="pill" />
          <div className="flex flex-1 flex-col gap-1.5">
            <Skeleton className="h-3" style={{ width: `${width}%` }} />
            <Skeleton className="h-2.5 w-20" />
          </div>
        </div>
      ))}
    </div>
  )
}

export function Failed() {
  return (
    <Alert className="max-w-lg" variant="error">
      <TriangleAlertIcon />
      <AlertTitle>The push was rejected</AlertTitle>
      <AlertDescription>The remote has commits you don't have locally. Pull first, then try again.</AlertDescription>
      <AlertAction>
        <Button size="xs" variant="outline">
          <RotateCcwIcon />
          Pull and retry
        </Button>
      </AlertAction>
    </Alert>
  )
}

export function Pending() {
  return (
    <>
      <Button disabled>
        <Spinner />
        Pushing
      </Button>
      <span className="shine-text text-sm">Running pnpm test queue</span>
    </>
  )
}
