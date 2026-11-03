import { VariantProps } from "class-variance-authority";
declare const statusDotVariants: (props?: ({
  tone?: "error" | "info" | "success" | "warning" | "neutral" | "primary" | null | undefined;
  motion?: "none" | "ping" | "pulse" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
/** A state you can read at a glance. Pulse means working; ping means it needs you. */
declare function StatusDot({ className, tone, motion, ...props }: React.ComponentProps<"span"> & VariantProps<typeof statusDotVariants>): import("react").JSX.Element;
export { StatusDot, statusDotVariants };