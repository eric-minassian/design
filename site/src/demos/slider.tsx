import * as React from "react"

import { Label } from "@/components/label"
import { Slider } from "@/components/slider"

export const notes =
  "Use a slider when the rough value matters more than the exact one. If someone will care about the digit, give them a number field."

export function Default() {
  return (
    <div className="w-full max-w-xs">
      <Slider aria-label="Glass opacity" defaultValue={[64]} />
    </div>
  )
}

export function WithValue() {
  const [value, setValue] = React.useState(0.7)

  return (
    <div className="flex w-full max-w-xs flex-col gap-3">
      <div className="flex items-center justify-between">
        <Label id="temperature">Temperature</Label>
        <span className="text-muted-foreground text-xs tabular-nums">{value.toFixed(2)}</span>
      </div>
      <Slider
        aria-labelledby="temperature"
        max={1}
        min={0}
        step={0.05}
        value={[value]}
        onValueChange={(next) => setValue(Array.isArray(next) ? next[0]! : next)}
      />
    </div>
  )
}

export function Range() {
  return (
    <div className="w-full max-w-xs">
      <Slider aria-label="Context window" defaultValue={[20, 72]} />
    </div>
  )
}

export function States() {
  return (
    <div className="flex w-full max-w-xs items-center gap-8">
      <Slider aria-label="Disabled" defaultValue={[40]} disabled />
      <div className="h-40">
        <Slider aria-label="Volume" defaultValue={[60]} orientation="vertical" />
      </div>
    </div>
  )
}
