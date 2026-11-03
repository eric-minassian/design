"use client";
import { Button } from "./button.js";
import { DIALOG_BACKDROP_CLASS, DIALOG_POPUP_CLASS, Dialog as Dialog$1, DialogDescription, DialogTitle } from "./dialog.js";
import { cn } from "../lib/utils.js";
import { CheckIcon, SearchIcon, XIcon } from "lucide-react";
import { jsx, jsxs } from "react/jsx-runtime";
import "react";
import { Dialog } from "@base-ui/react/dialog";
import { Command as Command$1 } from "cmdk";
// src/components/command.tsx
function Command({ className, ...props }) {
	return /* @__PURE__ */ jsx(Command$1, {
		"data-slot": "command",
		className: cn("not-in-data-[slot=dialog-content]:not-in-data-[slot=popover-content]:dialog-glass not-in-data-[slot=dialog-content]:not-in-data-[slot=popover-content]:rounded-2xl not-in-data-[slot=dialog-content]:not-in-data-[slot=popover-content]:border flex size-full min-h-0 flex-col overflow-hidden text-foreground", className),
		...props
	});
}
function CommandDialog({ title = "Command Palette", description = "Search for a command to run...", children, className, showCloseButton = false, ...props }) {
	return /* @__PURE__ */ jsx(Dialog$1, {
		...props,
		children: /* @__PURE__ */ jsxs(Dialog.Portal, { children: [/* @__PURE__ */ jsx(Dialog.Backdrop, {
			"data-slot": "dialog-overlay",
			className: DIALOG_BACKDROP_CLASS
		}), /* @__PURE__ */ jsx(Dialog.Viewport, {
			"data-slot": "command-dialog-viewport",
			className: "pointer-events-none fixed inset-0 z-50 flex flex-col items-center px-4 py-[max(--spacing(4),4vh)] sm:py-[10vh]",
			children: /* @__PURE__ */ jsxs(Dialog.Popup, {
				"data-slot": "dialog-content",
				className: cn(DIALOG_POPUP_CLASS, "pointer-events-auto max-h-105 max-w-xl overflow-hidden text-foreground", className),
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "sr-only",
						children: [/* @__PURE__ */ jsx(DialogTitle, { children: title }), /* @__PURE__ */ jsx(DialogDescription, { children: description })]
					}),
					children,
					showCloseButton && /* @__PURE__ */ jsx(Dialog.Close, {
						"data-slot": "dialog-close",
						"aria-label": "Close",
						className: "absolute end-1.5 top-1.5",
						render: /* @__PURE__ */ jsx(Button, {
							size: "icon",
							variant: "ghost"
						}),
						children: /* @__PURE__ */ jsx(XIcon, {})
					})
				]
			})
		})] })
	});
}
function CommandInput({ className, ...props }) {
	return /* @__PURE__ */ jsxs("div", {
		"data-slot": "command-input-wrapper",
		className: "flex shrink-0 items-center gap-2.5 border-b px-4",
		children: [/* @__PURE__ */ jsx(SearchIcon, { className: "size-4.5 shrink-0 text-icon-muted sm:size-4" }), /* @__PURE__ */ jsx(Command$1.Input, {
			"data-slot": "command-input",
			className: cn("h-11 w-full min-w-0 bg-transparent text-base text-foreground outline-none placeholder:text-placeholder disabled:cursor-not-allowed disabled:opacity-64 sm:h-10 sm:text-sm", className),
			...props
		})]
	});
}
function CommandList({ className, ...props }) {
	return /* @__PURE__ */ jsx(Command$1.List, {
		"data-slot": "command-list",
		className: cn("max-h-72 min-h-0 scroll-py-2 overflow-y-auto overflow-x-hidden p-2 outline-none", className),
		...props
	});
}
function CommandEmpty({ className, ...props }) {
	return /* @__PURE__ */ jsx(Command$1.Empty, {
		"data-slot": "command-empty",
		className: cn("py-6 text-center text-base text-muted-foreground sm:text-sm", className),
		...props
	});
}
function CommandGroup({ className, ...props }) {
	return /* @__PURE__ */ jsx(Command$1.Group, {
		"data-slot": "command-group",
		className: cn("not-first:mt-1.5 text-foreground **:[[cmdk-group-heading]]:px-2 **:[[cmdk-group-heading]]:py-1.5 **:[[cmdk-group-heading]]:font-medium **:[[cmdk-group-heading]]:text-muted-foreground **:[[cmdk-group-heading]]:text-xs", className),
		...props
	});
}
function CommandSeparator({ className, ...props }) {
	return /* @__PURE__ */ jsx(Command$1.Separator, {
		"data-slot": "command-separator",
		className: cn("-mx-2 my-1.5 h-px bg-border", className),
		...props
	});
}
function CommandItem({ className, children, ...props }) {
	return /* @__PURE__ */ jsxs(Command$1.Item, {
		"data-slot": "command-item",
		className: cn("group/command-item flex min-h-8 cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-base text-foreground outline-none data-[disabled=true]:pointer-events-none data-[selected=true]:bg-foreground/[0.09] data-[selected=true]:text-foreground data-[disabled=true]:opacity-64 sm:min-h-7 sm:text-sm [&>svg]:-mx-0.5 [&>svg:not([class*='opacity-'])]:opacity-80 [&>svg:not([class*='size-'])]:size-4.5 sm:[&>svg:not([class*='size-'])]:size-4 [&>svg:not([class*='text-'])]:text-muted-foreground [&>svg]:pointer-events-none [&>svg]:shrink-0", className),
		...props,
		children: [children, /* @__PURE__ */ jsx(CheckIcon, { className: "ms-auto opacity-0 group-has-data-[slot=command-shortcut]/command-item:hidden group-data-[checked=true]/command-item:opacity-100" })]
	});
}
function CommandShortcut({ className, ...props }) {
	return /* @__PURE__ */ jsx("kbd", {
		"data-slot": "command-shortcut",
		className: cn("ms-auto font-medium font-sans text-secondary-label text-xs tracking-widest", className),
		...props
	});
}
/** The key hints along the bottom of a palette. */
function CommandFooter({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "command-footer",
		className: cn("flex shrink-0 items-center justify-between gap-2 border-t border-foreground/[0.07] bg-foreground/[0.025] px-4 py-2 font-medium text-muted-foreground text-xs [&_[data-slot=kbd]]:bg-foreground/[0.08] [&_[data-slot=kbd]]:text-foreground", className),
		...props
	});
}
export { Command, CommandDialog, CommandEmpty, CommandFooter, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut };
