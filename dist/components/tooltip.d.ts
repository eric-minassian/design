import { Tooltip as Tooltip$1 } from "@base-ui/react/tooltip";
declare function TooltipProvider({ ...props }: Tooltip$1.Provider.Props): import("react").JSX.Element;
declare function Tooltip({ ...props }: Tooltip$1.Root.Props): import("react").JSX.Element;
declare function TooltipTrigger({ ...props }: Tooltip$1.Trigger.Props): import("react").JSX.Element;
declare function TooltipContent({ className, side, sideOffset, align, alignOffset, anchor, variant, children, ...props }: Tooltip$1.Popup.Props & Pick<Tooltip$1.Positioner.Props, "align" | "alignOffset" | "anchor" | "side" | "sideOffset"> & {
  /** `code` is for paths, hashes and commands that should wrap anywhere. */
  variant?: "default" | "code";
}): import("react").JSX.Element;
export { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger };