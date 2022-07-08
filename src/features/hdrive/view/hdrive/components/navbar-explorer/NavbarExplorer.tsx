/* eslint-disable react/jsx-props-no-spreading */
import { useRef } from 'react';

import { FieldValues, useForm } from 'react-hook-form';

import { Button } from '@components/forms/button';
import { apiDashboard } from '@services/app';

import {
  StyledLeftContent,
  StyledNavbarExplorer,
  StyledRightContent,
} from './NavbarExplorer.styles';

const NavbarExplorer = () => {
  const inputFileRef = useRef<HTMLInputElement | null>(null);
  const { handleSubmit, register } = useForm();

  async function onSubmit(bodyRequest: FieldValues) {
    const formData = new FormData();
    formData.append('file', bodyRequest.target.files[0]);

    const endpoint = 'hdrive/files/';

    await apiDashboard.post(endpoint, formData);
  }

  return (
    <StyledNavbarExplorer>
      <StyledLeftContent> </StyledLeftContent>
      <StyledRightContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            hidden
            type="file"
            {...register('file')}
            ref={originalRef => {
              register('file').ref(originalRef);
              inputFileRef.current = originalRef;
            }}
            onChange={onSubmit}
          />
          <Button
            btn="secondary"
            onClick={() => inputFileRef?.current?.click()}
            outlined
            type="button"
          >
            Novo
          </Button>
        </form>
      </StyledRightContent>
    </StyledNavbarExplorer>
  );
};

export { NavbarExplorer };
