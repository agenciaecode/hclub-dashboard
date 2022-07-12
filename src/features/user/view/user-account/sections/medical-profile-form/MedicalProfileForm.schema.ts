import { Option } from '@components/forms/tag-select';
import { yup } from '@libs/yup';
import { PHONE_MASK_REGEX } from '@utils/mask/phone';

import { BloodType, BloodTypes } from '@/types/BloodType';

import { GetUserMedicalProfileOutput } from './api/getUserMedicalProfile';

export const medicalProfileFormSchema = yup
  .object({
    blood_type: yup
      .mixed<BloodType>()
      .transform(value => value || undefined) // allow nullable
      .oneOf([...BloodTypes], 'Tipo sanguíneo inválido')
      .optional(),
    height: yup.number().positive().optional(),
    weight: yup.number().positive().optional(),
    diseases: yup
      .mixed<Option[]>()
      .transform(diseases =>
        diseases.map((diseaseOption: Option) => diseaseOption.value),
      )
      .optional(),
    allergies: yup
      .mixed<Option[]>()
      .transform(allergies =>
        allergies.map((allergieOption: Option) => allergieOption.value),
      )
      .optional(),
    emergency_name: yup.string().optional(),
    emergency_contact: yup
      .string()
      .matches(PHONE_MASK_REGEX, 'Telefone inválido')
      .required('Telefone é obrigatório'),
    medical_profile_privacy: yup
      .mixed<GetUserMedicalProfileOutput['medical_profile_privacy']>()
      .transform(state => (state ? 'public' : 'private'))
      .optional(),
  })
  .required();
