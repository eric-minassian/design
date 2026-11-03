"use client";
import { cn } from "../lib/utils.js";
import { jsx } from "react/jsx-runtime";
import { cva } from "class-variance-authority";
// src/components/status-dot.tsx
const statusDotVariants = cva("relative inline-flex size-2 shrink-0 rounded-full", {
	variants: {
		tone: {
			neutral: "bg-muted-foreground/50",
			primary: "bg-primary",
			success: "bg-success",
			warning: "bg-warning",
			error: "bg-destructive",
			info: "bg-info"
		},
		motion: {
			none: "",
			pulse: "motion-safe:animate-status-pulse",
			ping: "before:absolute before:inset-0 before:rounded-full before:bg-inherit motion-safe:before:animate-status-ping"
		}
	},
	defaultVariants: {
		tone: "neutral",
		motion: "none"
	}
});
/** A state you can read at a glance. Pulse means working; ping means it needs you. */
function StatusDot({ className, tone, motion, ...props }) {
	return /* @__PURE__ */ jsx("span", {
		"data-slot": "status-dot",
		className: cn(statusDotVariants({
			tone,
			motion
		}), className),
		...props
	});
}
export { StatusDot, statusDotVariants };
