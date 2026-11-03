import {
  ChevronRightIcon,
  CloudIcon,
  GitBranchIcon,
  GitPullRequestIcon,
  TerminalIcon,
} from "lucide-react"

import { Avatar, AvatarFallback } from "@/components/avatar"
import { Badge } from "@/components/badge"
import { Button } from "@/components/button"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from "@/components/item"

export const notes =
  "The row to reach for before you build your own: media, text and actions that line up. Render it as a link when the whole row is the target."

export function Variants() {
  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      <Item>
        <ItemMedia variant="icon"><GitBranchIcon /></ItemMedia>
        <ItemContent>
          <ItemTitle>feat/thread-search</ItemTitle>
          <ItemDescription>3 commits ahead of main</ItemDescription>
        </ItemContent>
      </Item>
      <Item variant="outline">
        <ItemMedia variant="icon"><CloudIcon /></ItemMedia>
        <ItemContent>
          <ItemTitle>Staging</ItemTitle>
          <ItemDescription>Deployed from 36894e7</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button size="sm" variant="outline">Promote</Button>
        </ItemActions>
      </Item>
      <Item variant="muted">
        <ItemMedia variant="icon"><TerminalIcon /></ItemMedia>
        <ItemContent>
          <ItemTitle>pnpm typecheck</ItemTitle>
          <ItemDescription>Finished in 4.2s with no errors</ItemDescription>
        </ItemContent>
      </Item>
    </div>
  )
}

export function AsLink() {
  return (
    <Item
      className="max-w-md"
      render={<a href="#/components/item" />}
      variant="outline"
    >
      <ItemMedia variant="icon"><GitPullRequestIcon /></ItemMedia>
      <ItemContent>
        <ItemTitle>Fix stale session on reconnect</ItemTitle>
        <ItemDescription>#482 opened by eric, 2 reviews pending</ItemDescription>
      </ItemContent>
      <ItemActions>
        <Badge variant="info">Open</Badge>
        <ChevronRightIcon className="size-4 text-muted-foreground" />
      </ItemActions>
    </Item>
  )
}

export function Group() {
  return (
    <ItemGroup className="max-w-md rounded-xl border p-1">
      <Item size="sm">
        <ItemMedia>
          <Avatar size="sm"><AvatarFallback>EM</AvatarFallback></Avatar>
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Eric Minassian</ItemTitle>
        </ItemContent>
        <ItemActions>
          <Badge variant="secondary">Owner</Badge>
        </ItemActions>
      </Item>
      <ItemSeparator className="my-0" />
      <Item size="sm">
        <ItemMedia>
          <Avatar size="sm"><AvatarFallback>TB</AvatarFallback></Avatar>
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Theo Browne</ItemTitle>
        </ItemContent>
        <ItemActions>
          <Badge variant="secondary">Reviewer</Badge>
        </ItemActions>
      </Item>
    </ItemGroup>
  )
}
