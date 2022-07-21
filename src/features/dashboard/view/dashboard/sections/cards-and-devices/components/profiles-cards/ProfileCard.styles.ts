import { styled } from '@/theme';
import { CSS } from '@/theme/stitches';

import { FlippableCard } from '../flippable-card';
import {
  StyledFlippableCardBack,
  StyledFlippableCardFront,
} from '../flippable-card/FlippableCard.styles';

const StyledFlippableCard = styled(FlippableCard, {
  variants: {
    type: {
      pro: {
        [`& ${StyledFlippableCardFront},& ${StyledFlippableCardBack}`]: {
          background: '$backgroundBlack',
        },
      },
      social: {
        [`& ${StyledFlippableCardFront},& ${StyledFlippableCardBack}`]: {
          background: 'linear-gradient(to bottom, #55FFEB, #0090A4 )',
        },
      },
      personal: {
        [`& ${StyledFlippableCardFront},& ${StyledFlippableCardBack}`]: {
          background: 'linear-gradient(to bottom, #EAEAEA, #B8B8B8 )',
        },
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
