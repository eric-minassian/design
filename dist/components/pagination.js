"use client";
import { cn } from "../lib/utils.js";
import { Button } from "./button.js";
import { ChevronLeftIcon, ChevronRightIcon, MoreHorizontalIcon } from "lucide-react";
import { jsx, jsxs } from "react/jsx-runtime";
import "react";
// src/components/pagination.tsx
function Pagination({ className, ...props }) {
	return /* @__PURE__ */ jsx("nav", {
		role: "navigation",
		"aria-label": "pagination",
		"data-slot": "pagination",
		className: cn("mx-auto flex w-full justify-center", className),
		...props
	});
}
function PaginationContent({ className, ...props }) {
	return /* @__PURE__ */ jsx("ul", {
		"data-slot": "pagination-content",
		className: cn("flex items-center gap-0.5", className),
		...props
	});
}
function PaginationItem({ ...props }) {
	return /* @__PURE__ */ jsx("li", {
		"data-slot": "pagination-item",
		...props
	});
}
function PaginationLink({ className, isActive, size = "icon", ...props }) {
	return /* @__PURE__ */ jsx(Button, {
		variant: isActive ? "outline" : "ghost-muted",
		size,
		className: cn("tabular-nums", className),
		nativeButton: false,
		render: /* @__PURE__ */ jsx("a", {
			"aria-current": isActive ? "page" : void 0,
			"data-slot": "pagination-link",
			"data-active": isActive,
			...props
		})
	});
}
function PaginationPrevious({ className, text = "Previous", ...props }) {
	return /* @__PURE__ */ jsxs(PaginationLink, {
		"aria-label": "Go to previous page",
		size: "default",
		className: cn("gap-1 ps-2", className),
		...props,
		children: [/* @__PURE__ */ jsx(ChevronLeftIcon, { "data-icon": "inline-start" }), /* @__PURE__ */ jsx("span", {
			className: "hidden sm:block",
			children: text
		})]
	});
}
function PaginationNext({ className, text = "Next", ...props }) {
	return /* @__PURE__ */ jsxs(PaginationLink, {
		"aria-label": "Go to next page",
		size: "default",
		className: cn("gap-1 pe-2", className),
		...props,
		children: [/* @__PURE__ */ jsx("span", {
			className: "hidden sm:block",
			children: text
		}), /* @__PURE__ */ jsx(ChevronRightIcon, { "data-icon": "inline-end" })]
	});
}
function PaginationEllipsis({ className, ...props }) {
	return /* @__PURE__ */ jsxs("span", {
		"aria-hidden": true,
		"data-slot": "pagination-ellipsis",
		className: cn("flex size-9 items-center justify-center text-muted-foreground sm:size-8 [&_svg:not([class*='size-'])]:size-4", className),
		...props,
		children: [/* @__PURE__ */ jsx(MoreHorizontalIcon, {}), /* @__PURE__ */ jsx("span", {
			className: "sr-only",
			children: "More pages"
		})]
	});
}
export { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious };
