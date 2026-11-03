import { Button } from "./button.js";
import * as React from "react";
import { VariantProps } from "class-variance-authority";
declare const codeBlockVariants: (props?: ({
  variant?: "default" | "destructive" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
declare function CodeBlock({ className, variant, size, ...props }: React.ComponentProps<"div"> & VariantProps<typeof codeBlockVariants> & {
  size?: "default" | "sm";
}): React.JSX.Element;
declare function CodeBlockHeader({ className, ...props }: React.ComponentProps<"div">): React.JSX.Element;
declare function CodeBlockTitle({ className, ...props }: React.ComponentProps<"div">): React.JSX.Element;
declare function CodeBlockActions({ className, ...props }: React.ComponentProps<"div">): React.JSX.Element;
declare function CodeBlockCopyButton({ value, variant, size, className, onClick, ...props }: React.ComponentProps<typeof Button> & {
  value: string;
}): React.JSX.Element;
declare function CodeBlockContent({ className, children, style, wrap, lineNumbers, startLine, ...props }: React.ComponentProps<"pre"> & {
  wrap?: boolean;
  lineNumbers?: boolean;
  startLine?: number;
}): React.JSX.Element;
declare const codeBlockLineVariants: (props?: ({
  variant?: "default" | "added" | "removed" | "highlighted" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
declare function CodeBlockLine({ className, variant, children, ...props }: React.ComponentProps<"span"> & VariantProps<typeof codeBlockLineVariants>): React.JSX.Element;
declare function CodeBlockFooter({ className, ...props }: React.ComponentProps<"div">): React.JSX.Element;
export { CodeBlock, CodeBlockActions, CodeBlockContent, CodeBlockCopyButton, CodeBlockFooter, CodeBlockHeader, CodeBlockLine, CodeBlockTitle };