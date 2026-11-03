import { Badge } from "@/components/badge"
import { Card } from "@/components/card"
import { StatusDot } from "@/components/status-dot"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/table"

const threads = [
  { title: "Refactor auth middleware", branch: "feat/auth-guard", model: "opus-4.5", tone: "success", status: "Ready" },
  { title: "Fix stale session on reconnect", branch: "fix/reconnect", model: "sonnet-4.5", tone: "warning", status: "Awaiting input" },
  { title: "Add thread search", branch: "feat/thread-search", model: "opus-4.5", tone: "primary", status: "Working" },
  { title: "Bump Base UI to 1.9", branch: "chore/base-ui", model: "haiku-4.5", tone: "error", status: "Failed" },
] as const

const usage = [
  { model: "opus-4.5", runs: 42, tokens: "812,300" },
  { model: "sonnet-4.5", runs: 128, tokens: "1,640,120" },
  { model: "haiku-4.5", runs: 305, tokens: "402,880" },
]

export const notes =
  "Hairline rows and a muted header let the numbers do the talking. Right-align anything you would compare, and use tabular figures."

export function Threads() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Thread</TableHead>
          <TableHead>Branch</TableHead>
          <TableHead>Model</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {threads.map((thread) => (
          <TableRow key={thread.branch}>
            <TableCell className="font-medium">{thread.title}</TableCell>
            <TableCell className="font-mono text-muted-foreground text-xs">{thread.branch}</TableCell>
            <TableCell className="text-muted-foreground">{thread.model}</TableCell>
            <TableCell>
              <span className="inline-flex items-center gap-2">
                <StatusDot tone={thread.tone} />
                {thread.status}
              </span>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export function WithFooter() {
  return (
    <Table>
      <TableCaption>Usage for the last 7 days.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Model</TableHead>
          <TableHead className="text-right">Runs</TableHead>
          <TableHead className="text-right">Tokens</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {usage.map((row) => (
          <TableRow key={row.model}>
            <TableCell>{row.model}</TableCell>
            <TableCell className="text-right tabular-nums">{row.runs}</TableCell>
            <TableCell className="text-right tabular-nums">{row.tokens}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell>Total</TableCell>
          <TableCell className="text-right tabular-nums">475</TableCell>
          <TableCell className="text-right tabular-nums">2,855,300</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}

export function InCard() {
  return (
    <Card className="w-full gap-0 py-0">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="ps-4">Environment</TableHead>
            <TableHead>Commit</TableHead>
            <TableHead className="pe-4 text-right">State</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="ps-4 font-medium">Production</TableCell>
            <TableCell className="font-mono text-muted-foreground text-xs">5f47bdb</TableCell>
            <TableCell className="pe-4 text-right"><Badge variant="success">Live</Badge></TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="ps-4 font-medium">Preview</TableCell>
            <TableCell className="font-mono text-muted-foreground text-xs">36894e7</TableCell>
            <TableCell className="pe-4 text-right"><Badge variant="info">Building</Badge></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Card>
  )
}
