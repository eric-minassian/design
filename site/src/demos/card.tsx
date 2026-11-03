import { GitBranchIcon, MoreHorizontalIcon } from "lucide-react"

import { Badge } from "@/components/badge"
import { Button } from "@/components/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/card"

export const notes =
  "Use a card to group things that act together, not to frame every block on the page. Borders do the separating, so never add a shadow."

export function Default() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Refactor auth middleware</CardTitle>
        <CardDescription>Started 12 minutes ago on opus-4.5</CardDescription>
        <CardAction>
          <Button aria-label="Thread actions" size="icon-xs" variant="ghost">
            <MoreHorizontalIcon />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent className="text-muted-foreground">
        Moved session checks into a single guard and removed the duplicate token refresh.
      </CardContent>
      <CardFooter>
        <Button size="sm">Open thread</Button>
        <Button size="sm" variant="ghost">Archive</Button>
      </CardFooter>
    </Card>
  )
}

export function Small() {
  return (
    <Card className="w-full max-w-xs" size="sm">
      <CardHeader>
        <CardTitle>Production</CardTitle>
        <CardDescription>Last deployed 2 hours ago</CardDescription>
        <CardAction>
          <Badge variant="success">Healthy</Badge>
        </CardAction>
      </CardHeader>
      <CardContent className="flex items-center gap-1.5 text-muted-foreground text-xs">
        <GitBranchIcon className="size-3.5" />
        main at 5f47bdb
      </CardContent>
    </Card>
  )
}

export function WithSections() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="border-b">
        <CardTitle>Usage this week</CardTitle>
        <CardDescription>Resets on Monday</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Input tokens</span>
          <span className="tabular-nums">1,284,090</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Output tokens</span>
          <span className="tabular-nums">312,446</span>
        </div>
      </CardContent>
      <CardFooter className="justify-end border-t">
        <Button size="sm" variant="outline">View details</Button>
      </CardFooter>
    </Card>
  )
}
