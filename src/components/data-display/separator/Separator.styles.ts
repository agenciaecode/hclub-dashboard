import { Separator } from '@radix-ui/react-separator';

import { styled } from '@/theme';

export const StyledSeparator = styled(Separator, {
  backgroundColor: '$gray',
  '&[data-orientation=horizontal]': { height: 1, width: '100%' },
  '&[data-orientation=vertical]': { height: '100%', width: 1 },
  variants: {
    light: {
      true: {
        backgroundColor: '$backgroundWhite',
      },
    },
  },
});
