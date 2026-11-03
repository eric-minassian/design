import { Button } from "@/components/button"
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyTitle } from "@/components/empty"
import { href } from "~/router"

export function NotFoundPage() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyTitle>Nothing at this address</EmptyTitle>
        <EmptyDescription>The page moved, or the link has a typo.</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button nativeButton={false} render={<a href={href("/")} />} variant="outline">
          Back to overview
        </Button>
      </EmptyContent>
    </Empty>
  )
}
