import { StatusDot } from "@/components/status-dot"

export const notes =
  "Pulse means working, ping means it needs you, and everything else holds still. Always pair a dot with a label somewhere nearby, because color alone is not enough."

export function Tones() {
  return (
    <>
      <StatusDot tone="neutral" />
      <StatusDot tone="primary" />
      <StatusDot tone="success" />
      <StatusDot tone="warning" />
      <StatusDot tone="error" />
      <StatusDot tone="info" />
    </>
  )
}

export function Motion() {
  return (
    <>
      <span className="inline-flex items-center gap-2 text-sm">
        <StatusDot motion="pulse" tone="primary" />
        Working
      </span>
      <span className="inline-flex items-center gap-2 text-sm">
        <StatusDot motion="ping" tone="warning" />
        Awaiting input
      </span>
    </>
  )
}

export function ThreadList() {
  return (
    <ul className="flex w-full max-w-xs flex-col gap-2 text-sm">
      <li className="flex items-center gap-2">
        <StatusDot tone="success" />
        Refactor auth middleware
      </li>
      <li className="flex items-center gap-2">
        <StatusDot motion="pulse" tone="primary" />
        Add thread search
      </li>
      <li className="flex items-center gap-2">
        <StatusDot motion="ping" tone="warning" />
        Fix stale session on reconnect
      </li>
      <li className="flex items-center gap-2">
        <StatusDot tone="error" />
        Bump Base UI to 1.9
      </li>
    </ul>
  )
}
