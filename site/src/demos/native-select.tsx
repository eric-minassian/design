import {
  NativeSelect,
  NativeSelectOptGroup,
  NativeSelectOption,
} from "@/components/native-select"

export const notes =
  "Use the platform picker on phones and for long lists where the OS wheel beats a custom popup. Everywhere else, Select matches the rest of the UI."

export function Default() {
  return (
    <NativeSelect defaultValue="sonnet">
      <NativeSelectOption value="opus">Opus 4.5</NativeSelectOption>
      <NativeSelectOption value="sonnet">Sonnet 4.5</NativeSelectOption>
      <NativeSelectOption value="haiku">Haiku 4.5</NativeSelectOption>
    </NativeSelect>
  )
}

export function Sizes() {
  return (
    <>
      <NativeSelect size="compact">
        <NativeSelectOption>Compact</NativeSelectOption>
      </NativeSelect>
      <NativeSelect size="sm">
        <NativeSelectOption>Small</NativeSelectOption>
      </NativeSelect>
      <NativeSelect>
        <NativeSelectOption>Default</NativeSelectOption>
      </NativeSelect>
      <NativeSelect size="lg">
        <NativeSelectOption>Large</NativeSelectOption>
      </NativeSelect>
    </>
  )
}

export function Grouped() {
  return (
    <NativeSelect className="w-56" defaultValue="t3/fix-sidebar">
      <NativeSelectOptGroup label="Protected">
        <NativeSelectOption value="main">main</NativeSelectOption>
        <NativeSelectOption value="next">next</NativeSelectOption>
      </NativeSelectOptGroup>
      <NativeSelectOptGroup label="Worktrees">
        <NativeSelectOption value="t3/fix-sidebar">t3/fix-sidebar</NativeSelectOption>
        <NativeSelectOption value="t3/new-composer">t3/new-composer</NativeSelectOption>
      </NativeSelectOptGroup>
    </NativeSelect>
  )
}

export function States() {
  return (
    <>
      <NativeSelect disabled>
        <NativeSelectOption>Production</NativeSelectOption>
      </NativeSelect>
      <NativeSelect aria-invalid defaultValue="">
        <NativeSelectOption value="">Select a region</NativeSelectOption>
        <NativeSelectOption value="iad">us-east-1</NativeSelectOption>
      </NativeSelect>
    </>
  )
}
