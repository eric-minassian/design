import { LoaderCircleIcon } from "lucide-react";
import { VariantProps } from "class-variance-authority";
declare const spinnerVariants: (props?: ({
  size?: "xs" | "sm" | "md" | "lg" | null | undefined;
  tone?: "current" | "muted" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
declare function Spinner({ className, size, tone, ...props }: React.ComponentProps<typeof LoaderCircleIcon> & VariantProps<typeof spinnerVariants>): import("react").JSX.Element;
export { Spinner };