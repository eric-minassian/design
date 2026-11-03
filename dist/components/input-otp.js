"use client";
import { cn } from "../lib/utils.js";
import { MinusIcon } from "lucide-react";
import { jsx, jsxs } from "react/jsx-runtime";
import * as React from "react";
import { OTPInput, OTPInputContext } from "input-otp";
// src/components/input-otp.tsx
function InputOTP({ className, containerClassName, ...props }) {
	return /* @__PURE__ */ jsx(OTPInput, {
		"data-slot": "input-otp",
		containerClassName: cn("flex items-center gap-2 has-disabled:opacity-64", containerClassName),
		spellCheck: false,
		className: cn("disabled:cursor-not-allowed", className),
		...props
	});
}
function InputOTPGroup({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "input-otp-group",
		className: cn("flex items-center rounded-lg shadow-xs/5", className),
		...props
	});
}
function InputOTPSlot({ index, className, ...props }) {
	const { char, hasFakeCaret, isActive } = React.useContext(OTPInputContext)?.slots[index] ?? {};
	return /* @__PURE__ */ jsxs("div", {
		"data-slot": "input-otp-slot",
		"data-active": isActive,
		className: cn("relative flex size-9 items-center justify-center border-y border-e border-input bg-background not-dark:bg-clip-padding text-base tabular-nums text-foreground outline-none ring-ring/24 transition-shadow first:rounded-s-lg first:border-s last:rounded-e-lg aria-invalid:border-destructive/36 data-[active=true]:z-10 data-[active=true]:border-ring data-[active=true]:ring-[3px] data-[active=true]:ring-inset not-first:data-[active=true]:shadow-[-1px_0_0_0_var(--ring)] data-[active=true]:aria-invalid:border-destructive/64 data-[active=true]:aria-invalid:ring-destructive/16 not-first:data-[active=true]:aria-invalid:shadow-[-1px_0_0_0_color-mix(in_srgb,var(--destructive)_64%,transparent)] sm:size-8 sm:text-sm dark:bg-input/32 dark:data-[active=true]:aria-invalid:ring-destructive/24", className),
		...props,
		children: [char, hasFakeCaret && /* @__PURE__ */ jsx("div", {
			className: "pointer-events-none absolute inset-0 flex items-center justify-center",
			children: /* @__PURE__ */ jsx("div", { className: "h-4 w-px animate-caret-blink bg-foreground duration-1000" })
		})]
	});
}
function InputOTPSeparator({ ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "input-otp-separator",
		className: "flex items-center text-muted-foreground opacity-80 [&_svg:not([class*='size-'])]:size-3.5",
		role: "separator",
		...props,
		children: /* @__PURE__ */ jsx(MinusIcon, {})
	});
}
export { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot };
