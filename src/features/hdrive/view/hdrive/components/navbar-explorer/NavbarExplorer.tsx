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
  const inputFileRef = useRef();
  const { handleSubmit } = useForm();

  async function onSubmit(bodyRequest: FieldValues) {
    const endpoint = '/files/';
    await apiDashboard.post(endpoint, bodyRequest);
  }

  return (
    <StyledNavbarExplorer>
      <StyledLeftContent> </StyledLeftContent>
      <StyledRightContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input hidden type="file" ref={inputFileRef} />
          <Button
            btn="secondary"
            onClick={() => inputFileRef.current.click()}
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
