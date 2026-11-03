"use client";
import { cn } from "../lib/utils.js";
import { jsx } from "react/jsx-runtime";
import { cva } from "class-variance-authority";
import { Toggle as Toggle$1 } from "@base-ui/react/toggle";
// src/components/toggle.tsx
const toggleVariants = cva("[&_svg]:-mx-0.5 group/toggle relative inline-flex shrink-0 cursor-pointer select-none items-center justify-center gap-2 whitespace-nowrap rounded-lg border font-medium text-base text-foreground outline-none transition-shadow before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-lg)-1px)] pointer-coarse:after:absolute pointer-coarse:after:size-full pointer-coarse:after:min-h-11 pointer-coarse:after:min-w-11 hover:bg-accent focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-64 aria-disabled:opacity-64 aria-invalid:border-destructive/36 data-pressed:bg-input/64 data-pressed:text-accent-foreground sm:text-sm [&_svg:not([class*='opacity-'])]:opacity-80 [&_svg:not([class*='size-'])]:size-4.5 sm:[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "border-transparent",
			outline: "border-input bg-background not-dark:bg-clip-padding shadow-xs/5 not-disabled:not-active:not-data-pressed:before:shadow-[0_1px_--theme(--color-black/4%)] dark:bg-input/32 dark:data-pressed:bg-input dark:hover:bg-input/64 dark:not-disabled:not-active:not-data-pressed:before:shadow-[0_-1px_--theme(--color-white/6%)] dark:not-disabled:not-data-pressed:before:shadow-[0_-1px_--theme(--color-white/2%)] [:disabled,:active,[data-pressed]]:shadow-none",
			ghost: "border-transparent text-foreground shadow-none before:shadow-none disabled:text-muted-foreground disabled:opacity-100 disabled:data-pressed:text-muted-foreground data-pressed:bg-accent data-pressed:text-accent-foreground disabled:[&_svg]:opacity-100 [:disabled,:active,[data-pressed]]:shadow-none",
			pill: "rounded-full border-transparent px-3 font-normal text-muted-foreground before:rounded-full data-pressed:text-foreground",
			segmented: "border-transparent text-muted-foreground shadow-none transition-colors before:shadow-none hover:bg-background/55 hover:text-foreground data-pressed:bg-background data-pressed:text-foreground data-pressed:shadow-xs/10 dark:data-pressed:bg-input/72 dark:hover:bg-input/32"
		},
		size: {
			default: "h-9 min-w-9 px-[calc(--spacing(2)-1px)] sm:h-8 sm:min-w-8",
			xs: "h-7 min-w-7 rounded-md px-[calc(--spacing(1)-1px)] before:rounded-[calc(var(--radius-md)-1px)] sm:h-6 sm:min-w-6",
			compact: "h-7 min-w-7 rounded-md px-[calc(--spacing(1)-1px)] text-xs before:rounded-[calc(var(--radius-md)-1px)] sm:text-xs [&_svg:not([class*='size-'])]:size-3.5 sm:[&_svg:not([class*='size-'])]:size-3.5",
			segmented: "h-6 min-w-0 rounded-md px-2.5 text-xs before:rounded-[calc(var(--radius-md)-1px)] sm:text-xs [&_svg:not([class*='size-'])]:size-3.5 sm:[&_svg:not([class*='size-'])]:size-3.5",
			sm: "h-8 min-w-8 px-[calc(--spacing(1.5)-1px)] sm:h-7 sm:min-w-7",
			lg: "h-10 min-w-10 px-[calc(--spacing(2.5)-1px)] sm:h-9 sm:min-w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Toggle({ className, variant = "default", size = "default", ...props }) {
	return /* @__PURE__ */ jsx(Toggle$1, {
		"data-slot": "toggle",
		className: cn(toggleVariants({
			variant,
			size,
			className
		})),
		...props
	});
}
export { Toggle, toggleVariants };
