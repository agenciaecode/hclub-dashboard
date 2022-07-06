import React, { SyntheticEvent, useState } from 'react';

import { SelectItem } from '@radix-ui/react-select';

import { Spinner } from '@components/feedback/spinner';
import { Button } from '@components/forms/button';
import { Select, SelectOption } from '@components/forms/select';
import { SelectItemText } from '@components/forms/select/PrimitiveSelect';
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
    <StyledFlex>
      <StyledSelect
        label="Rede Social"
        name="social-media-select"
        id="social-media-select"
        defaultValue={EMPTY_OPTION}
        onValueChange={setSelectedSocialMediaId}
        value={selectedSocialMediaId}
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
              <Text css={{ color: 'red' }}>Erro ao carregar redes sociais</Text>
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
      <Modal
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...(!selectedSocialMedia && { open: false })}
        // only controls open state when selectedSocialMedia is undefined
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
    </StyledFlex>
  );
};

const StyledFlex = styled(Flex, {
  gap: '2rem',
  flexWrap: 'wrap',
  margin: '3.2rem 0',
});

const StyledSelect = styled(Select, {
  width: 'stretch',
  '@md': {
    width: '31rem',
  },
});
