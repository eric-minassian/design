"use client";
"use client";
import { cn } from "../lib/utils.js";
import { jsx } from "react/jsx-runtime";
import { Tooltip as Tooltip$1 } from "@base-ui/react/tooltip";
// src/components/tooltip.tsx
function TooltipProvider({ ...props }) {
	return /* @__PURE__ */ jsx(Tooltip$1.Provider, {
		"data-slot": "tooltip-provider",
		...props
	});
}
function Tooltip({ ...props }) {
	return /* @__PURE__ */ jsx(Tooltip$1.Root, {
		"data-slot": "tooltip",
		...props
	});
}
function TooltipTrigger({ ...props }) {
	return /* @__PURE__ */ jsx(Tooltip$1.Trigger, {
		"data-slot": "tooltip-trigger",
		...props
	});
}
function TooltipContent({ className, side = "top", sideOffset = 4, align = "center", alignOffset = 0, anchor, variant = "default", children, ...props }) {
	return /* @__PURE__ */ jsx(Tooltip$1.Portal, { children: /* @__PURE__ */ jsx(Tooltip$1.Positioner, {
		align,
		alignOffset,
		anchor,
		side,
		sideOffset,
		"data-slot": "tooltip-positioner",
		className: "pointer-events-none isolate z-[140] max-w-(--available-width) transition-[top,left,right,bottom,transform] data-instant:transition-none",
		children: /* @__PURE__ */ jsx(Tooltip$1.Popup, {
			"data-slot": "tooltip-content",
			className: cn("dropdown-glass relative inline-flex w-fit origin-(--transform-origin) items-center gap-1.5 text-balance rounded-md px-2 py-1 text-foreground text-xs transition-[scale,opacity] duration-100 has-data-[slot=kbd]:pe-1 data-ending-style:scale-98 data-ending-style:opacity-0 data-instant:duration-0 data-starting-style:scale-98 data-starting-style:opacity-0", variant === "code" ? "max-w-120 wrap-anywhere text-left font-mono text-[11px] leading-relaxed" : "max-w-80 wrap-anywhere whitespace-normal leading-snug", className),
			...props,
			children
		})
	}) });
}
export { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger };
