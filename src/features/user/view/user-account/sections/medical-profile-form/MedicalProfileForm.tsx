/* eslint-disable react/jsx-props-no-spreading,react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

import { Button } from '@components/forms/button';
import { InputWrapper } from '@components/forms/input-wrapper';
import { Label } from '@components/forms/label';
import { LoadingButton } from '@components/forms/loading-button';
import { MaskedInput } from '@components/forms/masked-input';
import { Select, SelectOption } from '@components/forms/select';
import { ControlledSwitch } from '@components/forms/switch';
import {
  ControlledTagSelect,
  createTagOption,
} from '@components/forms/tag-select';
import { TextInput } from '@components/forms/text-input';
import { setFormErrorsFromException, useFormWithSchema } from '@libs/hook-form';
import { showToastSuccessMessage } from '@libs/toast/showToastMessage';
import { useHttpExceptionHandler } from '@services/http/hooks/useHttpExceptionHandler';
import { animationDelay } from '@utils/animation/animation-delay';
import {
  reaplyPhoneMask,
  removePhoneMask,
  removePhoneRegionNumber,
} from '@utils/mask/phone';

import { BloodTypes } from '@/types/BloodType';

import { SectionWrapper } from '../../components/section-wrapper';
import { StyledSectionForm } from '../../UserAccountPage.styles';
import { useUserMedicalProfileQuery } from './api/getUserMedicalProfile';
import {
  UpdateUserMedicalProfileValidationErrors,
  useUpdateUserMedicalProfileMutation,
} from './api/updateUserMedicalProfile';
import { medicalProfileFormSchema } from './MedicalProfileForm.schema';
import {
  StyledDummyDiv,
  StyledProfilePrivacyWrapper,
} from './MedicalProfileForm.styles';

const EMPTY_BLOOD_TYPE_OPTION = '';

export const MedicalProfileForm = () => {
  const [isEditing, setIsEditing] = useState(false);
  const userMedicalProfileQuery = useUserMedicalProfileQuery();
  const updateUserMedicalProfileMutation =
    useUpdateUserMedicalProfileMutation();
  const medicalProfileForm = useFormWithSchema(medicalProfileFormSchema);

  useEffect(() => {
    if (isEditing) return;
    medicalProfileForm.reset({
      medical_profile_privacy:
        userMedicalProfileQuery.data?.medical_profile_privacy === 'public',
      blood_type:
        userMedicalProfileQuery.data?.blood_type || EMPTY_BLOOD_TYPE_OPTION,
      height: String(userMedicalProfileQuery.data?.height) as unknown as number, // fix imask only accepting string
      weight: String(userMedicalProfileQuery.data?.weight) as unknown as number, // fix imask only accepting string
      emergency_name: userMedicalProfileQuery.data?.emergency_name,
      emergency_contact: reaplyPhoneMask(
        removePhoneRegionNumber(
          userMedicalProfileQuery.data?.emergency_contact,
        ),
      ), // TODO remove manual replace +55 region number
      diseases: userMedicalProfileQuery.data?.diseases?.map(disease =>
        createTagOption({ label: disease, value: disease }),
      ),
      allergies: userMedicalProfileQuery.data?.allergies?.map(allergy =>
        createTagOption({ label: allergy, value: allergy }),
      ),
    });
  }, [userMedicalProfileQuery.data, isEditing]);

  useHttpExceptionHandler(
    updateUserMedicalProfileMutation.error,
    exceptionHandler =>
      exceptionHandler
        .setValidationExceptionHandler<UpdateUserMedicalProfileValidationErrors>(
          setFormErrorsFromException(medicalProfileForm.setError),
        )
        .executeHandler(),
  );

  const handleMedicalProfileFormSubmit = medicalProfileForm.handleSubmit(
    submittedFormValues => {
      if (updateUserMedicalProfileMutation.isLoading) return;
      updateUserMedicalProfileMutation.mutate(
        {
          ...submittedFormValues,
          emergency_contact: `+55 ${removePhoneMask(
            submittedFormValues.emergency_contact,
          )}`,
        },
        {
          onSuccess: () =>
            showToastSuccessMessage('Perfil Médico atualizado com sucesso!'),
        },
      );
    },
  );

  return (
    <SectionWrapper
      title="Conta"
      toolbarSlot={
        isEditing ? (
          <LoadingButton
            isLoading={updateUserMedicalProfileMutation.isLoading}
            isSuccess={updateUserMedicalProfileMutation.isSuccess}
            onAnimationFinished={async () => {
              await animationDelay();
              updateUserMedicalProfileMutation.reset();
              setIsEditing(false);
            }}
            onClick={handleMedicalProfileFormSubmit}
          >
            Salvar
          </LoadingButton>
        ) : (
          <Button
            btn="secondary"
            disabled={userMedicalProfileQuery.isLoading}
            onClick={() => setIsEditing(true)}
          >
            Editar dados
          </Button>
        )
      }
    >
      <StyledSectionForm>
        <StyledProfilePrivacyWrapper>
          <Label htmlFor="medical_profile_privacy">Tornar publico</Label>
          <ControlledSwitch
            name="medical_profile_privacy"
            control={medicalProfileForm.control}
            switchProps={{
              disabled: !isEditing,
            }}
          />
        </StyledProfilePrivacyWrapper>

        <StyledDummyDiv />

        <InputWrapper
          label="Tipo Sanguíneo"
          forId="blood_type"
          errorMessage={
            medicalProfileForm.formState.errors.blood_type?.message as string
          }
        >
          <Select
            label="Selecione o cartão padrão"
            defaultValue={EMPTY_BLOOD_TYPE_OPTION}
            id="blood_type"
            name="blood_type"
            disabled={!isEditing}
            value={medicalProfileForm.watch('blood_type')}
            onValueChange={selectedOption => {
              medicalProfileForm.setValue('blood_type', selectedOption);
            }}
          >
            <SelectOption
              value={EMPTY_BLOOD_TYPE_OPTION}
              text="Selecione o tipo sanguíneo"
            />
            {BloodTypes.map(bloodType => (
              <SelectOption
                key={bloodType}
                value={bloodType}
                text={bloodType.toUpperCase()}
              />
            ))}
          </Select>
        </InputWrapper>

        <StyledDummyDiv />

        <MaskedInput
          name="height"
          label="Altura (cm)"
          placeholder="Altura em centimetros"
          disabled={!isEditing}
          control={medicalProfileForm.control}
          imaskProps={{
            mask: Number,
            scale: 0, // zero for integer
          }}
        />
        <MaskedInput
          name="weight"
          label="Peso (kg)"
          placeholder="Peso em quilogramas"
          disabled={!isEditing}
          control={medicalProfileForm.control}
          imaskProps={{
            mask: Number,
            scale: 0, // zero for integer
          }}
        />
        <TextInput
          name="emergency_name"
          label="Nome contato de emergencia"
          placeholder="Nome do contato de emergencia"
          register={medicalProfileForm.register}
          disabled={!isEditing}
        />
        <MaskedInput
          label="Número de contato de emergencia"
          name="emergency_contact"
          placeholder="(99) 99999-9999"
          control={medicalProfileForm.control}
          disabled={!isEditing}
          errorMessage={
            medicalProfileForm.formState.errors?.emergency_contact?.message
          }
          imaskProps={{
            mask: '(00) 00000-0000',
          }}
        />
        <InputWrapper
          label="Doenças"
          forId="diseases"
          errorMessage={
            medicalProfileForm.formState.errors.diseases?.message as string
          }
        >
          <ControlledTagSelect
            control={medicalProfileForm.control}
            name="diseases"
            tagSelectProps={{
              isDisabled: !isEditing,
              options: medicalProfileForm.watch('diseases'),
            }}
          />
        </InputWrapper>
        <InputWrapper
          label="Alergias"
          forId="allergies"
          errorMessage={
            medicalProfileForm.formState.errors.allergies?.message as string
          }
        >
          <ControlledTagSelect
            control={medicalProfileForm.control}
            name="allergies"
            tagSelectProps={{
              isDisabled: !isEditing,
              options: medicalProfileForm.watch('allergies'),
            }}
          />
        </InputWrapper>
      </StyledSectionForm>
    </SectionWrapper>
  );
};
