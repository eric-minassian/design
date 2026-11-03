import * as React from "react";
import { Avatar as Avatar$1 } from "@base-ui/react/avatar";
declare function Avatar({ className, size, ...props }: Avatar$1.Root.Props & {
  size?: "default" | "sm" | "lg";
}): React.JSX.Element;
declare function AvatarImage({ className, ...props }: Avatar$1.Image.Props): React.JSX.Element;
declare function AvatarFallback({ className, ...props }: Avatar$1.Fallback.Props): React.JSX.Element;
declare function AvatarBadge({ className, ...props }: React.ComponentProps<"span">): React.JSX.Element;
declare function AvatarGroup({ className, ...props }: React.ComponentProps<"div">): React.JSX.Element;
declare function AvatarGroupCount({ className, ...props }: React.ComponentProps<"div">): React.JSX.Element;
export { Avatar, AvatarBadge, AvatarFallback, AvatarGroup, AvatarGroupCount, AvatarImage };