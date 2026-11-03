"use client";
import { cn } from "../lib/utils.js";
import { jsx } from "react/jsx-runtime";
import "react";
import { Avatar as Avatar$1 } from "@base-ui/react/avatar";
// src/components/avatar.tsx
function Avatar({ className, size = "default", ...props }) {
	return /* @__PURE__ */ jsx(Avatar$1.Root, {
		"data-slot": "avatar",
		"data-size": size,
		className: cn("group/avatar relative flex size-8 shrink-0 select-none rounded-full bg-card after:absolute after:inset-0 after:rounded-full after:border after:border-border after:mix-blend-darken data-[size=lg]:size-10 data-[size=sm]:size-6 dark:after:mix-blend-lighten", className),
		...props
	});
}
function AvatarImage({ className, ...props }) {
	return /* @__PURE__ */ jsx(Avatar$1.Image, {
		"data-slot": "avatar-image",
		className: cn("aspect-square size-full rounded-full object-cover", className),
		...props
	});
}
function AvatarFallback({ className, ...props }) {
	return /* @__PURE__ */ jsx(Avatar$1.Fallback, {
		"data-slot": "avatar-fallback",
		className: cn("flex size-full items-center justify-center rounded-full bg-accent font-medium text-muted-foreground text-xs group-data-[size=lg]/avatar:text-sm group-data-[size=sm]/avatar:text-2xs", className),
		...props
	});
}
function AvatarBadge({ className, ...props }) {
	return /* @__PURE__ */ jsx("span", {
		"data-slot": "avatar-badge",
		className: cn("absolute right-0 bottom-0 z-10 inline-flex select-none items-center justify-center rounded-full bg-primary text-primary-foreground ring-2 ring-card", "group-data-[size=sm]/avatar:size-2 group-data-[size=sm]/avatar:[&>svg]:hidden", "group-data-[size=default]/avatar:size-2.5 group-data-[size=default]/avatar:[&>svg]:size-2", "group-data-[size=lg]/avatar:size-3 group-data-[size=lg]/avatar:[&>svg]:size-2", className),
		...props
	});
}
function AvatarGroup({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "avatar-group",
		className: cn("group/avatar-group flex -space-x-1.5 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-card", className),
		...props
	});
}
function AvatarGroupCount({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "avatar-group-count",
		className: cn("relative flex size-8 shrink-0 items-center justify-center rounded-full border bg-card bg-linear-to-b from-accent to-accent font-medium text-muted-foreground text-xs ring-2 ring-card group-has-data-[size=lg]/avatar-group:size-10 group-has-data-[size=sm]/avatar-group:size-6 group-has-data-[size=sm]/avatar-group:text-2xs [&>svg]:size-4 group-has-data-[size=lg]/avatar-group:[&>svg]:size-5 group-has-data-[size=sm]/avatar-group:[&>svg]:size-3", className),
		...props
	});
}
export { Avatar, AvatarBadge, AvatarFallback, AvatarGroup, AvatarGroupCount, AvatarImage };
