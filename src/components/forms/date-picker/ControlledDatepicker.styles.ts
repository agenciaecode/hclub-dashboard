import { fixAutofillTransition } from '@utils/styles/fix-autofill-transition';

import { styled } from '@/theme';

export const StyledPickerCSSFix = styled('div', {
  '& .react-datepicker__input-container > input': {
    width: '100%',
    backgroundColor: '$backgroundWhite',
    border: 'solid 1px $primaryBlack',
    color: '$textBlack',
    padding: '15px 16px',
    fontSize: '$base',
    lineHeight: '$base',
    borderRadius: '$base',
    boxShadow: '0 0 0 0rem $shadowBlack',
    transition: 'box-shadow 0.15s ease-in-out 0s',
    '&:-webkit-autofill': {
      transition: fixAutofillTransition('box-shadow ease-in-out 0.15s'),
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem $shadowGray',
    },
    '&:disabled, &:read-only': {
      backgroundColor: '$grayLight',
      borderColor: '$gray',
      color: '$blackLighter',
    },
    '&:disabled': {
      cursor: 'not-allowed',
    },
    '&::placeholder': {
      fontFamily: '$defaultItalic',
      color: '$blackLighter',
    },
  },
  '& .react-datepicker__triangle': {
    left: '-10px !important',
  },
  '& .react-datepicker__day--selected': {
    backgroundColor: '$blackLighter',
    '&:hover': {
      backgroundColor: '$gray',
    },
  },
  '& .react-datepicker__day--keyboard-selected': {
    backgroundColor: '$black',
  },
  '& button.react-datepicker__navigation:focus-visible': {
    '& .react-datepicker__navigation-icon::before': {
      borderColor: '$primaryBlack',
    },
  },
  '& .react-datepicker': { fontSize: '1em !important' },
  '& .react-datepicker__header': { paddingTop: '0.8em !important' },
  '& .react-datepicker__month': { margin: '0.4em 1em !important' },
  '& .react-datepicker__day-name, .react-datepicker__day': {
    width: '1.9em !important',
    lineHeight: '1.9em !important',
    margin: '0.166em !important',
  },
  '& .react-datepicker__current-month': { fontSize: '1em !important' },
  '& .react-datepicker__navigation': {
    top: '0.5em !important',
    lineHeight: '1.7em !important',
    border: '0.0em solid transparent !important',
  },
  '& .react-datepicker__navigation--previous': {
    borderRightColor: '#ccc !important',
    left: '1em !important',
  },
  '& .react-datepicker__navigation--next': {
    borderLeftColor: '#ccc !important',
    right: '1em !important',
    left: '220px !important',
  },
  '& .react-datepicker__time-container': { width: '6em !important' },
  '& .react-datepicker-time__header': { fontSize: '1em !important' },
  '& .react-datepicker-time__header--time': {
    paddingLeft: '0px !important',
    paddingRight: '0px !important',
  },
  '& .react-datepicker__time-box': {
    marginLeft: '0px !important',
    marginRight: '0px !important',
    width: '100% !important',
  },
  '& .react-datepicker__time-list': { padding: '0 !important' },
});
