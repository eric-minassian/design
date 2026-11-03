import { Separator } from "./separator.js";
import { VariantProps } from "class-variance-authority";
import { useRender } from "@base-ui/react/use-render";
declare const buttonGroupVariants: (props?: ({
  orientation?: "horizontal" | "vertical" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
declare function ButtonGroup({ className, orientation, ...props }: React.ComponentProps<"div"> & VariantProps<typeof buttonGroupVariants>): import("react").JSX.Element;
declare function ButtonGroupText({ className, render, ...props }: useRender.ComponentProps<"div">): import("react").ReactElement<unknown, string | import("react").JSXElementConstructor<any>>;
declare function ButtonGroupSeparator({ className, orientation, ...props }: React.ComponentProps<typeof Separator>): import("react").JSX.Element;
export { ButtonGroup, ButtonGroupSeparator, ButtonGroupText, buttonGroupVariants };