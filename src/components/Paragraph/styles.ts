import styled, { css } from "styled-components";

export const ParagraphWrapper = styled.p`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};
  `}
`;
