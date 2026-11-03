import { Button } from "@/components/button"
import { Spinner } from "@/components/spinner"

export const notes =
  "For work of unknown length. If you know how far along it is, use progress, and if you know the shape of the result, use a skeleton."

export function Sizes() {
  return (
    <>
      <Spinner size="xs" />
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
    </>
  )
}

export function InButton() {
  return (
    <>
      <Button disabled>
        <Spinner />
        Pushing
      </Button>
      <Button disabled variant="outline">
        <Spinner />
        Syncing
      </Button>
    </>
  )
}

export function WithLabel() {
  return (
    <span className="inline-flex items-center gap-2 text-muted-foreground text-sm">
      <Spinner size="sm" tone="muted" />
      Installing dependencies
    </span>
  )
}
