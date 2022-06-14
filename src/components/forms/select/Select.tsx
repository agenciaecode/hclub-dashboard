/* eslint-disable react/prop-types,prefer-arrow-callback */
import React, { ElementRef, forwardRef } from 'react';

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

export type SelectProps = SelectPrimitiveProps & {
  label: string;
};

export type SelectOptionProps = SelectItemProps & { text: string };

export const SelectOption = ({
  text,
  disabled,
  value,
  textValue,
}: SelectOptionProps) => (
  <SelectItem value={value} disabled={disabled} textValue={textValue}>
    <SelectItemText>{text}</SelectItemText>
  </SelectItem>
);

export const Select = forwardRef<ElementRef<typeof SelectTrigger>, SelectProps>(
  function Select(
    { defaultValue, value, name, label, children },
    forwardedRef,
  ) {
    return (
      <SelectPrimitive defaultValue={defaultValue} value={value} name={name}>
        <SelectTrigger aria-label={label} ref={forwardedRef}>
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
