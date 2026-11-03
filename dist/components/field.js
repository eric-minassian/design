"use client";
import { Label } from "./label.js";
import { Separator } from "./separator.js";
import { cn } from "../lib/utils.js";
import { jsx } from "react/jsx-runtime";
import { useMemo } from "react";
import { cva } from "class-variance-authority";
// src/components/field.tsx
function FieldSet({ className, ...props }) {
	return /* @__PURE__ */ jsx("fieldset", {
		"data-slot": "field-set",
		className: cn("flex min-w-0 flex-col gap-4 has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3", className),
		...props
	});
}
function FieldLegend({ className, variant = "legend", ...props }) {
	return /* @__PURE__ */ jsx("legend", {
		"data-slot": "field-legend",
		"data-variant": variant,
		className: cn("mb-3 font-medium text-base/4.5 text-foreground sm:text-sm/4", className),
		...props
	});
}
function FieldGroup({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "field-group",
		className: cn("group/field-group @container/field-group flex w-full flex-col gap-4 data-[slot=checkbox-group]:gap-3 *:data-[slot=field-group]:gap-4", className),
		...props
	});
}
const fieldVariants = cva("group/field flex w-full gap-2", {
	variants: { orientation: {
		vertical: "flex-col *:w-full [&>.sr-only]:w-auto",
		horizontal: "flex-row items-center has-[>[data-slot=field-content]]:items-start *:data-[slot=field-label]:flex-auto has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
		responsive: "flex-col *:w-full @md/field-group:flex-row @md/field-group:items-center @md/field-group:*:w-auto @md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:*:data-[slot=field-label]:flex-auto [&>.sr-only]:w-auto @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px"
	} },
	defaultVariants: { orientation: "vertical" }
});
function Field({ className, orientation = "vertical", ...props }) {
	return /* @__PURE__ */ jsx("div", {
		role: "group",
		"data-slot": "field",
		"data-orientation": orientation,
		className: cn(fieldVariants({ orientation }), className),
		...props
	});
}
function FieldContent({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "field-content",
		className: cn("group/field-content flex flex-1 flex-col gap-1", className),
		...props
	});
}
function FieldLabel({ className, ...props }) {
	return /* @__PURE__ */ jsx(Label, {
		"data-slot": "field-label",
		className: cn("group/field-label peer/field-label flex w-fit gap-2 group-data-[disabled=true]/field:opacity-64 has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col has-[>[data-slot=field]]:rounded-lg has-[>[data-slot=field]]:border has-[>[data-slot=field]]:border-input has-[>[data-slot=field]]:transition-colors has-[>[data-slot=field]]:not-has-[:disabled,[data-disabled]]:cursor-pointer has-[>[data-slot=field]]:not-has-[:disabled,[data-disabled]]:hover:bg-accent has-[>[data-slot=field]]:has-[:focus-visible]:border-ring has-[>[data-slot=field]]:has-[:focus-visible]:ring-[3px] has-[>[data-slot=field]]:has-[:focus-visible]:ring-inset has-[>[data-slot=field]]:has-[:focus-visible]:ring-ring/24 has-[>[data-slot=field]]:has-data-checked:border-primary/48 has-[>[data-slot=field]]:has-data-checked:bg-primary/4 *:data-[slot=field]:p-3 dark:has-[>[data-slot=field]]:has-data-checked:bg-primary/8", className),
		...props
	});
}
function FieldTitle({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "field-label",
		className: cn("flex w-fit items-center gap-2 font-medium text-base/4.5 text-foreground group-data-[disabled=true]/field:opacity-64 sm:text-sm/4", className),
		...props
	});
}
function FieldDescription({ className, ...props }) {
	return /* @__PURE__ */ jsx("p", {
		"data-slot": "field-description",
		className: cn("text-left font-normal text-muted-foreground text-xs leading-normal group-has-data-horizontal/field:text-balance [[data-variant=legend]+&]:-mt-1.5", "last:mt-0 nth-last-2:-mt-1", "[&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-foreground", className),
		...props
	});
}
function FieldSeparator({ children, className, ...props }) {
	if (!children) return /* @__PURE__ */ jsx("div", {
		"data-slot": "field-separator",
		"data-content": false,
		className: cn("relative -my-2 h-5", className),
		...props,
		children: /* @__PURE__ */ jsx(Separator, { className: "absolute inset-0 top-1/2" })
	});
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "field-separator",
		"data-content": true,
		className: cn("flex items-center gap-3 text-muted-foreground text-xs before:h-px before:flex-1 before:bg-border after:h-px after:flex-1 after:bg-border", className),
		...props,
		children: /* @__PURE__ */ jsx("span", {
			"data-slot": "field-separator-content",
			children
		})
	});
}
function FieldError({ className, children, errors, ...props }) {
	const content = useMemo(() => {
		if (children) return children;
		if (!errors?.length) return null;
		const uniqueErrors = [...new Map(errors.map((error) => [error?.message, error])).values()];
		if (uniqueErrors?.length == 1) return uniqueErrors[0]?.message;
		return /* @__PURE__ */ jsx("ul", {
			className: "ml-4 flex list-disc flex-col gap-1",
			children: uniqueErrors.map((error, index) => error?.message && /* @__PURE__ */ jsx("li", { children: error.message }, index))
		});
	}, [children, errors]);
	if (!content) return null;
	return /* @__PURE__ */ jsx("div", {
		role: "alert",
		"data-slot": "field-error",
		className: cn("font-normal text-destructive-foreground text-xs leading-normal", className),
		...props,
		children: content
	});
}
export { Field, FieldContent, FieldDescription, FieldError, FieldGroup, FieldLabel, FieldLegend, FieldSeparator, FieldSet, FieldTitle };
