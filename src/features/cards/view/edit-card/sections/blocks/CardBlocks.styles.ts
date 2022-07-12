import { styled } from '@/theme';

import {
  StyledSocialMediaItem,
  StyledSocialMediaIcon,
  StyledDragIconContainer,
  StyledControlsWrapper,
} from '../social-medias/CardSocialMedias.styles';

const StyledCardBlockIcon = styled(StyledSocialMediaIcon, {
  '& > svg': {
    width: '6rem',
    height: '6rem',
    fill: '$gray',
  },
});

export {
  StyledSocialMediaItem as StyledCardBlockItem,
  StyledCardBlockIcon,
  StyledDragIconContainer,
  StyledControlsWrapper,
};