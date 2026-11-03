"use client";
"use client";
import { Button } from "./button.js";
import { Spinner } from "./spinner.js";
import { cn } from "../lib/utils.js";
import { CircleAlertIcon, CircleCheckIcon, InfoIcon, TriangleAlertIcon, XIcon } from "lucide-react";
import { jsx, jsxs } from "react/jsx-runtime";
import "react";
import { Toast as Toast$1 } from "@base-ui/react/toast";
// src/components/toast.tsx
const toast = Toast$1.createToastManager();
function ToastProvider({ ...props }) {
	return /* @__PURE__ */ jsx(Toast$1.Provider, { ...props });
}
function ToastPortal({ ...props }) {
	return /* @__PURE__ */ jsx(Toast$1.Portal, {
		"data-slot": "toast-portal",
		...props
	});
}
function ToastViewport({ className, ...props }) {
	return /* @__PURE__ */ jsx(Toast$1.Viewport, {
		"data-slot": "toast-viewport",
		className: cn("pointer-events-none fixed inset-x-4 bottom-4 z-100 mx-auto w-auto max-w-90 outline-none sm:right-8 sm:bottom-8 sm:left-auto sm:mx-0 sm:w-full", className),
		...props
	});
}
function Toast({ className, ...props }) {
	return /* @__PURE__ */ jsx(Toast$1.Root, {
		"data-slot": "toast",
		"data-variant": props.toast.type,
		className: cn("alert-glass group/toast pointer-events-auto absolute right-0 bottom-0 z-[calc(1000-var(--toast-index))] w-full origin-bottom rounded-lg border border-foreground/10 text-popover-foreground shadow-black/25 shadow-xl ring-ring/24 will-change-transform outline-none select-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-inset", "[--gap:0.75rem] [--height:var(--toast-frontmost-height,var(--toast-height))] [--offset-y:calc(var(--toast-offset-y)*-1+calc(var(--toast-index)*var(--gap)*-1)+var(--toast-swipe-movement-y))] [--peek:0.75rem] [--scale:calc(max(0,1-(var(--toast-index)*0.1)))] [--shrink:calc(1-var(--scale))]", "h-(--height) [transform:translateX(var(--toast-swipe-movement-x))_translateY(calc(var(--toast-swipe-movement-y)-(var(--toast-index)*var(--peek))-(var(--shrink)*var(--height))))_scale(var(--scale))] [transition:transform_500ms_cubic-bezier(0.22,1,0.36,1),opacity_500ms,height_150ms]", "after:absolute after:top-full after:left-0 after:h-[calc(var(--gap)+1px)] after:w-full after:content-['']", "data-expanded:h-(--toast-height) data-expanded:[transform:translateX(var(--toast-swipe-movement-x))_translateY(var(--offset-y))]", "data-limited:opacity-0 data-starting-style:[transform:translateY(150%)]", "[&[data-ending-style]:not([data-limited]):not([data-swipe-direction])]:[transform:translateY(150%)]", "data-ending-style:data-[swipe-direction=down]:[transform:translateY(calc(var(--toast-swipe-movement-y)+150%))]", "data-ending-style:data-[swipe-direction=left]:[transform:translateX(calc(var(--toast-swipe-movement-x)-150%))_translateY(var(--offset-y))]", "data-ending-style:data-[swipe-direction=right]:[transform:translateX(calc(var(--toast-swipe-movement-x)+150%))_translateY(var(--offset-y))]", "data-ending-style:data-[swipe-direction=up]:[transform:translateY(calc(var(--toast-swipe-movement-y)-150%))]", "data-expanded:data-ending-style:data-[swipe-direction=down]:[transform:translateY(calc(var(--toast-swipe-movement-y)+150%))]", "data-expanded:data-ending-style:data-[swipe-direction=left]:[transform:translateX(calc(var(--toast-swipe-movement-x)-150%))_translateY(var(--offset-y))]", "data-expanded:data-ending-style:data-[swipe-direction=right]:[transform:translateX(calc(var(--toast-swipe-movement-x)+150%))_translateY(var(--offset-y))]", "data-expanded:data-ending-style:data-[swipe-direction=up]:[transform:translateY(calc(var(--toast-swipe-movement-y)-150%))]", className),
		...props
	});
}
function ToastContent({ className, ...props }) {
	return /* @__PURE__ */ jsx(Toast$1.Content, {
		"data-slot": "toast-content",
		className: cn("flex h-full min-h-0 items-center justify-between gap-1.5 px-3.5 py-3 text-sm transition-opacity duration-250 ease-[cubic-bezier(0.22,1,0.36,1)] data-behind:pointer-events-none data-behind:opacity-0 data-expanded:pointer-events-auto data-expanded:opacity-100", className),
		...props
	});
}
function ToastTitle({ className, ...props }) {
	return /* @__PURE__ */ jsx(Toast$1.Title, {
		"data-slot": "toast-title",
		className: cn("min-w-0 wrap-break-word font-medium", className),
		...props
	});
}
function ToastDescription({ className, ...props }) {
	return /* @__PURE__ */ jsx(Toast$1.Description, {
		"data-slot": "toast-description",
		className: cn("min-w-0 select-text wrap-break-word text-muted-foreground", className),
		...props
	});
}
function ToastAction({ className, render = /* @__PURE__ */ jsx(Button, { size: "xs" }), ...props }) {
	return /* @__PURE__ */ jsx(Toast$1.Action, {
		"data-slot": "toast-action",
		render,
		className: cn("shrink-0", className),
		...props
	});
}
function ToastClose({ className, children, ...props }) {
	return /* @__PURE__ */ jsx(Toast$1.Close, {
		"data-slot": "toast-close",
		"aria-label": "Close toast",
		className: cn("absolute -top-1.5 -right-1.5 z-20 inline-flex size-6 shrink-0 cursor-pointer items-center justify-center rounded-full border border-border/60 bg-popover/92 text-muted-foreground shadow-sm outline-none backdrop-blur-sm transition-[color,background-color,box-shadow] hover:bg-popover hover:text-foreground focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background", className),
		...props,
		children: children ?? /* @__PURE__ */ jsx(XIcon, {
			"aria-hidden": "true",
			className: "size-3",
			strokeWidth: 2.25
		})
	});
}
function ToastIcon({ type }) {
	let icon = null;
	if (type === "success") icon = /* @__PURE__ */ jsx(CircleCheckIcon, {
		"aria-hidden": "true",
		className: "text-success"
	});
	if (type === "info") icon = /* @__PURE__ */ jsx(InfoIcon, {
		"aria-hidden": "true",
		className: "text-info"
	});
	if (type === "warning") icon = /* @__PURE__ */ jsx(TriangleAlertIcon, {
		"aria-hidden": "true",
		className: "text-warning"
	});
	if (type === "error") icon = /* @__PURE__ */ jsx(CircleAlertIcon, {
		"aria-hidden": "true",
		className: "text-destructive"
	});
	if (type === "loading") icon = /* @__PURE__ */ jsx(Spinner, {
		"aria-hidden": "true",
		className: "opacity-80"
	});
	if (!icon) return null;
	return /* @__PURE__ */ jsx("span", {
		"data-slot": "toast-icon",
		className: "flex h-lh w-4 shrink-0 items-center justify-center [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
		children: icon
	});
}
function ToastList() {
	const { toasts } = Toast$1.useToastManager();
	return toasts.map((toastItem) => /* @__PURE__ */ jsx(Toast, {
		toast: toastItem,
		children: /* @__PURE__ */ jsxs(ToastContent, { children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex min-h-0 min-w-0 flex-1 flex-col gap-0.5",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex min-w-0 gap-2",
					children: [/* @__PURE__ */ jsx(ToastIcon, { type: toastItem.type }), /* @__PURE__ */ jsx(ToastTitle, {})]
				}), /* @__PURE__ */ jsx(ToastDescription, {})]
			}),
			/* @__PURE__ */ jsx(ToastAction, {}),
			/* @__PURE__ */ jsx(ToastClose, {})
		] })
	}, toastItem.id));
}
function Toaster({ children, toastManager = toast, ...props }) {
	return /* @__PURE__ */ jsxs(ToastProvider, {
		toastManager,
		...props,
		children: [children, /* @__PURE__ */ jsx(ToastPortal, { children: /* @__PURE__ */ jsx(ToastViewport, { children: /* @__PURE__ */ jsx(ToastList, {}) }) })]
	});
}
const createToastManager = Toast$1.createToastManager;
const useToastManager = Toast$1.useToastManager;
export { Toast, ToastAction, ToastClose, ToastContent, ToastDescription, ToastPortal, ToastProvider, ToastTitle, ToastViewport, Toaster, createToastManager, toast, useToastManager };
