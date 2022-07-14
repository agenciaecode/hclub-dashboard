/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { MouseEventHandler, ReactElement, ReactNode, useState } from 'react';

import * as Dialog from '@radix-ui/react-dialog';
import { useQueryClient } from 'react-query';
import { toast } from 'react-toastify';

import { Button } from '@components/forms/button';
import { useQueryDashboard } from '@hooks/useQuery';
import { apiDashboard } from '@services/app';

import { DialogModal } from '../dialog-modal/DialogModal';
import { CloseMenuIcon } from '../icons/close-menu-icon/CloseMenuIcon';
import {
  StyledDialogButton,
  StyledDialogClose,
  StyledDialogContent,
  StyledDialogContentBottom,
  StyledDialogContentImg,
  StyledDialogTrigger,
  StyledOverlay,
  StyledTitle,
  StyledTopBar,
} from './InfoDialogModal.styles';

type InfoDialogModalProps = {
  btn: string | ReactElement;
  children: ReactNode;
  dialogTitle?: string;
  fileId: string;
  fileType: string;
  filePrivacy: string;
  onClick?: MouseEventHandler;
};

const InfoDialogModal = ({
  children,
  btn,
  dialogTitle,
  fileId,
  fileType,
  filePrivacy,
  onClick,
}: InfoDialogModalProps) => {
  const queryClient = useQueryClient();
  const [isLoading, setIsLoading] = useState(false);

  const { data, isFetching } = useQueryDashboard<any>(
    `/hdrive/files/${fileId}/url`,
    {
      optionsQuery: {
        refetchOnWindowFocus: false,
      },
    },
  );

  async function onDelete(id: string, type: string) {
    const endpoint =
      type === 'file'
        ? `hdrive/files/${id}/delete`
        : `hdrive/folders/${id}/delete`;
    await apiDashboard.delete(endpoint).then(() => {
      queryClient.invalidateQueries(['/hdrive/explorer']);
      toast.success('Arquivo removido.');
    });
  }

  async function onChangePrivacy(id: string, type: string, privacy: string) {
    setIsLoading(true);
    const bodyRequest = { id, fileType, privacy };
    const endpoint =
      bodyRequest.fileType === 'file'
        ? `hdrive/files/${bodyRequest.id}/privacy`
        : `hdrive/folders/${bodyRequest.id}/privacy`;
    await apiDashboard.patch(endpoint, bodyRequest).then(() => {
      queryClient.invalidateQueries(['/hdrive/explorer']);
      toast.success('Privacidade de arquivo alterada.');
      setIsLoading(false);
    });
  }

  return (
    <Dialog.Root>
      <StyledDialogTrigger onClick={onClick}>{btn}</StyledDialogTrigger>
      <Dialog.Portal>
        <StyledOverlay>
          <StyledDialogContent>
            {dialogTitle && (
              <StyledTopBar>
                <StyledTitle>{dialogTitle}</StyledTitle>
                <StyledDialogClose>
                  <CloseMenuIcon />
                </StyledDialogClose>
              </StyledTopBar>
            )}
            {isFetching ? (
              'Carregando...'
            ) : (
              <StyledDialogContentImg src={data?.url} />
            )}
            {children}
            <StyledDialogContentBottom>
              <DialogModal
                dialogTitle="Excluir arquivo?"
                dialogDescription="Está ação não poderá ser desfeita"
                btn="Excluir"
                btnType="dialogButton"
              >
                <Button
                  onClick={() => onDelete(fileId, fileType)}
                  css={{ width: '250px' }}
                >
                  Excluir
                </Button>
              </DialogModal>
              <StyledDialogButton
                onClick={() =>
                  onChangePrivacy(
                    fileId,
                    fileType,
                    filePrivacy === 'public' ? 'private' : 'public',
                  )
                }
              >
                {isLoading
                  ? 'Alterando...'
                  : filePrivacy === 'private'
                  ? 'Tornar público'
                  : 'Tornar privado'}
              </StyledDialogButton>
            </StyledDialogContentBottom>
          </StyledDialogContent>
        </StyledOverlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

InfoDialogModal.defaultProps = {
  onClick: null,
  dialogTitle: null,
};

export { InfoDialogModal };
