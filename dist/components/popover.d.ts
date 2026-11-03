import * as React from "react";
import { Popover as Popover$1 } from "@base-ui/react/popover";
declare const popoverWidthClassName: {
  readonly default: "w-72";
  readonly auto: "";
  readonly sm: "w-64";
  readonly md: "w-80";
  readonly lg: "w-96";
};
declare const popoverPaddingClassName: {
  readonly default: "gap-4 p-4";
  readonly compact: "gap-2 px-3 py-2";
  readonly none: "gap-0 p-0";
};
declare function Popover({ ...props }: Popover$1.Root.Props): React.JSX.Element;
declare function PopoverTrigger({ ...props }: Popover$1.Trigger.Props): React.JSX.Element;
declare function PopoverClose({ ...props }: Popover$1.Close.Props): React.JSX.Element;
declare function PopoverContent({ className, align, alignOffset, side, sideOffset, anchor, collisionAvoidance, padding, width, ...props }: Popover$1.Popup.Props & Pick<Popover$1.Positioner.Props, "align" | "alignOffset" | "anchor" | "collisionAvoidance" | "side" | "sideOffset"> & {
  padding?: keyof typeof popoverPaddingClassName;
  width?: keyof typeof popoverWidthClassName;
}): React.JSX.Element;
declare function PopoverHeader({ className, ...props }: React.ComponentProps<"div">): React.JSX.Element;
declare function PopoverTitle({ className, ...props }: Popover$1.Title.Props): React.JSX.Element;
declare function PopoverDescription({ className, ...props }: Popover$1.Description.Props): React.JSX.Element;
export { Popover, PopoverClose, PopoverContent, PopoverDescription, PopoverHeader, PopoverTitle, PopoverTrigger };