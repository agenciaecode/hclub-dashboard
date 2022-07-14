import React, { SyntheticEvent, useState } from 'react';

import { notNullish } from '@antfu/utils';

import { Spinner } from '@components/feedback/spinner';
import { Button } from '@components/forms/button';
import { Select, SelectOption } from '@components/forms/select';
import { Flex } from '@components/layout/flex';
import { Modal } from '@components/overlay/modal';
import { Text } from '@components/typography/text';

import { styled } from '@/theme';

// eslint-disable-next-line import/no-cycle
import { AddSocialMediaForm } from './AddSocialMediaForm';
// eslint-disable-next-line import/no-cycle
import { SocialMedia, useListSocialMediasQuery } from './api/listSocialMedias';

const EMPTY_OPTION = '';

/**
 * Select to add a new social media
 */
export const AddSocialMediaSelect = () => {
  const [selectedSocialMediaId, setSelectedSocialMediaId] =
    useState<string>(EMPTY_OPTION);
  const [selectedSocialMedia, setSelectedSocialMedia] = useState<SocialMedia>();
  const listSocialMediasQuery = useListSocialMediasQuery();

  function handleAddSocialMediaButtonClick(event: SyntheticEvent) {
    if (!listSocialMediasQuery.isSuccess) {
      event.preventDefault();
      return;
    }
    const matchingSelectedSocialMedia = listSocialMediasQuery.data.find(
      socialMedia => socialMedia.id === Number(selectedSocialMediaId),
    );
    setSelectedSocialMedia(matchingSelectedSocialMedia);
  }

  return (
    <StyledSelectWrapper>
      <StyledSelect
        label="Rede Social"
        name="social-media-select"
        id="social-media-select"
        defaultValue={EMPTY_OPTION}
        onValueChange={setSelectedSocialMediaId}
        value={selectedSocialMediaId}
      >
        {listSocialMediasQuery.isLoading && (
          <SelectOption value={EMPTY_OPTION} disabled>
            <Spinner color="secondary" />
          </SelectOption>
        )}
        {listSocialMediasQuery.isError && (
          <SelectOption value={EMPTY_OPTION} disabled>
            <Text color="negative">Erro ao carregar redes sociais</Text>
          </SelectOption>
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
      <Modal
        open={notNullish(selectedSocialMedia)}
        onOpenChange={isOpen => {
          if (!isOpen) setSelectedSocialMedia(undefined);
        }}
        triggerButton={
          <Button
            disabled={
              !listSocialMediasQuery.isSuccess || !selectedSocialMediaId
            }
            type="button"
            onClick={handleAddSocialMediaButtonClick}
          >
            Adicionar
          </Button>
        }
      >
        {selectedSocialMedia && (
          <AddSocialMediaForm
            addingSocialMedia={selectedSocialMedia}
            handleSuccessfulSubmit={() => setSelectedSocialMedia(undefined)}
          />
        )}
      </Modal>
    </StyledSelectWrapper>
  );
};

export const StyledSelectWrapper = styled(Flex, {
  gap: '2rem',
  flexWrap: 'wrap',
  margin: '3.2rem 0',
});

export const StyledSelect = styled(Select, {
  width: 'stretch',
  '@md': {
    width: '31rem',
  },
});
