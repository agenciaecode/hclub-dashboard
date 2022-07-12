/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-unescaped-entities */
import { FieldValues, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { Button } from '@components/forms/button';
import { TextInput } from '@components/forms/text-input';
import { useQueryDashboard } from '@hooks/useQuery';
import { apiDashboard } from '@services/app';

import { DialogModal } from '../DialogModal/DialogModal';
import { DropdownButton } from '../DropdownButton/DropdownButton';
import { DropdownButtonItem } from '../DropdownButton/DropdownButtonItem';
import { DotsIcon } from '../icons/dots-icon/DotsIcon';
import { FileIcon } from '../icons/file-icon/FileIcon';
import { FolderIcon } from '../icons/folder-icon/FolderIcon';
import { PrivacyIcon } from '../icons/privacy-icon/PrivacyIcon';
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
  const { register, handleSubmit } = useForm();

  const { data } = useQueryDashboard<FileData>('/hdrive/explorer', {
    optionsQuery: {
      refetchOnWindowFocus: false,
    },
  });

  async function onUpdate(bodyRequest: FieldValues) {
    const endpoint = `hdrive/${bodyRequest.id}/rename`;
    await apiDashboard.patch(endpoint, bodyRequest);
  }

  async function onDelete(id: string, fileType: string) {
    const endpoint =
      fileType === 'file'
        ? `hdrive/files/${id}/delete`
        : `hdrive/folders/${id}/delete`;
    await apiDashboard
      .delete(endpoint)
      .then(() => toast.success('Arquivo excluído.'));
  }

  async function onChangePrivacy(
    id: string,
    fileType: string,
    privacy: string,
  ) {
    const bodyRequest = { id, fileType, privacy };
    const endpoint =
      bodyRequest.fileType === 'file'
        ? `hdrive/files/${bodyRequest.id}/privacy`
        : `hdrive/folders/${bodyRequest.id}/privacy`;
    await apiDashboard
      .patch(endpoint, bodyRequest)
      .then(() => toast.success('Privacidade alterada.'));
  }

  return data?.data ? (
    <StyledExplorerFilesList>
      <StyledTbody>
        {data?.data.map(file => (
          <ExplorerFileItem key={file.id}>
            <StyledExplorerTd svgSpace="right" size="lg">
              {file.type === 'file' ? <FileIcon /> : <FolderIcon />}
              {file.name}
              {file.privacy !== 'private' && <PrivacyIcon />}
            </StyledExplorerTd>
            <StyledExplorerTd>{file.created_at}</StyledExplorerTd>
            <StyledExplorerTd>
              {file.media?.size
                ? `${(file.media.size / 1024 / 1024).toFixed(2)} Mb`
                : '--'}
            </StyledExplorerTd>
            <StyledExplorerTd>
              <DropdownButton icon={<DotsIcon />}>
                <DropdownButtonItem>
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
                        label="Renomear pasta"
                        name="name"
                        placeholder="Novo nome para a pasta"
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
                <DropdownButtonItem>Mover</DropdownButtonItem>
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
                  {file.privacy === 'private'
                    ? 'Tornar público'
                    : 'Tornar privado'}
                </DropdownButtonItem>
              </DropdownButton>
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
