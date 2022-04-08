import { StyledInputGroup } from './TextInput.styles';

type TextInputProps = {
  label: string;
  id: string;
  name: string;
  placeholder: string;
  type: string;
  errorMessage?: string;
};

const ErrorInfoIcon = () => (
  <svg
    width="19"
    height="19"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M6 1C3.245 1 1 3.245 1 6C1 8.755 3.245 11 6 11C8.755 11 11 8.755 11 6C11 3.245 8.755 1 6 1ZM5.625 4C5.625 3.795 5.795 3.625 6 3.625C6.205 3.625 6.375 3.795 6.375 4V6.5C6.375 6.705 6.205 6.875 6 6.875C5.795 6.875 5.625 6.705 5.625 6.5V4ZM6.46 8.19C6.435 8.255 6.4 8.305 6.355 8.355C6.305 8.4 6.25 8.435 6.19 8.46C6.13 8.485 6.065 8.5 6 8.5C5.935 8.5 5.87 8.485 5.81 8.46C5.75 8.435 5.695 8.4 5.645 8.355C5.6 8.305 5.565 8.255 5.54 8.19C5.515 8.13 5.5 8.065 5.5 8C5.5 7.935 5.515 7.87 5.54 7.81C5.565 7.75 5.6 7.695 5.645 7.645C5.695 7.6 5.75 7.565 5.81 7.54C5.93 7.49 6.07 7.49 6.19 7.54C6.25 7.565 6.305 7.6 6.355 7.645C6.4 7.695 6.435 7.75 6.46 7.81C6.485 7.87 6.5 7.935 6.5 8C6.5 8.065 6.485 8.13 6.46 8.19Z" />
  </svg>
);

const TextInput = ({
  label,
  id,
  name,
  placeholder,
  type,
  errorMessage,
}: TextInputProps) => (
  <StyledInputGroup hasError={Boolean(errorMessage)}>
    <label htmlFor={id}>{label}</label>
    <input type={type} placeholder={placeholder} name={name} id={id} />
    {errorMessage && (
      <label htmlFor={id}>
        <ErrorInfoIcon />
        {errorMessage}
      </label>
    )}
  </StyledInputGroup>
);

TextInput.defaultProps = {
  errorMessage: undefined,
};

export { TextInput };
export type { TextInputProps };
