/* eslint-disable react/jsx-props-no-spreading */
import { ComponentProps } from 'react';

import {
  FieldValues,
  useController,
  UseControllerProps,
} from 'react-hook-form';
import { IMaskInput } from 'react-imask';

import { ErrorLabel } from '@components/forms/error-label';
import { Label } from '@components/forms/label';
import { StyledInputGroup } from '@components/forms/text-input/TextInput.styles';

type MaskedInputProps<T extends FieldValues> = UseControllerProps<T> & {
  label: string;
  id?: string;
  name: string;
  placeholder: string;
  defaultValue?: string;
  errorMessage?: string;
  readOnly?: boolean;
  disabled?: boolean;
  imaskProps: ComponentProps<typeof IMaskInput>;
};

const MaskedInput = <T extends FieldValues>({
  label,
  id,
  placeholder,
  defaultValue,
  errorMessage,
  readOnly,
  disabled,
  imaskProps,
  ...useControllerProps
}: MaskedInputProps<T>) => {
  const inputId = id ?? useControllerProps.name;
  const {
    field: { onChange, value: controllerValue, ref },
  } = useController<T>({ ...useControllerProps });
  return (
    <StyledInputGroup hasError={Boolean(errorMessage)}>
      <Label htmlFor={inputId}>{label}</Label>
      <IMaskInput
        type="text"
        placeholder={placeholder}
        id={inputId}
        defaultValue={defaultValue}
        value={controllerValue}
        readOnly={readOnly}
        disabled={disabled}
        onAccept={onChange}
        name={useControllerProps.name}
        ref={ref}
        {...imaskProps}
      />
      <ErrorLabel htmlFor={inputId} errorMessage={errorMessage} />
    </StyledInputGroup>
  );
};

MaskedInput.defaultProps = {
  errorMessage: undefined,
  defaultValue: undefined,
  id: undefined,
  readOnly: false,
  disabled: false,
};

export { MaskedInput };
export type { MaskedInputProps };
