import { BackButton } from '@components/others/back-button/BackButton';

import { styled } from '@/theme';

const StyledBackButton = styled(BackButton, {
  lineHeight: 0,
  marginRight: '1.2rem',
  '@md': {
    marginRight: '2.4rem',
  },
  '& > svg': {
    width: '2.8rem !important',
    height: '2.8rem !important',
    '@md': {
      width: 'unset !important',
      height: 'unset !important',
    },
  },
});

export { StyledBackButton as ResponsiveBackButton };
