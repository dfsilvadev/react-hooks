import styled, { css } from "styled-components";

export const ArticleWrapper = styled.article`
  ${({ theme }) => css`
    & + & {
      padding-top: ${theme.spacings.large};
    }
  `}
`;
