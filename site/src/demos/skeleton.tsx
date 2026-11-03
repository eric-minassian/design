import { Card, CardContent, CardHeader } from "@/components/card"
import { Skeleton } from "@/components/skeleton"

export const notes =
  "Match the shape of what is coming, so the page does not jump when it arrives. A few rows are enough to say loading."

export function Shapes() {
  return (
    <>
      <Skeleton className="h-4 w-32" />
      <Skeleton className="size-8" shape="pill" />
      <Skeleton className="h-16 w-28" shape="card" />
    </>
  )
}

export function ThreadRows() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-3">
      <div className="flex items-center gap-3">
        <Skeleton className="size-8" shape="pill" />
        <div className="flex flex-1 flex-col gap-1.5">
          <Skeleton className="h-3.5 w-3/4" />
          <Skeleton className="h-3 w-1/2" />
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Skeleton className="size-8" shape="pill" />
        <div className="flex flex-1 flex-col gap-1.5">
          <Skeleton className="h-3.5 w-2/3" />
          <Skeleton className="h-3 w-2/5" />
        </div>
      </div>
    </div>
  )
}

export function InCard() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <Skeleton className="h-4 w-40" />
        <Skeleton className="mt-1 h-3 w-24" />
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <Skeleton className="h-3.5" />
        <Skeleton className="h-3.5 w-5/6" />
      </CardContent>
    </Card>
  )
}
