import { Checkbox } from "@/components/checkbox"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/field"
import { Input } from "@/components/input"
import { Switch } from "@/components/switch"

export const notes =
  "Wrap every control that has a label in a Field, so spacing and error text stay consistent. Keep descriptions to one line; if it needs more, the setting is too complicated."

export function Default() {
  return (
    <Field className="max-w-xs">
      <FieldLabel htmlFor="field-branch">Branch name</FieldLabel>
      <Input defaultValue="t3/fix-sidebar" id="field-branch" />
      <FieldDescription>Created from main when the thread starts.</FieldDescription>
    </Field>
  )
}

export function Invalid() {
  return (
    <Field className="max-w-xs">
      <FieldLabel htmlFor="field-remote">Remote URL</FieldLabel>
      <Input aria-invalid defaultValue="git@github" id="field-remote" />
      <FieldError>Enter a full SSH or HTTPS remote.</FieldError>
    </Field>
  )
}

export function Horizontal() {
  return (
    <Field className="max-w-sm" orientation="horizontal">
      <FieldContent>
        <FieldLabel htmlFor="field-auto-commit">Auto-commit</FieldLabel>
        <FieldDescription>Commit after each completed turn.</FieldDescription>
      </FieldContent>
      <Switch defaultChecked id="field-auto-commit" />
    </Field>
  )
}

export function Fieldset() {
  return (
    <FieldSet className="w-full max-w-sm">
      <FieldLegend>Before pushing</FieldLegend>
      <FieldGroup className="gap-3">
        <Field orientation="horizontal">
          <Checkbox defaultChecked id="field-typecheck" />
          <FieldLabel className="font-normal" htmlFor="field-typecheck">Run typecheck</FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <Checkbox id="field-e2e" />
          <FieldLabel className="font-normal" htmlFor="field-e2e">Run end-to-end tests</FieldLabel>
        </Field>
      </FieldGroup>
      <FieldSeparator>Or</FieldSeparator>
      <Field orientation="horizontal">
        <Checkbox id="field-skip" />
        <FieldContent>
          <FieldLabel className="font-normal" htmlFor="field-skip">Skip checks</FieldLabel>
          <FieldDescription>Not allowed on protected branches.</FieldDescription>
        </FieldContent>
      </Field>
    </FieldSet>
  )
}
