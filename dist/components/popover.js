"use client";
import { cn } from "../lib/utils.js";
import { jsx } from "react/jsx-runtime";
import "react";
import { Popover as Popover$1 } from "@base-ui/react/popover";
// src/components/popover.tsx
const popoverWidthClassName = {
	default: "w-72",
	auto: "",
	sm: "w-64",
	md: "w-80",
	lg: "w-96"
};
const popoverPaddingClassName = {
	default: "gap-4 p-4",
	compact: "gap-2 px-3 py-2",
	none: "gap-0 p-0"
};
function Popover({ ...props }) {
	return /* @__PURE__ */ jsx(Popover$1.Root, {
		"data-slot": "popover",
		...props
	});
}
function PopoverTrigger({ ...props }) {
	return /* @__PURE__ */ jsx(Popover$1.Trigger, {
		"data-slot": "popover-trigger",
		...props
	});
}
function PopoverClose({ ...props }) {
	return /* @__PURE__ */ jsx(Popover$1.Close, {
		"data-slot": "popover-close",
		...props
	});
}
function PopoverContent({ className, align = "center", alignOffset = 0, side = "bottom", sideOffset = 4, anchor, collisionAvoidance, padding = "default", width = "default", ...props }) {
	return /* @__PURE__ */ jsx(Popover$1.Portal, { children: /* @__PURE__ */ jsx(Popover$1.Positioner, {
		align,
		alignOffset,
		anchor,
		collisionAvoidance,
		side,
		sideOffset,
		"data-slot": "popover-positioner",
		className: "isolate z-[130] max-w-(--available-width)",
		children: /* @__PURE__ */ jsx(Popover$1.Popup, {
			"data-slot": "popover-content",
			className: cn("dropdown-glass relative flex max-h-(--available-height) max-w-[calc(100vw-2rem)] origin-(--transform-origin) flex-col overflow-y-auto rounded-lg text-base text-popover-foreground outline-none transition-[scale,opacity] duration-100 before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-lg)-1px)] before:shadow-[0_1px_--theme(--color-black/4%)] has-data-[slot=calendar]:rounded-xl has-data-[slot=calendar]:before:rounded-[calc(var(--radius-xl)-1px)] data-ending-style:scale-98 data-ending-style:opacity-0 data-starting-style:scale-98 data-starting-style:opacity-0 sm:text-sm dark:before:shadow-[0_-1px_--theme(--color-white/6%)]", popoverWidthClassName[width], popoverPaddingClassName[padding], className),
			...props
		})
	}) });
}
function PopoverHeader({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "popover-header",
		className: cn("flex flex-col gap-1.5", className),
		...props
	});
}
function PopoverTitle({ className, ...props }) {
	return /* @__PURE__ */ jsx(Popover$1.Title, {
		"data-slot": "popover-title",
		className: cn("font-semibold text-base leading-none sm:text-sm", className),
		...props
	});
}
function PopoverDescription({ className, ...props }) {
	return /* @__PURE__ */ jsx(Popover$1.Description, {
		"data-slot": "popover-description",
		className: cn("text-muted-foreground", className),
		...props
	});
}
export { Popover, PopoverClose, PopoverContent, PopoverDescription, PopoverHeader, PopoverTitle, PopoverTrigger };
