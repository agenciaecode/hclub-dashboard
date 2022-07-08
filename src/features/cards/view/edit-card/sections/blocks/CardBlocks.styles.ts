import { TrashSvgIcon } from '@components/icons/trash-icon';

import { styled } from '@/theme';

import {
  StyledSocialMediaItem,
  StyledSocialMediaIcon,
  StyledDragIconContainer,
  StyledIconButton,
  StyledPencilIcon,
  StyledMobileDropdownButton,
  StyledControlsWrapper,
} from '../social-medias/CardSocialMedias.styles';

const StyledCardBlockIcon = styled(StyledSocialMediaIcon, {
  '& > svg': {
    width: '6rem',
    height: '6rem',
    fill: '$gray',
  },
});

const StyledTrashIcon = styled(TrashSvgIcon, {
  $$sizing: '1.6rem',
  width: '$$sizing',
  height: '$$sizing',
});

export {
  StyledSocialMediaItem as StyledCardBlockItem,
  StyledCardBlockIcon,
  StyledDragIconContainer,
  StyledControlsWrapper,
  StyledIconButton,
  StyledPencilIcon,
  StyledTrashIcon,
  StyledMobileDropdownButton,
};
