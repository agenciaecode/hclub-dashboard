import { createGlobalStyle } from 'styled-components';
import { typography } from '../theme/light/typography';

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    /* 1rem = 16px (User Agent) = 100% (User Agent) */
    font-size: 62.5% /* 10px */
  }

  ol, ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  button {
    background: none;
    border: none;
    outline: 0;
  }

  *,
  *:after,
  *:before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
  }

  :root {
    --default-white: ${({ theme }) => theme.color.primary.white};
    --default-black: ${({ theme }) => theme.color.primary.black};

    --default-font-heading: ${({ theme }) =>
      theme.typography.family.default.medium.fontFamily};
    --default-font-body: ${({ theme }) =>
      theme.typography.family.default.medium.fontFamily};

    --default-fontWeight-regular: 400;
    --default-fontWeight-medium: 500;
    --default-fontWeight-bold: 700;

    --default-fontSize-sm: ${({ theme }) => theme.typography.size.sm};
    --default-fontSize-base: ${({ theme }) => theme.typography.size.base};
    --default-fontSize-lg: ${({ theme }) => theme.typography.size.lg};
    --default-fontSize-xl: ${({ theme }) => theme.typography.size.xl};
    --default-fontSize-2xl: ${({ theme }) => theme.typography.size['2xl']};
    --default-fontSize-3xl: ${({ theme }) => theme.typography.size['3xl']};

    --default-fontHeight-sm: ${({ theme }) => theme.typography.lineHeight.sm};
    --default-fontHeight-base: ${({ theme }) =>
      theme.typography.lineHeight.base};
    --default-fontHeight-lg: ${({ theme }) => theme.typography.lineHeight.lg};
    --default-fontHeight-xl: ${({ theme }) => theme.typography.lineHeight.xl};
    --default-fontHeight-2xl: ${({ theme }) =>
      theme.typography.lineHeight['2xl']};
    --default-fontHeight-3xl: ${({ theme }) =>
      theme.typography.lineHeight['3xl']};

    --default-border-radius-0: ${({ theme }) => theme.border['0px']};
    --default-border-radius-4: ${({ theme }) => theme.border['16px']};
    --default-border-radius-8: ${({ theme }) => theme.border['8px']};
    --default-border-radius-16: ${({ theme }) => theme.border['16px']};

    --toastify-font-family: "Raleway-Medium";
    /*--toastify-color-dark: var(--default-gray-100);
    --toastify-color-info: var(--default-teal);
    --toastify-color-success: var(--default-green-200);
    --toastify-color-error: ${({ theme }) => theme.color.auxiliary.negative};

    --toastify-icon-color-info: var(--toastify-color-info);
    --toastify-icon-color-success: var(--toastify-color-success);
    --toastify-icon-color-warning: var(--toastify-color-warning);
    --toastify-icon-color-error: var(--toastify-color-error);

    --toastify-color-progress-dark: var(--default-gray-100);
    --toastify-color-progress-info: var(--toastify-color-info);
    --toastify-color-progress-success: var(--toastify-color-success);
    --toastify-color-progress-warning: var(--toastify-color-warning);
    --toastify-color-progress-error: var(--toastify-color-error);

    --toastify-spinner-color: var(--default-teal);
    --toastify-spinner-color-empty-area: var(--default-gray-800);*/
  }

  // Font-Family Default
  // Utilizada para corpo, tags, hats e outros textos menores.
  ${() =>
    Object.values(typography.family.default).reduce(
      (previous, current) =>
        `${previous}

        @font-face {
          font-family: ${current.fontFamily};
          src: url( ${current.path});
          font-weight: ${current.fontWeight};
          font-style: ${current.fontStyle};
        }`,
      '',
    )}
  .icon-loader {
    width: 100%;
  }

  .icon-loader svg {
    animation: is-rotating 0.8s infinite;
  }

  @keyframes is-rotating {
    to {
      transform: rotate(1turn);
    }
  }

  .Toastify__toast-body > div:last-child {
    font-family: ${typography.family.default.medium.fontFamily};
    font-weight: ${typography.family.default.medium.fontWeight};
    font-style: ${typography.family.default.medium.fontStyle};
    font-size: ${typography.size.base};
  }
`;
