import { VariantProps } from "class-variance-authority";
import { Toggle as Toggle$1 } from "@base-ui/react/toggle";
declare const toggleVariants: (props?: ({
  variant?: "default" | "outline" | "ghost" | "pill" | "segmented" | null | undefined;
  size?: "default" | "sm" | "xs" | "lg" | "compact" | "segmented" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
declare function Toggle({ className, variant, size, ...props }: Toggle$1.Props & VariantProps<typeof toggleVariants>): import("react").JSX.Element;
export { Toggle, toggleVariants };