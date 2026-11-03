import { Button } from "./button.js";
import * as React from "react";
import { DayButton, DayPicker, Locale } from "react-day-picker";
declare function Calendar({ className, classNames, showOutsideDays, captionLayout, buttonVariant, formatters, components, ...props }: React.ComponentProps<typeof DayPicker> & {
  buttonVariant?: React.ComponentProps<typeof Button>["variant"];
}): React.JSX.Element;
declare function CalendarDayButton({ className, day, modifiers, locale, ...props }: React.ComponentProps<typeof DayButton> & {
  locale?: Partial<Locale>;
}): React.JSX.Element;
export { Calendar, CalendarDayButton };