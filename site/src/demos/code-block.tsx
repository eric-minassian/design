import { FileCodeIcon } from "lucide-react"

import {
  CodeBlock,
  CodeBlockActions,
  CodeBlockContent,
  CodeBlockCopyButton,
  CodeBlockHeader,
  CodeBlockLine,
  CodeBlockTitle,
} from "@/components/code-block"
import { useHighlightedCode } from "@/hooks/use-highlighted-code"

const retryTest = `import { describe, expect, it, vi } from "vitest"

import { createQueue } from "./queue"

describe("retry", () => {
  it("retries a failed job once", async () => {
    const run = vi.fn().mockRejectedValueOnce(new Error("timeout"))
    const queue = createQueue({ run, retries: 1 })

    await queue.enqueue({ id: "job-1" })
    await vi.waitFor(() => expect(run).toHaveBeenCalledTimes(2))
  })
})
`

const backoff = `export function backoff(attempt: number) {
  const delay = BASE_DELAY * 2 ** attempt
  return Math.min(delay, MAX_DELAY)
}
`

const diff = [
  { kind: "default", text: "export function backoff(attempt: number) {" },
  { kind: "removed", text: "  const delay = BASE_DELAY * 2 ** attempt" },
  { kind: "added", text: "  const delay = BASE_DELAY * 2 ** (attempt - 1)" },
  { kind: "default", text: "  return Math.min(delay, MAX_DELAY)" },
  { kind: "default", text: "}" },
] as const

const failure = `$ pnpm test queue

 FAIL  src/queue/retry.test.ts > retry > retries a failed job once
AssertionError: expected "spy" to be called 2 times, but got 1 times
 ❯ src/queue/retry.test.ts:11:45`

export const notes =
  "Quiet by design, so it never competes with the prose around it. Copy stays in the header, and color belongs to the tokens and to diff lines."

export function WithHeader() {
  const lines = useHighlightedCode(retryTest, "ts")

  return (
    <CodeBlock className="max-w-2xl">
      <CodeBlockHeader>
        <CodeBlockTitle>typescript</CodeBlockTitle>
        <CodeBlockActions>
          <CodeBlockCopyButton value={retryTest} />
        </CodeBlockActions>
      </CodeBlockHeader>
      <CodeBlockContent>
        {lines.map((line, index) => (
          <CodeBlockLine key={index}>{line}</CodeBlockLine>
        ))}
      </CodeBlockContent>
    </CodeBlock>
  )
}

export function LineNumbers() {
  const lines = useHighlightedCode(backoff, "ts")

  return (
    <CodeBlock className="max-w-2xl" size="sm">
      <CodeBlockHeader>
        <CodeBlockTitle>
          <FileCodeIcon />
          src/queue/backoff.ts
        </CodeBlockTitle>
        <CodeBlockActions>
          <CodeBlockCopyButton value={backoff} />
        </CodeBlockActions>
      </CodeBlockHeader>
      <CodeBlockContent lineNumbers startLine={41}>
        {lines.map((line, index) => (
          <CodeBlockLine key={index} variant={index === 1 ? "highlighted" : "default"}>
            {line}
          </CodeBlockLine>
        ))}
      </CodeBlockContent>
    </CodeBlock>
  )
}

export function Diff() {
  return (
    <CodeBlock className="max-w-2xl" size="sm">
      <CodeBlockHeader>
        <CodeBlockTitle>src/queue/backoff.ts</CodeBlockTitle>
        <CodeBlockActions>
          <CodeBlockCopyButton value={diff.map((line) => line.text).join("\n")} />
        </CodeBlockActions>
      </CodeBlockHeader>
      <CodeBlockContent>
        {diff.map((line, index) => (
          <CodeBlockLine key={index} variant={line.kind}>
            {line.text}
          </CodeBlockLine>
        ))}
      </CodeBlockContent>
    </CodeBlock>
  )
}

export function FailedCommand() {
  return (
    <CodeBlock className="max-w-2xl" size="sm" variant="destructive">
      <CodeBlockActions>
        <CodeBlockCopyButton value={failure} />
      </CodeBlockActions>
      <CodeBlockContent>{failure}</CodeBlockContent>
    </CodeBlock>
  )
}
