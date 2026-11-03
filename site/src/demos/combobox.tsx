import { GitBranchIcon, SparklesIcon } from "lucide-react"

import { Button } from "@/components/button"
import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxSearchInput,
  ComboboxTrigger,
  ComboboxValue,
  useComboboxAnchor,
} from "@/components/combobox"

export const notes =
  "Reach for a combobox once a list is long enough that people would rather type than scan: branches, models, files. Short lists belong in a select."

export function Default() {
  const branches = ["main", "next", "t3/fix-sidebar", "t3/new-composer", "t3/toast-glass"]

  return (
    <Combobox items={branches}>
      <ComboboxInput className="w-64" placeholder="Search branches" />
      <ComboboxContent>
        <ComboboxEmpty>No branches found.</ComboboxEmpty>
        <ComboboxList>
          {(branch: string) => (
            <ComboboxItem key={branch} value={branch}>
              <GitBranchIcon />
              {branch}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}

export function WithIconAndClear() {
  const models = ["Opus 4.5", "Sonnet 4.5", "Haiku 4.5", "GPT-5.2", "Gemini 3"]

  return (
    <Combobox defaultValue="Sonnet 4.5" items={models}>
      <ComboboxInput
        className="w-64"
        placeholder="Choose a model"
        showClear
        startAddon={<SparklesIcon />}
      />
      <ComboboxContent>
        <ComboboxEmpty>No models match.</ComboboxEmpty>
        <ComboboxList>
          {(model: string) => (
            <ComboboxItem key={model} value={model}>
              {model}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}

export function SearchInPopup() {
  const projects = ["design", "t3code", "uploadthing", "create-t3-app"]

  return (
    <Combobox defaultValue="t3code" items={projects}>
      <ComboboxTrigger
        render={<Button className="w-56 justify-between" variant="outline" />}
      >
        <ComboboxValue />
      </ComboboxTrigger>
      <ComboboxContent>
        <ComboboxSearchInput placeholder="Search projects" />
        <ComboboxEmpty>No projects found.</ComboboxEmpty>
        <ComboboxList>
          {(project: string) => (
            <ComboboxItem key={project} value={project}>
              {project}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}

export function Multiple() {
  const labels = ["bug", "design", "needs review", "performance", "docs"]
  const anchor = useComboboxAnchor()

  return (
    <Combobox defaultValue={["bug", "design"]} items={labels} multiple>
      <ComboboxChips className="max-w-sm" ref={anchor}>
        <ComboboxValue>
          {(values: string[]) => (
            <>
              {values.map((value) => (
                <ComboboxChip key={value}>{value}</ComboboxChip>
              ))}
              <ComboboxChipsInput placeholder="Add label" />
            </>
          )}
        </ComboboxValue>
      </ComboboxChips>
      <ComboboxContent anchor={anchor}>
        <ComboboxEmpty>No labels found.</ComboboxEmpty>
        <ComboboxList>
          {(label: string) => (
            <ComboboxItem key={label} value={label}>
              {label}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}

export function States() {
  const regions = ["us-east-1", "eu-west-1"]

  return (
    <>
      <Combobox disabled items={regions}>
        <ComboboxInput className="w-56" disabled placeholder="Region" />
        <ComboboxContent />
      </Combobox>
      <Combobox items={regions}>
        <ComboboxInput aria-invalid className="w-56" placeholder="Select a region" />
        <ComboboxContent>
          <ComboboxList>
            {(region: string) => (
              <ComboboxItem key={region} value={region}>
                {region}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </>
  )
}
