import { styled } from '@/theme';
import { CSS } from '@/theme/stitches';

import { FlippableCard } from '../flippable-card';

const StyledFlippableCard = styled(FlippableCard, {
  variants: {
    type: {
      pro: {
        background: '$backgroundBlack',
      },
      social: {
        background: 'linear-gradient(to bottom, #55FFEB, #0090A4 )',
      },
      personal: {
        background: 'linear-gradient(to bottom, #EAEAEA, #B8B8B8 )',
      },
    },
  },
});

const cardBackStyle: CSS = {
  fontSize: '$base',
  lineHeight: '$base',
};

const StyledDefaultProfileIcon = styled('span', {
  width: '2rem',
  height: '2rem',
  position: 'absolute',
  top: '1.8rem',
  right: '1.8rem',
});

export { StyledDefaultProfileIcon, StyledFlippableCard, cardBackStyle };
