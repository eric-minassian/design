import { Button as Button$1 } from "@base-ui/react/button";
import { VariantProps } from "class-variance-authority";
declare const buttonVariants: (props?: ({
  variant?: "default" | "link" | "glass" | "destructive" | "secondary" | "outline" | "ghost" | "destructive-outline" | "ghost-muted" | "ghost-destructive" | "warning-outline" | null | undefined;
  size?: "default" | "sm" | "xs" | "icon" | "lg" | "micro" | "compact" | "xl" | "icon-micro" | "icon-xs" | "icon-sm" | "icon-lg" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
declare function Button({ className, variant, size, ...props }: Button$1.Props & VariantProps<typeof buttonVariants>): import("react").JSX.Element;
export { Button, buttonVariants };