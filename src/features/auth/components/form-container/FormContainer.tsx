import { CSS } from '@stitches/react';

import { configTheme } from '@/theme';

import {
  StyledContentHeader,
  StyledContentSection,
  StyledForm,
  StyledFormArticle,
  StyledFormHeader,
} from './FormContainer.styles';

type FormContainerProps = {
  title: string;
  description: string;
  headerSlot: React.ReactNode;
  headerCss?: CSS<typeof configTheme>;
  formSlot: React.ReactNode;
  formHeaderCss?: CSS<typeof configTheme>;
  formSubmitHandler: (event: React.FormEvent<HTMLFormElement>) => void;
};

const FormContainer = ({
  title,
  description,
  headerSlot,
  headerCss,
  formSlot,
  formHeaderCss,
  formSubmitHandler,
}: FormContainerProps) => (
  <>
    <StyledContentHeader css={headerCss}>{headerSlot}</StyledContentHeader>
    <StyledContentSection>
      <StyledFormArticle>
        <StyledFormHeader css={formHeaderCss}>
          <h1>{title}</h1>
          <h2>{description}</h2>
        </StyledFormHeader>
        <StyledForm onSubmit={formSubmitHandler}>{formSlot}</StyledForm>
      </StyledFormArticle>
    </StyledContentSection>
  </>
);

FormContainer.defaultProps = {
  headerCss: undefined,
  formHeaderCss: undefined,
};

export { FormContainer };
export type { FormContainerProps };
