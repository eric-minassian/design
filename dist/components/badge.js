"use client";
import { cn } from "../lib/utils.js";
import { cva } from "class-variance-authority";
import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
// src/components/badge.tsx
const badgeVariants = cva("relative inline-flex w-fit shrink-0 items-center justify-center gap-1 whitespace-nowrap rounded-sm border border-transparent font-medium outline-none transition-shadow focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-64 [&_svg:not([class*='opacity-'])]:opacity-80 [&_svg:not([class*='size-'])]:size-3.5 sm:[&_svg:not([class*='size-'])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 [button&,a&]:cursor-pointer", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground [button&,a&]:hover:bg-primary/90",
			secondary: "bg-accent text-secondary-foreground [button&,a&]:hover:bg-accent/80",
			destructive: "bg-destructive text-white [button&,a&]:hover:bg-destructive/90",
			error: "bg-destructive/8 text-destructive-foreground dark:bg-destructive/16",
			warning: "bg-warning/8 text-warning-foreground dark:bg-warning/16",
			success: "bg-success/8 text-success-foreground dark:bg-success/16",
			info: "bg-info/8 text-info-foreground dark:bg-info/16",
			outline: "border-input bg-background text-foreground dark:bg-input/32 [button&,a&]:hover:bg-accent/50 dark:[button&,a&]:hover:bg-input/48",
			ghost: "text-muted-foreground [button&,a&]:hover:bg-accent [button&,a&]:hover:text-foreground",
			link: "text-foreground underline-offset-4 [button&,a&]:hover:underline"
		},
		size: {
			default: "h-5.5 min-w-5.5 px-[calc(--spacing(1)-1px)] text-sm sm:h-4.5 sm:min-w-4.5 sm:text-xs",
			sm: "h-5 min-w-5 rounded-[.25rem] px-[calc(--spacing(1)-1px)] text-xs leading-none sm:h-4 sm:min-w-4 sm:text-3xs",
			lg: "h-6.5 min-w-6.5 px-[calc(--spacing(1.5)-1px)] text-base sm:h-5.5 sm:min-w-5.5 sm:text-sm",
			control: "h-7 min-w-7 rounded-[var(--control-radius)] px-[calc(--spacing(2)-1px)] text-sm sm:h-6 sm:min-w-6 sm:text-xs"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Badge({ className, variant, size, render, ...props }) {
	return useRender({
		defaultTagName: "span",
		props: mergeProps({ className: cn(badgeVariants({
			variant,
			size
		}), className) }, props),
		render,
		state: {
			slot: "badge",
			variant
		}
	});
}
export { Badge, badgeVariants };
