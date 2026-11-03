"use client";
import { buttonVariants } from "./button.js";
import { Input } from "./input.js";
import { Spinner } from "./spinner.js";
import { cn } from "../lib/utils.js";
import { CheckIcon, ChevronRightIcon, SearchIcon } from "lucide-react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import "react";
import { Menu } from "@base-ui/react/menu";
// src/components/dropdown-menu.tsx
function DropdownMenu({ ...props }) {
	return /* @__PURE__ */ jsx(Menu.Root, {
		"data-slot": "dropdown-menu",
		...props
	});
}
function DropdownMenuPortal({ ...props }) {
	return /* @__PURE__ */ jsx(Menu.Portal, {
		"data-slot": "dropdown-menu-portal",
		...props
	});
}
function DropdownMenuTrigger({ ...props }) {
	return /* @__PURE__ */ jsx(Menu.Trigger, {
		"data-slot": "dropdown-menu-trigger",
		...props
	});
}
function DropdownMenuContent({ align = "start", alignOffset = 0, side = "bottom", sideOffset = 4, anchor, collisionAvoidance, width = "default", className, children, ...props }) {
	return /* @__PURE__ */ jsx(Menu.Portal, { children: /* @__PURE__ */ jsx(Menu.Positioner, {
		"data-slot": "dropdown-menu-positioner",
		className: "isolate z-[130] outline-none",
		align,
		alignOffset,
		anchor,
		collisionAvoidance,
		side,
		sideOffset,
		children: /* @__PURE__ */ jsx(Menu.Popup, {
			"data-slot": "dropdown-menu-content",
			className: cn("dropdown-glass relative flex max-w-[calc(100vw-2rem)] origin-(--transform-origin) rounded-lg text-popover-foreground outline-none transition-[scale,opacity] duration-100 focus:outline-none data-ending-style:scale-98 data-ending-style:opacity-0 data-starting-style:scale-98 data-starting-style:opacity-0", width === "content" ? "w-max min-w-0" : "min-w-[min(10rem,calc(100vw-2rem))]", className),
			...props,
			children: /* @__PURE__ */ jsx("div", {
				className: "max-h-(--available-height) w-full overflow-y-auto p-1",
				children
			})
		})
	}) });
}
/** A menu's filter field: a hairline row that sits flush at the top of the popup. */
function DropdownMenuSearchInput({ busy = false, onKeyDown, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "dropdown-menu-search-input",
		className: "min-w-0 shrink-0 px-2 pt-1.5 pb-1",
		children: /* @__PURE__ */ jsxs("div", {
			className: "relative -translate-y-px border-b border-border/70 pb-1.5 transition-colors focus-within:border-ring",
			children: [busy ? /* @__PURE__ */ jsx(Spinner, {
				"aria-hidden": "true",
				size: "md",
				tone: "muted",
				className: "pointer-events-none absolute top-1.5 left-0"
			}) : /* @__PURE__ */ jsx(SearchIcon, {
				"aria-hidden": "true",
				className: "pointer-events-none absolute top-1.5 left-0 size-4 shrink-0 text-muted-foreground/55"
			}), /* @__PURE__ */ jsx(Input, {
				...props,
				className: "rounded-none bg-transparent text-sm [&_input]:h-6.5 [&_input]:ps-5 [&_input]:font-sans [&_input]:leading-6.5",
				size: "sm",
				unstyled: true,
				onKeyDown: (event) => {
					if (event.key !== "ArrowDown" && event.key !== "Escape") event.stopPropagation();
					onKeyDown?.(event);
				}
			})]
		})
	});
}
function DropdownMenuGroup({ ...props }) {
	return /* @__PURE__ */ jsx(Menu.Group, {
		"data-slot": "dropdown-menu-group",
		...props
	});
}
function DropdownMenuLabel({ className, inset, ...props }) {
	return /* @__PURE__ */ jsx(Menu.GroupLabel, {
		"data-slot": "dropdown-menu-label",
		"data-inset": inset,
		className: cn("px-2 py-1.5 font-medium text-muted-foreground text-xs data-inset:ps-9 sm:data-inset:ps-8", className),
		...props
	});
}
function DropdownMenuItem({ className, inset, density = "default", variant = "default", ...props }) {
	return /* @__PURE__ */ jsx(Menu.Item, {
		"data-slot": "dropdown-menu-item",
		"data-density": density,
		"data-inset": inset,
		"data-variant": variant,
		className: cn("flex min-h-8 cursor-pointer select-none items-center gap-2 rounded-sm px-2 py-1 text-base text-foreground outline-none data-disabled:pointer-events-none data-disabled:cursor-not-allowed data-highlighted:bg-accent data-inset:ps-9 data-[variant=destructive]:text-destructive-foreground data-highlighted:text-accent-foreground data-[variant=destructive]:data-highlighted:bg-destructive/8 data-[variant=destructive]:data-highlighted:text-destructive-foreground data-disabled:opacity-64 sm:min-h-7 sm:text-sm sm:data-inset:ps-8 dark:data-[variant=destructive]:data-highlighted:bg-destructive/16 [&>svg]:-mx-0.5 [&>svg:not([class*='opacity-'])]:opacity-80 [&>svg:not([class*='size-'])]:size-4.5 sm:[&>svg:not([class*='size-'])]:size-4 [&>svg:not([class*='text-'])]:text-muted-foreground data-[variant=destructive]:[&>svg:not([class*='text-'])]:text-current [&>svg]:pointer-events-none [&>svg]:shrink-0", variant === "ghost" && buttonVariants({
			variant: "ghost",
			size: "compact",
			className: "h-auto min-h-7 w-full sm:text-xs"
		}), density === "touch" && "min-h-10 sm:min-h-10", className),
		...props
	});
}
function DropdownMenuSub({ ...props }) {
	return /* @__PURE__ */ jsx(Menu.SubmenuRoot, {
		"data-slot": "dropdown-menu-sub",
		...props
	});
}
function DropdownMenuSubTrigger({ className, inset, density = "default", children, ...props }) {
	return /* @__PURE__ */ jsxs(Menu.SubmenuTrigger, {
		"data-slot": "dropdown-menu-sub-trigger",
		"data-density": density,
		"data-inset": inset,
		className: cn("flex min-h-8 cursor-pointer select-none items-center gap-2 rounded-sm px-2 py-1 text-base text-foreground outline-none data-disabled:pointer-events-none data-disabled:cursor-not-allowed data-highlighted:bg-accent data-popup-open:bg-accent data-inset:ps-9 data-highlighted:text-accent-foreground data-popup-open:text-accent-foreground data-disabled:opacity-64 sm:min-h-7 sm:text-sm sm:data-inset:ps-8 [&>svg:not(:last-child)]:-mx-0.5 [&>svg:not(:last-child):not([class*='opacity-'])]:opacity-80 [&_svg:not([class*='size-'])]:size-4.5 sm:[&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground [&_svg]:pointer-events-none [&>svg]:shrink-0", density === "touch" && "min-h-10 sm:min-h-10", className),
		...props,
		children: [children, /* @__PURE__ */ jsx(ChevronRightIcon, { className: "-me-0.5 ms-auto opacity-80" })]
	});
}
function DropdownMenuSubContent({ align = "start", alignOffset, side = "inline-end", sideOffset = 0, ...props }) {
	return /* @__PURE__ */ jsx(DropdownMenuContent, {
		"data-slot": "dropdown-menu-sub-content",
		align,
		alignOffset: alignOffset ?? (align !== "center" ? -5 : void 0),
		side,
		sideOffset,
		...props
	});
}
function DropdownMenuCheckboxItem({ className, children, checked, inset, variant = "default", ...props }) {
	return /* @__PURE__ */ jsx(Menu.CheckboxItem, {
		"data-slot": "dropdown-menu-checkbox-item",
		"data-inset": inset,
		className: cn("group/menu-checkbox grid min-h-8 cursor-pointer select-none items-center gap-2 rounded-sm py-1 ps-2 text-base text-foreground outline-none data-disabled:pointer-events-none data-disabled:cursor-not-allowed data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:opacity-64 sm:min-h-7 sm:text-sm [&_svg:not([class*='size-'])]:size-4.5 sm:[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0", variant === "switch" ? "grid-cols-[1fr_auto] gap-4 pe-1.5" : "grid-cols-[1rem_minmax(0,1fr)] pe-4", variant === "icon" && "grid-cols-[0.625rem_minmax(0,1fr)]", className),
		checked,
		...props,
		children: variant === "switch" ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("span", {
			className: "col-start-1",
			children
		}), /* @__PURE__ */ jsx(Menu.CheckboxItemIndicator, {
			"data-slot": "dropdown-menu-checkbox-item-indicator",
			className: "inline-flex h-[calc(var(--thumb-size)+2px)] w-[calc(var(--thumb-size)*2-2px)] shrink-0 items-center rounded-full p-px inset-shadow-[0_1px_--theme(--color-black/4%)] outline-none transition-[background-color,box-shadow] duration-200 [--thumb-size:--spacing(4)] data-checked:bg-primary data-disabled:opacity-64 data-unchecked:bg-input sm:[--thumb-size:--spacing(3)]",
			keepMounted: true,
			children: /* @__PURE__ */ jsx("span", { className: "pointer-events-none block aspect-square h-full origin-left rounded-(--thumb-size) bg-white shadow-sm/5 [transition:translate_.15s,border-radius_.15s,scale_.1s_.1s,transform-origin_.15s] group-data-checked/menu-checkbox:origin-[var(--thumb-size)_50%] group-data-checked/menu-checkbox:translate-x-[calc(var(--thumb-size)-4px)] group-active/menu-checkbox:scale-x-110 group-active/menu-checkbox:rounded-[var(--thumb-size)/calc(var(--thumb-size)*1.10)]" })
		})] }) : /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Menu.CheckboxItemIndicator, {
			"data-slot": "dropdown-menu-checkbox-item-indicator",
			className: cn("col-start-1", variant === "icon" && "-mx-0.5"),
			children: /* @__PURE__ */ jsx("svg", {
				className: variant === "icon" ? "size-3.5" : void 0,
				fill: "none",
				height: "24",
				stroke: "currentColor",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				strokeWidth: "1.75",
				viewBox: "0 0 24 24",
				width: "24",
				xmlns: "http://www.w3.org/2000/svg",
				children: /* @__PURE__ */ jsx("path", { d: "M5.252 12.7 10.2 18.63 18.748 5.37" })
			})
		}), /* @__PURE__ */ jsx("span", {
			className: "col-start-2",
			children
		})] })
	});
}
function DropdownMenuRadioGroup({ ...props }) {
	return /* @__PURE__ */ jsx(Menu.RadioGroup, {
		"data-slot": "dropdown-menu-radio-group",
		...props
	});
}
function DropdownMenuRadioItem({ className, children, inset, hideIndicator = false, ...props }) {
	return /* @__PURE__ */ jsxs(Menu.RadioItem, {
		"data-slot": "dropdown-menu-radio-item",
		"data-inset": inset,
		className: cn("flex min-h-8 cursor-pointer select-none items-center gap-2 rounded-sm px-2 py-1 text-base text-foreground outline-none data-checked:bg-foreground/[0.08] data-disabled:pointer-events-none data-disabled:cursor-not-allowed data-highlighted:bg-accent data-inset:ps-9 data-highlighted:text-accent-foreground data-disabled:opacity-64 sm:min-h-7 sm:text-sm sm:data-inset:ps-8 [&_svg:not([class*='size-'])]:size-4.5 sm:[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0", className),
		...props,
		children: [/* @__PURE__ */ jsx("span", {
			className: "min-w-0 flex-1",
			children
		}), !hideIndicator && /* @__PURE__ */ jsx(DropdownMenuRadioItemIndicator, {})]
	});
}
function DropdownMenuRadioItemIndicator({ className, children, ...props }) {
	return /* @__PURE__ */ jsx(Menu.RadioItemIndicator, {
		"aria-hidden": true,
		"data-slot": "dropdown-menu-radio-item-indicator",
		className: cn("flex shrink-0", className),
		...props,
		children: children ?? /* @__PURE__ */ jsx(CheckIcon, { className: "size-3.5" })
	});
}
function DropdownMenuSeparator({ className, ...props }) {
	return /* @__PURE__ */ jsx(Menu.Separator, {
		"data-slot": "dropdown-menu-separator",
		className: cn("mx-2 my-1 h-px bg-border", className),
		...props
	});
}
function DropdownMenuShortcut({ className, ...props }) {
	return /* @__PURE__ */ jsx("kbd", {
		"data-slot": "dropdown-menu-shortcut",
		className: cn("ms-auto font-medium font-sans text-secondary-label text-xs tracking-widest", className),
		...props
	});
}
export { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuRadioItemIndicator, DropdownMenuSearchInput, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger };
