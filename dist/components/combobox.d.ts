import { InputProps } from "./input.js";
import * as React from "react";
import { Combobox as Combobox$1 } from "@base-ui/react/combobox";
declare const Combobox: typeof Combobox$1.Root;
declare function ComboboxValue({ ...props }: Combobox$1.Value.Props): React.JSX.Element;
declare function ComboboxTrigger({ className, children, ...props }: Combobox$1.Trigger.Props): React.JSX.Element;
declare function ComboboxClear({ className, ...props }: Combobox$1.Clear.Props): React.JSX.Element;
declare function ComboboxInput({ className, children, disabled, showTrigger, showClear, startAddon, size, font, unstyled, ...props }: Omit<Combobox$1.Input.Props, "size"> & Pick<InputProps, "size" | "font" | "unstyled"> & {
  showTrigger?: boolean;
  showClear?: boolean;
  startAddon?: React.ReactNode;
}): React.JSX.Element;
/** A search row for the top of a popup, on a hairline instead of a field surface. */
declare function ComboboxSearchInput(props: React.ComponentProps<typeof ComboboxInput>): React.JSX.Element;
declare function ComboboxContent({ className, children, side, sideOffset, align, alignOffset, anchor, ...props }: Combobox$1.Popup.Props & Pick<Combobox$1.Positioner.Props, "side" | "align" | "sideOffset" | "alignOffset" | "anchor">): React.JSX.Element;
declare function ComboboxList({ className, ...props }: Combobox$1.List.Props): React.JSX.Element;
declare function ComboboxItem({ className, children, selectedFill, ...props }: Combobox$1.Item.Props & {
  /** Off for rows that mark selection themselves, so a fill only means hover or highlight. */
  selectedFill?: boolean;
}): React.JSX.Element;
declare function ComboboxGroup({ className, ...props }: Combobox$1.Group.Props): React.JSX.Element;
declare function ComboboxLabel({ className, ...props }: Combobox$1.GroupLabel.Props): React.JSX.Element;
declare function ComboboxCollection({ ...props }: Combobox$1.Collection.Props): React.JSX.Element;
declare function ComboboxEmpty({ className, ...props }: Combobox$1.Empty.Props): React.JSX.Element;
declare function ComboboxStatus({ className, ...props }: Combobox$1.Status.Props): React.JSX.Element;
declare function ComboboxSeparator({ className, ...props }: Combobox$1.Separator.Props): React.JSX.Element;
declare function ComboboxChips({ className, ...props }: React.ComponentPropsWithRef<typeof Combobox$1.Chips> & Combobox$1.Chips.Props): React.JSX.Element;
declare function ComboboxChip({ className, children, showRemove, ...props }: Combobox$1.Chip.Props & {
  showRemove?: boolean;
}): React.JSX.Element;
declare function ComboboxChipsInput({ className, ...props }: Combobox$1.Input.Props): React.JSX.Element;
declare function useComboboxAnchor(): React.RefObject<HTMLDivElement | null>;
declare const useComboboxFilter: typeof Combobox$1.useFilter;
export { Combobox, ComboboxChip, ComboboxChips, ComboboxChipsInput, ComboboxClear, ComboboxCollection, ComboboxContent, ComboboxContent as ComboboxPopup, ComboboxEmpty, ComboboxGroup, ComboboxInput, ComboboxItem, ComboboxLabel, ComboboxList, ComboboxSearchInput, ComboboxSeparator, ComboboxStatus, ComboboxTrigger, ComboboxValue, useComboboxAnchor, useComboboxFilter };