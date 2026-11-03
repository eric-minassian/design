"use client";
import { cn } from "../lib/utils.js";
import { Button } from "./button.js";
import { ChevronDownIcon } from "lucide-react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import "react";
import { MessageScroller as MessageScroller$1, useMessageScroller, useMessageScrollerScrollable, useMessageScrollerVisibility } from "@shadcn/react/message-scroller";
// src/components/message-scroller.tsx
function MessageScrollerProvider(props) {
	return /* @__PURE__ */ jsx(MessageScroller$1.Provider, { ...props });
}
function MessageScroller({ className, ...props }) {
	return /* @__PURE__ */ jsx(MessageScroller$1.Root, {
		"data-slot": "message-scroller",
		className: cn("group/message-scroller relative flex size-full min-h-0 flex-col overflow-hidden", className),
		...props
	});
}
function MessageScrollerViewport({ className, ...props }) {
	return /* @__PURE__ */ jsx(MessageScroller$1.Viewport, {
		"data-slot": "message-scroller-viewport",
		className: cn("size-full min-h-0 min-w-0 scroll-fade-y overflow-y-auto overscroll-contain [scrollbar-gutter:stable] contain-content data-pending-scroll:invisible", className),
		...props
	});
}
function MessageScrollerContent({ className, ...props }) {
	return /* @__PURE__ */ jsx(MessageScroller$1.Content, {
		"data-slot": "message-scroller-content",
		className: cn("mx-auto flex h-max min-h-full w-full max-w-(--content-max-width) flex-col gap-4 px-4 pt-4 pb-14", className),
		...props
	});
}
function MessageScrollerItem({ className, scrollAnchor = false, ...props }) {
	return /* @__PURE__ */ jsx(MessageScroller$1.Item, {
		"data-slot": "message-scroller-item",
		scrollAnchor,
		className: cn("min-w-0 shrink-0 [contain-intrinsic-size:auto_10rem] [content-visibility:auto]", className),
		...props
	});
}
function MessageScrollerButton({ direction = "end", className, children, render, variant = "glass", size = "xs", ...props }) {
	const label = direction === "end" ? "Jump to latest" : "Jump to start";
	const iconOnly = size?.startsWith("icon");
	return /* @__PURE__ */ jsx(MessageScroller$1.Button, {
		"data-slot": "message-scroller-button",
		"data-direction": direction,
		"data-variant": variant,
		"data-size": size,
		direction,
		className: cn("absolute inset-s-1/2 z-10 -translate-x-1/2 transition-[translate,scale,opacity,border-color] duration-200 data-[active=false]:pointer-events-none data-[active=false]:scale-95 data-[active=false]:opacity-0 data-[active=false]:duration-400 data-[active=false]:ease-[cubic-bezier(0.7,0,0.84,0)] data-[active=true]:translate-y-0 data-[active=true]:scale-100 data-[active=true]:opacity-100 data-[active=true]:ease-[cubic-bezier(0.23,1,0.32,1)] data-[direction=end]:bottom-3 data-[direction=end]:data-[active=false]:translate-y-full data-[direction=start]:top-3 data-[direction=start]:data-[active=false]:-translate-y-full rtl:translate-x-1/2 data-[direction=start]:[&_svg]:rotate-180", className),
		render: render ?? /* @__PURE__ */ jsx(Button, {
			variant,
			size
		}),
		...props,
		children: children ?? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(ChevronDownIcon, {}), /* @__PURE__ */ jsx("span", {
			className: iconOnly ? "sr-only" : void 0,
			children: label
		})] })
	});
}
export { MessageScroller, MessageScrollerButton, MessageScrollerContent, MessageScrollerItem, MessageScrollerProvider, MessageScrollerViewport, useMessageScroller, useMessageScrollerScrollable, useMessageScrollerVisibility };
