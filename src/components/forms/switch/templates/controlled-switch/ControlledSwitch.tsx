/* eslint-disable react/jsx-props-no-spreading,react/require-default-props */
import {
  FieldValues,
  useController,
  UseControllerProps,
} from 'react-hook-form';

import { Switch, SwitchProps, SwitchThumb } from '../../PrimitiveSwitch';

export type ControlledSwitchProps<T extends FieldValues> =
  UseControllerProps<T> & {
    switchProps?: SwitchProps;
  };

export const ControlledSwitch = <T extends FieldValues>({
  switchProps,
  ...useControllerProps
}: ControlledSwitchProps<T>) => {
  const { field: controlledField } = useController<T>({
    ...useControllerProps,
  });

  return (
    <Switch
      id={controlledField.name}
      name={controlledField.name}
      onCheckedChange={controlledField.onChange}
      ref={controlledField.ref}
      value={controlledField.value}
      {...switchProps}
    >
      <SwitchThumb />
    </Switch>
  );
};
