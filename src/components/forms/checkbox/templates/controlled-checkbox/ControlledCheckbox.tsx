/* eslint-disable react/jsx-props-no-spreading */
import { CheckIcon } from '@radix-ui/react-icons';
import {
  FieldValues,
  useController,
  UseControllerProps,
} from 'react-hook-form';

import {
  Checkbox,
  CheckboxIndicator,
  CheckboxProps,
} from '../../PrimitiveCheckbox';

type ControlledCheckboxProps<T extends FieldValues> = UseControllerProps<T> & {
  defaultValue?: boolean;
  checkboxProps?: CheckboxProps;
};

const ControlledCheckbox = <T extends FieldValues>({
  checkboxProps,
  ...useControllerProps
}: ControlledCheckboxProps<T>) => {
  const {
    field: { onChange, name: fieldName, ref: fieldRef, value: fieldValue },
  } = useController<T>({ ...useControllerProps });

  return (
    <Checkbox
      id={fieldName}
      onCheckedChange={onChange}
      name={fieldName}
      ref={fieldRef}
      value={fieldValue}
      {...checkboxProps}
    >
      <CheckboxIndicator>
        <CheckIcon />
      </CheckboxIndicator>
    </Checkbox>
  );
};

ControlledCheckbox.defaultProps = {
  defaultValue: false,
  checkboxProps: undefined,
};

export { ControlledCheckbox };
export type { ControlledCheckboxProps };
