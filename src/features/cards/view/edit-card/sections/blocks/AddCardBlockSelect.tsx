/* eslint-disable import/no-cycle */
import React, { SyntheticEvent, useCallback, useState } from 'react';

import { VisuallyHidden } from '@components/disclosure/visually-hidden';
import { Spinner } from '@components/feedback/spinner';
import { Button } from '@components/forms/button';
import { SelectOption } from '@components/forms/select';
import { DialogTitle, Modal } from '@components/overlay/modal';
import { Text } from '@components/typography/text';

import {
  StyledSelectWrapper,
  StyledSelect,
} from '../social-medias/AddSocialMediaSelect';
import type { AnyBlockType } from './api/getCardBlocks';
import {
  BlockTypeOption,
  useListCardBlockTypesQuery,
} from './api/listCardBlockTypes';
import { CardBlockFormByType } from './components/CardBlockForm';

const EMPTY_OPTION = '';
/**
 * Select to add a new card block
 */
export const AddCardBlockSelect = () => {
  const [selectedBlockType, setSelectedBlockType] = useState<BlockTypeOption>();
  const listBlockTypesQuery = useListCardBlockTypesQuery();

  const closeAddingBlockFormModal = useCallback(() => {
    setSelectedBlockType(undefined);
  }, []);

  function handleAddBlockButtonClick(event: SyntheticEvent) {
    if (!listBlockTypesQuery.isSuccess) {
      event.preventDefault();
      return;
    }
    setSelectedBlockType(selectedBlockType);
  }

  function handleCardBlockTypeSelectionChange(selectedType: string) {
    const matchingSelectedBlockType = listBlockTypesQuery?.data?.find(
      blockType => blockType.type === selectedType,
    ) as BlockTypeOption;
    setSelectedBlockType(matchingSelectedBlockType);
  }

  return (
    <StyledSelectWrapper>
      <StyledSelect
        label="Rede Social"
        name="social-media-select"
        id="social-media-select"
        defaultValue={EMPTY_OPTION}
        onValueChange={handleCardBlockTypeSelectionChange}
        value={selectedBlockType?.type ?? EMPTY_OPTION}
      >
        {listBlockTypesQuery.isLoading && (
          <SelectOption value={EMPTY_OPTION} disabled>
            <Spinner color="secondary" />
          </SelectOption>
        )}
        {listBlockTypesQuery.isError && (
          <SelectOption value={EMPTY_OPTION} disabled>
            <Text color="negative">Erro ao carregar redes sociais</Text>
          </SelectOption>
        )}
        {listBlockTypesQuery.isSuccess && (
          <>
            <SelectOption
              value={EMPTY_OPTION}
              disabled
              text="Selecione um bloco de informação..."
            />
            {listBlockTypesQuery.data.map(blockType => (
              <SelectOption
                key={blockType.type}
                value={blockType.type}
                text={blockType.type_label}
              />
            ))}
          </>
        )}
      </StyledSelect>
      <Modal
        triggerButton={
          <Button
            disabled={!selectedBlockType}
            type="button"
            onClick={handleAddBlockButtonClick}
          >
            Adicionar
          </Button>
        }
      >
        {selectedBlockType && (
          <>
            <VisuallyHidden asChild>
              <DialogTitle>
                Adicionar bloco de {selectedBlockType.type_label}
              </DialogTitle>
            </VisuallyHidden>
            <CardBlockFormByType
              managingBlock={selectedBlockType as AnyBlockType}
              handleSuccesfullFormSubmit={closeAddingBlockFormModal}
            />
          </>
        )}
      </Modal>
    </StyledSelectWrapper>
  );
};