"use client";
"use client";
import { DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger } from "./dropdown-menu.js";
import { cn } from "../lib/utils.js";
import { jsx } from "react/jsx-runtime";
import "react";
import { ContextMenu as ContextMenu$1 } from "@base-ui/react/context-menu";
// src/components/context-menu.tsx
function ContextMenu({ ...props }) {
	return /* @__PURE__ */ jsx(ContextMenu$1.Root, {
		"data-slot": "context-menu",
		...props
	});
}
function ContextMenuPortal({ ...props }) {
	return /* @__PURE__ */ jsx(ContextMenu$1.Portal, {
		"data-slot": "context-menu-portal",
		...props
	});
}
function ContextMenuTrigger({ className, ...props }) {
	return /* @__PURE__ */ jsx(ContextMenu$1.Trigger, {
		"data-slot": "context-menu-trigger",
		className: cn("select-none", className),
		...props
	});
}
function ContextMenuContent({ align = "start", alignOffset = 4, side = "right", sideOffset = 0, ...props }) {
	return /* @__PURE__ */ jsx(DropdownMenuContent, {
		"data-slot": "context-menu-content",
		align,
		alignOffset,
		side,
		sideOffset,
		...props
	});
}
function ContextMenuGroup({ ...props }) {
	return /* @__PURE__ */ jsx(DropdownMenuGroup, {
		"data-slot": "context-menu-group",
		...props
	});
}
function ContextMenuLabel({ ...props }) {
	return /* @__PURE__ */ jsx(DropdownMenuLabel, {
		"data-slot": "context-menu-label",
		...props
	});
}
function ContextMenuItem({ ...props }) {
	return /* @__PURE__ */ jsx(DropdownMenuItem, {
		"data-slot": "context-menu-item",
		...props
	});
}
function ContextMenuSub({ ...props }) {
	return /* @__PURE__ */ jsx(DropdownMenuSub, {
		"data-slot": "context-menu-sub",
		...props
	});
}
function ContextMenuSubTrigger({ ...props }) {
	return /* @__PURE__ */ jsx(DropdownMenuSubTrigger, {
		"data-slot": "context-menu-sub-trigger",
		...props
	});
}
function ContextMenuSubContent({ ...props }) {
	return /* @__PURE__ */ jsx(DropdownMenuSubContent, {
		"data-slot": "context-menu-sub-content",
		...props
	});
}
function ContextMenuCheckboxItem({ ...props }) {
	return /* @__PURE__ */ jsx(DropdownMenuCheckboxItem, {
		"data-slot": "context-menu-checkbox-item",
		...props
	});
}
function ContextMenuRadioGroup({ ...props }) {
	return /* @__PURE__ */ jsx(DropdownMenuRadioGroup, {
		"data-slot": "context-menu-radio-group",
		...props
	});
}
function ContextMenuRadioItem({ ...props }) {
	return /* @__PURE__ */ jsx(DropdownMenuRadioItem, {
		"data-slot": "context-menu-radio-item",
		...props
	});
}
function ContextMenuSeparator({ ...props }) {
	return /* @__PURE__ */ jsx(DropdownMenuSeparator, {
		"data-slot": "context-menu-separator",
		...props
	});
}
function ContextMenuShortcut({ ...props }) {
	return /* @__PURE__ */ jsx(DropdownMenuShortcut, {
		"data-slot": "context-menu-shortcut",
		...props
	});
}
export { ContextMenu, ContextMenuCheckboxItem, ContextMenuContent, ContextMenuGroup, ContextMenuItem, ContextMenuLabel, ContextMenuPortal, ContextMenuRadioGroup, ContextMenuRadioItem, ContextMenuSeparator, ContextMenuShortcut, ContextMenuSub, ContextMenuSubContent, ContextMenuSubTrigger, ContextMenuTrigger };
