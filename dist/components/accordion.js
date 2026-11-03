"use client";
import { cn } from "../lib/utils.js";
import { Accordion as Accordion$1 } from "@base-ui/react/accordion";
import { ChevronDownIcon } from "lucide-react";
import { jsx, jsxs } from "react/jsx-runtime";
// src/components/accordion.tsx
function Accordion({ className, ...props }) {
	return /* @__PURE__ */ jsx(Accordion$1.Root, {
		"data-slot": "accordion",
		className: cn("flex w-full flex-col", className),
		...props
	});
}
function AccordionItem({ className, ...props }) {
	return /* @__PURE__ */ jsx(Accordion$1.Item, {
		"data-slot": "accordion-item",
		className: cn("not-last:border-b", className),
		...props
	});
}
function AccordionTrigger({ className, children, ...props }) {
	return /* @__PURE__ */ jsx(Accordion$1.Header, {
		"data-slot": "accordion-header",
		className: "flex",
		children: /* @__PURE__ */ jsxs(Accordion$1.Trigger, {
			"data-slot": "accordion-trigger",
			className: cn("group/accordion-trigger relative flex flex-1 cursor-pointer items-center justify-between gap-4 rounded-sm py-2.5 text-left font-medium text-sm outline-none transition-colors focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-64 aria-disabled:pointer-events-none aria-disabled:opacity-64 data-disabled:pointer-events-none data-disabled:opacity-64 hover:**:data-[slot=accordion-trigger-icon]:text-foreground **:data-[slot=accordion-trigger-icon]:ml-auto **:data-[slot=accordion-trigger-icon]:size-4 **:data-[slot=accordion-trigger-icon]:text-muted-foreground", className),
			...props,
			children: [children, /* @__PURE__ */ jsx(ChevronDownIcon, {
				"data-slot": "accordion-trigger-icon",
				className: "pointer-events-none shrink-0 transition-[rotate,color] duration-200 group-aria-expanded/accordion-trigger:rotate-180 motion-reduce:transition-none"
			})]
		})
	});
}
function AccordionContent({ className, children, ...props }) {
	return /* @__PURE__ */ jsx(Accordion$1.Panel, {
		"data-slot": "accordion-content",
		className: "h-(--accordion-panel-height) overflow-hidden text-muted-foreground text-sm transition-[height] duration-200 ease-out data-ending-style:h-0 data-starting-style:h-0 motion-reduce:transition-none",
		...props,
		children: /* @__PURE__ */ jsx("div", {
			className: cn("pb-3 [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground [&_p:not(:last-child)]:mb-3", className),
			children
		})
	});
}
export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
