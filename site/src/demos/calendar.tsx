import * as React from "react"
import type { DateRange } from "react-day-picker"

import { Calendar } from "@/components/calendar"

export const notes =
  "For picking a date from context, such as when a run is scheduled. When people already know the date, a typed input is faster."

export function Single() {
  const [date, setDate] = React.useState<Date | undefined>(new Date(2026, 10, 12))

  return (
    <Calendar
      className="rounded-xl border bg-card"
      defaultMonth={new Date(2026, 10)}
      mode="single"
      selected={date}
      onSelect={setDate}
    />
  )
}

export function Range() {
  const [range, setRange] = React.useState<DateRange | undefined>({
    from: new Date(2026, 10, 9),
    to: new Date(2026, 10, 18),
  })

  return (
    <Calendar
      className="rounded-xl border bg-card"
      defaultMonth={new Date(2026, 10)}
      mode="range"
      numberOfMonths={2}
      selected={range}
      onSelect={setRange}
    />
  )
}

export function Dropdowns() {
  return (
    <Calendar
      captionLayout="dropdown"
      className="rounded-xl border bg-card"
      defaultMonth={new Date(2026, 10)}
      endMonth={new Date(2028, 11)}
      mode="single"
      startMonth={new Date(2024, 0)}
    />
  )
}

export function DisabledDays() {
  return (
    <Calendar
      className="rounded-xl border bg-card"
      defaultMonth={new Date(2026, 10)}
      disabled={[{ dayOfWeek: [0, 6] }, { before: new Date(2026, 10, 4) }]}
      mode="single"
    />
  )
}
