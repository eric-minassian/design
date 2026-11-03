import { VariantProps } from "class-variance-authority";
import { useRender } from "@base-ui/react/use-render";
declare const badgeVariants: (props?: ({
  variant?: "default" | "link" | "destructive" | "error" | "info" | "success" | "warning" | "secondary" | "outline" | "ghost" | null | undefined;
  size?: "default" | "sm" | "lg" | "control" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
declare function Badge({ className, variant, size, render, ...props }: useRender.ComponentProps<"span"> & VariantProps<typeof badgeVariants>): import("react").ReactElement<unknown, string | import("react").JSXElementConstructor<any>>;
export { Badge, badgeVariants };