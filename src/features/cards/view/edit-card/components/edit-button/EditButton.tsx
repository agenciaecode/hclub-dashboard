import { ComponentProps } from 'react';

import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

import { PencilSvgIcon } from '@components/icons/pencil-icon';
import { Tooltip } from '@components/overlay/tooltip';

import { IconButton } from '../icon-button';

export const EditButton = (
  editButtonProps: ComponentProps<typeof IconButton>,
) => (
  <Tooltip content="Editar">
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <IconButton btn="secondary" type="button" {...editButtonProps}>
      <VisuallyHidden>Editar</VisuallyHidden>
      <PencilSvgIcon />
    </IconButton>
  </Tooltip>
);
