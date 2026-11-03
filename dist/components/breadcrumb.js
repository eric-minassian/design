"use client";
import { cn } from "../lib/utils.js";
import { ChevronRightIcon, MoreHorizontalIcon } from "lucide-react";
import { jsx, jsxs } from "react/jsx-runtime";
import "react";
import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
// src/components/breadcrumb.tsx
function Breadcrumb({ className, ...props }) {
	return /* @__PURE__ */ jsx("nav", {
		"aria-label": "breadcrumb",
		"data-slot": "breadcrumb",
		className: cn(className),
		...props
	});
}
function BreadcrumbList({ className, ...props }) {
	return /* @__PURE__ */ jsx("ol", {
		"data-slot": "breadcrumb-list",
		className: cn("flex flex-wrap items-center gap-1.5 wrap-break-word text-muted-foreground text-sm", className),
		...props
	});
}
function BreadcrumbItem({ className, ...props }) {
	return /* @__PURE__ */ jsx("li", {
		"data-slot": "breadcrumb-item",
		className: cn("inline-flex items-center gap-1", className),
		...props
	});
}
function BreadcrumbLink({ className, render, ...props }) {
	return useRender({
		defaultTagName: "a",
		props: mergeProps({ className: cn("rounded-sm outline-none transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background", className) }, props),
		render,
		state: { slot: "breadcrumb-link" }
	});
}
function BreadcrumbPage({ className, ...props }) {
	return /* @__PURE__ */ jsx("span", {
		"data-slot": "breadcrumb-page",
		role: "link",
		"aria-disabled": "true",
		"aria-current": "page",
		className: cn("font-normal text-foreground", className),
		...props
	});
}
function BreadcrumbSeparator({ children, className, ...props }) {
	return /* @__PURE__ */ jsx("li", {
		"data-slot": "breadcrumb-separator",
		role: "presentation",
		"aria-hidden": "true",
		className: cn("opacity-64 [&>svg]:size-3.5", className),
		...props,
		children: children ?? /* @__PURE__ */ jsx(ChevronRightIcon, {})
	});
}
function BreadcrumbEllipsis({ className, ...props }) {
	return /* @__PURE__ */ jsxs("span", {
		"data-slot": "breadcrumb-ellipsis",
		role: "presentation",
		"aria-hidden": "true",
		className: cn("flex size-4 items-center justify-center [&>svg]:size-3.5", className),
		...props,
		children: [/* @__PURE__ */ jsx(MoreHorizontalIcon, {}), /* @__PURE__ */ jsx("span", {
			className: "sr-only",
			children: "More"
		})]
	});
}
export { Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator };
