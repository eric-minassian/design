import { Dialog } from "./dialog.js";
import * as React from "react";
import { Command as Command$1 } from "cmdk";
declare function Command({ className, ...props }: React.ComponentProps<typeof Command$1>): React.JSX.Element;
declare function CommandDialog({ title, description, children, className, showCloseButton, ...props }: Omit<React.ComponentProps<typeof Dialog>, "children"> & {
  title?: string;
  description?: string;
  className?: string;
  showCloseButton?: boolean;
  children: React.ReactNode;
}): React.JSX.Element;
declare function CommandInput({ className, ...props }: React.ComponentProps<typeof Command$1.Input>): React.JSX.Element;
declare function CommandList({ className, ...props }: React.ComponentProps<typeof Command$1.List>): React.JSX.Element;
declare function CommandEmpty({ className, ...props }: React.ComponentProps<typeof Command$1.Empty>): React.JSX.Element;
declare function CommandGroup({ className, ...props }: React.ComponentProps<typeof Command$1.Group>): React.JSX.Element;
declare function CommandSeparator({ className, ...props }: React.ComponentProps<typeof Command$1.Separator>): React.JSX.Element;
declare function CommandItem({ className, children, ...props }: React.ComponentProps<typeof Command$1.Item>): React.JSX.Element;
declare function CommandShortcut({ className, ...props }: React.ComponentProps<"kbd">): React.JSX.Element;
/** The key hints along the bottom of a palette. */
declare function CommandFooter({ className, ...props }: React.ComponentProps<"div">): React.JSX.Element;
export { Command, CommandDialog, CommandEmpty, CommandFooter, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut };