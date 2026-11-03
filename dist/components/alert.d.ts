import * as React from "react";
import { VariantProps } from "class-variance-authority";
declare const alertVariants: (props?: ({
  surface?: "default" | "glass" | null | undefined;
  variant?: "sidebar" | "default" | "destructive" | "error" | "info" | "success" | "warning" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
declare function Alert({ className, variant, surface, controlAlignment, children, ...props }: React.ComponentProps<"div"> & VariantProps<typeof alertVariants> & {
  controlAlignment?: "center" | "first-line";
}): React.JSX.Element;
declare function AlertTitle({ className, ...props }: React.ComponentProps<"div">): React.JSX.Element;
declare namespace AlertTitle {
  var displayName: string;
}
declare function AlertDescription({ className, ...props }: React.ComponentProps<"div">): React.JSX.Element;
declare namespace AlertDescription {
  var displayName: string;
}
declare function AlertAction({ className, ...props }: React.ComponentProps<"div">): React.JSX.Element;
declare namespace AlertAction {
  var displayName: string;
}
export { Alert, AlertAction, AlertDescription, AlertTitle };