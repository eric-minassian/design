"use client";
"use client";
import { cn } from "../lib/utils.js";
import { jsx } from "react/jsx-runtime";
import * as ResizablePrimitive from "react-resizable-panels";
// src/components/resizable.tsx
function ResizablePanelGroup({ className, ...props }) {
	return /* @__PURE__ */ jsx(ResizablePrimitive.Group, {
		"data-slot": "resizable-panel-group",
		className: cn("flex h-full w-full aria-[orientation=vertical]:flex-col", className),
		...props
	});
}
function ResizablePanel({ ...props }) {
	return /* @__PURE__ */ jsx(ResizablePrimitive.Panel, {
		"data-slot": "resizable-panel",
		...props
	});
}
function ResizableHandle({ withHandle, className, ...props }) {
	return /* @__PURE__ */ jsx(ResizablePrimitive.Separator, {
		"data-slot": "resizable-handle",
		className: cn("group/resizable-handle relative flex w-px items-center justify-center bg-border outline-none transition-colors duration-100 after:absolute after:inset-y-0 after:left-1/2 after:w-2 after:-translate-x-1/2 hover:bg-primary focus-visible:bg-primary data-[separator=active]:bg-primary data-[separator=hover]:bg-primary aria-[orientation=horizontal]:h-px aria-[orientation=horizontal]:w-full aria-[orientation=horizontal]:after:left-0 aria-[orientation=horizontal]:after:h-2 aria-[orientation=horizontal]:after:w-full aria-[orientation=horizontal]:after:translate-x-0 aria-[orientation=horizontal]:after:-translate-y-1/2 [&[aria-orientation=horizontal]>div]:rotate-90", className),
		...props,
		children: withHandle && /* @__PURE__ */ jsx("div", { className: "z-10 flex h-6 w-1 shrink-0 rounded-full bg-input transition-colors duration-100 group-hover/resizable-handle:bg-primary group-focus-visible/resizable-handle:bg-primary group-data-[separator=active]/resizable-handle:bg-primary group-data-[separator=hover]/resizable-handle:bg-primary" })
	});
}
export { ResizableHandle, ResizablePanel, ResizablePanelGroup };
