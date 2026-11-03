"use client";
import { cn } from "../lib/utils.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { cva } from "class-variance-authority";
// src/components/empty.tsx
const emptySizeClassName = {
	compact: "min-h-64 gap-4 p-6 md:p-10 [&_[data-slot=empty-icon]]:mb-0 [&_[data-slot=empty-title]]:text-[1.0625rem] [&_[data-slot=empty-title]]:leading-6 [&_[data-slot=empty-description]]:text-[0.8125rem] [&_[data-slot=empty-description]]:leading-[1.125rem]",
	default: "gap-6 p-6 md:p-12",
	hero: "gap-6 p-6 md:p-12 [&_[data-slot=empty-title]]:text-2xl sm:[&_[data-slot=empty-title]]:text-3xl"
};
function Empty({ className, size = "default", ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "empty",
		className: cn("flex min-w-0 flex-1 flex-col items-center justify-center text-balance text-center", emptySizeClassName[size], className),
		...props
	});
}
function EmptyHeader({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "empty-header",
		className: cn("flex max-w-sm flex-col items-center text-center", className),
		...props
	});
}
const emptyMediaVariants = cva("flex shrink-0 items-center justify-center [&_svg]:pointer-events-none [&_svg]:shrink-0", {
	variants: { variant: {
		default: "bg-transparent",
		icon: "relative flex size-9 shrink-0 items-center justify-center rounded-md border bg-card not-dark:bg-clip-padding text-foreground shadow-sm/5 before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-md)-1px)] before:shadow-[0_1px_--theme(--color-black/4%)] dark:before:shadow-[0_-1px_--theme(--color-white/6%)] [&_svg:not([class*='size-'])]:size-4.5"
	} },
	defaultVariants: { variant: "default" }
});
function EmptyMedia({ className, variant = "default", ...props }) {
	return /* @__PURE__ */ jsxs("div", {
		"data-slot": "empty-icon",
		"data-variant": variant,
		className: cn("relative mb-6", className),
		children: [variant === "icon" && /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", {
			"aria-hidden": "true",
			className: cn(emptyMediaVariants({
				className,
				variant
			}), "pointer-events-none absolute bottom-px origin-bottom-left -translate-x-0.5 -rotate-10 scale-84 shadow-none")
		}), /* @__PURE__ */ jsx("div", {
			"aria-hidden": "true",
			className: cn(emptyMediaVariants({
				className,
				variant
			}), "pointer-events-none absolute bottom-px origin-bottom-right translate-x-0.5 rotate-10 scale-84 shadow-none")
		})] }), /* @__PURE__ */ jsx("div", {
			className: cn(emptyMediaVariants({
				className,
				variant
			})),
			...props
		})]
	});
}
function EmptyTitle({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "empty-title",
		className: cn("font-semibold text-xl", className),
		...props
	});
}
function EmptyDescription({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "empty-description",
		className: cn("text-muted-foreground text-sm [&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4 [[data-slot=empty-title]+&]:mt-1 [[data-slot=empty-description]+&]:mt-1", className),
		...props
	});
}
function EmptyContent({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "empty-content",
		className: cn("flex w-full min-w-0 max-w-sm flex-col items-center gap-4 text-balance text-sm", className),
		...props
	});
}
export { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle };
