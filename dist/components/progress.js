"use client";
"use client";
import { cn } from "../lib/utils.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { Progress as Progress$1 } from "@base-ui/react/progress";
// src/components/progress.tsx
function Progress({ className, children, value, ...props }) {
	return /* @__PURE__ */ jsxs(Progress$1.Root, {
		value,
		"data-slot": "progress",
		className: cn("flex w-full flex-wrap gap-x-3 gap-y-1.5", className),
		...props,
		children: [children, /* @__PURE__ */ jsx(ProgressTrack, { children: /* @__PURE__ */ jsx(ProgressIndicator, {}) })]
	});
}
function ProgressTrack({ className, ...props }) {
	return /* @__PURE__ */ jsx(Progress$1.Track, {
		"data-slot": "progress-track",
		className: cn("relative flex h-1 w-full items-center overflow-hidden rounded-full bg-input/64", className),
		...props
	});
}
function ProgressIndicator({ className, ...props }) {
	return /* @__PURE__ */ jsx(Progress$1.Indicator, {
		"data-slot": "progress-indicator",
		className: cn("h-full rounded-full bg-primary transition-[width] duration-300 ease-out data-indeterminate:w-full data-indeterminate:bg-primary/48 motion-safe:data-indeterminate:animate-skeleton motion-reduce:transition-none", className),
		...props
	});
}
function ProgressLabel({ className, ...props }) {
	return /* @__PURE__ */ jsx(Progress$1.Label, {
		"data-slot": "progress-label",
		className: cn("font-medium text-sm", className),
		...props
	});
}
function ProgressValue({ className, ...props }) {
	return /* @__PURE__ */ jsx(Progress$1.Value, {
		"data-slot": "progress-value",
		className: cn("ml-auto text-muted-foreground text-sm tabular-nums", className),
		...props
	});
}
export { Progress, ProgressIndicator, ProgressLabel, ProgressTrack, ProgressValue };
