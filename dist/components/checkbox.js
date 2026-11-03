"use client";
"use client";
import { cn } from "../lib/utils.js";
import { jsx } from "react/jsx-runtime";
import { Checkbox as Checkbox$1 } from "@base-ui/react/checkbox";
// src/components/checkbox.tsx
const rootClassName = "peer relative inline-flex align-middle size-4.5 shrink-0 cursor-pointer items-center justify-center rounded-[.25rem] border border-input bg-background not-dark:bg-clip-padding shadow-xs/5 outline-none transition-shadow before:pointer-events-none before:absolute before:inset-0 before:rounded-[3px] not-data-disabled:not-data-checked:not-aria-invalid:before:shadow-[0_1px_--theme(--color-black/4%)] pointer-coarse:after:absolute pointer-coarse:after:-inset-3.5 focus-visible:outline-2 focus-visible:outline-solid focus-visible:-outline-offset-2 focus-visible:outline-ring aria-invalid:border-destructive/36 focus-visible:aria-invalid:border-destructive/64 focus-visible:aria-invalid:outline-destructive/48 data-disabled:cursor-not-allowed data-disabled:opacity-64 group-has-disabled/field:opacity-64 sm:size-4 dark:not-data-checked:bg-input/32 dark:focus-visible:aria-invalid:outline-destructive/24 dark:not-data-disabled:not-data-checked:not-aria-invalid:before:shadow-[0_-1px_--theme(--color-white/6%)] [[data-disabled],[data-checked],[aria-invalid]]:shadow-none";
const indicatorClassName = "-inset-px absolute flex items-center justify-center rounded-[.25rem] text-primary-foreground data-unchecked:hidden data-checked:bg-primary data-indeterminate:text-foreground in-[[data-slot=checkbox]:focus-visible]:inset-shadow-[0_0_0_3px_var(--background)] in-[[data-slot=checkbox]:focus-visible]:outline-2 in-[[data-slot=checkbox]:focus-visible]:outline-solid in-[[data-slot=checkbox]:focus-visible]:-outline-offset-2 in-[[data-slot=checkbox]:focus-visible]:outline-inherit";
function CheckGlyph() {
	return /* @__PURE__ */ jsx("svg", {
		className: "size-3.5 text-current sm:size-3",
		fill: "none",
		height: "24",
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		strokeWidth: "3",
		viewBox: "0 0 24 24",
		width: "24",
		xmlns: "http://www.w3.org/2000/svg",
		children: /* @__PURE__ */ jsx("path", { d: "M5.252 12.7 10.2 18.63 18.748 5.37" })
	});
}
function IndeterminateGlyph() {
	return /* @__PURE__ */ jsx("svg", {
		className: "size-3.5 text-current sm:size-3",
		fill: "none",
		height: "24",
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		strokeWidth: "3",
		viewBox: "0 0 24 24",
		width: "24",
		xmlns: "http://www.w3.org/2000/svg",
		children: /* @__PURE__ */ jsx("path", { d: "M5.252 12h13.496" })
	});
}
function Checkbox({ className, ...props }) {
	return /* @__PURE__ */ jsx(Checkbox$1.Root, {
		"data-slot": "checkbox",
		className: cn(rootClassName, className),
		...props,
		children: /* @__PURE__ */ jsx(Checkbox$1.Indicator, {
			"data-slot": "checkbox-indicator",
			className: indicatorClassName,
			render: (indicatorProps, state) => /* @__PURE__ */ jsx("span", {
				...indicatorProps,
				children: state.indeterminate ? /* @__PURE__ */ jsx(IndeterminateGlyph, {}) : /* @__PURE__ */ jsx(CheckGlyph, {})
			})
		})
	});
}
/** Checkbox's look without its hidden input, for a row that is itself the button. */
function CheckboxMark({ checked, className }) {
	const state = checked ? { "data-checked": "" } : { "data-unchecked": "" };
	return /* @__PURE__ */ jsx("span", {
		"aria-hidden": true,
		"data-slot": "checkbox",
		className: cn(rootClassName, className),
		...state,
		children: /* @__PURE__ */ jsx("span", {
			"data-slot": "checkbox-indicator",
			className: indicatorClassName,
			...state,
			children: /* @__PURE__ */ jsx(CheckGlyph, {})
		})
	});
}
export { Checkbox, CheckboxMark };
