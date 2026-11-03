import { VariantProps } from "class-variance-authority";
declare const skeletonVariants: (props?: ({
  shape?: "pill" | "block" | "card" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
declare function Skeleton({ className, shape, ...props }: React.ComponentProps<"div"> & VariantProps<typeof skeletonVariants>): import("react").JSX.Element;
export { Skeleton };