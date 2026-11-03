import { CpuIcon, GitBranchIcon } from "lucide-react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/select"

export const notes =
  "Pick one from a list that does not need typing. If it runs past a dozen options, use a combobox instead."

export function Default() {
  const models = [
    { label: "Opus 4.5", value: "opus" },
    { label: "Sonnet 4.5", value: "sonnet" },
    { label: "Haiku 4.5", value: "haiku" },
  ]

  return (
    <Select defaultValue="sonnet" items={models}>
      <SelectTrigger className="w-56">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {models.map((model) => (
          <SelectItem key={model.value} value={model.value}>
            {model.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

export function Placeholder() {
  const environments = [
    { label: "Local", value: "local" },
    { label: "Staging", value: "staging" },
    { label: "Production", value: "production" },
  ]

  return (
    <Select items={environments}>
      <SelectTrigger className="w-56">
        <SelectValue placeholder="Choose an environment" />
      </SelectTrigger>
      <SelectContent>
        {environments.map((environment) => (
          <SelectItem key={environment.value} value={environment.value}>
            {environment.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

export function Sizes() {
  const sizes = ["compact", "sm", "default", "lg"] as const

  return (
    <>
      {sizes.map((size) => (
        <Select defaultValue={size} key={size}>
          <SelectTrigger className="w-32" size={size}>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={size}>{size}</SelectItem>
            <SelectItem value="other">other</SelectItem>
          </SelectContent>
        </Select>
      ))}
    </>
  )
}

export function Grouped() {
  return (
    <Select defaultValue="t3/fix-sidebar">
      <SelectTrigger className="w-64">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Protected</SelectLabel>
          <SelectItem value="main">
            <GitBranchIcon />
            main
          </SelectItem>
          <SelectItem value="next">
            <GitBranchIcon />
            next
          </SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Worktrees</SelectLabel>
          <SelectItem value="t3/fix-sidebar">
            <GitBranchIcon />
            t3/fix-sidebar
          </SelectItem>
          <SelectItem value="t3/new-composer">
            <GitBranchIcon />
            t3/new-composer
          </SelectItem>
          <SelectItem disabled value="t3/archived">
            <GitBranchIcon />
            t3/archived
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export function GhostInToolbar() {
  const efforts = [
    { label: "Low", value: "low" },
    { label: "Medium", value: "medium" },
    { label: "High", value: "high" },
  ]

  return (
    <Select defaultValue="medium" items={efforts}>
      <SelectTrigger className="w-auto" size="compact" variant="ghost">
        <CpuIcon />
        <SelectValue />
      </SelectTrigger>
      <SelectContent alignItemWithTrigger={false} className="min-w-32">
        {efforts.map((effort) => (
          <SelectItem key={effort.value} value={effort.value}>
            {effort.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

export function States() {
  return (
    <>
      <Select defaultValue="main" disabled>
        <SelectTrigger className="w-44">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="main">main</SelectItem>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger aria-invalid className="w-44">
          <SelectValue placeholder="Select a branch" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="main">main</SelectItem>
        </SelectContent>
      </Select>
    </>
  )
}
