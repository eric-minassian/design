"use client";
import { cn } from "../lib/utils.js";
import { jsx } from "react/jsx-runtime";
// src/components/kbd.tsx
function Kbd({ className, ...props }) {
	return /* @__PURE__ */ jsx("kbd", {
		"data-slot": "kbd",
		className: cn("pointer-events-none inline-flex h-5 min-w-5 select-none items-center justify-center gap-1 rounded bg-foreground/[0.07] px-1 font-medium font-sans text-muted-foreground text-xs [&_svg:not([class*='size-'])]:size-3", className),
		...props
	});
}
function KbdGroup({ className, ...props }) {
	return /* @__PURE__ */ jsx("kbd", {
		"data-slot": "kbd-group",
		className: cn("inline-flex items-center gap-1 font-sans", className),
		...props
	});
}
export { Kbd, KbdGroup };
