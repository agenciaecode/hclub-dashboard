import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, UseFormProps, UseFormReturn } from 'react-hook-form';
import * as Yup from 'yup';

/**
 * This function is type inference ready and will auto-validate the useForm with the proper values.
 *
 * If you don't already have the schema or use a dynamic schema, consider useFormWithSchemaBuilder()
 *
 * @param schema - A valid you schema
 * @param useFormProps
 * @returns
 */
export function useFormWithSchema<T extends Yup.AnyObjectSchema>(
  schema: T,
  useFormProps?: UseFormProps<Yup.Asserts<T>>,
): UseFormReturn<Yup.Asserts<T>> {
  return useForm({ ...useFormProps, resolver: yupResolver(schema) });
}
