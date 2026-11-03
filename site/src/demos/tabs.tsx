import { FileDiffIcon, GlobeIcon, TerminalIcon } from "lucide-react"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/tabs"

export const notes =
  "Use the pill tray for a small switch inside a panel, and the underline when tabs are the page's main navigation. Past five tabs, use a select."

export function Pill() {
  return (
    <Tabs className="w-full max-w-sm" defaultValue="diff">
      <TabsList>
        <TabsTrigger value="diff">Diff</TabsTrigger>
        <TabsTrigger value="preview">Preview</TabsTrigger>
        <TabsTrigger value="logs">Logs</TabsTrigger>
      </TabsList>
      <TabsContent className="text-muted-foreground" value="diff">3 files changed, 42 insertions, 8 deletions.</TabsContent>
      <TabsContent className="text-muted-foreground" value="preview">Serving the worktree on localhost:5199.</TabsContent>
      <TabsContent className="text-muted-foreground" value="logs">No errors in the last 10 minutes.</TabsContent>
    </Tabs>
  )
}

export function Line() {
  return (
    <Tabs className="w-full max-w-md" defaultValue="threads">
      <TabsList variant="line">
        <TabsTrigger value="threads">Threads</TabsTrigger>
        <TabsTrigger value="commits">Commits</TabsTrigger>
        <TabsTrigger value="checks">Checks</TabsTrigger>
        <TabsTrigger disabled value="deploys">Deploys</TabsTrigger>
      </TabsList>
      <TabsContent className="text-muted-foreground" value="threads">4 threads on this branch.</TabsContent>
      <TabsContent className="text-muted-foreground" value="commits">3 commits ahead of main.</TabsContent>
      <TabsContent className="text-muted-foreground" value="checks">All checks passed.</TabsContent>
    </Tabs>
  )
}

export function WithIcons() {
  return (
    <Tabs defaultValue="diff">
      <TabsList>
        <TabsTrigger value="diff"><FileDiffIcon />Diff</TabsTrigger>
        <TabsTrigger value="browser"><GlobeIcon />Browser</TabsTrigger>
        <TabsTrigger value="terminal"><TerminalIcon />Terminal</TabsTrigger>
      </TabsList>
    </Tabs>
  )
}

export function Vertical() {
  return (
    <div className="flex flex-wrap items-start gap-8">
      <Tabs defaultValue="general" orientation="vertical">
        <TabsList>
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="models">Models</TabsTrigger>
          <TabsTrigger value="keys">Keys</TabsTrigger>
        </TabsList>
      </Tabs>
      <Tabs defaultValue="general" orientation="vertical">
        <TabsList variant="line">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="models">Models</TabsTrigger>
          <TabsTrigger value="keys">Keys</TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  )
}
