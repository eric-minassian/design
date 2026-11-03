import { ScrollArea as ScrollArea$1 } from "@base-ui/react/scroll-area";
declare function ScrollArea({ className, children, scrollFade, scrollFadePadding, scrollbarGutter, hideScrollbars, chainVerticalScroll, radius, viewportTabIndex, ...props }: ScrollArea$1.Root.Props & {
  scrollFade?: boolean;
  scrollFadePadding?: boolean;
  scrollbarGutter?: boolean;
  hideScrollbars?: boolean;
  chainVerticalScroll?: boolean;
  radius?: "inherit" | "none";
  viewportTabIndex?: number;
}): import("react").JSX.Element;
declare function ScrollBar({ className, orientation, ...props }: ScrollArea$1.Scrollbar.Props): import("react").JSX.Element;
export { ScrollArea, ScrollBar };