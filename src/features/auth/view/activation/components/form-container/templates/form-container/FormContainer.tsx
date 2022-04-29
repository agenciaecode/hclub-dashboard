import { CSS } from '@stitches/react';

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
  headerCss?: CSS;
  formSlot: React.ReactNode;
  formSubmitHandler: (event: React.FormEvent<HTMLFormElement>) => void;
};

const FormContainer = ({
  title,
  description,
  headerSlot,
  headerCss,
  formSlot,
  formSubmitHandler,
}: FormContainerProps) => (
  <>
    <StyledContentHeader css={headerCss}>{headerSlot}</StyledContentHeader>
    <StyledContentSection>
      <StyledFormArticle>
        <StyledFormHeader>
          <h1>{title}</h1>
          <h2>{description}</h2>
        </StyledFormHeader>
        <StyledForm onSubmit={formSubmitHandler}>{formSlot}</StyledForm>
      </StyledFormArticle>
    </StyledContentSection>
  </>
);

FormContainer.defaultProps = {
  headerCss: {},
};

export { FormContainer };
export type { FormContainerProps };
