import styled, { css } from "styled-components";

export const HeaderWrapper = styled.header`
  ${({ theme }) => css`
    background-color: ${theme.colors.dark};
    color: ${theme.colors.white};
    height: 4.375rem;

    display: flex;
    align-items: center;
  `}
`;

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.grid.container};
    margin: 0 auto;
    padding: 0 ${theme.spacings.xsmall};

    img {
      width: 2.375rem;
    }
  `}
`;
