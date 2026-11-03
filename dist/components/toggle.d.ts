import { VariantProps } from "class-variance-authority";
import { Toggle as Toggle$1 } from "@base-ui/react/toggle";
declare const toggleVariants: (props?: ({
  variant?: "pill" | "default" | "outline" | "ghost" | "segmented" | null | undefined;
  size?: "xs" | "sm" | "lg" | "default" | "segmented" | "compact" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
declare function Toggle({ className, variant, size, ...props }: Toggle$1.Props & VariantProps<typeof toggleVariants>): import("react").JSX.Element;
export { Toggle, toggleVariants };