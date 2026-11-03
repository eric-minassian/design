import { VariantProps } from "class-variance-authority";
declare const emptySizeClassName: {
  readonly compact: "min-h-64 gap-4 p-6 md:p-10 [&_[data-slot=empty-icon]]:mb-0 [&_[data-slot=empty-title]]:text-[1.0625rem] [&_[data-slot=empty-title]]:leading-6 [&_[data-slot=empty-description]]:text-[0.8125rem] [&_[data-slot=empty-description]]:leading-[1.125rem]";
  readonly default: "gap-6 p-6 md:p-12";
  readonly hero: "gap-6 p-6 md:p-12 [&_[data-slot=empty-title]]:text-2xl sm:[&_[data-slot=empty-title]]:text-3xl";
};
declare function Empty({ className, size, ...props }: React.ComponentProps<"div"> & {
  size?: keyof typeof emptySizeClassName;
}): import("react").JSX.Element;
declare function EmptyHeader({ className, ...props }: React.ComponentProps<"div">): import("react").JSX.Element;
declare const emptyMediaVariants: (props?: ({
  variant?: "default" | "icon" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
declare function EmptyMedia({ className, variant, ...props }: React.ComponentProps<"div"> & VariantProps<typeof emptyMediaVariants>): import("react").JSX.Element;
declare function EmptyTitle({ className, ...props }: React.ComponentProps<"div">): import("react").JSX.Element;
declare function EmptyDescription({ className, ...props }: React.ComponentProps<"p">): import("react").JSX.Element;
declare function EmptyContent({ className, ...props }: React.ComponentProps<"div">): import("react").JSX.Element;
export { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle };