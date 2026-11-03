"use client";
import { cn } from "../lib/utils.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { ScrollArea as ScrollArea$1 } from "@base-ui/react/scroll-area";
// src/components/scroll-area.tsx
function ScrollArea({ className, children, scrollFade = false, scrollFadePadding = true, scrollbarGutter = false, hideScrollbars = false, chainVerticalScroll = false, radius = "inherit", viewportTabIndex, ...props }) {
	return /* @__PURE__ */ jsxs(ScrollArea$1.Root, {
		"data-slot": "scroll-area",
		className: cn("relative size-full min-h-0 overflow-hidden", radius === "none" ? "rounded-none" : "rounded-[inherit]", className),
		...props,
		children: [/* @__PURE__ */ jsx(ScrollArea$1.Viewport, {
			...viewportTabIndex === void 0 ? {} : { tabIndex: viewportTabIndex },
			"data-slot": "scroll-area-viewport",
			className: cn("h-full max-h-[inherit] overflow-auto overscroll-contain rounded-[inherit] outline-none transition-shadow focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background data-has-overflow-x:overscroll-x-contain", chainVerticalScroll && "overscroll-y-auto", scrollFade && "mask-t-from-[calc(100%-min(var(--fade-size),var(--scroll-area-overflow-y-start)))] mask-b-from-[calc(100%-min(var(--fade-size),var(--scroll-area-overflow-y-end)))] mask-l-from-[calc(100%-min(var(--fade-size),var(--scroll-area-overflow-x-start)))] mask-r-from-[calc(100%-min(var(--fade-size),var(--scroll-area-overflow-x-end)))] focus-visible:mask-none [--fade-size:1.5rem]", scrollFade && scrollFadePadding && "scroll-p-[var(--fade-size)]", scrollFade && !scrollFadePadding && "has-focus-visible:mask-none", scrollbarGutter && "[scrollbar-gutter:stable]", hideScrollbars && "[-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"),
			children
		}), !hideScrollbars && /* @__PURE__ */ jsxs(Fragment, { children: [
			/* @__PURE__ */ jsx(ScrollBar, { orientation: "vertical" }),
			/* @__PURE__ */ jsx(ScrollBar, { orientation: "horizontal" }),
			/* @__PURE__ */ jsx(ScrollArea$1.Corner, { "data-slot": "scroll-area-corner" })
		] })]
	});
}
function ScrollBar({ className, orientation = "vertical", ...props }) {
	return /* @__PURE__ */ jsx(ScrollArea$1.Scrollbar, {
		"data-slot": "scroll-area-scrollbar",
		orientation,
		className: cn("flex opacity-0 transition-opacity delay-300 data-[orientation=horizontal]:mx-1 data-[orientation=horizontal]:mb-px data-[orientation=horizontal]:h-1.5 data-[orientation=vertical]:my-1 data-[orientation=vertical]:mr-px data-[orientation=vertical]:w-1.5 data-[orientation=horizontal]:flex-col data-hovering:opacity-100 data-scrolling:opacity-100 data-hovering:delay-0 data-scrolling:delay-0 data-hovering:duration-100 data-scrolling:duration-100", className),
		...props,
		children: /* @__PURE__ */ jsx(ScrollArea$1.Thumb, {
			"data-slot": "scroll-area-thumb",
			className: "relative flex-1 rounded-full bg-(--scrollbar-thumb) transition-colors hover:bg-(--scrollbar-thumb-hover)"
		})
	});
}
export { ScrollArea, ScrollBar };
