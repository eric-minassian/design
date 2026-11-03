"use client";
"use client";
import { cn } from "../lib/utils.js";
import { jsx, jsxs } from "react/jsx-runtime";
import * as React from "react";
import { Drawer as Drawer$1 } from "@base-ui/react/drawer";
// src/components/drawer.tsx
const DrawerContext = React.createContext(null);
function useDrawer() {
	const context = React.useContext(DrawerContext);
	if (!context) throw new Error("useDrawer must be used within a Drawer.");
	return context;
}
function Drawer({ modal = true, showSwipeHandle = false, snapPoints, swipeDirection = "down", ...props }) {
	const hasSnapPoints = snapPoints != null && snapPoints.length > 0;
	const contextValue = React.useMemo(() => ({
		hasSnapPoints,
		modal,
		showSwipeHandle,
		swipeDirection
	}), [
		hasSnapPoints,
		modal,
		showSwipeHandle,
		swipeDirection
	]);
	return /* @__PURE__ */ jsx(DrawerContext.Provider, {
		value: contextValue,
		children: /* @__PURE__ */ jsx(Drawer$1.Root, {
			"data-slot": "drawer",
			modal,
			snapPoints,
			swipeDirection,
			...props
		})
	});
}
function DrawerTrigger({ ...props }) {
	return /* @__PURE__ */ jsx(Drawer$1.Trigger, {
		"data-slot": "drawer-trigger",
		...props
	});
}
function DrawerPortal({ ...props }) {
	return /* @__PURE__ */ jsx(Drawer$1.Portal, {
		"data-slot": "drawer-portal",
		...props
	});
}
function DrawerClose({ ...props }) {
	return /* @__PURE__ */ jsx(Drawer$1.Close, {
		"data-slot": "drawer-close",
		...props
	});
}
function DrawerOverlay({ className, ...props }) {
	return /* @__PURE__ */ jsx(Drawer$1.Backdrop, {
		"data-slot": "drawer-overlay",
		className: cn("dialog-backdrop fixed inset-0 z-50 min-h-dvh opacity-[max(var(--drawer-overlay-min-opacity,0),calc(1-var(--drawer-swipe-progress)))] transition-opacity duration-300 ease-drawer select-none data-ending-style:pointer-events-none data-ending-style:opacity-0 data-ending-style:duration-[calc(var(--drawer-swipe-strength)*400ms)] data-snap-points:[--drawer-overlay-min-opacity:0.5] data-starting-style:opacity-0 data-swiping:duration-0 supports-[-webkit-touch-callout:none]:absolute", className),
		...props
	});
}
function DrawerSwipeHandle({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "drawer-swipe-handle",
		"aria-hidden": "true",
		className: cn("relative z-10 flex shrink-0 cursor-grab transition-opacity duration-200 group-data-nested-drawer-open/drawer-popup:opacity-0 group-data-nested-drawer-swiping/drawer-popup:opacity-100 group-data-[swipe-axis=x]/drawer-popup:absolute group-data-[swipe-axis=x]/drawer-popup:inset-y-0 group-data-[swipe-axis=x]/drawer-popup:w-3 group-data-[swipe-axis=x]/drawer-popup:items-center group-data-[swipe-axis=x]/drawer-popup:justify-center group-data-[swipe-axis=y]/drawer-popup:h-3 group-data-[swipe-axis=y]/drawer-popup:w-full group-data-[swipe-axis=y]/drawer-popup:justify-center group-data-[swipe-direction=down]/drawer-popup:items-end group-data-[swipe-direction=left]/drawer-popup:right-0 group-data-[swipe-direction=right]/drawer-popup:left-0 group-data-[swipe-direction=up]/drawer-popup:order-last group-data-[swipe-direction=up]/drawer-popup:items-start after:block after:shrink-0 after:rounded-full after:bg-input group-data-[swipe-axis=x]/drawer-popup:after:h-12 group-data-[swipe-axis=x]/drawer-popup:after:w-1 group-data-[swipe-axis=y]/drawer-popup:after:h-1 group-data-[swipe-axis=y]/drawer-popup:after:w-12 active:cursor-grabbing", className),
		...props
	});
}
function DrawerContent({ className, children, ...props }) {
	const { hasSnapPoints, modal, showSwipeHandle, swipeDirection } = useDrawer();
	const swipeAxis = swipeDirection === "down" || swipeDirection === "up" ? "y" : "x";
	return /* @__PURE__ */ jsxs(DrawerPortal, {
		"data-slot": "drawer-portal",
		children: [modal === true && /* @__PURE__ */ jsx(DrawerOverlay, { "data-snap-points": hasSnapPoints ? "" : void 0 }), /* @__PURE__ */ jsx(Drawer$1.Viewport, {
			"data-slot": "drawer-viewport",
			"data-modal": modal,
			className: "pointer-events-none fixed inset-0 z-50 select-none data-[modal=true]:pointer-events-auto",
			children: /* @__PURE__ */ jsxs(Drawer$1.Popup, {
				"data-slot": "drawer-popup",
				"data-swipe-axis": swipeAxis,
				"data-snap-points": hasSnapPoints ? "" : void 0,
				className: cn("group/drawer-popup pointer-events-auto fixed z-50 m-(--drawer-inset,0px) flex h-(--drawer-content-height) max-h-(--drawer-content-max-height,none) min-h-0 w-(--drawer-content-width,auto) transform-[translate3d(var(--translate-x,0px),var(--translate-y,0px),0)_scale(var(--stack-scale))] flex-col rounded-2xl border dialog-glass text-base text-popover-foreground transition-[transform,height,opacity,filter] duration-300 ease-drawer will-change-transform outline-none select-none [--drawer-bleed-background:transparent] [--drawer-inset:--spacing(2)] [interpolate-size:allow-keywords] sm:text-sm", "data-nested-drawer-open:overflow-hidden data-nested-drawer-open:brightness-95", "after:pointer-events-none after:absolute after:bg-(--drawer-bleed-background,var(--color-popover)) data-[swipe-axis=x]:after:inset-y-0 data-[swipe-axis=x]:after:w-(--bleed) data-[swipe-axis=y]:after:inset-x-0 data-[swipe-axis=y]:after:h-(--bleed) data-[swipe-direction=down]:after:top-full data-[swipe-direction=left]:after:right-full data-[swipe-direction=right]:after:left-full data-[swipe-direction=up]:after:bottom-full", "[--drawer-content-height:var(--drawer-height,auto)] data-[swipe-axis=x]:[--drawer-content-width:75%] data-[swipe-axis=y]:[--drawer-content-max-height:calc(100dvh-6rem)] data-[swipe-axis=y]:data-snap-points:[--drawer-content-height:100dvh] data-[swipe-axis=x]:sm:[--drawer-content-width:24rem]", "[--bleed:3rem] [--peek:1rem] [--stack-height:var(--drawer-frontmost-height,var(--drawer-height,0px))] [--stack-peek-offset:max(0px,calc((var(--nested-drawers)-var(--stack-progress))*var(--peek)))] [--stack-progress:clamp(0,var(--drawer-swipe-progress),1)] [--stack-scale-base:max(0,calc(1-(var(--nested-drawers)*var(--stack-step))))] [--stack-scale:clamp(0,calc(var(--stack-scale-base)+(var(--stack-step)*var(--stack-progress))),1)] [--stack-shrink:calc(1-var(--stack-scale))] [--stack-step:0.05]", "data-ending-style:transform-(--closed-transform) data-ending-style:opacity-[0.9999] data-ending-style:duration-[calc(var(--drawer-swipe-strength)*400ms)] data-nested-drawer-swiping:duration-0 data-ending-style:data-nested-drawer-swiping:duration-[calc(var(--drawer-swipe-strength)*400ms)] data-starting-style:transform-(--closed-transform) data-swiping:duration-0 data-ending-style:data-swiping:duration-[calc(var(--drawer-swipe-strength)*400ms)]", "data-[swipe-axis=y]:inset-x-0 data-[swipe-axis=y]:data-nested-drawer-open:h-(--stack-height) data-[swipe-axis=y]:sm:mx-auto data-[swipe-axis=y]:sm:max-w-lg", "data-[swipe-axis=x]:inset-y-0 data-[swipe-axis=x]:flex-row", "data-[swipe-direction=down]:bottom-0 data-[swipe-direction=down]:origin-bottom data-[swipe-direction=down]:[--closed-transform:translate3d(0,calc(100%+var(--drawer-inset,0px)+2px),0)] data-[swipe-direction=down]:[--translate-y:calc(var(--drawer-snap-point-offset,0px)+var(--drawer-swipe-movement-y)-var(--stack-peek-offset)-(var(--stack-shrink)*var(--stack-height)))]", "data-[swipe-direction=up]:top-0 data-[swipe-direction=up]:origin-top data-[swipe-direction=up]:[--closed-transform:translate3d(0,calc(-100%-var(--drawer-inset,0px)-2px),0)] data-[swipe-direction=up]:[--translate-y:calc(var(--drawer-snap-point-offset,0px)+var(--drawer-swipe-movement-y)+var(--stack-peek-offset)+(var(--stack-shrink)*var(--stack-height)))]", "data-[swipe-direction=left]:left-0 data-[swipe-direction=left]:origin-left data-[swipe-direction=left]:[--closed-transform:translate3d(calc(-100%-var(--drawer-inset,0px)-2px),0,0)] data-[swipe-direction=left]:[--translate-x:calc(var(--drawer-swipe-movement-x)+var(--stack-peek-offset)+(var(--stack-shrink)*100%))]", "data-[swipe-direction=right]:right-0 data-[swipe-direction=right]:origin-right data-[swipe-direction=right]:[--closed-transform:translate3d(calc(100%+var(--drawer-inset,0px)+2px),0,0)] data-[swipe-direction=right]:[--translate-x:calc(var(--drawer-swipe-movement-x)-var(--stack-peek-offset)-(var(--stack-shrink)*100%))]", className),
				...props,
				children: [showSwipeHandle && /* @__PURE__ */ jsx(DrawerSwipeHandle, {}), /* @__PURE__ */ jsx(Drawer$1.Content, {
					"data-slot": "drawer-content",
					className: cn("flex min-h-0 flex-1 flex-col overflow-hidden overscroll-contain rounded-[inherit] transition-opacity duration-300 ease-drawer select-text group-data-nested-drawer-open/drawer-popup:opacity-0 group-data-nested-drawer-swiping/drawer-popup:opacity-100 group-data-swiping/drawer-popup:select-none"),
					children
				})]
			})
		})]
	});
}
function DrawerHeader({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "drawer-header",
		className: cn("flex shrink-0 flex-col gap-2 p-6 max-sm:pb-4 group-data-[swipe-axis=y]/drawer-popup:text-center sm:group-data-[swipe-axis=y]/drawer-popup:text-left", className),
		...props
	});
}
/** The scrolling body between header and footer. */
function DrawerPanel({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "drawer-panel",
		className: cn("min-h-0 flex-1 space-y-4 overflow-y-auto px-6 pb-6", className),
		...props
	});
}
function DrawerFooter({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "drawer-footer",
		className: cn("mt-auto flex shrink-0 flex-col-reverse gap-2 rounded-b-[calc(var(--radius-2xl)-1px)] border-t bg-muted/72 px-6 py-4 sm:flex-row sm:justify-end", className),
		...props
	});
}
function DrawerTitle({ className, ...props }) {
	return /* @__PURE__ */ jsx(Drawer$1.Title, {
		"data-slot": "drawer-title",
		className: cn("font-semibold text-foreground text-xl leading-none", className),
		...props
	});
}
function DrawerDescription({ className, ...props }) {
	return /* @__PURE__ */ jsx(Drawer$1.Description, {
		"data-slot": "drawer-description",
		className: cn("text-balance text-base text-muted-foreground sm:text-sm", className),
		...props
	});
}
export { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerPanel, DrawerPortal, DrawerSwipeHandle, DrawerTitle, DrawerTrigger };
