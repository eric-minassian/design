"use client";
"use client";
import { cn } from "../lib/utils.js";
import { Button } from "./button.js";
import { CheckIcon, CopyIcon } from "lucide-react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import * as React from "react";
import { cva } from "class-variance-authority";
// src/components/code-block.tsx
const codeBlockVariants = cva("group/code-block relative flex w-full min-w-0 flex-col overflow-hidden rounded-lg border text-sm ring-ring/24 has-[>[data-slot=code-block-content]:focus-visible]:border-ring has-[>[data-slot=code-block-content]:focus-visible]:ring-[3px] has-[>[data-slot=code-block-content]:focus-visible]:ring-inset data-[size=sm]:text-xs", {
	variants: { variant: {
		default: "border-border/70 bg-code text-code-foreground dark:border-border",
		destructive: "border-destructive/32 bg-destructive/4 text-destructive-foreground dark:bg-destructive/8"
	} },
	defaultVariants: { variant: "default" }
});
function CodeBlock({ className, variant = "default", size = "default", ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "code-block",
		"data-variant": variant,
		"data-size": size,
		className: cn(codeBlockVariants({ variant }), className),
		...props
	});
}
function CodeBlockHeader({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "code-block-header",
		className: cn("flex min-h-7.5 min-w-0 shrink-0 items-center gap-2 ps-3 pe-1.5 pt-1.5 text-code-foreground/72 select-none group-data-[size=sm]/code-block:min-h-6.5 group-data-[size=sm]/code-block:ps-2.5 group-data-[size=sm]/code-block:pe-1 group-data-[size=sm]/code-block:pt-1 group-data-[variant=destructive]/code-block:text-destructive-foreground *:has-[>[data-slot=code-block-title]]:min-w-0", className),
		...props
	});
}
function CodeBlockTitle({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "code-block-title",
		className: cn("min-w-0 truncate font-mono text-2xs [&_svg]:pointer-events-none [&_svg]:inline-block [&_svg]:align-middle [&_svg:not([class*='size-'])]:size-3.5 *:[svg]:me-1.5 [&_svg:not([class*='text-'])]:text-muted-foreground", className),
		...props
	});
}
function CodeBlockActions({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "code-block-actions",
		className: cn("ms-auto flex shrink-0 items-center gap-0.5 [[data-slot=code-block]>&]:absolute [[data-slot=code-block]>&]:end-1.5 [[data-slot=code-block]>&]:top-1.5 [[data-slot=code-block]>&]:z-10 [[data-slot=code-block]>&]:m-0 [[data-slot=code-block]>&]:opacity-0 [[data-slot=code-block]>&]:transition-opacity [[data-slot=code-block]>&]:group-focus-within/code-block:opacity-100 [[data-slot=code-block]>&]:group-hover/code-block:opacity-100 group-data-[size=sm]/code-block:[[data-slot=code-block]>&]:end-1 group-data-[size=sm]/code-block:[[data-slot=code-block]>&]:top-1 [[data-slot=code-block]>&]:pointer-coarse:opacity-100 [[data-slot=code-block]>&]:*:[button]:surface-glass", className),
		...props
	});
}
function CodeBlockCopyButton({ value, variant = "ghost-muted", size = "icon-xs", className, onClick, ...props }) {
	const [copied, setCopied] = React.useState(false);
	React.useEffect(() => {
		if (!copied) return;
		const timeout = setTimeout(() => setCopied(false), 2e3);
		return () => clearTimeout(timeout);
	}, [copied]);
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Button, {
		"data-slot": "code-block-copy-button",
		"data-copied": copied || void 0,
		variant,
		size,
		"aria-label": copied ? "Copied" : "Copy",
		className: cn(className),
		onClick: (event) => {
			onClick?.(event);
			navigator.clipboard.writeText(value).then(() => setCopied(true)).catch(() => {});
		},
		...props,
		children: copied ? /* @__PURE__ */ jsx(CheckIcon, {}) : /* @__PURE__ */ jsx(CopyIcon, {})
	}), /* @__PURE__ */ jsx("span", {
		"aria-live": "polite",
		className: "sr-only",
		children: copied ? "Copied" : ""
	})] });
}
function CodeBlockContent({ className, children, style, wrap = false, lineNumbers = false, startLine = 1, ...props }) {
	return /* @__PURE__ */ jsx("pre", {
		"data-slot": "code-block-content",
		"data-wrap": wrap || void 0,
		"data-numbered": lineNumbers || void 0,
		dir: "ltr",
		tabIndex: 0,
		style: {
			counterReset: `line ${startLine - 1}`,
			...style
		},
		className: cn("min-h-0 min-w-0 scroll-fade-x overflow-auto px-3 py-2.5 text-start font-mono leading-snug outline-none group-has-data-[slot=code-block-footer]/code-block:pb-1.5 group-has-data-[slot=code-block-header]/code-block:pt-1.5 group-data-[size=sm]/code-block:px-2.5 group-data-[size=sm]/code-block:py-2 group-data-[size=sm]/code-block:group-has-data-[slot=code-block-header]/code-block:pt-1 data-wrap:scroll-fade-y data-wrap:wrap-break-word data-wrap:whitespace-pre-wrap", className),
		...props,
		children: /* @__PURE__ */ jsx("code", {
			"data-slot": "code-block-code",
			className: "grid min-h-lh min-w-max content-start in-data-numbered:grid-cols-[auto_1fr] in-data-wrap:min-w-0",
			children: lineNumbers && typeof children === "string" ? children.replace(/\n$/, "").split("\n").map((line, index) => /* @__PURE__ */ jsx(CodeBlockLine, { children: line }, index)) : children
		})
	});
}
const codeBlockLineVariants = cva("relative -mx-3 block min-h-lh px-3 group-data-[size=sm]/code-block:-mx-2.5 group-data-[size=sm]/code-block:px-2.5 before:min-w-6 before:text-end before:text-muted-foreground after:absolute after:start-1 after:top-0 after:text-muted-foreground after:select-none in-data-numbered:col-span-2 in-data-numbered:grid in-data-numbered:grid-cols-subgrid in-data-numbered:gap-x-3 in-data-numbered:[counter-increment:line] in-data-numbered:before:content-[counter(line)] in-data-numbered:before:select-none in-data-numbered:supports-[content:counter(line)_/_'']:before:content-[counter(line)_/_'']", {
	variants: { variant: {
		default: "",
		added: "bg-diff-addition/10 after:text-diff-addition after:content-['+']",
		removed: "bg-diff-deletion/10 after:text-diff-deletion after:content-['−']",
		highlighted: "bg-foreground/6"
	} },
	defaultVariants: { variant: "default" }
});
function CodeBlockLine({ className, variant = "default", children, ...props }) {
	const empty = children === void 0 || children === null || children === "" || Array.isArray(children) && children.length === 0;
	return /* @__PURE__ */ jsx("span", {
		"data-slot": "code-block-line",
		"data-variant": variant,
		className: cn(codeBlockLineVariants({ variant }), className),
		...props,
		children: /* @__PURE__ */ jsx("span", {
			"data-slot": "code-block-line-content",
			className: "min-w-0",
			children: empty ? "\n" : children
		})
	});
}
function CodeBlockFooter({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "code-block-footer",
		className: cn("flex min-w-0 shrink-0 items-center gap-2 px-3 pb-2 text-2xs text-code-foreground/72 tabular-nums group-data-[size=sm]/code-block:px-2.5 group-data-[size=sm]/code-block:pb-1.5", className),
		...props
	});
}
export { CodeBlock, CodeBlockActions, CodeBlockContent, CodeBlockCopyButton, CodeBlockFooter, CodeBlockHeader, CodeBlockLine, CodeBlockTitle };
