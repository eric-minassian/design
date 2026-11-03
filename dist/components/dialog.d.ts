import * as React from "react";
import { Dialog as Dialog$1 } from "@base-ui/react/dialog";
declare const DIALOG_BACKDROP_CLASS = "dialog-backdrop fixed inset-0 z-50 transition-all duration-200 data-ending-style:opacity-0 data-starting-style:opacity-0";
declare const DIALOG_POPUP_CLASS = "dialog-glass -translate-y-[calc(1.25rem*var(--nested-dialogs))] relative flex min-h-0 w-full min-w-0 scale-[calc(1-0.1*var(--nested-dialogs))] flex-col rounded-2xl border opacity-[calc(1-0.1*var(--nested-dialogs))] outline-none transition-[scale,opacity,translate] duration-200 ease-in-out will-change-transform data-nested:data-ending-style:translate-y-8 data-nested:data-starting-style:translate-y-8 data-nested-dialog-open:origin-top data-ending-style:scale-98 data-starting-style:scale-98 data-ending-style:opacity-0 data-starting-style:opacity-0";
declare const DIALOG_VIEWPORT_CLASS = "fixed inset-0 z-50 grid grid-rows-[1fr_auto_1fr] justify-items-center p-4";
declare const DIALOG_MOBILE_VIEWPORT_CLASS = "max-sm:grid-rows-[1fr_auto] max-sm:p-0 max-sm:pt-12";
declare const DIALOG_MOBILE_SHEET_CLASS = "max-sm:max-w-none max-sm:rounded-none max-sm:border-x-0 max-sm:border-t max-sm:border-b-0 max-sm:opacity-[calc(1-min(var(--nested-dialogs),1))] max-sm:data-ending-style:translate-y-4 max-sm:data-starting-style:translate-y-4";
declare function Dialog({ ...props }: Dialog$1.Root.Props): React.JSX.Element;
declare function DialogTrigger({ ...props }: Dialog$1.Trigger.Props): React.JSX.Element;
declare function DialogPortal({ ...props }: Dialog$1.Portal.Props): React.JSX.Element;
declare function DialogClose({ ...props }: Dialog$1.Close.Props): React.JSX.Element;
declare function DialogOverlay({ className, ...props }: Dialog$1.Backdrop.Props): React.JSX.Element;
declare function DialogContent({ className, children, showCloseButton, bottomStickOnMobile, ...props }: Dialog$1.Popup.Props & {
  showCloseButton?: boolean;
  /** Below `sm`, dock to the bottom edge as a full-width sheet. */
  bottomStickOnMobile?: boolean;
}): React.JSX.Element;
declare function DialogHeader({ className, ...props }: React.ComponentProps<"div">): React.JSX.Element;
/** The scrolling body between header and footer. */
declare function DialogPanel({ className, ...props }: React.ComponentProps<"div">): React.JSX.Element;
declare function DialogFooter({ className, showCloseButton, variant, children, ...props }: React.ComponentProps<"div"> & {
  showCloseButton?: boolean;
  variant?: "default" | "bare";
}): React.JSX.Element;
declare function DialogTitle({ className, ...props }: Dialog$1.Title.Props): React.JSX.Element;
declare function DialogDescription({ className, ...props }: Dialog$1.Description.Props): React.JSX.Element;
export { DIALOG_BACKDROP_CLASS, DIALOG_MOBILE_SHEET_CLASS, DIALOG_MOBILE_VIEWPORT_CLASS, DIALOG_POPUP_CLASS, DIALOG_VIEWPORT_CLASS, Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogPanel, DialogPortal, DialogTitle, DialogTrigger };