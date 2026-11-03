"use client";
"use client";
import { cn } from "../lib/utils.js";
import { jsx } from "react/jsx-runtime";
import { Switch as Switch$1 } from "@base-ui/react/switch";
// src/components/switch.tsx
function Switch({ className, size = "default", ...props }) {
	return /* @__PURE__ */ jsx(Switch$1.Root, {
		"data-slot": "switch",
		"data-size": size,
		className: cn("inline-flex align-middle h-[calc(var(--thumb-size)+2px)] w-[calc(var(--thumb-size)*2-2px)] shrink-0 cursor-pointer items-center rounded-full p-[2px] outline-none transition-[background-color,box-shadow] duration-200 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background data-checked:bg-primary data-unchecked:bg-input data-disabled:cursor-not-allowed data-disabled:opacity-64", size === "sm" ? "[--thumb-size:--spacing(4)] sm:[--thumb-size:--spacing(3.5)]" : "[--thumb-size:--spacing(5)] sm:[--thumb-size:--spacing(4)]", className),
		...props,
		children: /* @__PURE__ */ jsx(Switch$1.Thumb, {
			"data-slot": "switch-thumb",
			className: "pointer-events-none block size-[calc(var(--thumb-size)-2px)] shrink-0 origin-left in-[[role=switch]:active,[data-slot=label]:active,[data-slot=field-label]:active]:not-data-disabled:scale-x-110 in-[[role=switch]:active,[data-slot=label]:active,[data-slot=field-label]:active]:rounded-[var(--thumb-size)/calc(var(--thumb-size)*1.1)] rounded-(--thumb-size) bg-background shadow-sm/5 dark:data-unchecked:bg-muted-foreground [transition:translate_.15s,border-radius_.15s,scale_.1s_.1s,transform-origin_.15s] data-checked:origin-right data-checked:translate-x-[calc(var(--thumb-size)-4px)]"
		})
	});
}
export { Switch };
