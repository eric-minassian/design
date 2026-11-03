"use client";
"use client";
import { buttonVariants } from "./button.js";
import { cn } from "../lib/utils.js";
import { ChevronLeftIcon, ChevronRightIcon, ChevronsUpDownIcon } from "lucide-react";
import { jsx } from "react/jsx-runtime";
import * as React from "react";
import { DayPicker } from "react-day-picker";
// src/components/calendar.tsx
const defaultComponents = {
	Root: ({ className, rootRef, ...props }) => /* @__PURE__ */ jsx("div", {
		"data-slot": "calendar",
		ref: rootRef,
		className: cn(className),
		...props
	}),
	Chevron: ({ className, orientation, ...props }) => {
		if (orientation === "left") return /* @__PURE__ */ jsx(ChevronLeftIcon, {
			"aria-hidden": "true",
			className: cn("rtl:rotate-180", className),
			...props
		});
		if (orientation === "right") return /* @__PURE__ */ jsx(ChevronRightIcon, {
			"aria-hidden": "true",
			className: cn("rtl:rotate-180", className),
			...props
		});
		return /* @__PURE__ */ jsx(ChevronsUpDownIcon, {
			"aria-hidden": "true",
			className,
			...props
		});
	},
	DayButton: (props) => /* @__PURE__ */ jsx(CalendarDayButton, { ...props })
};
function Calendar({ className, classNames, showOutsideDays = true, captionLayout = "label", buttonVariant = "ghost", formatters, components, ...props }) {
	const navButton = cn(buttonVariants({
		variant: buttonVariant,
		size: "icon"
	}), "size-(--cell-size) rounded-md before:rounded-[calc(var(--radius-md)-1px)] sm:size-(--cell-size)");
	return /* @__PURE__ */ jsx(DayPicker, {
		showOutsideDays,
		captionLayout,
		className: cn("group/calendar w-fit p-2 [--cell-size:--spacing(9)] sm:[--cell-size:--spacing(8)]", className),
		formatters: {
			formatMonthDropdown: (date) => date.toLocaleString(props.locale?.code, { month: "short" }),
			...formatters
		},
		classNames: {
			months: "relative flex flex-col gap-4 sm:flex-row",
			month: "w-full",
			nav: "absolute top-0 z-1 flex w-full justify-between",
			button_previous: navButton,
			button_next: navButton,
			month_caption: "relative z-2 mx-(--cell-size) mb-1 flex h-(--cell-size) items-center justify-center px-1",
			caption_label: "flex h-full items-center gap-1.5 font-medium text-base sm:text-sm",
			dropdowns: "flex h-(--cell-size) w-full items-center justify-center gap-1 text-base sm:text-sm *:[span]:font-medium",
			dropdown_root: "relative h-7 cursor-pointer rounded-md px-1.5 transition-colors hover:bg-accent has-focus:ring-[3px] has-focus:ring-inset has-focus:ring-ring/24 [&_svg:not([class*='opacity-'])]:opacity-80 [&_svg:not([class*='size-'])]:size-3.5 [&_svg:not([class*='text-'])]:text-muted-foreground [&_svg]:pointer-events-none",
			dropdown: "absolute inset-0 cursor-pointer bg-popover opacity-0",
			weekday: "size-(--cell-size) p-0 font-medium text-muted-foreground/72 text-xs",
			week_number_header: "size-(--cell-size) p-0",
			week_number: "size-(--cell-size) p-0 font-medium text-muted-foreground/72 text-xs",
			day: "size-(--cell-size) py-px text-sm",
			range_start: "range-start",
			range_middle: "range-middle",
			range_end: "range-end",
			today: "*:after:pointer-events-none *:after:absolute *:after:start-1/2 *:after:bottom-1 *:after:z-1 *:after:size-[3px] *:after:-translate-x-1/2 *:after:rounded-full *:after:bg-primary [&[data-selected]:not(.range-middle)>*]:after:bg-primary-foreground [&[data-disabled]>*]:after:bg-foreground/30",
			outside: "text-muted-foreground",
			hidden: "invisible",
			...classNames
		},
		components: {
			...defaultComponents,
			...components
		},
		...props
	});
}
function CalendarDayButton({ className, day, modifiers, locale, ...props }) {
	const ref = React.useRef(null);
	React.useEffect(() => {
		if (modifiers.focused) ref.current?.focus();
	}, [modifiers.focused]);
	return /* @__PURE__ */ jsx("button", {
		ref,
		"data-day": day.date.toLocaleDateString(locale?.code),
		className: cn("relative flex size-(--cell-size) cursor-pointer items-center justify-center rounded-md text-foreground tabular-nums outline-none transition-[background-color,border-radius,box-shadow] not-in-data-selected:hover:bg-accent focus-visible:z-1 focus-visible:ring-[3px] focus-visible:ring-inset focus-visible:ring-ring/48 disabled:pointer-events-none in-data-disabled:text-muted-foreground/72 in-data-disabled:line-through in-data-outside:text-muted-foreground/72 in-data-selected:bg-primary in-data-selected:text-primary-foreground in-data-selected:in-data-outside:text-primary-foreground in-[.range-end:not(.range-start)]:rounded-s-none in-[.range-middle]:rounded-none in-[.range-middle]:in-data-selected:bg-accent in-[.range-middle]:in-data-selected:text-foreground in-[.range-start:not(.range-end)]:rounded-e-none", className),
		...props
	});
}
export { Calendar, CalendarDayButton };
