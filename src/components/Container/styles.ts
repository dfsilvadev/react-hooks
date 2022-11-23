import styled, { css } from "styled-components";

export const Content = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.grid.container};
    margin: 0 auto;
    padding: 0 ${theme.spacings.xsmall};
  `}
`;
