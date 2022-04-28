import { HTMLInputTypeAttribute } from 'react';

import { FieldValue, FieldValues, UseFormRegister } from 'react-hook-form';

import { Label } from '@components/forms/label';
import { ErrorLabel } from '@components/forms/error-label';

import { StyledInputGroup } from './TextInput.styles';

type TextInputProps = {
  label: string;
  id?: string;
  name: string;
  placeholder: string;
  defaultValue?: string;
  type?: HTMLInputTypeAttribute;
  errorMessage?: string;
  value?: string | number;
  readOnly?: boolean;
  /**
   * React Hook Form
   * Register object is from registering useForm.
   * @example
   *  import { useForm } from 'react-hook-form';
   *  const { register } = useForm();
   *  <TextInput name="email" validation={register} />
   *  @see https://react-hook-form.com/get-started#Registerfields
   */
  register: UseFormRegister<FieldValue<FieldValues>>;
};

const TextInput = ({
  label,
  id,
  name,
  placeholder,
  defaultValue,
  value,
  type,
  errorMessage,
  readOnly,
  register,
}: TextInputProps) => {
  const inputId = id ?? name;
  return (
    <StyledInputGroup hasError={Boolean(errorMessage)}>
      <Label htmlFor={inputId}>{label}</Label>
      <input
        type={type}
        placeholder={placeholder}
        id={inputId}
        defaultValue={defaultValue}
        value={value}
        readOnly={readOnly}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...register(name)}
      />
      <ErrorLabel htmlFor={inputId} errorMessage={errorMessage} />
    </StyledInputGroup>
  );
};

TextInput.defaultProps = {
  errorMessage: undefined,
  defaultValue: undefined,
  id: undefined,
  type: undefined,
  value: undefined,
  readOnly: false,
};

export { TextInput };
export type { TextInputProps };
