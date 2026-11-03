import * as React from "react";
declare function MessageGroup({ className, ...props }: React.ComponentProps<"div">): React.JSX.Element;
declare function Message({ className, align, ...props }: React.ComponentProps<"div"> & {
  align?: "start" | "end";
}): React.JSX.Element;
declare function MessageAvatar({ className, ...props }: React.ComponentProps<"div">): React.JSX.Element;
declare function MessageContent({ className, ...props }: React.ComponentProps<"div">): React.JSX.Element;
declare function MessageHeader({ className, ...props }: React.ComponentProps<"div">): React.JSX.Element;
declare function MessageFooter({ className, reveal, ...props }: React.ComponentProps<"div"> & {
  /** Hide until the turn is hovered or focused. Touch keeps it visible. */
  reveal?: boolean;
}): React.JSX.Element;
export { Message, MessageAvatar, MessageContent, MessageFooter, MessageGroup, MessageHeader };