"use client";
import { Separator } from "./separator.js";
import { cn } from "../lib/utils.js";
import { jsx } from "react/jsx-runtime";
import { cva } from "class-variance-authority";
import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
// src/components/button-group.tsx
const buttonGroupVariants = cva("flex w-fit *:focus-visible:z-1 has-[>[data-slot=button-group]]:gap-2 *:has-focus-visible:z-1 *:data-[slot=input-control]:flex-1 *:data-[slot=input-group]:flex-1 [&>[data-slot=select-trigger]:not([class*='w-'])]:w-fit dark:*:[[data-slot=button]:hover~[data-slot=button-group-separator]:not([data-slot]:hover~[data-slot=button-group-separator]~[data-slot=button-group-separator]),[data-slot][data-pressed]~[data-slot=button-group-separator]:not([data-slot][data-pressed]~[data-slot=button-group-separator]~[data-slot=button-group-separator])]:before:bg-input/64 dark:*:[[data-slot=button-group-separator]:has(~[data-slot=button]:hover):not(:has(~[data-slot=button-group-separator]~[data-slot]:hover)),[data-slot=button-group-separator]:has(~[data-slot][data-pressed]):not(:has(~[data-slot=button-group-separator]~[data-slot][data-pressed]))]:before:bg-input/64", {
	variants: { orientation: {
		horizontal: "*:[[data-slot]~[data-slot]:not([data-slot=button-group-separator])]:before:-start-[0.5px] *:data-slot:not-data-[slot=button-group-separator]:has-[~[data-slot]]:before:-end-[0.5px] *:pointer-coarse:after:min-w-auto *:data-slot:has-[~[data-slot]]:rounded-e-none *:data-slot:has-[+[data-slot=button-group-separator]]:border-e-0 *:data-slot:has-[~[data-slot]]:before:rounded-e-none *:[[data-slot]~[data-slot]]:rounded-s-none *:[[data-slot]~[data-slot]]:border-s-0 *:[[data-slot]~[data-slot]]:before:rounded-s-none",
		vertical: "*:[[data-slot]~[data-slot]:not([data-slot=button-group-separator])]:before:-top-[0.5px] *:data-slot:not-data-[slot=button-group-separator]:has-[~[data-slot]]:before:-bottom-[0.5px] flex-col *:pointer-coarse:after:min-h-auto *:data-slot:has-[~[data-slot]]:rounded-b-none *:data-slot:has-[+[data-slot=button-group-separator]]:border-b-0 *:data-slot:not-data-[slot=button-group-separator]:has-[~[data-slot]]:before:hidden *:data-slot:has-[~[data-slot]]:before:rounded-b-none dark:*:last:before:hidden dark:*:first:before:block *:[[data-slot]~[data-slot]]:rounded-t-none *:[[data-slot]~[data-slot]]:border-t-0 *:[[data-slot]~[data-slot]]:before:rounded-t-none"
	} },
	defaultVariants: { orientation: "horizontal" }
});
function ButtonGroup({ className, orientation, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		role: "group",
		"data-slot": "button-group",
		"data-orientation": orientation,
		className: cn(buttonGroupVariants({ orientation }), className),
		...props
	});
}
function ButtonGroupText({ className, render, ...props }) {
	return useRender({
		defaultTagName: "div",
		props: mergeProps({ className: cn("relative flex items-center gap-2 whitespace-nowrap rounded-[var(--control-radius)] border border-input bg-muted px-[calc(--spacing(3)-1px)] text-base text-muted-foreground sm:text-sm [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4.5 sm:[&_svg:not([class*='size-'])]:size-4", className) }, props),
		render,
		state: { slot: "button-group-text" }
	});
}
function ButtonGroupSeparator({ className, orientation = "vertical", ...props }) {
	return /* @__PURE__ */ jsx(Separator, {
		"data-slot": "button-group-separator",
		orientation,
		className: cn("pointer-events-none relative z-2 self-stretch bg-input before:absolute before:inset-0 has-[+[data-slot=input-control]:focus-within,+[data-slot=input-group]:focus-within,+[data-slot=select-trigger]:focus-visible+*,+[data-slot=number-field]:focus-within]:translate-x-px has-[+[data-slot=input-control]:focus-within,+[data-slot=input-group]:focus-within,+[data-slot=select-trigger]:focus-visible+*,+[data-slot=number-field]:focus-within]:bg-ring dark:before:bg-input/32 [[data-slot=input-control]:focus-within+&,[data-slot=input-group]:focus-within+&,[data-slot=select-trigger]:focus-visible+*+&,[data-slot=number-field]:focus-within+&,[data-slot=number-field]:focus-within+input+&]:bg-ring [[data-slot=input-control]:focus-within+&,[data-slot=input-group]:focus-within+&,[data-slot=select-trigger]:focus-visible+*+&,[data-slot=number-field]:focus-within+input+&]:-translate-x-px", className),
		...props
	});
}
export { ButtonGroup, ButtonGroupSeparator, ButtonGroupText, buttonGroupVariants };
