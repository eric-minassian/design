import * as React from "react";
import { VariantProps } from "class-variance-authority";
import { useRender } from "@base-ui/react/use-render";
import { Select as Select$1 } from "@base-ui/react/select";
declare const Select: typeof Select$1.Root;
declare const selectTriggerVariants: (props?: ({
  variant?: "default" | "ghost" | null | undefined;
  size?: "xs" | "sm" | "lg" | "default" | "compact" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
declare function SelectGroup({ className, ...props }: Select$1.Group.Props): React.JSX.Element;
declare function SelectValue({ className, ...props }: Select$1.Value.Props): React.JSX.Element;
declare function SelectTrigger({ className, size, variant, children, icon, ...props }: Select$1.Trigger.Props & VariantProps<typeof selectTriggerVariants> & {
  icon?: React.ReactNode;
}): React.JSX.Element;
/** The trigger's look on a plain button, for controls that open their own popup. */
declare function SelectButton({ className, size, children, render, ...props }: useRender.ComponentProps<"button"> & Pick<VariantProps<typeof selectTriggerVariants>, "size">): React.ReactElement<unknown, string | React.JSXElementConstructor<any>>;
declare function SelectContent({ className, children, side, sideOffset, align, alignOffset, alignItemWithTrigger, matchTriggerWidth, anchor, ...props }: Select$1.Popup.Props & Pick<Select$1.Positioner.Props, "align" | "alignOffset" | "side" | "sideOffset" | "alignItemWithTrigger" | "anchor"> & {
  matchTriggerWidth?: boolean;
}): React.JSX.Element;
declare function SelectLabel({ className, ...props }: Select$1.GroupLabel.Props): React.JSX.Element;
declare function SelectItem({ className, children, ...props }: Select$1.Item.Props): React.JSX.Element;
declare function SelectSeparator({ className, ...props }: Select$1.Separator.Props): React.JSX.Element;
declare function SelectScrollUpButton({ className, ...props }: React.ComponentProps<typeof Select$1.ScrollUpArrow>): React.JSX.Element;
declare function SelectScrollDownButton({ className, ...props }: React.ComponentProps<typeof Select$1.ScrollDownArrow>): React.JSX.Element;
export { Select, SelectButton, SelectContent, SelectContent as SelectPopup, SelectGroup, SelectLabel as SelectGroupLabel, SelectLabel, SelectItem, SelectScrollDownButton, SelectScrollUpButton, SelectSeparator, SelectTrigger, SelectValue, selectTriggerVariants };