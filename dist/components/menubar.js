"use client";
"use client";
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from "./dropdown-menu.js";
import { cn } from "../lib/utils.js";
import { jsx } from "react/jsx-runtime";
import "react";
import { Menubar as Menubar$1 } from "@base-ui/react/menubar";
// src/components/menubar.tsx
function Menubar({ className, ...props }) {
	return /* @__PURE__ */ jsx(Menubar$1, {
		"data-slot": "menubar",
		className: cn("flex h-9 w-fit items-center gap-0.5 rounded-lg border border-input bg-popover not-dark:bg-clip-padding p-0.5 shadow-xs/5 sm:h-8 dark:bg-input/32", className),
		...props
	});
}
function MenubarMenu({ ...props }) {
	return /* @__PURE__ */ jsx(DropdownMenu, {
		"data-slot": "menubar-menu",
		...props
	});
}
function MenubarGroup({ ...props }) {
	return /* @__PURE__ */ jsx(DropdownMenuGroup, {
		"data-slot": "menubar-group",
		...props
	});
}
function MenubarPortal({ ...props }) {
	return /* @__PURE__ */ jsx(DropdownMenuPortal, {
		"data-slot": "menubar-portal",
		...props
	});
}
function MenubarTrigger({ className, ...props }) {
	return /* @__PURE__ */ jsx(DropdownMenuTrigger, {
		"data-slot": "menubar-trigger",
		className: cn("flex h-full cursor-pointer select-none items-center rounded-md px-2 font-medium text-base text-foreground outline-none transition-colors hover:bg-accent focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring aria-expanded:bg-accent data-popup-open:bg-accent sm:text-sm", className),
		...props
	});
}
function MenubarContent({ align = "start", alignOffset = -2, sideOffset = 6, ...props }) {
	return /* @__PURE__ */ jsx(DropdownMenuContent, {
		"data-slot": "menubar-content",
		align,
		alignOffset,
		sideOffset,
		...props
	});
}
function MenubarItem({ ...props }) {
	return /* @__PURE__ */ jsx(DropdownMenuItem, {
		"data-slot": "menubar-item",
		...props
	});
}
function MenubarCheckboxItem({ ...props }) {
	return /* @__PURE__ */ jsx(DropdownMenuCheckboxItem, {
		"data-slot": "menubar-checkbox-item",
		...props
	});
}
function MenubarRadioGroup({ ...props }) {
	return /* @__PURE__ */ jsx(DropdownMenuRadioGroup, {
		"data-slot": "menubar-radio-group",
		...props
	});
}
function MenubarRadioItem({ ...props }) {
	return /* @__PURE__ */ jsx(DropdownMenuRadioItem, {
		"data-slot": "menubar-radio-item",
		...props
	});
}
function MenubarLabel({ ...props }) {
	return /* @__PURE__ */ jsx(DropdownMenuLabel, {
		"data-slot": "menubar-label",
		...props
	});
}
function MenubarSeparator({ ...props }) {
	return /* @__PURE__ */ jsx(DropdownMenuSeparator, {
		"data-slot": "menubar-separator",
		...props
	});
}
function MenubarShortcut({ ...props }) {
	return /* @__PURE__ */ jsx(DropdownMenuShortcut, {
		"data-slot": "menubar-shortcut",
		...props
	});
}
function MenubarSub({ ...props }) {
	return /* @__PURE__ */ jsx(DropdownMenuSub, {
		"data-slot": "menubar-sub",
		...props
	});
}
function MenubarSubTrigger({ ...props }) {
	return /* @__PURE__ */ jsx(DropdownMenuSubTrigger, {
		"data-slot": "menubar-sub-trigger",
		...props
	});
}
function MenubarSubContent({ ...props }) {
	return /* @__PURE__ */ jsx(DropdownMenuSubContent, {
		"data-slot": "menubar-sub-content",
		...props
	});
}
export { Menubar, MenubarCheckboxItem, MenubarContent, MenubarGroup, MenubarItem, MenubarLabel, MenubarMenu, MenubarPortal, MenubarRadioGroup, MenubarRadioItem, MenubarSeparator, MenubarShortcut, MenubarSub, MenubarSubContent, MenubarSubTrigger, MenubarTrigger };
