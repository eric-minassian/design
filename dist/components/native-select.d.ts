import * as React from "react";
type NativeSelectProps = Omit<React.ComponentProps<"select">, "size"> & {
  size?: "sm" | "compact" | "default" | "lg";
};
declare function NativeSelect({ className, size, ...props }: NativeSelectProps): React.JSX.Element;
declare function NativeSelectOption({ className, ...props }: React.ComponentProps<"option">): React.JSX.Element;
declare function NativeSelectOptGroup({ className, ...props }: React.ComponentProps<"optgroup">): React.JSX.Element;
export { NativeSelect, NativeSelectOptGroup, NativeSelectOption };