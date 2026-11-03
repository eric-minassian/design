import { Progress, ProgressLabel, ProgressValue } from "@/components/progress"

export const notes =
  "For work you can measure. If you cannot say how much is left, use a spinner, or the indeterminate state when the bar's place in the layout matters."

export function Default() {
  return <Progress aria-label="Indexing" className="max-w-sm" value={64} />
}

export function WithLabel() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <Progress value={82}>
        <ProgressLabel>Context used</ProgressLabel>
        <ProgressValue />
      </Progress>
      <Progress value={100}>
        <ProgressLabel>Indexing repository</ProgressLabel>
        <ProgressValue />
      </Progress>
    </div>
  )
}

export function Steps() {
  return (
    <Progress
      className="max-w-sm"
      format={{ style: "decimal" }}
      max={12}
      value={7}
    >
      <ProgressLabel>Running checks</ProgressLabel>
      <ProgressValue>{(value) => `${value} of 12`}</ProgressValue>
    </Progress>
  )
}

export function Indeterminate() {
  return (
    <Progress className="max-w-sm" value={null}>
      <ProgressLabel>Cloning repository</ProgressLabel>
    </Progress>
  )
}
