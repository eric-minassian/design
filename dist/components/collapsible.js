"use client";
import { cn } from "../lib/utils.js";
import { ChevronDownIcon } from "lucide-react";
import { jsx, jsxs } from "react/jsx-runtime";
import { Collapsible as Collapsible$1 } from "@base-ui/react/collapsible";
// src/components/collapsible.tsx
function Collapsible({ ...props }) {
	return /* @__PURE__ */ jsx(Collapsible$1.Root, {
		"data-slot": "collapsible",
		...props
	});
}
function CollapsibleTrigger({ className, ...props }) {
	return /* @__PURE__ */ jsx(Collapsible$1.Trigger, {
		"data-slot": "collapsible-trigger",
		className: cn("cursor-pointer", className),
		...props
	});
}
function CollapsibleContent({ className, animate = true, ...props }) {
	return /* @__PURE__ */ jsx(Collapsible$1.Panel, {
		"data-slot": "collapsible-content",
		className: cn("overflow-hidden", animate && "h-(--collapsible-panel-height) transition-[height] duration-200 data-ending-style:h-0 data-starting-style:h-0 data-open:data-ending-style:[height:var(--collapsible-panel-height)] motion-reduce:transition-none", className),
		...props
	});
}
const sectionHeaderTones = {
	muted: {
		label: "text-muted-foreground",
		line: "bg-border"
	},
	emphasized: {
		label: "text-foreground/80",
		line: "bg-foreground/25"
	},
	accent: {
		label: "text-primary",
		line: "bg-primary/50"
	}
};
/**
* A section label with a hairline leader. Compose it into a trigger with
* `render={<CollapsibleSectionHeader />}`, or pass `expanded` to drive it yourself.
*/
function CollapsibleSectionHeader({ children, className, expanded, tone = "muted", variant = "default", accessory, ...props }) {
	return /* @__PURE__ */ jsxs("button", {
		type: "button",
		"data-slot": "collapsible-section-header",
		className: cn("group/section-header flex h-8 w-full cursor-pointer items-center gap-2 rounded-md text-left font-medium text-xs outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background", variant === "panel" ? "ps-2 pe-2.5" : "px-2", sectionHeaderTones[tone].label, className),
		...props,
		...expanded === void 0 ? {} : { "aria-expanded": expanded },
		children: [
			/* @__PURE__ */ jsx("span", {
				className: "shrink-0",
				children
			}),
			/* @__PURE__ */ jsx("span", {
				"aria-hidden": true,
				className: cn("h-px min-w-2 flex-1", sectionHeaderTones[tone].line, accessory ? "invisible" : void 0)
			}),
			accessory,
			/* @__PURE__ */ jsx(ChevronDownIcon, {
				"aria-hidden": true,
				className: "size-3 shrink-0 -rotate-90 transition-transform group-aria-expanded/section-header:rotate-0 motion-reduce:transition-none"
			})
		]
	});
}
function SectionHeaderStatus({ className, ...props }) {
	return /* @__PURE__ */ jsx("span", {
		"data-slot": "section-header-status",
		className: cn("shrink-0 text-3xs text-destructive-foreground leading-none", className),
		...props
	});
}
export { Collapsible, CollapsibleContent, CollapsibleContent as CollapsiblePanel, CollapsibleSectionHeader, CollapsibleTrigger, SectionHeaderStatus };
