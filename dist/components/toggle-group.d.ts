import { toggleVariants } from "./toggle.js";
import * as React from "react";
import { VariantProps } from "class-variance-authority";
import { Toggle } from "@base-ui/react/toggle";
import { ToggleGroup as ToggleGroup$1 } from "@base-ui/react/toggle-group";
declare function ToggleGroup({ className, variant, size: sizeProp, spacing, orientation, style, children, ...props }: ToggleGroup$1.Props & VariantProps<typeof toggleVariants> & {
  /** Gap between items, in spacing units. 0 fuses them; outline fuses by default. */
  spacing?: number;
}): React.JSX.Element;
declare function ToggleGroupItem({ className, children, variant, size, ...props }: Toggle.Props & VariantProps<typeof toggleVariants>): React.JSX.Element;
export { ToggleGroup, ToggleGroupItem };