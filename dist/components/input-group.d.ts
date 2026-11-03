import { Button } from "./button.js";
import { InputProps } from "./input.js";
import * as React from "react";
import { VariantProps } from "class-variance-authority";
declare const inputGroupVariants: (props?: ({
  variant?: "popover" | "default" | "ghost" | null | undefined;
  size?: "lg" | "default" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
declare function InputGroup({ className, variant, size, ...props }: React.ComponentProps<"div"> & VariantProps<typeof inputGroupVariants>): React.JSX.Element;
declare const inputGroupAddonVariants: (props?: ({
  align?: "inline-start" | "inline-end" | "block-start" | "block-end" | null | undefined;
  inset?: "pill" | "default" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
declare function InputGroupAddon({ className, align, inset, ...props }: React.ComponentProps<"div"> & VariantProps<typeof inputGroupAddonVariants>): React.JSX.Element;
declare function InputGroupButton({ className, type, variant, size, ...props }: Omit<React.ComponentProps<typeof Button>, "type"> & {
  type?: "button" | "submit" | "reset";
}): React.JSX.Element;
declare function InputGroupText({ className, ...props }: React.ComponentProps<"span">): React.JSX.Element;
/**
 * The Base UI input with no wrapper, since the group draws the surface. Unlike
 * Input, `className` lands on the native input itself.
 */
declare function InputGroupInput({ className, type, size, font, ...props }: Omit<InputProps, "unstyled">): React.JSX.Element;
declare function InputGroupTextarea({ className, ...props }: React.ComponentProps<"textarea">): React.JSX.Element;
export { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput, InputGroupText, InputGroupTextarea };