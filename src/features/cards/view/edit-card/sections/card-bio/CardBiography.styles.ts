import { TextArea } from '@components/forms/text-area';

import { styled } from '@/theme';

const StyledTextArea = styled(TextArea, {
  padding: '1rem 0.2rem',
  border: 'none !important',
  '&:disabled': {
    color: '$textBlack',
    cursor: 'initial',
    background: 'transparent',
  },
});

export { StyledTextArea };
