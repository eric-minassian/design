import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldTitle,
} from "@/components/field"
import { Label } from "@/components/label"
import { RadioGroup, RadioGroupItem } from "@/components/radio-group"

export const notes =
  "Use radios when there are five options or fewer and comparing them matters. Past that, a select keeps the page quiet."

export function Default() {
  return (
    <RadioGroup defaultValue="ask">
      <Label className="font-normal">
        <RadioGroupItem value="ask" />
        Ask before running commands
      </Label>
      <Label className="font-normal">
        <RadioGroupItem value="edits" />
        Auto-accept edits
      </Label>
      <Label className="font-normal">
        <RadioGroupItem value="full" />
        Full access
      </Label>
    </RadioGroup>
  )
}

export function Cards() {
  return (
    <RadioGroup className="w-full max-w-sm gap-2" defaultValue="worktree">
      <FieldLabel>
        <Field orientation="horizontal">
          <RadioGroupItem value="local" />
          <FieldContent>
            <FieldTitle>Local</FieldTitle>
            <FieldDescription>Work directly in your current checkout.</FieldDescription>
          </FieldContent>
        </Field>
      </FieldLabel>
      <FieldLabel>
        <Field orientation="horizontal">
          <RadioGroupItem value="worktree" />
          <FieldContent>
            <FieldTitle>New worktree</FieldTitle>
            <FieldDescription>Isolate this thread on its own branch.</FieldDescription>
          </FieldContent>
        </Field>
      </FieldLabel>
    </RadioGroup>
  )
}

export function States() {
  return (
    <div className="flex gap-12">
      <RadioGroup defaultValue="main" disabled>
        <Label className="font-normal text-muted-foreground">
          <RadioGroupItem value="main" />
          main
        </Label>
        <Label className="font-normal text-muted-foreground">
          <RadioGroupItem value="next" />
          next
        </Label>
      </RadioGroup>
      <RadioGroup>
        <Label className="font-normal">
          <RadioGroupItem aria-invalid value="staging" />
          Staging
        </Label>
        <Label className="font-normal">
          <RadioGroupItem aria-invalid value="production" />
          Production
        </Label>
      </RadioGroup>
    </div>
  )
}
