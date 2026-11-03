"use client";
import { cn } from "../lib/utils.js";
import { jsx } from "react/jsx-runtime";
// src/components/aspect-ratio.tsx
function AspectRatio({ ratio, className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "aspect-ratio",
		style: { "--ratio": ratio },
		className: cn("relative aspect-(--ratio)", className),
		...props
	});
}
export { AspectRatio };
