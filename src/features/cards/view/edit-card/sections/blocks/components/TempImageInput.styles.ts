import Image from 'next/image';

import { styled } from '@/theme';

import { StyledRemoveAvatarButton } from '../../card-avatar/CardAvatar.styles';

const StyledImageInputWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1rem',
  '@xs': {
    flexDirection: 'row',
    justifyContent: 'start',
    gap: '2.4rem',
  },
});

const StyledPreviewFigure = styled('figure', {
  $$sizing: '9.2rem',
  width: '$$sizing',
  height: '$$sizing',
  position: 'relative',
});

const StyledPreviewPlaceholder = styled('div', {
  width: '100%',
  height: '100%',
  borderRadius: '50%',
  backgroundColor: '$gray',
});

const RoundedImage = styled(Image, {
  borderRadius: '50%',
});

const StyledRemoveImageButton = styled(StyledRemoveAvatarButton, {
  $$buttonSize: '2.5rem',
});

export {
  StyledImageInputWrapper,
  StyledPreviewFigure,
  StyledPreviewPlaceholder,
  RoundedImage,
  StyledRemoveImageButton,
};
