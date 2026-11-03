import { VariantProps } from "class-variance-authority";
import { Tabs as Tabs$1 } from "@base-ui/react/tabs";
declare function Tabs({ className, orientation, ...props }: Tabs$1.Root.Props): import("react").JSX.Element;
declare const tabsListVariants: (props?: ({
  variant?: "default" | "line" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
declare function TabsList({ className, variant, ...props }: Tabs$1.List.Props & VariantProps<typeof tabsListVariants>): import("react").JSX.Element;
declare function TabsTrigger({ className, ...props }: Tabs$1.Tab.Props): import("react").JSX.Element;
declare function TabsContent({ className, ...props }: Tabs$1.Panel.Props): import("react").JSX.Element;
export { Tabs, TabsContent, TabsList, TabsTrigger, tabsListVariants };