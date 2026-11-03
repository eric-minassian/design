"use client";
import { cn } from "../lib/utils.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { Slider as Slider$1 } from "@base-ui/react/slider";
// src/components/slider.tsx
function thumbCount(value, defaultValue) {
	const current = value ?? defaultValue;
	if (Array.isArray(current)) return current.length;
	return current === void 0 ? 2 : 1;
}
function Slider({ className, defaultValue, value, min = 0, max = 100, ...props }) {
	return /* @__PURE__ */ jsx(Slider$1.Root, {
		"data-slot": "slider",
		className: cn("data-horizontal:w-full data-vertical:h-full", className),
		defaultValue: defaultValue ?? (value === void 0 ? [min, max] : void 0),
		value,
		min,
		max,
		thumbAlignment: "edge",
		...props,
		children: /* @__PURE__ */ jsxs(Slider$1.Control, {
			className: "relative flex w-full touch-none select-none items-center data-disabled:pointer-events-none data-disabled:opacity-64 data-horizontal:min-h-4 data-vertical:h-full data-vertical:min-h-40 data-vertical:w-auto data-vertical:min-w-4 data-vertical:flex-col",
			children: [/* @__PURE__ */ jsx(Slider$1.Track, {
				"data-slot": "slider-track",
				className: "relative grow select-none overflow-hidden rounded-full bg-muted-foreground/22 data-horizontal:h-1.5 data-horizontal:w-full data-vertical:h-full data-vertical:w-1.5",
				children: /* @__PURE__ */ jsx(Slider$1.Indicator, {
					"data-slot": "slider-range",
					className: "select-none bg-primary data-horizontal:h-full data-vertical:w-full"
				})
			}), Array.from({ length: thumbCount(value, defaultValue) }, (_, index) => /* @__PURE__ */ jsx(Slider$1.Thumb, {
				"data-slot": "slider-thumb",
				index,
				className: "relative block size-4 shrink-0 cursor-grab select-none rounded-full border-2 border-primary bg-background shadow-[0_1px_2px_color-mix(in_srgb,var(--foreground)_12%,transparent)] outline-none ring-ring/24 transition-[scale,box-shadow] duration-100 after:absolute after:-inset-2 hover:scale-108 hover:shadow-[0_1px_3px_color-mix(in_srgb,var(--foreground)_20%,transparent)] has-focus-visible:ring-[3px] active:scale-94 active:cursor-grabbing data-disabled:cursor-not-allowed"
			}, index))]
		})
	});
}
export { Slider };
