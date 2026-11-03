import { Collapsible as Collapsible$1 } from "@base-ui/react/collapsible";
declare function Collapsible({ ...props }: Collapsible$1.Root.Props): import("react").JSX.Element;
declare function CollapsibleTrigger({ className, ...props }: Collapsible$1.Trigger.Props): import("react").JSX.Element;
declare function CollapsibleContent({ className, animate, ...props }: Collapsible$1.Panel.Props & {
  animate?: boolean;
}): import("react").JSX.Element;
declare const sectionHeaderTones: {
  readonly muted: {
    readonly label: "text-muted-foreground";
    readonly line: "bg-border";
  };
  readonly emphasized: {
    readonly label: "text-foreground/80";
    readonly line: "bg-foreground/25";
  };
  readonly accent: {
    readonly label: "text-primary";
    readonly line: "bg-primary/50";
  };
};
/**
 * A section label with a hairline leader. Compose it into a trigger with
 * `render={<CollapsibleSectionHeader />}`, or pass `expanded` to drive it yourself.
 */
declare function CollapsibleSectionHeader({ children, className, expanded, tone, variant, accessory, ...props }: React.ComponentProps<"button"> & {
  expanded?: boolean;
  tone?: keyof typeof sectionHeaderTones;
  variant?: "default" | "panel";
  accessory?: React.ReactNode;
}): import("react").JSX.Element;
declare function SectionHeaderStatus({ className, ...props }: React.ComponentProps<"span">): import("react").JSX.Element;
export { Collapsible, CollapsibleContent, CollapsibleContent as CollapsiblePanel, CollapsibleSectionHeader, CollapsibleTrigger, SectionHeaderStatus };