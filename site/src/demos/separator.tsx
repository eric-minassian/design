import { Separator } from "@/components/separator"

export const notes =
  "A hairline, and nothing more. Reach for spacing first, and add one only when two groups still read as one."

export function Horizontal() {
  return (
    <div className="w-full max-w-sm text-sm">
      <p className="font-medium">Refactor auth middleware</p>
      <p className="text-muted-foreground">feat/auth-guard, 3 commits ahead of main</p>
      <Separator className="my-3" />
      <p className="text-muted-foreground">Moved session checks into a single guard.</p>
    </div>
  )
}

export function Vertical() {
  return (
    <div className="flex h-5 items-center gap-3 text-muted-foreground text-sm">
      <span>opus-4.5</span>
      <Separator orientation="vertical" />
      <span>12 min</span>
      <Separator orientation="vertical" />
      <span className="tabular-nums">48,210 tokens</span>
    </div>
  )
}
