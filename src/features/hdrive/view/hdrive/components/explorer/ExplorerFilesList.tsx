/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';

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
  const { register, handleSubmit } = useForm();
  const [isRenomearOpen, setIsRenomearOpen] = useState(false);
  const [isExcluirOpen, setIsExcluirOpen] = useState(false);

  const { data } = useQueryDashboard<FileData>('/hdrive/explorer', {
    optionsQuery: {
      refetchOnWindowFocus: false,
    },
  });

  async function onUpdate(bodyRequest: FieldValues) {
    const endpoint = `hdrive/${bodyRequest.id}/rename`;
    await apiDashboard.patch(endpoint, bodyRequest);
    setIsRenomearOpen(false);
    setIsExcluirOpen(false);
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
                : '--'}
            </StyledExplorerTd>
            <StyledExplorerTd>
              <DropdownButton icon={<DotsIcon />}>
                <DropdownButtonItem>
                  <DialogModal
                    onClick={() => setIsRenomearOpen(true)}
                    isOpen={isRenomearOpen}
                    dialogTitle="Renomear"
                    btn="Renomear"
                  >
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
                    onClick={() => setIsExcluirOpen(true)}
                    isOpen={isExcluirOpen}
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
                <DropdownButtonItem>Tornar público</DropdownButtonItem>
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
