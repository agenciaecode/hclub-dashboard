import React, {
  memo,
  ReactElement,
  SyntheticEvent,
  useCallback,
  useState,
} from 'react';

import { SelectItem } from '@radix-ui/react-select';

import { Spinner } from '@components/feedback/spinner';
import { Button } from '@components/forms/button';
import { ErrorLabel } from '@components/forms/error-label';
import { LoadingButton } from '@components/forms/loading-button';
import { Select, SelectOption } from '@components/forms/select';
import { SelectItemText } from '@components/forms/select/PrimitiveSelect';
import { Flex } from '@components/layout/flex';
import { DescriptiveModal, DialogClose } from '@components/overlay/modal';
import { Text } from '@components/typography/text';
import { showToastSuccessMessage } from '@libs/toast/showToastMessage';
import { animationDelay } from '@utils/animation/animation-delay';

import type { CardType } from '@features/cards';

import { styled } from '@/theme';

// eslint-disable-next-line import/no-cycle
import { useAddSocialMediaMutation } from './api/addSocialMedia';
// eslint-disable-next-line import/no-cycle
import { useListSocialMediasQuery } from './api/listSocialMedias';

export type AddSocialMediaModalProps = {
  cardSlug: CardType;
  triggerButton: ReactElement;
};

const EMPTY_OPTION = '';

/**
 * Modal to add a social media
 * @param cardSlug
 * @param triggerButton
 * @constructor
 */
export const AddSocialMediaSelect = ({
  cardSlug,
  triggerButton,
}: AddSocialMediaModalProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = useCallback(() => setIsModalOpen(false), []);

  return (
    <DescriptiveModal
      title="Adicionar Rede Social"
      description="Selecione a rede social que deseja adicionar"
      triggerButton={triggerButton}
      open={isModalOpen}
      onOpenChange={setIsModalOpen}
    >
      <AddSocialMediaModalContent cardSlug={cardSlug} closeModal={closeModal} />
    </DescriptiveModal>
  );
};

type AddSocialMediaModalContentProps = Pick<
  AddSocialMediaModalProps,
  'cardSlug'
> & {
  closeModal: () => void;
};

/**
 * Decoupled form to add a social media, used as separated content component to lazy load form stateful logic.
 * @param card
 * @constructor
 */
const AddSocialMediaModalContent = memo(
  ({ cardSlug: card, closeModal }: AddSocialMediaModalContentProps) => {
    const [selectedSocialMedia, setSelectedSocialMedia] =
      useState<string>(EMPTY_OPTION);
    const [selectError, setSelectError] = useState<string>('');
    const listSocialMediasQuery = useListSocialMediasQuery();
    const addSocialMediaMutation = useAddSocialMediaMutation();

    function handleAddSocialMediaSubmit(event: SyntheticEvent) {
      event.preventDefault();
      if (selectedSocialMedia === EMPTY_OPTION) {
        setSelectError('Please select a social media');
        return;
      }
      // console.log(`Adding social media ${selectedSocialMedia} to card ${card}`);
      if (addSocialMediaMutation.isLoading) return;
      addSocialMediaMutation.mutate(
        {
          card,
          social_media_id: Number(selectedSocialMedia),
          value: 'teste',
        },
        {
          onSuccess: () => {
            showToastSuccessMessage('Rede social adicionada com sucesso!');
          },
        },
      );
    }

    function handleSelectOptionChange(selectedOption: string) {
      // console.log(`Selected option ${selectedOption}`);
      setSelectedSocialMedia(selectedOption);
      if (selectedOption !== EMPTY_OPTION) setSelectError('');
    }

    return (
      <form
        onSubmit={handleAddSocialMediaSubmit}
        onReset={() => handleSelectOptionChange(EMPTY_OPTION)}
      >
        <Flex direction="column" gap="1rem" css={{ marginBottom: '3rem' }}>
          <StyledSelect
            label="Rede Social"
            name="social-media-select"
            id="social-media-select"
            defaultValue={EMPTY_OPTION}
            onValueChange={handleSelectOptionChange}
            value={selectedSocialMedia}
          >
            {listSocialMediasQuery.isLoading && (
              <SelectItem value={EMPTY_OPTION} disabled>
                <SelectItemText>
                  <Spinner color="secondary" />
                </SelectItemText>
              </SelectItem>
            )}
            {listSocialMediasQuery.isError && (
              <SelectItem value={EMPTY_OPTION} disabled>
                <SelectItemText>
                  <Text css={{ color: 'red' }}>
                    Erro ao carregar redes sociais
                  </Text>
                </SelectItemText>
              </SelectItem>
            )}
            {listSocialMediasQuery.isSuccess && (
              <>
                <SelectOption
                  value={EMPTY_OPTION}
                  disabled
                  text="Selecione uma rede social..."
                />
                {listSocialMediasQuery.data.map(socialMedia => (
                  <SelectOption
                    key={socialMedia.id}
                    value={String(socialMedia.id)}
                    text={socialMedia.name}
                  />
                ))}
              </>
            )}
          </StyledSelect>
          <ErrorLabel errorMessage={selectError} />
        </Flex>

        <Flex gap="2rem">
          <DialogClose asChild>
            <Button btn="secondary" type="reset">
              Cancelar
            </Button>
          </DialogClose>
          <LoadingButton
            isLoading={addSocialMediaMutation.isLoading}
            isSuccess={addSocialMediaMutation.isSuccess}
            onAnimationFinished={async () => {
              await animationDelay();
              closeModal();
            }}
          >
            Confirmar
          </LoadingButton>
        </Flex>
      </form>
    );
  },
);

AddSocialMediaModalContent.displayName = 'AddSocialMediaModalContent';

const StyledSelect = styled(Select, {
  width: 'stretch',
  '@md': {
    width: '35rem',
  },
});
