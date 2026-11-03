"use client";
import { cn } from "../lib/utils.js";
import { jsx } from "react/jsx-runtime";
import "react";
import { Input as Input$1 } from "@base-ui/react/input";
// src/components/input.tsx
/**
* The visible box is a wrapping span so that focus can be drawn on the control
* while the native input stays flush. `className` applies to the wrapper.
*/
function Input({ className, type, size = "default", font = "default", unstyled = false, ...props }) {
	return /* @__PURE__ */ jsx("span", {
		"data-slot": "input-control",
		"data-size": size,
		className: cn(!unstyled && "relative inline-flex w-full rounded-lg border border-input bg-background not-dark:bg-clip-padding text-base text-foreground shadow-xs/5 ring-ring/24 transition-shadow before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-lg)-1px)] not-has-disabled:not-has-focus-visible:not-has-aria-invalid:before:shadow-[0_1px_--theme(--color-black/4%)] has-focus-visible:has-aria-invalid:border-destructive/64 has-focus-visible:has-aria-invalid:ring-destructive/16 has-aria-invalid:border-destructive/36 has-focus-visible:border-ring has-autofill:bg-foreground/4 has-disabled:opacity-64 has-[:disabled,:focus-visible,[aria-invalid]]:shadow-none has-focus-visible:ring-[3px] has-focus-visible:ring-inset sm:text-sm dark:bg-input/32 dark:has-autofill:bg-foreground/8 dark:has-aria-invalid:ring-destructive/24 dark:not-has-disabled:not-has-focus-visible:not-has-aria-invalid:before:shadow-[0_-1px_--theme(--color-white/6%)]", !unstyled && size === "compact" && "rounded-md before:rounded-[calc(var(--radius-md)-1px)]", font === "mono" && "font-mono tabular-nums", className) || void 0,
		children: /* @__PURE__ */ jsx(Input$1, {
			"data-slot": "input",
			type,
			className: cn("h-8.5 w-full min-w-0 rounded-[inherit] bg-transparent px-[calc(--spacing(3)-1px)] leading-8.5 outline-none placeholder:text-placeholder sm:h-7.5 sm:leading-7.5 [transition:background-color_5000000s_ease-in-out_0s]", size === "compact" && "h-7 px-[calc(--spacing(2.5)-1px)] text-xs leading-7 sm:h-7 sm:leading-7", size === "sm" && "h-7.5 px-[calc(--spacing(2.5)-1px)] leading-7.5 sm:h-6.5 sm:leading-6.5", size === "lg" && "h-9.5 leading-9.5 sm:h-8.5 sm:leading-8.5", type === "search" && "[&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none [&::-webkit-search-results-button]:appearance-none [&::-webkit-search-results-decoration]:appearance-none", type === "number" && "[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none", type === "file" && "text-muted-foreground file:me-3 file:bg-transparent file:font-medium file:text-foreground file:text-sm"),
			...props
		})
	});
}
export { Input };
