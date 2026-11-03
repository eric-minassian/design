import { ChevronsUpDownIcon } from "lucide-react"

import { Button } from "@/components/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleSectionHeader,
  CollapsibleTrigger,
  SectionHeaderStatus,
} from "@/components/collapsible"

export const notes =
  "One section that hides detail until it is asked for. Section headers are the quiet way to fold groups of rows in a rail or panel."

export function Default() {
  return (
    <Collapsible className="w-full max-w-sm" defaultOpen>
      <div className="flex items-center justify-between gap-2">
        <span className="font-medium text-sm">3 files changed</span>
        <CollapsibleTrigger
          render={<Button aria-label="Toggle files" size="icon-xs" variant="ghost" />}
        >
          <ChevronsUpDownIcon />
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent>
        <ul className="mt-2 flex flex-col gap-1 font-mono text-muted-foreground text-xs">
          <li>src/components/tabs.tsx</li>
          <li>src/components/card.tsx</li>
          <li>site/src/demos/tabs.tsx</li>
        </ul>
      </CollapsibleContent>
    </Collapsible>
  )
}

export function SectionHeader() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-1">
      <Collapsible defaultOpen>
        <CollapsibleTrigger render={<CollapsibleSectionHeader />}>Today</CollapsibleTrigger>
        <CollapsibleContent>
          <div className="flex flex-col px-2 pb-1 text-sm">
            <span className="py-1">Refactor auth middleware</span>
            <span className="py-1">Add thread search</span>
          </div>
        </CollapsibleContent>
      </Collapsible>
      <Collapsible>
        <CollapsibleTrigger render={<CollapsibleSectionHeader />}>Yesterday</CollapsibleTrigger>
        <CollapsibleContent>
          <div className="flex flex-col px-2 pb-1 text-sm">
            <span className="py-1">Bump Base UI to 1.9</span>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
}

export function Tones() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-1">
      <Collapsible>
        <CollapsibleTrigger render={<CollapsibleSectionHeader />}>Muted</CollapsibleTrigger>
      </Collapsible>
      <Collapsible>
        <CollapsibleTrigger render={<CollapsibleSectionHeader tone="emphasized" />}>Emphasized</CollapsibleTrigger>
      </Collapsible>
      <Collapsible>
        <CollapsibleTrigger render={<CollapsibleSectionHeader tone="accent" />}>Accent</CollapsibleTrigger>
      </Collapsible>
      <Collapsible>
        <CollapsibleTrigger
          render={<CollapsibleSectionHeader accessory={<SectionHeaderStatus>2 failed</SectionHeaderStatus>} />}
        >
          Checks
        </CollapsibleTrigger>
      </Collapsible>
    </div>
  )
}
