import { Input } from "@/components/input"
import { Label } from "@/components/label"

export const notes =
  "The box is a wrapper so focus can draw inside the control, which means className lands on the wrapper and everything else lands on the native input."

export function Default() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <Label htmlFor="input-thread">Thread title</Label>
      <Input id="input-thread" placeholder="Fix the sidebar overflow" />
    </div>
  )
}

export function Sizes() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-3">
      <Input placeholder="Compact" size="compact" />
      <Input placeholder="Small" size="sm" />
      <Input placeholder="Default" />
      <Input placeholder="Large" size="lg" />
    </div>
  )
}

export function Mono() {
  return (
    <Input className="max-w-xs" defaultValue="a8934ec1d2f0" font="mono" readOnly />
  )
}

export function Types() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-3">
      <Input placeholder="Search threads" type="search" />
      <Input defaultValue={5199} type="number" />
      <Input type="file" />
    </div>
  )
}

export function States() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-3">
      <Input defaultValue="main" disabled />
      <Input aria-invalid defaultValue="not a branch name" />
    </div>
  )
}
