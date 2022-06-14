/* eslint-disable react/jsx-props-no-spreading */

import {
  FieldValues,
  useController,
  UseControllerProps,
} from 'react-hook-form';

import { Select, SelectProps } from '../../Select';

type ControlledSelectProps<T extends FieldValues> = UseControllerProps<T> & {
  defaultValue?: string;
  selectProps: SelectProps;
};

const ControlledSelect = <T extends FieldValues>({
  selectProps: { children, ...selectProps },
  ...useControllerProps
}: ControlledSelectProps<T>) => {
  const {
    field: { onChange, name: fieldName, ref: fieldRef, value: fieldValue },
  } = useController<T>({ ...useControllerProps });

  return (
    <Select
      onValueChange={onChange}
      name={fieldName}
      value={fieldValue}
      ref={fieldRef}
      {...selectProps}
    >
      {children}
    </Select>
  );
};

ControlledSelect.defaultProps = {
  defaultValue: false,
};

export { ControlledSelect };
export type { ControlledSelectProps };
