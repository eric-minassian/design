"use client";
import { cn } from "../lib/utils.js";
import { jsx } from "react/jsx-runtime";
import { cva } from "class-variance-authority";
// src/components/skeleton.tsx
const skeletonVariants = cva("bg-muted-foreground/15 motion-safe:animate-skeleton", {
	variants: { shape: {
		block: "rounded-sm",
		card: "rounded-lg",
		pill: "rounded-full"
	} },
	defaultVariants: { shape: "block" }
});
function Skeleton({ className, shape, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "skeleton",
		className: cn(skeletonVariants({ shape }), className),
		...props
	});
}
export { Skeleton };
