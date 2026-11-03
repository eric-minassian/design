import * as React from "react";
import { Dialog } from "@base-ui/react/dialog";
declare function Sheet({ ...props }: Dialog.Root.Props): React.JSX.Element;
declare function SheetTrigger({ ...props }: Dialog.Trigger.Props): React.JSX.Element;
declare function SheetClose({ ...props }: Dialog.Close.Props): React.JSX.Element;
declare function SheetPortal({ ...props }: Dialog.Portal.Props): React.JSX.Element;
declare function SheetOverlay({ className, ...props }: Dialog.Backdrop.Props): React.JSX.Element;
declare function SheetContent({ className, children, side, variant, showCloseButton, ...props }: Dialog.Popup.Props & {
  side?: "top" | "right" | "bottom" | "left";
  /** `inset` floats the sheet off the window edges on desktop. */
  variant?: "default" | "inset";
  showCloseButton?: boolean;
}): React.JSX.Element;
declare function SheetHeader({ className, ...props }: React.ComponentProps<"div">): React.JSX.Element;
/** The scrolling body between header and footer. */
declare function SheetPanel({ className, ...props }: React.ComponentProps<"div">): React.JSX.Element;
declare function SheetFooter({ className, ...props }: React.ComponentProps<"div">): React.JSX.Element;
declare function SheetTitle({ className, ...props }: Dialog.Title.Props): React.JSX.Element;
declare function SheetDescription({ className, ...props }: Dialog.Description.Props): React.JSX.Element;
export { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetOverlay, SheetPanel, SheetPortal, SheetTitle, SheetTrigger };