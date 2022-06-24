import * as SelectPrimitive from '@radix-ui/react-select';

import {
  StyledContent,
  StyledItem,
  StyledLabel,
  StyledScrollDownButton,
  StyledScrollUpButton,
  StyledSeparator,
  StyledTrigger,
  StyledViewport,
} from './PrimitiveSelect.styles';

// Exports
export * from '@radix-ui/react-select';
export const Select = SelectPrimitive.Root;
export const SelectTrigger = StyledTrigger;
export const SelectValue = SelectPrimitive.Value;
export const SelectIcon = SelectPrimitive.Icon;
export const SelectContent = StyledContent;
export const SelectViewport = StyledViewport;
export const SelectGroup = SelectPrimitive.Group;
export const SelectItem = StyledItem;
export const SelectItemText = SelectPrimitive.ItemText;
export const SelectLabel = StyledLabel;
export const SelectSeparator = StyledSeparator;
export const SelectScrollUpButton = StyledScrollUpButton;
export const SelectScrollDownButton = StyledScrollDownButton;
