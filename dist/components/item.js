"use client";
import { cn } from "../lib/utils.js";
import { Separator } from "./separator.js";
import { jsx } from "react/jsx-runtime";
import "react";
import { cva } from "class-variance-authority";
import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
// src/components/item.tsx
function ItemGroup({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		role: "list",
		"data-slot": "item-group",
		className: cn("group/item-group flex w-full flex-col gap-2 has-data-[size=sm]:gap-1.5 has-data-[size=xs]:gap-1", className),
		...props
	});
}
function ItemSeparator({ className, ...props }) {
	return /* @__PURE__ */ jsx(Separator, {
		"data-slot": "item-separator",
		orientation: "horizontal",
		className: cn("my-1", className),
		...props
	});
}
const itemVariants = cva("group/item flex w-full flex-wrap items-center rounded-lg border text-sm outline-none transition-colors duration-100 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background [a]:cursor-pointer [a]:hover:bg-accent", {
	variants: {
		variant: {
			default: "border-transparent",
			outline: "border-border",
			muted: "border-transparent bg-muted"
		},
		size: {
			default: "gap-3 px-3 py-2.5",
			sm: "gap-2.5 px-2.5 py-2",
			xs: "gap-2 rounded-md px-2 py-1 in-data-[slot=dropdown-menu-content]:p-0"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Item({ className, variant = "default", size = "default", render, ...props }) {
	return useRender({
		defaultTagName: "div",
		props: mergeProps({ className: cn(itemVariants({
			variant,
			size,
			className
		})) }, props),
		render,
		state: {
			slot: "item",
			variant,
			size
		}
	});
}
const itemMediaVariants = cva("flex shrink-0 items-center justify-center gap-2 group-has-data-[slot=item-description]/item:translate-y-0.5 group-has-data-[slot=item-description]/item:self-start [&_svg]:pointer-events-none", {
	variants: { variant: {
		default: "bg-transparent",
		icon: "text-muted-foreground [&_svg:not([class*='size-'])]:size-4.5 sm:[&_svg:not([class*='size-'])]:size-4",
		image: "size-8 overflow-hidden rounded-md group-data-[size=sm]/item:size-8 group-data-[size=xs]/item:size-6 [&_img]:size-full [&_img]:object-cover"
	} },
	defaultVariants: { variant: "default" }
});
function ItemMedia({ className, variant = "default", ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "item-media",
		"data-variant": variant,
		className: cn(itemMediaVariants({
			variant,
			className
		})),
		...props
	});
}
function ItemContent({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "item-content",
		className: cn("flex min-w-0 flex-1 flex-col gap-0.5 [&+[data-slot=item-content]]:flex-none", className),
		...props
	});
}
function ItemTitle({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "item-title",
		className: cn("line-clamp-1 flex w-fit items-center gap-2 font-medium text-sm leading-snug underline-offset-4", className),
		...props
	});
}
function ItemDescription({ className, ...props }) {
	return /* @__PURE__ */ jsx("p", {
		"data-slot": "item-description",
		className: cn("line-clamp-2 text-left font-normal text-muted-foreground text-xs [&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4", className),
		...props
	});
}
function ItemActions({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "item-actions",
		className: cn("flex items-center gap-2", className),
		...props
	});
}
function ItemHeader({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "item-header",
		className: cn("flex basis-full items-center justify-between gap-2", className),
		...props
	});
}
function ItemFooter({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "item-footer",
		className: cn("flex basis-full items-center justify-between gap-2", className),
		...props
	});
}
export { Item, ItemActions, ItemContent, ItemDescription, ItemFooter, ItemGroup, ItemHeader, ItemMedia, ItemSeparator, ItemTitle };
