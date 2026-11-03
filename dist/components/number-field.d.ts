import * as React from "react";
import { NumberField as NumberFieldPrimitive } from "@base-ui/react/number-field";
declare function NumberField({ id, className, size, ...props }: NumberFieldPrimitive.Root.Props & {
  size?: "sm" | "default" | "lg";
}): React.JSX.Element;
declare function NumberFieldGroup({ className, ...props }: NumberFieldPrimitive.Group.Props): React.JSX.Element;
declare function NumberFieldDecrement({ className, ...props }: NumberFieldPrimitive.Decrement.Props): React.JSX.Element;
declare function NumberFieldIncrement({ className, ...props }: NumberFieldPrimitive.Increment.Props): React.JSX.Element;
declare function NumberFieldInput({ className, ...props }: NumberFieldPrimitive.Input.Props): React.JSX.Element;
export { NumberField, NumberFieldDecrement, NumberFieldGroup, NumberFieldIncrement, NumberFieldInput, NumberFieldPrimitive };