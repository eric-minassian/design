import {
  ArrowUpIcon,
  ChevronDownIcon,
  FilePenLineIcon,
  FileSearchIcon,
  PaperclipIcon,
  TerminalIcon,
} from "lucide-react"

import { Bubble, BubbleContent } from "@/components/bubble"
import { Button } from "@/components/button"
import { CodeBlock, CodeBlockContent, CodeBlockLine } from "@/components/code-block"
import { Message, MessageContent, MessageGroup } from "@/components/message"
import { useHighlightedCode } from "@/hooks/use-highlighted-code"
import { Trace, TraceDescription, TraceIcon, TraceLine, TraceTitle } from "@/components/trace"

export const notes =
  "A person's turn sits on a surface and an agent's turn doesn't, so a long thread reads as a document with questions in it. Keep the lane at 46rem and let tool calls stay one quiet line each."

export const bare = ["Thread", "Composer"]

const fix = `await queue.enqueue(job)
vi.advanceTimersByTime(1000)
await vi.waitFor(() => expect(job.attempts).toBe(2))`

export function Thread() {
  const lines = useHighlightedCode(fix, "ts")

  return (
    <div className="mx-auto flex w-full max-w-(--content-max-width) flex-col gap-4 p-4 sm:p-6">
      <MessageGroup>
        <Message align="end">
          <MessageContent>
            <Bubble>
              <BubbleContent>The retry test fails about one run in ten. Can you find out why?</BubbleContent>
            </Bubble>
          </MessageContent>
        </Message>
      </MessageGroup>
      <Trace>
        <TraceLine>
          <TraceIcon><FileSearchIcon /></TraceIcon>
          <TraceTitle>Read src/queue/retry.test.ts</TraceTitle>
        </TraceLine>
        <TraceLine>
          <TraceIcon><FilePenLineIcon /></TraceIcon>
          <TraceTitle>Edited src/queue/retry.test.ts</TraceTitle>
          <TraceDescription>+4 −2</TraceDescription>
        </TraceLine>
        <TraceLine status="running">
          <TraceIcon><TerminalIcon /></TraceIcon>
          <TraceTitle>Running pnpm test queue</TraceTitle>
        </TraceLine>
      </Trace>
      <MessageGroup>
        <Message>
          <MessageContent>
            <p>
              The test advances fake timers before <code>enqueue</code> resolves, so the retry is
              scheduled after the clock has already moved. Awaiting it first makes the order
              deterministic:
            </p>
            <CodeBlock>
              <CodeBlockContent>
                {lines.map((line, index) => (
                  <CodeBlockLine key={index}>{line}</CodeBlockLine>
                ))}
              </CodeBlockContent>
            </CodeBlock>
          </MessageContent>
        </Message>
      </MessageGroup>
    </div>
  )
}

export function Composer() {
  return (
    <div className="mx-auto w-full max-w-(--content-max-width) p-4 sm:p-6">
      <div className="rounded-2xl border bg-card shadow-xs/5 transition-colors focus-within:border-ring dark:shadow-[0_14px_32px_-18px_rgb(0_0_0/75%)]">
        <textarea
          aria-label="Message"
          className="field-sizing-content block max-h-48 min-h-14 w-full resize-none bg-transparent px-3.5 pt-3 pb-1 text-base outline-none placeholder:text-placeholder sm:text-sm"
          placeholder="Ask for a follow-up"
        />
        <div className="flex items-center gap-1 p-1.5">
          <Button aria-label="Attach a file" size="icon-sm" variant="ghost-muted">
            <PaperclipIcon />
          </Button>
          <Button size="compact" variant="ghost-muted">
            Opus 5.5
            <ChevronDownIcon />
          </Button>
          <Button aria-label="Send" className="ms-auto rounded-full before:rounded-full" size="icon-sm">
            <ArrowUpIcon />
          </Button>
        </div>
      </div>
    </div>
  )
}
