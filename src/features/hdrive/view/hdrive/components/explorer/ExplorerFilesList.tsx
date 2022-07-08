/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-unescaped-entities */
import { useForm } from 'react-hook-form';

import { Button } from '@components/forms/button';
import { TextInput } from '@components/forms/text-input';
import { useQueryDashboard } from '@hooks/useQuery';
import { apiDashboard } from '@services/app';

import { DialogModal } from '../DialogModal/DialogModal';
import { DropdownButton } from '../DropdownButton/DropdownButton';
import { DotsIcon } from '../icons/dots-icon/DotsIcon';
import { EditIcon } from '../icons/edit-icon/EditIcon';
import { FileIcon } from '../icons/file-icon/FileIcon';
import { FolderIcon } from '../icons/folder-icon/FolderIcon';
import { TrashIcon } from '../icons/trash-icon/TrashIcon';
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
      created_at: string;
      tamanho: string;
      media: {
        size: number;
      };
    },
  ];
};

const ExplorerFilesList = () => {
  const { register } = useForm();

  const { data } = useQueryDashboard<FileData>('/hdrive/explorer', {
    optionsQuery: {
      refetchOnWindowFocus: false,
    },
  });

  async function onUpdate(id: string, name: string) {
    // const endpoint = `hdrive/${id}/rename`;
    // await apiDashboard.delete(endpoint);
  }

  async function onDelete(id: string, fileType: string) {
    const endpoint =
      fileType === 'file'
        ? `hdrive/files/${id}/delete`
        : `hdrive/folders/${id}/delete`;
    await apiDashboard.delete(endpoint);
  }

  return data?.data ? (
    <StyledExplorerFilesList>
      <StyledTbody>
        {data?.data.map(file => (
          <ExplorerFileItem key={file.id}>
            <StyledExplorerTd svgSpace size="lg">
              {file.type === 'file' ? <FileIcon /> : <FolderIcon />}
              {file.name}
            </StyledExplorerTd>
            <StyledExplorerTd>{file.created_at}</StyledExplorerTd>
            <StyledExplorerTd>
              {file.media?.size
                ? `${(file.media.size / 1024 / 1024).toFixed(2)} Mb`
                : 'Pasta'}
            </StyledExplorerTd>
            <StyledExplorerTd>
              <DropdownButton icon={<DotsIcon />}>
                <DialogModal
                  dialogTitle="Editar"
                  btn={<EditIcon />}
                  btnTitle="Editar"
                >
                  <TextInput
                    type="text"
                    label="Nome"
                    name="name"
                    value={file.name}
                    placeholder="Insira seu nome"
                    register={register}
                  />
                  <Button
                    type="submit"
                    css={{ width: '100%' }}
                    onClick={() => onUpdate(file.id, file.name)}
                  >
                    Salvar
                  </Button>
                </DialogModal>
                <DialogModal
                  dialogTitle="Excluir arquivo?"
                  dialogDescription="Está ação não poderá ser desfeita"
                  btn={<TrashIcon />}
                  btnTitle="Excluir"
                >
                  <Button
                    onClick={() => onDelete(file.id, file.type)}
                    css={{ width: '250px' }}
                  >
                    Excluir
                  </Button>
                </DialogModal>
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
