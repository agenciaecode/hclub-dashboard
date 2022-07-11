/* eslint-disable react/prop-types,prefer-arrow-callback,react/jsx-props-no-spreading */
import React, {
  ComponentProps,
  ElementRef,
  forwardRef,
  ReactNode,
} from 'react';

import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import { SelectItemProps } from '@radix-ui/react-select';

import {
  Select as SelectPrimitive,
  SelectProps as SelectPrimitiveProps,
  SelectContent,
  SelectIcon,
  SelectItem,
  SelectItemText,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectTrigger,
  SelectValue,
  SelectViewport,
} from './PrimitiveSelect';

export type SelectProps = SelectPrimitiveProps &
  ComponentProps<typeof SelectTrigger> & {
    label: string;
  };

// eslint-disable-next-line react/require-default-props
export type SelectOptionProps = SelectItemProps & { text?: ReactNode };

export const SelectOption = ({
  text,
  disabled,
  value,
  textValue,
  children,
}: SelectOptionProps) => (
  <SelectItem value={value} disabled={disabled} textValue={textValue}>
    <SelectItemText>{text || children}</SelectItemText>
  </SelectItem>
);

export const Select = forwardRef<ElementRef<typeof SelectTrigger>, SelectProps>(
  function Select(
    {
      defaultValue,
      value,
      name,
      label,
      onValueChange,
      children,
      ...selectProps
    },
    forwardedRef,
  ) {
    return (
      <SelectPrimitive
        defaultValue={defaultValue}
        value={value}
        name={name}
        onValueChange={onValueChange}
      >
        <SelectTrigger aria-label={label} ref={forwardedRef} {...selectProps}>
          <SelectValue />
          <SelectIcon>
            <ChevronDownIcon />
          </SelectIcon>
        </SelectTrigger>
        <SelectContent>
          <SelectScrollUpButton>
            <ChevronUpIcon />
          </SelectScrollUpButton>
          <SelectViewport>{children}</SelectViewport>
          <SelectScrollDownButton>
            <ChevronDownIcon />
          </SelectScrollDownButton>
        </SelectContent>
      </SelectPrimitive>
    );
  },
);
