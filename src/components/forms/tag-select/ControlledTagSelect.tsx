/* eslint-disable react/jsx-props-no-spreading,react/require-default-props */
import { ComponentProps } from 'react';

import {
  FieldValues,
  useController,
  UseControllerProps,
} from 'react-hook-form';

import { selectStyles, StyledTagSelect } from './TagSelect.styles';

export type ControlledTagSelectProps<T extends FieldValues> =
  UseControllerProps<T> & {
    tagSelectProps?: ComponentProps<typeof StyledTagSelect>;
  };

export type Option = {
  label: string;
  value: string;
  __isNew__?: boolean;
};

export function createTagOption(option: Option) {
  return { __isNew__: false, ...option };
}

export const ControlledTagSelect = <T extends FieldValues>({
  tagSelectProps,
  ...useControllerProps
}: ControlledTagSelectProps<T>) => {
  const { field: controlledField } = useController<T>({
    ...useControllerProps,
  });

  return (
    <StyledTagSelect
      isMulti
      isClearable
      {...controlledField}
      {...tagSelectProps}
      onChange={value => controlledField.onChange(value)}
      styles={selectStyles}
      formatCreateLabel={(inputValue: string) => `Adicionar "${inputValue}"`}
      noOptionsMessage={() => 'Digite uma nova opção'}
    />
  );
};
