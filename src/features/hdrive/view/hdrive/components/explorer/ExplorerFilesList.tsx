/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-unescaped-entities */
// import { FieldValues, useForm } from 'react-hook-form';
import { useState } from 'react';

import { toast } from 'react-toastify';

import { Button } from '@components/forms/button';
// import { TextInput } from '@components/forms/text-input';
import { useQueryDashboard } from '@hooks/useQuery';
import { apiDashboard } from '@services/app';

import { DialogModal } from '../dialog-modal/DialogModal';
import { DropdownButton } from '../dropdown-button/DropdownButton';
import { DropdownButtonItem } from '../dropdown-button/DropdownButtonItem';
import { DotsIcon } from '../icons/dots-icon/DotsIcon';
import { FileIcon } from '../icons/file-icon/FileIcon';
import { FolderIcon } from '../icons/folder-icon/FolderIcon';
import { InfoIcon } from '../icons/info-icon/InfoIcon';
import { PrivacyIcon } from '../icons/privacy-icon/PrivacyIcon';
import { InfoDialogModal } from '../info-dialog-modal/InfoDialogModal';
import { InfoDialogModalItem } from '../info-dialog-modal/InfoDialogModalItem';
import { ExplorerFileItem } from './ExplorerFileItem';
import { StyledExplorerTd } from './ExplorerFileItem.styles';
import {
  StyledExplorerFilesList,
  StyledNoFiles,
  StyledTbody,
} from './ExplorerFilesList.styles';

type FileData = {
  data: [
    {
      id: string;
      name: string;
      type: string;
      privacy: string;
      created_at: string;
      tamanho: string;
      media: {
        size: number;
      };
    },
  ];
};

const ExplorerFilesList = () => {
  // const { register, handleSubmit } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const { data, refetch } = useQueryDashboard<FileData>('/hdrive/explorer', {
    optionsQuery: {
      refetchOnWindowFocus: false,
    },
  });

  // async function onUpdate(bodyRequest: FieldValues) {
  //   const endpoint = `hdrive/${bodyRequest.id}/rename`;
  //   await apiDashboard.patch(endpoint, bodyRequest).then(() => {
  //     toast.success('Arquivo renomeado.');
  //     refetch();
  //   });
  // }

  async function onDelete(id: string, fileType: string) {
    const endpoint =
      fileType === 'file'
        ? `hdrive/files/${id}/delete`
        : `hdrive/folders/${id}/delete`;
    await apiDashboard.delete(endpoint).then(() => {
      toast.success('Arquivo removido.');
      refetch();
    });
  }

  async function onChangePrivacy(
    id: string,
    fileType: string,
    privacy: string,
  ) {
    setIsLoading(true);
    const bodyRequest = { id, fileType, privacy };
    const endpoint =
      bodyRequest.fileType === 'file'
        ? `hdrive/files/${bodyRequest.id}/privacy`
        : `hdrive/folders/${bodyRequest.id}/privacy`;
    await apiDashboard.patch(endpoint, bodyRequest).then(() => {
      toast.success('Privacidade de arquivo alterada.');
      refetch();
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    });
  }

  return data?.data && data.data.length > 0 ? (
    <StyledExplorerFilesList>
      <StyledTbody>
        {data?.data.map(file => (
          <ExplorerFileItem key={file.id}>
            <StyledExplorerTd svgSpace="right" size="lg" displayOn="both">
              {file.type === 'file' ? <FileIcon /> : <FolderIcon />}
              {file.name}
              {file.privacy !== 'private' && <PrivacyIcon />}
            </StyledExplorerTd>
            <StyledExplorerTd displayOn="desktop">
              {file.created_at}
            </StyledExplorerTd>
            <StyledExplorerTd displayOn="desktop">
              {file.media?.size
                ? `${(file.media.size / 1024 / 1024).toFixed(2)} Mb`
                : '--'}
            </StyledExplorerTd>
            <StyledExplorerTd displayOn="desktop">
              <DropdownButton icon={<DotsIcon />}>
                {/* <DropdownButtonItem>
                  <DialogModal dialogTitle="Renomear" btn="Renomear">
                    <form onSubmit={handleSubmit(onUpdate)}>
                      <TextInput
                        css={{ display: 'none' }}
                        readOnly
                        name="id"
                        value={file.id}
                        register={register}
                        label=""
                        placeholder=""
                      />
                      <TextInput
                        type="text"
                        name="name"
                        placeholder="Novo nome"
                        register={register}
                      />
                      <Button
                        type="submit"
                        css={{ width: '100%', marginTop: '1.5rem' }}
                      >
                        Renomear
                      </Button>
                    </form>
                  </DialogModal>
                </DropdownButtonItem>
                <DropdownButtonItem>Mover</DropdownButtonItem> */}
                <DropdownButtonItem>
                  <InfoDialogModal
                    fileId={file.id}
                    fileType={file.type}
                    filePrivacy={file.privacy}
                    dialogTitle="Informações"
                    btn="Informações"
                  >
                    <InfoDialogModalItem label="Nome" value={file.name} />

                    <InfoDialogModalItem
                      label="Tamanho"
                      value={
                        file.media?.size
                          ? `${(file.media.size / 1024 / 1024).toFixed(2)} Mb`
                          : '--'
                      }
                    />

                    <InfoDialogModalItem label="Local" value="---" />

                    <InfoDialogModalItem
                      label="Criado em"
                      value={file.created_at}
                    />

                    <InfoDialogModalItem
                      label="Privacidade"
                      value={file.privacy}
                    />
                  </InfoDialogModal>
                </DropdownButtonItem>
                <DropdownButtonItem>
                  <DialogModal
                    dialogTitle="Excluir arquivo?"
                    dialogDescription="Está ação não poderá ser desfeita"
                    btn="Excluir"
                  >
                    <Button
                      onClick={() => onDelete(file.id, file.type)}
                      css={{ width: '250px' }}
                    >
                      Excluir
                    </Button>
                  </DialogModal>
                </DropdownButtonItem>
                <DropdownButtonItem
                  onClick={() =>
                    onChangePrivacy(
                      file.id,
                      file.type,
                      file.privacy === 'public' ? 'private' : 'public',
                    )
                  }
                >
                  {isLoading
                    ? 'Alterando...'
                    : file.privacy === 'private'
                    ? 'Tornar público'
                    : 'Tornar privado'}
                </DropdownButtonItem>
              </DropdownButton>
            </StyledExplorerTd>
            <StyledExplorerTd displayOn="mobile">
              <InfoDialogModal
                fileId={file.id}
                fileType={file.type}
                filePrivacy={file.privacy}
                dialogTitle="Informações"
                btn={<InfoIcon />}
              >
                <InfoDialogModalItem label="Nome" value={file.name} />

                <InfoDialogModalItem
                  label="Tamanho"
                  value={
                    file.media?.size
                      ? `${(file.media.size / 1024 / 1024).toFixed(2)} Mb`
                      : '--'
                  }
                />

                <InfoDialogModalItem label="Local" value="---" />

                <InfoDialogModalItem
                  label="Criado em"
                  value={file.created_at}
                />

                <InfoDialogModalItem label="Privacidade" value={file.privacy} />
              </InfoDialogModal>
            </StyledExplorerTd>
          </ExplorerFileItem>
        ))}
      </StyledTbody>
    </StyledExplorerFilesList>
  ) : (
    <StyledNoFiles>
      Clique em "Novo" para adicionar aquivos a sua nuvem Hdrive.
    </StyledNoFiles>
  );
};

export { ExplorerFilesList };
