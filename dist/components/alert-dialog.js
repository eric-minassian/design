"use client";
import { Button } from "./button.js";
import { DIALOG_BACKDROP_CLASS, DIALOG_POPUP_CLASS, DIALOG_VIEWPORT_CLASS } from "./dialog.js";
import { cn } from "../lib/utils.js";
import { jsx, jsxs } from "react/jsx-runtime";
import "react";
import { AlertDialog as AlertDialog$1 } from "@base-ui/react/alert-dialog";
// src/components/alert-dialog.tsx
function AlertDialog({ ...props }) {
	return /* @__PURE__ */ jsx(AlertDialog$1.Root, {
		"data-slot": "alert-dialog",
		...props
	});
}
function AlertDialogTrigger({ ...props }) {
	return /* @__PURE__ */ jsx(AlertDialog$1.Trigger, {
		"data-slot": "alert-dialog-trigger",
		...props
	});
}
function AlertDialogPortal({ ...props }) {
	return /* @__PURE__ */ jsx(AlertDialog$1.Portal, {
		"data-slot": "alert-dialog-portal",
		...props
	});
}
function AlertDialogClose({ ...props }) {
	return /* @__PURE__ */ jsx(AlertDialog$1.Close, {
		"data-slot": "alert-dialog-close",
		...props
	});
}
function AlertDialogOverlay({ className, ...props }) {
	return /* @__PURE__ */ jsx(AlertDialog$1.Backdrop, {
		"data-slot": "alert-dialog-overlay",
		className: cn(DIALOG_BACKDROP_CLASS, className),
		...props
	});
}
function AlertDialogContent({ className, size = "default", bottomStickOnMobile = true, ...props }) {
	return /* @__PURE__ */ jsxs(AlertDialogPortal, { children: [/* @__PURE__ */ jsx(AlertDialogOverlay, {}), /* @__PURE__ */ jsx(AlertDialog$1.Viewport, {
		"data-slot": "alert-dialog-viewport",
		className: cn(DIALOG_VIEWPORT_CLASS, bottomStickOnMobile && "max-sm:grid-rows-[1fr_auto] max-sm:p-0 max-sm:pt-12"),
		children: /* @__PURE__ */ jsx(AlertDialog$1.Popup, {
			"data-slot": "alert-dialog-content",
			"data-size": size,
			className: cn(DIALOG_POPUP_CLASS, "group/alert-dialog-content row-start-2 max-h-full text-popover-foreground data-[size=default]:max-w-lg data-[size=sm]:max-w-xs", bottomStickOnMobile && "max-sm:max-w-none max-sm:rounded-none max-sm:border-x-0 max-sm:border-t max-sm:border-b-0 max-sm:opacity-[calc(1-min(var(--nested-dialogs),1))] max-sm:data-ending-style:translate-y-4 max-sm:data-starting-style:translate-y-4", className),
			...props
		})
	})] });
}
function AlertDialogHeader({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "alert-dialog-header",
		className: cn("flex min-h-0 flex-col items-center gap-2 p-6 text-center max-sm:pb-4 sm:group-data-[size=default]/alert-dialog-content:items-start sm:group-data-[size=default]/alert-dialog-content:text-left", className),
		...props
	});
}
function AlertDialogFooter({ className, variant = "default", ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "alert-dialog-footer",
		className: cn("flex flex-col-reverse gap-2 px-6 group-data-[size=sm]/alert-dialog-content:grid group-data-[size=sm]/alert-dialog-content:grid-cols-2 sm:flex-row sm:justify-end sm:rounded-b-[calc(var(--radius-2xl)-1px)]", variant === "default" && "border-t bg-muted/72 py-4", variant === "bare" && "pb-6", className),
		...props
	});
}
function AlertDialogMedia({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "alert-dialog-media",
		className: cn("mb-2 inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground *:[svg:not([class*='size-'])]:size-5", className),
		...props
	});
}
function AlertDialogTitle({ className, ...props }) {
	return /* @__PURE__ */ jsx(AlertDialog$1.Title, {
		"data-slot": "alert-dialog-title",
		className: cn("wrap-anywhere shrink-0 font-semibold text-xl leading-none", className),
		...props
	});
}
function AlertDialogDescription({ className, ...props }) {
	return /* @__PURE__ */ jsx(AlertDialog$1.Description, {
		"data-slot": "alert-dialog-description",
		className: cn("wrap-anywhere max-h-[min(24rem,60dvh)] min-h-0 select-text overflow-y-auto overscroll-contain text-base text-muted-foreground sm:text-sm *:[a]:underline *:[a]:underline-offset-3 *:[a]:hover:text-foreground", className),
		...props
	});
}
/** The confirming button. Closes the dialog after `onClick`; call `event.preventBaseUIHandler()` to keep it open. */
function AlertDialogAction({ className, variant, size, ...props }) {
	return /* @__PURE__ */ jsx(AlertDialog$1.Close, {
		"data-slot": "alert-dialog-action",
		className: cn(className),
		render: /* @__PURE__ */ jsx(Button, {
			variant,
			size
		}),
		...props
	});
}
function AlertDialogCancel({ className, variant = "outline", size = "default", ...props }) {
	return /* @__PURE__ */ jsx(AlertDialog$1.Close, {
		"data-slot": "alert-dialog-cancel",
		className: cn(className),
		render: /* @__PURE__ */ jsx(Button, {
			variant,
			size
		}),
		...props
	});
}
export { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogClose, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogMedia, AlertDialogOverlay, AlertDialogPortal, AlertDialogTitle, AlertDialogTrigger };
