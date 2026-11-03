import { Checkbox as Checkbox$1 } from "@base-ui/react/checkbox";
declare function Checkbox({ className, ...props }: Checkbox$1.Root.Props): import("react").JSX.Element;
/** Checkbox's look without its hidden input, for a row that is itself the button. */
declare function CheckboxMark({ checked, className }: {
  checked: boolean;
  className?: string;
}): import("react").JSX.Element;
export { Checkbox, CheckboxMark };