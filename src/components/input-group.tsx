"use client"

import * as React from "react"
import { Input as InputPrimitive } from "@base-ui/react/input"
import { cva, type VariantProps } from "class-variance-authority"

import { Button } from "@/components/button"
import { type InputProps } from "@/components/input"
import { cn } from "@/lib/utils"

const inputGroupVariants = cva(
  "group/input-group relative inline-flex w-full min-w-0 items-center rounded-[var(--control-radius)] border text-base text-foreground ring-ring/24 transition-shadow has-[input:focus-visible,textarea:focus-visible]:has-[input[aria-invalid=true],textarea[aria-invalid=true]]:border-destructive/64 has-[input:focus-visible,textarea:focus-visible]:has-[input[aria-invalid=true],textarea[aria-invalid=true]]:ring-destructive/16 has-[textarea]:h-auto has-data-[align=block-end]:h-auto has-data-[align=block-start]:h-auto has-data-[align=block-end]:flex-col has-data-[align=block-start]:flex-col has-[input:focus-visible,textarea:focus-visible]:border-ring has-[input[aria-invalid=true],textarea[aria-invalid=true]]:border-destructive/36 has-autofill:bg-foreground/4 has-[input:disabled,textarea:disabled]:opacity-64 has-[input:disabled,textarea:disabled,input:focus-visible,textarea:focus-visible,input[aria-invalid=true],textarea[aria-invalid=true]]:shadow-none has-[input:focus-visible,textarea:focus-visible]:ring-[3px] has-[input:focus-visible,textarea:focus-visible]:ring-inset sm:text-sm dark:has-autofill:bg-foreground/8 dark:has-[input[aria-invalid=true],textarea[aria-invalid=true]]:ring-destructive/24 has-data-[align=inline-start]:**:[input[data-size=sm]]:ps-1.5 has-data-[align=inline-end]:**:[input[data-size=sm]]:pe-1.5 *:[[data-slot=input-control],[data-slot=textarea-control]]:contents *:[[data-slot=input-control],[data-slot=textarea-control]]:before:hidden has-[[data-align=block-start],[data-align=block-end]]:**:[input]:h-auto has-data-[align=inline-start]:**:[input]:ps-2 has-data-[align=inline-end]:**:[input]:pe-2 has-data-[align=block-end]:**:[input]:pt-1.5 has-data-[align=block-start]:**:[input]:pb-1.5 **:[textarea]:min-h-20.5 **:[textarea]:resize-none **:[textarea]:py-[calc(--spacing(3)-1px)] **:[textarea]:max-sm:min-h-23.5",
  {
    variants: {
      variant: {
        default:
          "border-input bg-background not-dark:bg-clip-padding shadow-xs/5 before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--control-radius)-1px)] not-has-[input:disabled,textarea:disabled]:not-has-[input:focus-visible,textarea:focus-visible]:not-has-[input[aria-invalid=true],textarea[aria-invalid=true]]:before:shadow-[0_1px_--theme(--color-black/4%)] dark:bg-input/32 dark:not-has-[input:disabled,textarea:disabled]:not-has-[input:focus-visible,textarea:focus-visible]:not-has-[input[aria-invalid=true],textarea[aria-invalid=true]]:before:shadow-[0_-1px_--theme(--color-white/6%)]",
        popover:
          "dropdown-glass rounded-2xl has-[input:focus-visible,textarea:focus-visible]:border-[color-mix(in_srgb,var(--foreground)_18%,transparent)] has-[input:focus-visible,textarea:focus-visible]:ring-0",
        ghost:
          "border-transparent bg-transparent shadow-none hover:bg-muted/40 has-[input:focus-visible,textarea:focus-visible]:bg-background",
      },
      size: {
        default: null,
        lg: "h-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function InputGroup({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof inputGroupVariants>) {
  return (
    <div
      data-slot="input-group"
      role="group"
      className={cn(inputGroupVariants({ variant, size }), className)}
      {...props}
    />
  )
}

const inputGroupAddonVariants = cva(
  "[&_svg]:-mx-0.5 flex h-auto cursor-text select-none items-center justify-center gap-2 text-muted-foreground leading-none [&>kbd]:rounded-[calc(var(--radius)-5px)] [&_svg:not([class*='size-'])]:size-4.5 sm:[&_svg:not([class*='size-'])]:size-4 not-has-[button]:**:[svg:not([class*='opacity-'])]:opacity-80",
  {
    variants: {
      align: {
        "inline-start":
          "has-[>:last-child[data-slot=badge]]:-ms-1.5 has-[>button]:-ms-2 order-first ps-[calc(--spacing(3)-1px)] has-[>kbd:last-child]:ms-[-0.35rem] [[data-size=sm]+&]:ps-[calc(--spacing(2.5)-1px)]",
        "inline-end":
          "has-[>:last-child[data-slot=badge]]:-me-1.5 has-[>button]:-me-2 order-last pe-[calc(--spacing(3)-1px)] has-[>kbd:last-child]:me-[-0.35rem] [[data-size=sm]+&]:pe-[calc(--spacing(2.5)-1px)]",
        "block-start":
          "order-first w-full justify-start px-[calc(--spacing(3)-1px)] pt-[calc(--spacing(3)-1px)] [.border-b]:pb-[calc(--spacing(3)-1px)] [[data-size=sm]+&]:px-[calc(--spacing(2.5)-1px)]",
        "block-end":
          "order-last w-full justify-start px-[calc(--spacing(3)-1px)] pb-[calc(--spacing(3)-1px)] [.border-t]:pt-[calc(--spacing(3)-1px)] [[data-size=sm]+&]:px-[calc(--spacing(2.5)-1px)]",
      },
      inset: {
        default: null,
        pill: "[&_button]:rounded-full",
      },
    },
    compoundVariants: [
      {
        align: "inline-end",
        inset: "pill",
        className: "has-[>button]:me-0 pe-1 [[data-size=sm]+&]:pe-1 gap-0.5",
      },
      {
        align: "inline-start",
        inset: "pill",
        className: "has-[>button]:ms-0 ps-1 [[data-size=sm]+&]:ps-1 gap-0.5",
      },
    ],
    defaultVariants: {
      align: "inline-start",
    },
  }
)

function InputGroupAddon({
  className,
  align = "inline-start",
  inset,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof inputGroupAddonVariants>) {
  return (
    <div
      role="group"
      data-slot="input-group-addon"
      data-align={align}
      className={cn(inputGroupAddonVariants({ align, inset }), className)}
      onMouseDown={(event) => {
        const target = event.target as HTMLElement
        const isInteractive = target.closest(
          "button, a, input, select, textarea, [role='button'], [role='combobox'], [role='listbox'], [data-slot='select-trigger']"
        )
        if (isInteractive) return
        event.preventDefault()
        const parent = event.currentTarget.parentElement
        const input = parent?.querySelector<
          HTMLInputElement | HTMLTextAreaElement
        >("input, textarea")
        if (input && !parent?.querySelector("input:focus, textarea:focus")) {
          input.focus()
        }
      }}
      {...props}
    />
  )
}

function InputGroupButton({
  className,
  type = "button",
  variant = "ghost",
  size = "xs",
  ...props
}: Omit<React.ComponentProps<typeof Button>, "type"> & {
  type?: "button" | "submit" | "reset"
}) {
  return (
    <Button
      type={type}
      data-size={size}
      variant={variant}
      size={size}
      className={cn(
        "rounded-md before:rounded-[calc(var(--radius-md)-1px)]",
        className
      )}
      {...props}
    />
  )
}

function InputGroupText({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="input-group-text"
      className={cn(
        "flex items-center gap-2 whitespace-nowrap text-base text-muted-foreground sm:text-sm [&_svg]:pointer-events-none",
        className
      )}
      {...props}
    />
  )
}

/**
 * The Base UI input with no wrapper, since the group draws the surface. Unlike
 * Input, `className` lands on the native input itself.
 */
function InputGroupInput({
  className,
  type,
  size = "default",
  font = "default",
  ...props
}: Omit<InputProps, "unstyled">) {
  return (
    <InputPrimitive
      data-slot="input-group-control"
      data-size={size}
      type={type}
      className={cn(
        "h-8.5 w-full min-w-0 flex-1 rounded-[inherit] bg-transparent px-[calc(--spacing(3)-1px)] leading-8.5 outline-none placeholder:text-placeholder sm:h-7.5 sm:leading-7.5 [transition:background-color_5000000s_ease-in-out_0s]",
        size === "compact" &&
          "h-7 px-[calc(--spacing(2.5)-1px)] text-xs leading-7 sm:h-7 sm:leading-7",
        size === "sm" &&
          "h-7.5 px-[calc(--spacing(2.5)-1px)] leading-7.5 sm:h-6.5 sm:leading-6.5",
        size === "lg" && "h-9.5 leading-9.5 sm:h-8.5 sm:leading-8.5",
        font === "mono" && "font-mono tabular-nums",
        type === "search" &&
          "[&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none",
        className
      )}
      {...props}
    />
  )
}

function InputGroupTextarea({
  className,
  ...props
}: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="input-group-control"
      className={cn(
        "field-sizing-content max-h-64 w-full min-w-0 flex-1 rounded-[inherit] bg-transparent px-[calc(--spacing(3)-1px)] outline-none wrap-anywhere placeholder:text-placeholder",
        className
      )}
      {...props}
    />
  )
}

export {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
}
