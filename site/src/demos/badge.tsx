import { CheckIcon, GitBranchIcon } from "lucide-react"

import { Badge } from "@/components/badge"

export const notes =
  "Tints carry meaning, so use the status colors only when the label has a status. Everything else is secondary or outline."

export function Variants() {
  return (
    <>
      <Badge>New</Badge>
      <Badge variant="secondary">opus-4.5</Badge>
      <Badge variant="outline">main</Badge>
      <Badge variant="ghost">Draft</Badge>
      <Badge variant="destructive">Failed</Badge>
    </>
  )
}

export function Status() {
  return (
    <>
      <Badge variant="success">Merged</Badge>
      <Badge variant="info">In review</Badge>
      <Badge variant="warning">Behind main</Badge>
      <Badge variant="error">Conflicts</Badge>
    </>
  )
}

export function Sizes() {
  return (
    <>
      <Badge size="sm" variant="secondary">Small</Badge>
      <Badge variant="secondary">Default</Badge>
      <Badge size="lg" variant="secondary">Large</Badge>
      <Badge size="control" variant="outline">Control</Badge>
    </>
  )
}

export function WithIcon() {
  return (
    <>
      <Badge variant="outline">
        <GitBranchIcon />
        feat/thread-search
      </Badge>
      <Badge variant="success">
        <CheckIcon />
        Checks passed
      </Badge>
      <Badge render={<a href="#/components/badge" />} variant="outline">#482</Badge>
    </>
  )
}
