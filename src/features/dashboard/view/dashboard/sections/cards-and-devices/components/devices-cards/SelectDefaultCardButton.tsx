import { FormEvent, useState } from 'react';

import { sleep } from '@antfu/utils';
import { DialogClose } from '@radix-ui/react-dialog';

import { Spinner } from '@components/feedback/spinner';
import { Button } from '@components/forms/button';
import { LoadingButton } from '@components/forms/loading-button';
import { SelectOption } from '@components/forms/select';
import { DescriptiveModal } from '@components/overlay/modal';
import { useDebounce } from '@hooks/useDebounce';
import { useSuccessEffect } from '@hooks/useSuccessEffect';
import { showToastSuccessMessage } from '@libs/toast/showToastMessage';
import { useHttpExceptionHandler } from '@services/http/hooks/useHttpExceptionHandler';

import { CardType, useCardListQuery } from '@features/cards';
import { Device, useSetDeviceDefaultCardMutation } from '@features/devices';

import { FlexRow, StyledButton } from './DeviceCard.styles';
import { StyledSelect } from './SelectDefaultCardButton.styles';

type SelectDefaultCardButtonProps = {
  device: Device;
};

const EMPTY_SELECT_OPTION = 'empty';

export const SelectDefaultCardButton = ({
  device,
}: SelectDefaultCardButtonProps) => {
  const [defaultCard, setDefaultCard] = useState(device.default_card);
  const cardListQuery = useCardListQuery();
  const setDeviceDefaultCardMutation = useSetDeviceDefaultCardMutation();
  const onSuccessfulSubmit = useDebounce(1, async () => {
    showToastSuccessMessage('Default card updated');
    await sleep(750);
    if (!setDeviceDefaultCardMutation.isLoading)
      setDeviceDefaultCardMutation.reset();
  });

  useHttpExceptionHandler(
    setDeviceDefaultCardMutation.error,
    exceptionHandler => exceptionHandler.executeHandler(),
  );

  useSuccessEffect(setDeviceDefaultCardMutation.isSuccess, onSuccessfulSubmit);

  function handleDefaultCardChangeSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (setDeviceDefaultCardMutation.isLoading) return;
    setDeviceDefaultCardMutation.mutate({
      serial_number: device.serial_number,
      card: defaultCard,
    });
  }

  return (
    <DescriptiveModal
      title="Definir cartão padrão"
      description={`Defina o cartão padrão para o dispositivo ${device.product_name}.`}
      triggerButton={<StyledButton>Padrão da conta</StyledButton>}
    >
      <form onSubmit={handleDefaultCardChangeSubmit}>
        {(cardListQuery.isLoading && <Spinner />) ||
          (cardListQuery.isSuccess && (
            <StyledSelect
              label="Selecione o cartão padrão"
              defaultValue={defaultCard ?? EMPTY_SELECT_OPTION}
              onValueChange={(selectedValue: string) =>
                setDefaultCard(
                  selectedValue === EMPTY_SELECT_OPTION
                    ? undefined
                    : (selectedValue as CardType),
                )
              }
            >
              <SelectOption
                value={EMPTY_SELECT_OPTION}
                text="Padrão da conta"
              />
              {cardListQuery.data.map(card => (
                <SelectOption
                  key={card.id}
                  value={card.type}
                  text={card.type_label}
                />
              ))}
            </StyledSelect>
          )) ||
          (cardListQuery.isError && 'Erro ao carregar cartões')}
        <FlexRow>
          <DialogClose asChild>
            <Button type="button" btn="secondary">
              Cancelar
            </Button>
          </DialogClose>
          <LoadingButton
            type="submit"
            isLoading={setDeviceDefaultCardMutation.isLoading}
            isSuccess={setDeviceDefaultCardMutation.isSuccess}
          >
            Salvar
          </LoadingButton>
        </FlexRow>
      </form>
    </DescriptiveModal>
  );
};
