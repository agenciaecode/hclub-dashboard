import { StylesConfig } from 'react-select';
import CreatableSelect from 'react-select/creatable';

import { styled } from '@/theme';
import { colors } from '@/theme/styles/theme/default/colors';

export const StyledTagSelect = styled(CreatableSelect, {});

export const selectStyles: StylesConfig = {
  control: (originalStyle, { isFocused, isDisabled }) => ({
    ...originalStyle,
    borderColor: isDisabled ? colors.gray : colors.black,
    background: isDisabled ? colors.grayLight : colors.white,
    boxShadow: isFocused ? `0 0 0 0.2rem ${colors.gray}` : 'none',
    padding: '1.0rem 0.5rem 1rem 1rem',
    ':hover': {
      borderColor: colors.black,
    },
  }),
  valueContainer: originalStyle => ({
    ...originalStyle,
    padding: '0',
  }),
  multiValue: (originalStyle, { isDisabled }) => ({
    ...originalStyle,
    padding: '0.25rem 0.5rem',
    ...(isDisabled && { background: colors.gray }),
  }),
  multiValueLabel: originalStyle => ({
    ...originalStyle,
    fontSize: '1.6rem',
    lineHeight: '1.9rem',
  }),
};
