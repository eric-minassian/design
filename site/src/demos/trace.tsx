import {
  BrainIcon,
  FilePenLineIcon,
  FileSearchIcon,
  SearchIcon,
  TerminalIcon,
} from "lucide-react"

import {
  Trace,
  TraceCollapsible,
  TraceCollapsibleContent,
  TraceCollapsibleTrigger,
  TraceDescription,
  TraceIcon,
  TraceLine,
  TraceTitle,
} from "@/components/trace"

export const notes =
  "One line per tool call, muted, so a long run stays scannable. Keep details folded until asked for, and let the running row be the only thing on screen that moves."

export function Activity() {
  return (
    <Trace className="max-w-xl">
      <TraceLine>
        <TraceIcon>
          <FileSearchIcon />
        </TraceIcon>
        <TraceTitle>Read src/queue/retry.test.ts</TraceTitle>
      </TraceLine>
      <TraceLine>
        <TraceIcon>
          <SearchIcon />
        </TraceIcon>
        <TraceTitle>Searched for advanceTimersByTime</TraceTitle>
        <TraceDescription>6 results</TraceDescription>
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
      <TraceLine status="pending">
        <TraceIcon>
          <TerminalIcon />
        </TraceIcon>
        <TraceTitle>pnpm typecheck</TraceTitle>
      </TraceLine>
    </Trace>
  )
}

export function Collapsed() {
  return (
    <Trace className="max-w-xl">
      <TraceCollapsible>
        <TraceCollapsibleTrigger>
          <TraceLine>
            <TraceIcon>
              <BrainIcon />
            </TraceIcon>
            <TraceTitle>Thought for 12s</TraceTitle>
          </TraceLine>
        </TraceCollapsibleTrigger>
        <TraceCollapsibleContent>
          The test advances fake timers before enqueue resolves, so the retry can land after the
          clock has moved. Awaiting enqueue first should remove the race.
        </TraceCollapsibleContent>
      </TraceCollapsible>
      <TraceCollapsible>
        <TraceCollapsibleTrigger>
          <TraceLine>
            <TraceIcon>
              <FileSearchIcon />
            </TraceIcon>
            <TraceTitle>Read 3 files</TraceTitle>
          </TraceLine>
        </TraceCollapsibleTrigger>
        <TraceCollapsibleContent>
          <TraceLine>
            <TraceTitle>src/queue/queue.ts</TraceTitle>
          </TraceLine>
          <TraceLine>
            <TraceTitle>src/queue/retry.ts</TraceTitle>
          </TraceLine>
          <TraceLine>
            <TraceTitle>src/queue/retry.test.ts</TraceTitle>
          </TraceLine>
        </TraceCollapsibleContent>
      </TraceCollapsible>
    </Trace>
  )
}

export function Thinking() {
  return (
    <Trace className="max-w-xl">
      <TraceCollapsible>
        <TraceCollapsibleTrigger>
          <TraceLine status="running">
            <TraceIcon>
              <BrainIcon />
            </TraceIcon>
            <TraceTitle>Thinking</TraceTitle>
          </TraceLine>
        </TraceCollapsibleTrigger>
        <TraceCollapsibleContent>
          Checking whether the backoff starts counting attempts at zero or at one.
        </TraceCollapsibleContent>
      </TraceCollapsible>
    </Trace>
  )
}

export function Failed() {
  return (
    <Trace className="max-w-xl">
      <TraceCollapsible defaultOpen>
        <TraceCollapsibleTrigger>
          <TraceLine status="error">
            <TraceIcon>
              <TerminalIcon />
            </TraceIcon>
            <TraceTitle>pnpm test queue failed</TraceTitle>
            <TraceDescription>exit 1</TraceDescription>
          </TraceLine>
        </TraceCollapsibleTrigger>
        <TraceCollapsibleContent className="font-mono text-xs">
          AssertionError: expected "spy" to be called 2 times, but got 1 times
        </TraceCollapsibleContent>
      </TraceCollapsible>
    </Trace>
  )
}
