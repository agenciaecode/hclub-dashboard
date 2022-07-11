import { VisuallyHidden } from '@components/disclosure/visually-hidden';
import { EllipsisSvgIcon } from '@components/icons/drag-icon/ellipsis-icon';

import { styled } from '@/theme';

import { IconButton } from '../icon-button';

const StyledMobileDropdownButton = styled(IconButton, {
  display: 'block !important',
  '@sm': {
    display: 'none !important',
  },
});

export const EllipsisButton = () => (
  <StyledMobileDropdownButton btn="secondary" type="button">
    <VisuallyHidden>Mostrar opções</VisuallyHidden>
    <EllipsisSvgIcon />
  </StyledMobileDropdownButton>
);
