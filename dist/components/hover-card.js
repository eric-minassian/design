"use client";
"use client";
import { cn } from "../lib/utils.js";
import { jsx } from "react/jsx-runtime";
import { PreviewCard } from "@base-ui/react/preview-card";
// src/components/hover-card.tsx
function HoverCard({ ...props }) {
	return /* @__PURE__ */ jsx(PreviewCard.Root, {
		"data-slot": "hover-card",
		...props
	});
}
function HoverCardTrigger({ ...props }) {
	return /* @__PURE__ */ jsx(PreviewCard.Trigger, {
		"data-slot": "hover-card-trigger",
		...props
	});
}
function HoverCardContent({ className, side = "bottom", sideOffset = 6, align = "center", alignOffset = 0, ...props }) {
	return /* @__PURE__ */ jsx(PreviewCard.Portal, {
		"data-slot": "hover-card-portal",
		children: /* @__PURE__ */ jsx(PreviewCard.Positioner, {
			align,
			alignOffset,
			side,
			sideOffset,
			"data-slot": "hover-card-positioner",
			className: "isolate z-[140] max-w-(--available-width)",
			children: /* @__PURE__ */ jsx(PreviewCard.Popup, {
				"data-slot": "hover-card-content",
				className: cn("dropdown-glass w-72 max-w-[calc(100vw-2rem)] origin-(--transform-origin) rounded-lg p-3 text-base text-popover-foreground outline-none transition-[scale,opacity] duration-100 data-ending-style:scale-98 data-ending-style:opacity-0 data-starting-style:scale-98 data-starting-style:opacity-0 sm:text-sm", className),
				...props
			})
		})
	});
}
export { HoverCard, HoverCardContent, HoverCardTrigger };
