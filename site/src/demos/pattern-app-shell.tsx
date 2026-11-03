import { PanelLeftIcon, PlusIcon, SearchIcon, SettingsIcon } from "lucide-react"

import { Button } from "@/components/button"
import { Kbd } from "@/components/kbd"
import { Separator } from "@/components/separator"
import { ToggleGroup, ToggleGroupItem } from "@/components/toggle-group"

export const notes =
  "Every app starts here: a rail, a canvas, and a 52px topbar that is glass so content fades under it. This docs site is built exactly this way, with SidebarProvider, Sidebar and SidebarInset."

export const bare = ["Window"]

export function Window() {
  return (
    <div className="flex h-96 min-w-0">
      <aside className="hidden w-48 shrink-0 flex-col gap-2 border-r bg-sidebar p-2 sm:flex">
        <Button className="justify-start text-muted-foreground" size="sm" variant="outline">
          <SearchIcon />
          <span className="flex-1 text-left font-normal">Search</span>
          <Kbd className="-me-1">⌘K</Kbd>
        </Button>
        <nav className="flex flex-col gap-0.5 text-sm">
          <a className="flex h-7 items-center rounded-md bg-sidebar-row-selected px-2 font-medium shadow-xs/5 dark:shadow-none" href="#/patterns/app-shell">
            Deployments
          </a>
          <a className="flex h-7 items-center rounded-md px-2 text-muted-foreground hover:bg-sidebar-row-hover" href="#/patterns/app-shell">
            Environments
          </a>
          <a className="flex h-7 items-center rounded-md px-2 text-muted-foreground hover:bg-sidebar-row-hover" href="#/patterns/app-shell">
            Secrets
          </a>
        </nav>
        <Button className="mt-auto justify-start" size="sm" variant="ghost-muted">
          <SettingsIcon />
          Settings
        </Button>
      </aside>
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="surface-glass flex h-(--topbar-height) shrink-0 items-center gap-2 border-b px-3">
          <Button aria-label="Toggle sidebar" size="icon-sm" variant="ghost">
            <PanelLeftIcon />
          </Button>
          <Separator className="mx-1 h-4 self-center!" orientation="vertical" />
          <p className="min-w-0 truncate font-medium text-sm">Deployments</p>
          <ToggleGroup className="ms-auto max-sm:hidden" defaultValue={["all"]} variant="segmented">
            <ToggleGroupItem value="all">All</ToggleGroupItem>
            <ToggleGroupItem value="failed">Failed</ToggleGroupItem>
          </ToggleGroup>
          <Button className="max-sm:ms-auto" size="sm">
            <PlusIcon />
            Deploy
          </Button>
        </header>
        <main className="flex min-h-0 flex-1 items-center justify-center p-6 text-muted-foreground text-sm">
          Your content, in a lane no wider than it needs to be.
        </main>
      </div>
    </div>
  )
}
