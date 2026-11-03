import {
  ArrowUpIcon,
  ChevronDownIcon,
  FilePenLineIcon,
  FileSearchIcon,
  GitBranchIcon,
  PlusIcon,
  SettingsIcon,
  TerminalIcon,
  PaperclipIcon,
} from "lucide-react"

import { Badge } from "@/components/badge"
import { Bubble, BubbleContent } from "@/components/bubble"
import { Button } from "@/components/button"
import { Kbd } from "@/components/kbd"
import { Message, MessageContent, MessageGroup } from "@/components/message"
import { StatusDot } from "@/components/status-dot"
import { Trace, TraceDescription, TraceIcon, TraceLine, TraceTitle } from "@/components/trace"
import { cn } from "@/lib/utils"

const threads = [
  { title: "Fix flaky retry test", meta: "now", tone: "primary", motion: "pulse", active: true },
  { title: "Rename queue module", meta: "2h", tone: "warning", motion: "ping" },
  { title: "Add deploy preview env", meta: "1d", tone: "success" },
  { title: "Migrate to Tailwind 4", meta: "3d" },
] as const

/** A small working window built only from the system's own parts. */
export function AppPreview({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex h-136 w-full overflow-hidden rounded-xl border bg-background text-left shadow-[0_24px_64px_-32px_rgb(0_0_0/30%)] dark:shadow-none",
        className
      )}
    >
      <aside className="hidden w-52 shrink-0 flex-col gap-3 border-r bg-sidebar p-2 sm:flex">
        <Button className="justify-start" size="sm" variant="outline">
          <PlusIcon />
          New thread
          <Kbd className="ms-auto -me-1">⌘N</Kbd>
        </Button>
        <div className="flex flex-col gap-0.5">
          <p className="flex h-6 items-center px-2 font-medium text-2xs text-muted-foreground">
            design
          </p>
          {threads.map((thread) => (
            <div
              key={thread.title}
              className={cn(
                "flex h-7 items-center gap-2 rounded-md px-2 text-xs",
                "active" in thread
                  ? "bg-sidebar-row-selected font-medium text-foreground shadow-xs/5 dark:shadow-none"
                  : "text-muted-foreground"
              )}
            >
              <StatusDot
                className="size-1.5"
                motion={"motion" in thread ? thread.motion : "none"}
                tone={"tone" in thread ? thread.tone : "neutral"}
              />
              <span className="min-w-0 flex-1 truncate">{thread.title}</span>
              <span className="text-3xs tabular-nums text-muted-foreground">{thread.meta}</span>
            </div>
          ))}
        </div>
        <Button className="mt-auto justify-start" size="sm" variant="ghost-muted">
          <SettingsIcon />
          Settings
        </Button>
      </aside>
      <div className="relative flex min-w-0 flex-1 flex-col">
        <div className="flex h-11 shrink-0 items-center gap-2 border-b px-3">
          <span className="min-w-0 truncate font-medium text-sm">Fix flaky retry test</span>
          <Badge size="sm" variant="secondary">
            <GitBranchIcon />
            fix/retry
          </Badge>
          <Badge className="ms-auto" size="sm" variant="success">
            +4 −2
          </Badge>
        </div>
        <div className="min-h-0 flex-1 overflow-hidden px-4 pt-4">
          <div className="mx-auto flex max-w-lg flex-col gap-3">
            <MessageGroup>
              <Message align="end">
                <MessageContent>
                  <Bubble>
                    <BubbleContent>
                      The retry test fails about one run in ten. Can you find out why?
                    </BubbleContent>
                  </Bubble>
                </MessageContent>
              </Message>
              <Message>
                <MessageContent>
                  <p>
                    The test advances fake timers before <code>enqueue</code> resolves, so the retry
                    is scheduled after the clock has already moved.
                  </p>
                </MessageContent>
              </Message>
            </MessageGroup>
            <Trace>
              <TraceLine>
                <TraceIcon>
                  <FileSearchIcon />
                </TraceIcon>
                <TraceTitle>Read src/queue/retry.test.ts</TraceTitle>
              </TraceLine>
              <TraceLine>
                <TraceIcon>
                  <FilePenLineIcon />
                </TraceIcon>
                <TraceTitle>Edited src/queue/retry.test.ts</TraceTitle>
                <TraceDescription>+4 −2</TraceDescription>
              </TraceLine>
              <TraceLine status="running">
                <TraceIcon>
                  <TerminalIcon />
                </TraceIcon>
                <TraceTitle>Running pnpm test queue</TraceTitle>
              </TraceLine>
            </Trace>
          </div>
        </div>
        <div className="shrink-0 p-3 pt-2">
          <div className="mx-auto max-w-lg rounded-2xl border bg-card shadow-xs/5 dark:shadow-[0_14px_32px_-18px_rgb(0_0_0/75%)]">
            <p className="px-3.5 pt-3 pb-2 text-sm text-placeholder">Ask for a follow-up</p>
            <div className="flex items-center gap-1 p-1.5">
              <Button aria-label="Attach" size="icon-xs" variant="ghost-muted">
                <PaperclipIcon />
              </Button>
              <Button size="compact" variant="ghost-muted">
                Opus 5.5
                <ChevronDownIcon />
              </Button>
              <Button aria-label="Send" className="ms-auto rounded-full before:rounded-full" size="icon-xs">
                <ArrowUpIcon />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
