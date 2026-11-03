"use client"

import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox"

import { cn } from "@/lib/utils"

const rootClassName =
  "peer relative inline-flex size-4.5 shrink-0 cursor-pointer items-center justify-center rounded-[.25rem] border border-input bg-background not-dark:bg-clip-padding shadow-xs/5 outline-none transition-shadow before:pointer-events-none before:absolute before:inset-0 before:rounded-[3px] not-data-disabled:not-data-checked:not-aria-invalid:before:shadow-[0_1px_--theme(--color-black/4%)] pointer-coarse:after:absolute pointer-coarse:after:-inset-3.5 focus-visible:outline-2 focus-visible:outline-solid focus-visible:-outline-offset-2 focus-visible:outline-ring aria-invalid:border-destructive/36 focus-visible:aria-invalid:border-destructive/64 focus-visible:aria-invalid:outline-destructive/48 data-disabled:cursor-not-allowed data-disabled:opacity-64 group-has-disabled/field:opacity-64 sm:size-4 dark:not-data-checked:bg-input/32 dark:focus-visible:aria-invalid:outline-destructive/24 dark:not-data-disabled:not-data-checked:not-aria-invalid:before:shadow-[0_-1px_--theme(--color-white/6%)] [[data-disabled],[data-checked],[aria-invalid]]:shadow-none"

const indicatorClassName =
  "-inset-px absolute flex items-center justify-center rounded-[.25rem] text-primary-foreground data-unchecked:hidden data-checked:bg-primary data-indeterminate:text-foreground in-[[data-slot=checkbox]:focus-visible]:inset-shadow-[0_0_0_3px_var(--background)] in-[[data-slot=checkbox]:focus-visible]:outline-2 in-[[data-slot=checkbox]:focus-visible]:outline-solid in-[[data-slot=checkbox]:focus-visible]:-outline-offset-2 in-[[data-slot=checkbox]:focus-visible]:outline-inherit"

function CheckGlyph() {
  return (
    <svg
      className="size-3.5 text-current sm:size-3"
      fill="none"
      height="24"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5.252 12.7 10.2 18.63 18.748 5.37" />
    </svg>
  )
}

function IndeterminateGlyph() {
  return (
    <svg
      className="size-3.5 text-current sm:size-3"
      fill="none"
      height="24"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5.252 12h13.496" />
    </svg>
  )
}

function Checkbox({ className, ...props }: CheckboxPrimitive.Root.Props) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(rootClassName, className)}
      {...props}
    >
      {/* Keep an inner gap in the focus outline. Explicit glyph colors resist row icon-muting rules. */}
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className={indicatorClassName}
        render={(indicatorProps, state) => (
          <span {...indicatorProps}>
            {state.indeterminate ? <IndeterminateGlyph /> : <CheckGlyph />}
          </span>
        )}
      />
    </CheckboxPrimitive.Root>
  )
}

/** Checkbox's look without its hidden input, for a row that is itself the button. */
function CheckboxMark({
  checked,
  className,
}: {
  checked: boolean
  className?: string
}) {
  const state = checked ? { "data-checked": "" } : { "data-unchecked": "" }
  return (
    <span
      aria-hidden
      data-slot="checkbox"
      className={cn(rootClassName, className)}
      {...state}
    >
      <span
        data-slot="checkbox-indicator"
        className={indicatorClassName}
        {...state}
      >
        <CheckGlyph />
      </span>
    </span>
  )
}

export { Checkbox, CheckboxMark }
