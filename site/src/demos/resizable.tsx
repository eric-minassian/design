import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/resizable"

export const notes =
  "The handle is a hairline until you touch it, then it lights up. Use it for layouts people tune once and leave alone, and remember the sizes they pick."

export const bare = ["Horizontal", "Vertical", "WithHandle"]

export function Horizontal() {
  return (
    <ResizablePanelGroup className="min-h-56" orientation="horizontal">
      <ResizablePanel defaultSize="28%" minSize="16%">
        <div className="flex h-full flex-col gap-1 p-3 text-sm">
          <span className="font-medium">Threads</span>
          <span className="text-muted-foreground">Refactor auth middleware</span>
          <span className="text-muted-foreground">Add thread search</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize="72%">
        <div className="flex h-full items-center justify-center p-3 text-muted-foreground text-sm">
          Conversation
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}

export function Vertical() {
  return (
    <ResizablePanelGroup className="min-h-72" orientation="vertical">
      <ResizablePanel defaultSize="65%">
        <div className="flex h-full items-center justify-center p-3 text-muted-foreground text-sm">
          src/components/tabs.tsx
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize="35%" minSize="20%">
        <div className="h-full p-3 font-mono text-muted-foreground text-xs">
          $ pnpm typecheck
          <br />
          Done in 4.2s
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}

export function WithHandle() {
  return (
    <ResizablePanelGroup className="min-h-40" orientation="horizontal">
      <ResizablePanel defaultSize="50%" minSize="20%">
        <div className="flex h-full items-center justify-center p-3 text-muted-foreground text-sm">
          Before
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize="50%" minSize="20%">
        <div className="flex h-full items-center justify-center p-3 text-muted-foreground text-sm">
          After
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
