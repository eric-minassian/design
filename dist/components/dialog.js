"use client";
"use client";
import { Button } from "./button.js";
import { cn } from "../lib/utils.js";
import { XIcon } from "lucide-react";
import { jsx, jsxs } from "react/jsx-runtime";
import "react";
import { Dialog as Dialog$1 } from "@base-ui/react/dialog";
// src/components/dialog.tsx
const DIALOG_BACKDROP_CLASS = "dialog-backdrop fixed inset-0 z-50 transition-all duration-200 data-ending-style:opacity-0 data-starting-style:opacity-0";
const DIALOG_POPUP_CLASS = "dialog-glass -translate-y-[calc(1.25rem*var(--nested-dialogs))] relative flex min-h-0 w-full min-w-0 scale-[calc(1-0.1*var(--nested-dialogs))] flex-col rounded-2xl border opacity-[calc(1-0.1*var(--nested-dialogs))] outline-none transition-[scale,opacity,translate] duration-200 ease-in-out will-change-transform data-nested:data-ending-style:translate-y-8 data-nested:data-starting-style:translate-y-8 data-nested-dialog-open:origin-top data-ending-style:scale-98 data-starting-style:scale-98 data-ending-style:opacity-0 data-starting-style:opacity-0";
const DIALOG_VIEWPORT_CLASS = "fixed inset-0 z-50 grid grid-rows-[1fr_auto_1fr] justify-items-center p-4";
const DIALOG_MOBILE_VIEWPORT_CLASS = "max-sm:grid-rows-[1fr_auto] max-sm:p-0 max-sm:pt-12";
const DIALOG_MOBILE_SHEET_CLASS = "max-sm:max-w-none max-sm:rounded-none max-sm:border-x-0 max-sm:border-t max-sm:border-b-0 max-sm:opacity-[calc(1-min(var(--nested-dialogs),1))] max-sm:data-ending-style:translate-y-4 max-sm:data-starting-style:translate-y-4";
function Dialog({ ...props }) {
	return /* @__PURE__ */ jsx(Dialog$1.Root, {
		"data-slot": "dialog",
		...props
	});
}
function DialogTrigger({ ...props }) {
	return /* @__PURE__ */ jsx(Dialog$1.Trigger, {
		"data-slot": "dialog-trigger",
		...props
	});
}
function DialogPortal({ ...props }) {
	return /* @__PURE__ */ jsx(Dialog$1.Portal, {
		"data-slot": "dialog-portal",
		...props
	});
}
function DialogClose({ ...props }) {
	return /* @__PURE__ */ jsx(Dialog$1.Close, {
		"data-slot": "dialog-close",
		...props
	});
}
function DialogOverlay({ className, ...props }) {
	return /* @__PURE__ */ jsx(Dialog$1.Backdrop, {
		"data-slot": "dialog-overlay",
		className: cn(DIALOG_BACKDROP_CLASS, className),
		...props
	});
}
function DialogContent({ className, children, showCloseButton = true, bottomStickOnMobile = true, ...props }) {
	return /* @__PURE__ */ jsxs(DialogPortal, { children: [/* @__PURE__ */ jsx(DialogOverlay, {}), /* @__PURE__ */ jsx(Dialog$1.Viewport, {
		"data-slot": "dialog-viewport",
		className: cn(DIALOG_VIEWPORT_CLASS, bottomStickOnMobile && "max-sm:grid-rows-[1fr_auto] max-sm:p-0 max-sm:pt-12"),
		children: /* @__PURE__ */ jsxs(Dialog$1.Popup, {
			"data-slot": "dialog-content",
			className: cn(DIALOG_POPUP_CLASS, "row-start-2 max-h-full max-w-lg text-popover-foreground", bottomStickOnMobile && "max-sm:max-w-none max-sm:rounded-none max-sm:border-x-0 max-sm:border-t max-sm:border-b-0 max-sm:opacity-[calc(1-min(var(--nested-dialogs),1))] max-sm:data-ending-style:translate-y-4 max-sm:data-starting-style:translate-y-4", className),
			...props,
			children: [children, showCloseButton && /* @__PURE__ */ jsx(Dialog$1.Close, {
				"data-slot": "dialog-close",
				"aria-label": "Close",
				className: "absolute end-2 top-2",
				render: /* @__PURE__ */ jsx(Button, {
					size: "icon",
					variant: "ghost"
				}),
				children: /* @__PURE__ */ jsx(XIcon, {})
			})]
		})
	})] });
}
function DialogHeader({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "dialog-header",
		className: cn("flex flex-col gap-2 p-6 in-[[data-slot=dialog-content]:has([data-slot=dialog-panel])]:pb-3 max-sm:pb-4", className),
		...props
	});
}
/** The scrolling body between header and footer. */
function DialogPanel({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "dialog-panel",
		className: cn("min-h-0 flex-1 space-y-4 overflow-y-auto p-6 in-[[data-slot=dialog-content]:has([data-slot=dialog-header])]:pt-1 in-[[data-slot=dialog-content]:has([data-slot=dialog-footer][data-variant=bare])]:pb-1", className),
		...props
	});
}
function DialogFooter({ className, showCloseButton = false, variant = "default", children, ...props }) {
	return /* @__PURE__ */ jsxs("div", {
		"data-slot": "dialog-footer",
		"data-variant": variant,
		className: cn("flex flex-col-reverse gap-2 px-6 sm:flex-row sm:justify-end sm:rounded-b-[calc(var(--radius-2xl)-1px)]", variant === "default" && "border-t bg-muted/72 py-4", variant === "bare" && "py-4", className),
		...props,
		children: [children, showCloseButton && /* @__PURE__ */ jsx(Dialog$1.Close, {
			render: /* @__PURE__ */ jsx(Button, { variant: "outline" }),
			children: "Close"
		})]
	});
}
function DialogTitle({ className, ...props }) {
	return /* @__PURE__ */ jsx(Dialog$1.Title, {
		"data-slot": "dialog-title",
		className: cn("wrap-anywhere font-semibold text-xl leading-none", className),
		...props
	});
}
function DialogDescription({ className, ...props }) {
	return /* @__PURE__ */ jsx(Dialog$1.Description, {
		"data-slot": "dialog-description",
		className: cn("text-base text-muted-foreground sm:text-sm *:[a]:underline *:[a]:underline-offset-3 *:[a]:hover:text-foreground", className),
		...props
	});
}
export { DIALOG_BACKDROP_CLASS, DIALOG_MOBILE_SHEET_CLASS, DIALOG_MOBILE_VIEWPORT_CLASS, DIALOG_POPUP_CLASS, DIALOG_VIEWPORT_CLASS, Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogPanel, DialogPortal, DialogTitle, DialogTrigger };
