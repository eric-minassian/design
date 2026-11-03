import { Button } from "./button.js";
import * as React from "react";
import { AlertDialog as AlertDialog$1 } from "@base-ui/react/alert-dialog";
declare function AlertDialog({ ...props }: AlertDialog$1.Root.Props): React.JSX.Element;
declare function AlertDialogTrigger({ ...props }: AlertDialog$1.Trigger.Props): React.JSX.Element;
declare function AlertDialogPortal({ ...props }: AlertDialog$1.Portal.Props): React.JSX.Element;
declare function AlertDialogClose({ ...props }: AlertDialog$1.Close.Props): React.JSX.Element;
declare function AlertDialogOverlay({ className, ...props }: AlertDialog$1.Backdrop.Props): React.JSX.Element;
declare function AlertDialogContent({ className, size, bottomStickOnMobile, ...props }: AlertDialog$1.Popup.Props & {
  size?: "default" | "sm";
  /** Below `sm`, dock to the bottom edge as a full-width sheet. */
  bottomStickOnMobile?: boolean;
}): React.JSX.Element;
declare function AlertDialogHeader({ className, ...props }: React.ComponentProps<"div">): React.JSX.Element;
declare function AlertDialogFooter({ className, variant, ...props }: React.ComponentProps<"div"> & {
  variant?: "default" | "bare";
}): React.JSX.Element;
declare function AlertDialogMedia({ className, ...props }: React.ComponentProps<"div">): React.JSX.Element;
declare function AlertDialogTitle({ className, ...props }: React.ComponentProps<typeof AlertDialog$1.Title>): React.JSX.Element;
declare function AlertDialogDescription({ className, ...props }: React.ComponentProps<typeof AlertDialog$1.Description>): React.JSX.Element;
/** The confirming button. Closes the dialog after `onClick`; call `event.preventBaseUIHandler()` to keep it open. */
declare function AlertDialogAction({ className, variant, size, ...props }: AlertDialog$1.Close.Props & Pick<React.ComponentProps<typeof Button>, "variant" | "size">): React.JSX.Element;
declare function AlertDialogCancel({ className, variant, size, ...props }: AlertDialog$1.Close.Props & Pick<React.ComponentProps<typeof Button>, "variant" | "size">): React.JSX.Element;
export { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogClose, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogMedia, AlertDialogOverlay, AlertDialogPortal, AlertDialogTitle, AlertDialogTrigger };