import { InputProps } from "./input.js";
import * as React from "react";
import { Menu } from "@base-ui/react/menu";
declare function DropdownMenu({ ...props }: Menu.Root.Props): React.JSX.Element;
declare function DropdownMenuPortal({ ...props }: Menu.Portal.Props): React.JSX.Element;
declare function DropdownMenuTrigger({ ...props }: Menu.Trigger.Props): React.JSX.Element;
declare function DropdownMenuContent({ align, alignOffset, side, sideOffset, anchor, collisionAvoidance, width, className, children, ...props }: Menu.Popup.Props & Pick<Menu.Positioner.Props, "align" | "alignOffset" | "anchor" | "collisionAvoidance" | "side" | "sideOffset"> & {
  /** `content` hugs the rows instead of holding a minimum width. */
  width?: "default" | "content";
}): React.JSX.Element;
/** A menu's filter field: a hairline row that sits flush at the top of the popup. */
declare function DropdownMenuSearchInput({ busy, onKeyDown, ...props }: Omit<InputProps, "className" | "size" | "unstyled"> & {
  busy?: boolean;
}): React.JSX.Element;
declare function DropdownMenuGroup({ ...props }: Menu.Group.Props): React.JSX.Element;
declare function DropdownMenuLabel({ className, inset, ...props }: Menu.GroupLabel.Props & {
  inset?: boolean;
}): React.JSX.Element;
declare function DropdownMenuItem({ className, inset, density, variant, ...props }: Menu.Item.Props & {
  inset?: boolean;
  density?: "default" | "touch";
  variant?: "default" | "destructive" | "ghost";
}): React.JSX.Element;
declare function DropdownMenuSub({ ...props }: Menu.SubmenuRoot.Props): React.JSX.Element;
declare function DropdownMenuSubTrigger({ className, inset, density, children, ...props }: Menu.SubmenuTrigger.Props & {
  inset?: boolean;
  density?: "default" | "touch";
}): React.JSX.Element;
declare function DropdownMenuSubContent({ align, alignOffset, side, sideOffset, ...props }: React.ComponentProps<typeof DropdownMenuContent>): React.JSX.Element;
declare function DropdownMenuCheckboxItem({ className, children, checked, inset, variant, ...props }: Menu.CheckboxItem.Props & {
  inset?: boolean;
  variant?: "default" | "icon" | "switch";
}): React.JSX.Element;
declare function DropdownMenuRadioGroup({ ...props }: Menu.RadioGroup.Props): React.JSX.Element;
declare function DropdownMenuRadioItem({ className, children, inset, hideIndicator, ...props }: Menu.RadioItem.Props & {
  inset?: boolean;
  /** Leave only the row fill to mark the selection. */
  hideIndicator?: boolean;
}): React.JSX.Element;
declare function DropdownMenuRadioItemIndicator({ className, children, ...props }: Menu.RadioItemIndicator.Props): React.JSX.Element;
declare function DropdownMenuSeparator({ className, ...props }: Menu.Separator.Props): React.JSX.Element;
declare function DropdownMenuShortcut({ className, ...props }: React.ComponentProps<"kbd">): React.JSX.Element;
export { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuRadioItemIndicator, DropdownMenuSearchInput, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger };