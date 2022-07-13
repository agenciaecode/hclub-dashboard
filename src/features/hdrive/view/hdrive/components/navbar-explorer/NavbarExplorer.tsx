/* eslint-disable react/jsx-props-no-spreading */
import { useRef } from 'react';

import { FieldValues, useForm } from 'react-hook-form';
import { useQueryClient } from 'react-query';
import { toast } from 'react-toastify';

import { Button } from '@components/forms/button';
import { TextInput } from '@components/forms/text-input';
import { apiDashboard } from '@services/app';

import { DialogModal } from '../DialogModal/DialogModal';
import { DropdownButton } from '../DropdownButton/DropdownButton';
import { DropdownButtonItem } from '../DropdownButton/DropdownButtonItem';
import {
  StyledLeftContent,
  StyledNavbarExplorer,
  StyledRightContent,
} from './NavbarExplorer.styles';

const NavbarExplorer = () => {
  const inputFileRef = useRef<HTMLInputElement | null>(null);
  const { handleSubmit, register } = useForm();
  const queryClient = useQueryClient();

  async function onSubmit(bodyRequest: FieldValues) {
    const formData = new FormData();
    formData.append('file', bodyRequest.target.files[0]);

    const endpoint = 'hdrive/files/';

    await apiDashboard.post(endpoint, formData).then(() => {
      queryClient.invalidateQueries(['/hdrive/explorer']);
      toast.success('Upload concluído.');
    });
  }

  async function onCreateFolder(bodyFolderRequest: FieldValues) {
    const endpoint = 'hdrive/folders/';
    await apiDashboard.post(endpoint, bodyFolderRequest).then(() => {
      queryClient.invalidateQueries(['/hdrive/explorer']);
      toast.success('Pasta criada com sucesso.');
    });
  }

  return (
    <>
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
      </form>

      <StyledNavbarExplorer>
        <StyledLeftContent> </StyledLeftContent>
        <StyledRightContent>
          <DropdownButton size="large" icon="Novo">
            <DropdownButtonItem onClick={() => inputFileRef?.current?.click()}>
              Novo arquivo
            </DropdownButtonItem>
            <DropdownButtonItem>
              <DropdownButtonItem>
                <DialogModal dialogTitle="Nova pasta" btn="Nova pasta">
                  <form onSubmit={handleSubmit(onCreateFolder)}>
                    <TextInput
                      type="text"
                      label="Pasta"
                      name="name"
                      placeholder="Nome para a pasta"
                      register={register}
                    />
                    <Button
                      type="submit"
                      css={{ width: '100%', marginTop: '1.5rem' }}
                    >
                      Criar pasta
                    </Button>
                  </form>
                </DialogModal>
              </DropdownButtonItem>
            </DropdownButtonItem>
          </DropdownButton>
        </StyledRightContent>
      </StyledNavbarExplorer>
    </>
  );
};

export { NavbarExplorer };
