/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';

import { SelectItem } from '@radix-ui/react-select';

import { Spinner } from '@components/feedback/spinner';
import { Button } from '@components/forms/button';
import { ControlledDatePicker } from '@components/forms/date-picker';
import { ErrorLabel } from '@components/forms/error-label';
import { InputWrapper } from '@components/forms/input-wrapper';
import { Label } from '@components/forms/label';
import { LoadingButton } from '@components/forms/loading-button';
import { MaskedInput } from '@components/forms/masked-input';
import { Select, SelectOption } from '@components/forms/select';
import { SelectItemText } from '@components/forms/select/PrimitiveSelect';
import { ControlledSwitch } from '@components/forms/switch';
import { TextInput } from '@components/forms/text-input';
import { setFormErrorsFromException, useFormWithSchema } from '@libs/hook-form';
import { showToastSuccessMessage } from '@libs/toast/showToastMessage';
import { useHttpExceptionHandler } from '@services/http/hooks/useHttpExceptionHandler';
import { removePhoneMask, removePhoneRegionNumber } from '@utils/mask/phone';

import {
  useUserProfileQuery,
  UpdateUserProfileValidationErrors,
  useUpdateUserProfileMutation,
} from '@features/user';

import { SectionWrapper } from '../../components/section-wrapper';
import { StyledSectionForm } from '../../UserAccountPage.styles';
import { accountFormSchema } from './AccountForm.schema';
import {
  StyledLabelledTextArea,
  StyledSwitchWrapper,
} from './AccountForm.styles';
import { useCitiesListQuery } from './api/getCitiesList';
import { useStatesListQuery } from './api/getStatesList';

const INITIAL_SELECTED_STATE = '';
const EMPTY_CITY_OPTION = '';

/**
 * Workarround solution for hook-form and imask form reset conflict
 * @param phoneNumber
 */
function reaplyPhoneMask(phoneNumber?: string) {
  if (!phoneNumber || phoneNumber.includes('(')) return phoneNumber;
  const [ddd, number] = phoneNumber.split(' ');
  return `(${ddd}) ${number}`;
}

export const AccountForm = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [selectedState, setSelectedState] = useState(INITIAL_SELECTED_STATE);
  const [selectedCity, setSelectedCity] = useState(EMPTY_CITY_OPTION);
  const stateListQuery = useStatesListQuery();
  const citiesListQuery = useCitiesListQuery({
    state_acronym: selectedState,
  });
  const userProfileQuery = useUserProfileQuery();
  const updateProfileMutation = useUpdateUserProfileMutation();
  const {
    formState: { errors: accountFormErrors },
    ...accountForm
  } = useFormWithSchema(accountFormSchema);
  const isLoadingFormData =
    userProfileQuery.isLoading ||
    stateListQuery.isLoading ||
    citiesListQuery.isLoading;

  useEffect(() => {
    accountForm.reset({
      name: userProfileQuery.data?.name,
      username: userProfileQuery.data?.username,
      email: userProfileQuery.data?.email,
      birthday: userProfileQuery.data?.birthday
        ? new Date(userProfileQuery.data?.birthday)
        : undefined,
      birthday_privacy: userProfileQuery.data?.birthday_privacy === 'public',
      bio: userProfileQuery.data?.bio,
      cellphone: reaplyPhoneMask(
        removePhoneRegionNumber(userProfileQuery.data?.cellphone),
      ), // TODO remove manual replace +55 region number
      city_id: userProfileQuery.data?.city?.id,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userProfileQuery.data]);

  useEffect(() => {
    if (
      selectedState === INITIAL_SELECTED_STATE &&
      stateListQuery.isSuccess &&
      userProfileQuery.data?.city?.uf
    ) {
      // after user profile and states list queries are loaded, select the user city state if exists
      setSelectedState(userProfileQuery.data.city.uf);
      setSelectedCity(EMPTY_CITY_OPTION);
    }
  }, [stateListQuery, userProfileQuery, selectedState]);

  useEffect(() => {
    if (
      selectedCity === EMPTY_CITY_OPTION &&
      citiesListQuery.isSuccess &&
      userProfileQuery.data?.city?.id &&
      userProfileQuery.data?.city?.uf === selectedState
    ) {
      setSelectedCity(String(userProfileQuery.data?.city?.id));
    }
  }, [
    userProfileQuery,
    selectedState,
    citiesListQuery.isSuccess,
    selectedCity,
  ]);

  useHttpExceptionHandler(updateProfileMutation.error, exceptionHandler =>
    exceptionHandler
      .setValidationExceptionHandler<UpdateUserProfileValidationErrors>(
        setFormErrorsFromException(accountForm.setError),
      )
      .executeHandler(),
  );

  function handleAccountFormSubmit() {
    if (isLoadingFormData || updateProfileMutation.isLoading) return;
    const { birthday_privacy, cellphone, ...submittedFormValues } =
      accountForm.getValues();
    updateProfileMutation.mutate(
      {
        ...submittedFormValues,
        cellphone: `+55 ${removePhoneMask(cellphone)}`, // TODO add region number in the input select
        birthday_privacy: birthday_privacy ? 'public' : 'private',
      },
      {
        onSuccess: () =>
          showToastSuccessMessage('Perfil atualizado com sucesso!'),
      },
    );
  }

  return (
    <SectionWrapper
      title="Conta"
      toolbarSlot={
        isEditing ? (
          <LoadingButton
            isLoading={updateProfileMutation.isLoading}
            isSuccess={updateProfileMutation.isSuccess}
            disabled={isLoadingFormData}
            onAnimationFinished={() => {
              updateProfileMutation.reset();
              setIsEditing(false);
            }}
            onClick={() => {
              accountForm.handleSubmit(handleAccountFormSubmit)();
            }}
          >
            Salvar
          </LoadingButton>
        ) : (
          <Button
            btn="secondary"
            disabled={isLoadingFormData}
            onClick={() => setIsEditing(true)}
          >
            Editar dados
          </Button>
        )
      }
    >
      <StyledSectionForm
        onSubmit={accountForm.handleSubmit(handleAccountFormSubmit)}
      >
        <TextInput
          name="name"
          label="Nome"
          placeholder="Insira o seu nome"
          register={accountForm.register}
          disabled={!isEditing}
          errorMessage={accountFormErrors.name?.message}
        />
        <TextInput
          name="username"
          label="Usuário"
          placeholder="insira o nome de usuário"
          register={accountForm.register}
          disabled={!isEditing}
          errorMessage={accountFormErrors.username?.message}
        />
        <TextInput
          name="email"
          label="E-mail"
          placeholder="insira seu e-mail"
          register={accountForm.register}
          disabled={!isEditing}
          errorMessage={accountFormErrors.email?.message}
        />
        <MaskedInput
          label="Número de telefone"
          imaskProps={{
            mask: '(00) 00000-0000',
          }}
          name="cellphone"
          placeholder="(99) 99999-9999"
          control={accountForm.control}
          disabled={!isEditing}
          errorMessage={accountFormErrors.cellphone?.message}
        />

        <InputWrapper label="Data nascimento" forId="birthday">
          <ControlledDatePicker
            name="birthday"
            id="birthday"
            control={accountForm.control}
            disabled={!isEditing}
          />
          <ErrorLabel
            htmlFor="birthday"
            errorMessage={accountFormErrors.birthday?.message}
          />
        </InputWrapper>

        <StyledSwitchWrapper>
          <Label htmlFor="birthday_privacy">Exibir data de nascimento</Label>
          <ControlledSwitch
            name="birthday_privacy"
            control={accountForm.control}
            switchProps={{
              disabled: !isEditing,
            }}
          />
        </StyledSwitchWrapper>

        <StyledLabelledTextArea
          label="Bio"
          id="bio"
          rows={4}
          disabled={!isEditing}
          {...accountForm.register('bio')}
        />

        <InputWrapper label="Estado" forId="state_id">
          <Select
            label="Selecione o estado"
            defaultValue=""
            value={selectedState}
            id="state_id"
            disabled={!isEditing || stateListQuery.isLoading}
            onValueChange={stateCode => {
              setSelectedState(stateCode);
              setSelectedCity(EMPTY_CITY_OPTION);
            }}
          >
            {stateListQuery.isLoading && (
              <SelectItem value={INITIAL_SELECTED_STATE} disabled>
                <SelectItemText>
                  <Spinner color="secondary" />
                </SelectItemText>
              </SelectItem>
            )}
            {stateListQuery.isSuccess && (
              <>
                <SelectOption
                  value={INITIAL_SELECTED_STATE}
                  text="Selecione o estado"
                />
                {stateListQuery.data.map(state => (
                  <SelectOption
                    key={state.uf}
                    value={state.uf}
                    text={state.name}
                  />
                ))}
              </>
            )}
            {stateListQuery.isError && (
              <SelectOption
                value={INITIAL_SELECTED_STATE}
                text="Falha ao carregar estados"
              />
            )}
          </Select>
        </InputWrapper>

        <InputWrapper label="Cidade" forId="city_id">
          <Select
            label="Selecione a cidade"
            defaultValue={EMPTY_CITY_OPTION}
            value={selectedCity}
            id="city_id"
            disabled={!isEditing}
            onValueChange={cityCode => setSelectedCity(cityCode)}
          >
            {citiesListQuery.isLoading && (
              <SelectItem value={EMPTY_CITY_OPTION} disabled>
                <SelectItemText>
                  <Spinner color="secondary" />
                </SelectItemText>
              </SelectItem>
            )}
            {citiesListQuery.isSuccess && (
              <>
                <SelectOption
                  value={EMPTY_CITY_OPTION}
                  text="Selecione a cidade"
                />
                {citiesListQuery.data.map(city => (
                  <SelectOption
                    key={city.id}
                    value={String(city.id)}
                    text={city.name}
                  />
                ))}
              </>
            )}
            {citiesListQuery.isIdle && (
              <SelectOption
                value={EMPTY_CITY_OPTION}
                text="Selecione um estado primeiro"
              />
            )}
          </Select>
        </InputWrapper>
      </StyledSectionForm>
    </SectionWrapper>
  );
};
