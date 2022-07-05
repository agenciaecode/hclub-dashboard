import { Button } from '@components/forms/button';
import { Flex } from '@components/layout/flex';

import { styled } from '@/theme';

const StyledSocialMediaItem = styled(Flex, {
  padding: '3.2rem 0',
  borderBottom: 'solid 1px $gray',
  gap: '2.4rem',
  alignItems: 'center',
});

const StyledDragIconContainer = styled('div', {
  lineHeight: 0,
  cursor: 'grab',
  padding: '0.5rem',
  borderRadius: 2,
  '&:hover': {
    boxShadow: '0 0 2px 1px $shadowGray',
  },
});

const StyledSocialMediaIcon = styled(Flex, {
  position: 'relative',
  minWidth: '6rem',
  minHeight: '6rem',
  '&:hover': {
    opacity: 0.8,
  },
});

const StyledAddSocialMediaButton = styled(Button, {
  gap: '0.5rem',
  marginTop: '3rem',
});

const StyledControlsWrapper = styled(Flex, {
  alignItems: 'center',
  gap: '2.4rem',
  '& > *': {
    // TODO improve selector
    display: 'none',
    '@sm': {
      display: 'block',
    },
  },
});

const StyledMobileDropdownButton = styled(Button, {
  padding: '1.3rem',
  lineHeight: 0,
  display: 'block !important',
  '@sm': {
    display: 'none !important',
  },
});

export {
  StyledSocialMediaItem,
  StyledDragIconContainer,
  StyledSocialMediaIcon,
  StyledAddSocialMediaButton,
  StyledControlsWrapper,
  StyledMobileDropdownButton,
};