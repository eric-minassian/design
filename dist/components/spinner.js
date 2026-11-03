"use client";
import { cn } from "../lib/utils.js";
import { LoaderCircleIcon } from "lucide-react";
import { jsx } from "react/jsx-runtime";
import { cva } from "class-variance-authority";
// src/components/spinner.tsx
const spinnerVariants = cva("motion-safe:animate-spin", {
	variants: {
		size: {
			xs: "size-3",
			sm: "size-3.5",
			md: "size-4",
			lg: "size-5"
		},
		tone: {
			current: "",
			muted: "text-muted-foreground"
		}
	},
	defaultVariants: { tone: "current" }
});
function Spinner({ className, size, tone, ...props }) {
	return /* @__PURE__ */ jsx(LoaderCircleIcon, {
		role: "status",
		"aria-label": "Loading",
		"data-slot": "spinner",
		className: cn(spinnerVariants({
			size,
			tone
		}), className),
		...props
	});
}
export { Spinner };
