import * as React from "react";
import { Input as Input$1 } from "@base-ui/react/input";
type InputProps = Omit<React.ComponentProps<typeof Input$1>, "size"> & {
  size?: "sm" | "compact" | "default" | "lg";
  font?: "default" | "mono";
  /** Drop the chrome, for inputs that live inside another control's surface. */
  unstyled?: boolean;
};
/**
 * The visible box is a wrapping span so that focus can be drawn on the control
 * while the native input stays flush. `className` applies to the wrapper.
 */
declare function Input({ className, type, size, font, unstyled, ...props }: InputProps): React.JSX.Element;
export { Input, type InputProps };