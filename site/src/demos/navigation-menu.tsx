import {
  BookOpenIcon,
  CloudIcon,
  GitBranchIcon,
  MessagesSquareIcon,
  TerminalIcon,
} from "lucide-react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/navigation-menu"

export const notes =
  "For marketing and docs sites where the top links need room to explain themselves. Inside an app, use the sidebar or a dropdown menu."

export function Default() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Product</NavigationMenuTrigger>
          <NavigationMenuContent className="grid w-72 gap-0.5">
            <NavigationMenuLink className="items-start py-1.5" href="#/components/navigation-menu">
              <MessagesSquareIcon className="mt-0.5" />
              <span className="flex flex-col">
                Threads
                <span className="text-muted-foreground text-xs">Parallel agents, one per worktree</span>
              </span>
            </NavigationMenuLink>
            <NavigationMenuLink className="items-start py-1.5" href="#/components/navigation-menu">
              <GitBranchIcon className="mt-0.5" />
              <span className="flex flex-col">
                Branches
                <span className="text-muted-foreground text-xs">Review and merge what they wrote</span>
              </span>
            </NavigationMenuLink>
            <NavigationMenuLink className="items-start py-1.5" href="#/components/navigation-menu">
              <CloudIcon className="mt-0.5" />
              <span className="flex flex-col">
                Environments
                <span className="text-muted-foreground text-xs">Run locally or on a remote host</span>
              </span>
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Docs</NavigationMenuTrigger>
          <NavigationMenuContent className="grid w-52 gap-0.5">
            <NavigationMenuLink href="#/components/navigation-menu">
              <BookOpenIcon />
              Getting started
            </NavigationMenuLink>
            <NavigationMenuLink href="#/components/navigation-menu">
              <TerminalIcon />
              CLI reference
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#/components/navigation-menu">Changelog</NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
