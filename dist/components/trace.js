"use client";
import { cn } from "../lib/utils.js";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./collapsible.js";
import { ChevronRightIcon } from "lucide-react";
import { jsx, jsxs } from "react/jsx-runtime";
import "react";
// src/components/trace.tsx
function Trace({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "trace",
		className: cn("flex w-full min-w-0 flex-col *:has-[>[data-slot=trace-line]]:flex *:has-[>[data-slot=trace-line]]:w-fit *:has-[>[data-slot=trace-line]]:max-w-full *:has-[>[data-slot=trace-line]]:min-w-0 *:has-[>[data-slot=trace-line]]:rounded-md *:has-[>[data-slot=trace-line]]:text-left *:has-[>[data-slot=trace-line]]:outline-none *:has-[>[data-slot=trace-line]]:focus-visible:ring-2 *:has-[>[data-slot=trace-line]]:focus-visible:ring-inset *:has-[>[data-slot=trace-line]]:focus-visible:ring-ring *:has-[>[data-slot=trace-line]]:focus-visible:ring-offset-1 *:has-[>[data-slot=trace-line]]:focus-visible:ring-offset-background", className),
		...props
	});
}
function TraceLine({ className, status, ...props }) {
	return /* @__PURE__ */ jsx("span", {
		"data-slot": "trace-line",
		"data-status": status,
		className: cn("flex min-h-6 w-fit max-w-full min-w-0 items-center gap-1.5 text-sm/relaxed text-secondary-label transition-colors select-none in-[a,button]:cursor-pointer in-[a:hover,button:hover]:text-foreground data-[status=error]:not-has-data-[slot=trace-icon]:text-destructive-foreground data-[status=error]:*:data-[slot=trace-icon]:text-destructive-foreground data-[status=pending]:opacity-64 data-[status=running]:*:data-[slot=trace-title]:shine-text", className),
		...props
	});
}
function TraceIcon({ className, ...props }) {
	return /* @__PURE__ */ jsx("span", {
		"data-slot": "trace-icon",
		"aria-hidden": "true",
		className: cn("flex size-4 shrink-0 items-center justify-center text-muted-foreground [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4", className),
		...props
	});
}
function TraceTitle({ className, ...props }) {
	return /* @__PURE__ */ jsx("span", {
		"data-slot": "trace-title",
		className: cn("min-w-0 truncate", className),
		...props
	});
}
function TraceDescription({ className, ...props }) {
	return /* @__PURE__ */ jsx("span", {
		"data-slot": "trace-description",
		className: cn("shrink-0 text-xs text-muted-foreground tabular-nums", className),
		...props
	});
}
function TraceCollapsible({ className, ...props }) {
	return /* @__PURE__ */ jsx(Collapsible, {
		"data-slot": "trace-collapsible",
		className: cn("flex w-full min-w-0 flex-col", className),
		...props
	});
}
function TraceCollapsibleTrigger({ className, children, ...props }) {
	return /* @__PURE__ */ jsxs(CollapsibleTrigger, {
		"data-slot": "trace-collapsible-trigger",
		className: cn("group/trace-collapsible-trigger flex w-fit max-w-full min-w-0 cursor-pointer items-center gap-1 rounded-md text-left text-muted-foreground transition-colors outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background", className),
		...props,
		children: [children, /* @__PURE__ */ jsx(TraceIcon, {
			className: "size-3.5 transition-transform group-aria-expanded/trace-collapsible-trigger:rotate-90 [&_svg:not([class*='size-'])]:size-3.5",
			children: /* @__PURE__ */ jsx(ChevronRightIcon, {})
		})]
	});
}
function TraceCollapsibleContent({ className, children, ...props }) {
	return /* @__PURE__ */ jsx(CollapsibleContent, {
		"data-slot": "trace-collapsible-content",
		className: "h-(--collapsible-panel-height) min-w-0 overflow-hidden transition-[height] duration-200 data-ending-style:h-0 data-starting-style:h-0",
		...props,
		children: /* @__PURE__ */ jsx("div", {
			"data-slot": "trace-collapsible-content-inner",
			className: cn("my-1 ms-[calc(--spacing(2)-0.5px)] min-w-0 border-s ps-[calc(--spacing(3.5)-0.5px)] pe-1 text-sm/relaxed wrap-break-word text-secondary-label", className),
			children
		})
	});
}
export { Trace, TraceCollapsible, TraceCollapsibleContent, TraceCollapsibleTrigger, TraceDescription, TraceIcon, TraceLine, TraceTitle };
