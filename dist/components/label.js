"use client";
"use client";
import { cn } from "../lib/utils.js";
import { jsx } from "react/jsx-runtime";
import "react";
// src/components/label.tsx
function Label({ className, ...props }) {
	return /* @__PURE__ */ jsx("label", {
		"data-slot": "label",
		className: cn("inline-flex select-none items-center gap-2 font-medium text-base/4.5 text-foreground has-[:disabled,[data-disabled]]:text-muted-foreground group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-64 peer-disabled:cursor-not-allowed peer-disabled:opacity-64 sm:text-sm/4", className),
		...props
	});
}
export { Label };
