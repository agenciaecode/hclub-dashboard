import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body {
    font-size: 1em;
  }

  ol, ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  button {
    background: 'none';
    border: 'none';
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
    --default-white: ${({ theme }) => theme.color.palette.white.default};

    --default-gray-100: ${({ theme }) => theme.color.palette.gray[100]};
    --default-gray-200: ${({ theme }) => theme.color.palette.gray[200]};
    --default-gray-300: ${({ theme }) => theme.color.palette.gray[300]};
    --default-gray-400: ${({ theme }) => theme.color.palette.gray[400]};
    --default-gray-500: ${({ theme }) => theme.color.palette.gray[500]};
    --default-gray-600: ${({ theme }) => theme.color.palette.gray[600]};
    --default-gray-700: ${({ theme }) => theme.color.palette.gray[700]};
    --default-gray-800: ${({ theme }) => theme.color.palette.gray[800]};
    --default-gray-900: ${({ theme }) => theme.color.palette.gray[900]};

    --default-base-white: var(--white);

    --default-teal: ${({ theme }) => theme.color.auxiliary.informational};

    --default-font-heading: ${({ theme }) =>
      theme.typography.family.default.medium};
    --default-font-body: ${({ theme }) =>
      theme.typography.family.default.medium};

    --default-fontWeight-regular: 400;
    --default-fontWeight-medium: 500;
    --default-fontWeight-semiBold: 600;
    --default-fontWeight-bold: 700;

    --default-fontSize-xs: ${({ theme }) => theme.typography.size.xs};
    --default-fontSize-sm: ${({ theme }) => theme.typography.size.sm};
    --default-fontSize-md: ${({ theme }) => theme.typography.size.md};
    --default-fontSize-lg: ${({ theme }) => theme.typography.size.lg};
    --default-fontSize-xl: ${({ theme }) => theme.typography.size.xl};
    --default-fontSize-2xl: ${({ theme }) => theme.typography.size['2xs']};

    --default-lineHeight-md: ${({ theme }) => theme.typography.lineHeight.md};
    --default-lineHeight-xl: ${({ theme }) => theme.typography.lineHeight.xl};

    --default-border-radius-0: ${({ theme }) => theme.border['0px']};
    --default-border-radius-4: ${({ theme }) => theme.border['16px']};
    --default-border-radius-8: ${({ theme }) => theme.border['8px']};
    --default-border-radius-16: ${({ theme }) => theme.border['16px']};

    --toastify-font-family: "FiraSans-Medium";
    --toastify-color-dark: var(--default-gray-100);
    --toastify-color-info: var(--default-teal);
    --toastify-color-success: var(--default-green-200);
    --toastify-color-warning: ${({ theme }) => theme.color.auxiliary.warning};
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
    --toastify-spinner-color-empty-area: var(--default-gray-800);
  }

  // Font-Family Default
  // Utilizada para corpo, tags, hats e outros textos menores.
  @font-face {
    font-family: "FiraSans-Regular";
    src: url("/fonts/fira/FiraSans-Regular.ttf");
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: "FiraSans-Medium";
    src: url("/fonts/fira/FiraSans-Medium.ttf");
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: "FiraSans-SemiBold";
    src: url("/fonts/fira/FiraSans-SemiBold.ttf");
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: "FiraSans-Bold";
    src: url("/fonts/fira/FiraSans-Bold.ttf");
    font-weight: 700;
    font-style: normal;
  }

  .icon-loader {
    width: 100%;
  }

  .icon-loader svg{
    animation: is-rotating 0.8s infinite;
  }

  @keyframes is-rotating {
    to {
      transform: rotate(1turn);
    }
  }

  .Toastify__toast-body > div:last-child {
    font-family: "FiraSans-Medium";
    font-weight: 500;
    font-style: normal;
    font-size: 0.95rem;
  }
`;

export default GlobalStyle;
