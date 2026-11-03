import * as React from "react";
import { VariantProps } from "class-variance-authority";
import { useRender } from "@base-ui/react/use-render";
declare function BubbleGroup({ className, ...props }: React.ComponentProps<"div">): React.JSX.Element;
declare const bubbleVariants: (props?: ({
  variant?: "muted" | "default" | "outline" | "destructive" | "secondary" | "ghost" | "tinted" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
declare function Bubble({ variant, align, className, ...props }: React.ComponentProps<"div"> & VariantProps<typeof bubbleVariants> & {
  align?: "start" | "end";
}): React.JSX.Element;
declare function BubbleContent({ className, render, ...props }: useRender.ComponentProps<"div">): React.ReactElement<unknown, string | React.JSXElementConstructor<any>>;
declare function BubbleReactions({ side, align, className, ...props }: React.ComponentProps<"div"> & {
  align?: "start" | "end";
  side?: "top" | "bottom";
}): React.JSX.Element;
export { Bubble, BubbleContent, BubbleGroup, BubbleReactions };