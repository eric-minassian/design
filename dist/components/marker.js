"use client";
import { cn } from "../lib/utils.js";
import { jsx } from "react/jsx-runtime";
import "react";
import { cva } from "class-variance-authority";
import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
// src/components/marker.tsx
const markerVariants = cva("group/marker relative flex min-h-4 w-full min-w-0 items-center gap-2 text-left text-muted-foreground tabular-nums [&_svg:not([class*='size-'])]:size-3 [a]:underline [a]:underline-offset-3 [a]:hover:text-foreground", { variants: { variant: {
	default: "text-xs",
	separator: "py-2 text-2xs before:h-px before:min-w-0 before:flex-1 before:bg-border/70 after:h-px after:min-w-0 after:flex-1 after:bg-border/70",
	border: "min-h-6 border-b border-border/60 pt-1 pb-2 text-sm/relaxed"
} } });
function Marker({ className, variant = "default", render, ...props }) {
	return useRender({
		defaultTagName: "div",
		props: mergeProps({ className: cn(markerVariants({
			variant,
			className
		})) }, props),
		render,
		state: {
			slot: "marker",
			variant
		}
	});
}
function MarkerIcon({ className, ...props }) {
	return /* @__PURE__ */ jsx("span", {
		"data-slot": "marker-icon",
		"aria-hidden": "true",
		className: cn("inline-flex size-3 shrink-0 items-center justify-center [&_svg:not([class*='size-'])]:size-3", className),
		...props
	});
}
function MarkerContent({ className, ...props }) {
	return /* @__PURE__ */ jsx("span", {
		"data-slot": "marker-content",
		className: cn("min-w-0 wrap-break-word group-data-[variant=separator]/marker:max-w-[80%] group-data-[variant=separator]/marker:flex-none group-data-[variant=separator]/marker:text-center *:[a]:underline *:[a]:underline-offset-3 *:[a]:hover:text-foreground", className),
		...props
	});
}
export { Marker, MarkerContent, MarkerIcon, markerVariants };
