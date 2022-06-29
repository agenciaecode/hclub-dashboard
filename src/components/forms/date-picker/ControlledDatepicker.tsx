/* eslint-disable react/jsx-props-no-spreading,react/require-default-props */
import { ptBR } from 'date-fns/locale';
import DatePicker, {
  ReactDatePickerProps as DatePickerProps,
  registerLocale,
} from 'react-datepicker';
import {
  FieldValues,
  useController,
  UseControllerProps,
} from 'react-hook-form';

import 'react-datepicker/dist/react-datepicker.css';
import { StyledPickerCSSFix } from './ControlledDatepicker.styles';

registerLocale('pt-BR', ptBR);

export type ControlledDatepickerProps<T extends FieldValues> =
  UseControllerProps<T> & {
    datePickerProps?: DatePickerProps;
    disabled?: boolean;
    id: string;
  };

export const ControlledDatePicker = <T extends FieldValues>({
  datePickerProps,
  disabled,
  id,
  ...useControllerProps
}: ControlledDatepickerProps<T>) => {
  const { field: controlledField } = useController<T>({
    ...useControllerProps,
  });

  return (
    <StyledPickerCSSFix>
      <DatePicker
        locale="pt-BR"
        dateFormat="dd/MM/yyyy"
        {...datePickerProps}
        {...controlledField}
        id={id}
        disabled={disabled}
        selected={controlledField.value}
      />
    </StyledPickerCSSFix>
  );
};
