import * as React from "react"

import { Label } from "@/components/label"
import {
  NumberField,
  NumberFieldDecrement,
  NumberFieldGroup,
  NumberFieldIncrement,
  NumberFieldInput,
} from "@/components/number-field"

export const notes =
  "Use it when the exact value matters and small nudges are common: limits, ports, retries. Arrow keys step, and shift steps further."

export function Default() {
  return (
    <NumberField className="w-36" defaultValue={3} min={0}>
      <NumberFieldGroup>
        <NumberFieldDecrement />
        <NumberFieldInput aria-label="Max retries" />
        <NumberFieldIncrement />
      </NumberFieldGroup>
    </NumberField>
  )
}

export function Sizes() {
  return (
    <>
      <NumberField className="w-32" defaultValue={1} size="sm">
        <NumberFieldGroup>
          <NumberFieldDecrement />
          <NumberFieldInput aria-label="Small" />
          <NumberFieldIncrement />
        </NumberFieldGroup>
      </NumberField>
      <NumberField className="w-36" defaultValue={2}>
        <NumberFieldGroup>
          <NumberFieldDecrement />
          <NumberFieldInput aria-label="Default" />
          <NumberFieldIncrement />
        </NumberFieldGroup>
      </NumberField>
      <NumberField className="w-40" defaultValue={3} size="lg">
        <NumberFieldGroup>
          <NumberFieldDecrement />
          <NumberFieldInput aria-label="Large" />
          <NumberFieldIncrement />
        </NumberFieldGroup>
      </NumberField>
    </>
  )
}

export function Controlled() {
  const [port, setPort] = React.useState<number | null>(5199)

  return (
    <div className="flex w-44 flex-col gap-2">
      <Label htmlFor="dev-port">Dev server port</Label>
      <NumberField
        format={{ useGrouping: false }}
        max={65535}
        min={1024}
        value={port}
        onValueChange={setPort}
      >
        <NumberFieldGroup>
          <NumberFieldDecrement />
          <NumberFieldInput id="dev-port" />
          <NumberFieldIncrement />
        </NumberFieldGroup>
      </NumberField>
    </div>
  )
}

export function States() {
  return (
    <>
      <NumberField className="w-36" defaultValue={8} disabled>
        <NumberFieldGroup>
          <NumberFieldDecrement />
          <NumberFieldInput aria-label="Parallel agents" />
          <NumberFieldIncrement />
        </NumberFieldGroup>
      </NumberField>
      <NumberField className="w-36" defaultValue={0}>
        <NumberFieldGroup>
          <NumberFieldDecrement />
          <NumberFieldInput aria-invalid aria-label="Timeout" />
          <NumberFieldIncrement />
        </NumberFieldGroup>
      </NumberField>
    </>
  )
}
