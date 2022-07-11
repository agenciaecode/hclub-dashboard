import { ComponentProps } from 'react';

import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

import { TrashSvgIcon } from '@components/icons/trash-icon';
import { Tooltip } from '@components/overlay/tooltip';

import { IconButton } from '../icon-button';

export const DeleteButton = (
  deleteButtonProps: ComponentProps<typeof IconButton>,
) => (
  <Tooltip content="Excluir">
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <IconButton btn="secondary" type="button" {...deleteButtonProps}>
      <VisuallyHidden>Excluir</VisuallyHidden>
      <TrashSvgIcon />
    </IconButton>
  </Tooltip>
);
