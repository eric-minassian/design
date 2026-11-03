import { GitPullRequestIcon } from "lucide-react"

import { Avatar, AvatarFallback } from "@/components/avatar"
import { Badge } from "@/components/badge"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/hover-card"

export const notes =
  "A preview for people with a pointer, so nothing essential can live only here. The link underneath has to work without it."

export function PullRequest() {
  return (
    <HoverCard>
      <HoverCardTrigger
        className="font-medium text-sm underline underline-offset-4"
        href="https://github.com/pingdotgg/t3code/pull/482"
      >
        #482
      </HoverCardTrigger>
      <HoverCardContent className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <GitPullRequestIcon className="size-4 text-success" />
          <span className="font-medium">Fix flaky checkout test</span>
        </div>
        <p className="text-muted-foreground">Waits for the payment iframe before asserting on totals.</p>
        <div className="flex items-center gap-2 text-2xs text-muted-foreground">
          <Badge variant="outline">t3/checkout-flake</Badge>
          +48 -12
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}

export function Author() {
  return (
    <HoverCard>
      <HoverCardTrigger
        className="font-medium text-sm underline underline-offset-4"
        href="https://github.com/t3dotgg"
      >
        @theo
      </HoverCardTrigger>
      <HoverCardContent align="start" className="flex gap-3">
        <Avatar>
          <AvatarFallback>TB</AvatarFallback>
        </Avatar>
        <div className="flex min-w-0 flex-col gap-1">
          <span className="font-medium">Theo Browne</span>
          <span className="text-muted-foreground">Merged 214 pull requests in this repository.</span>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
