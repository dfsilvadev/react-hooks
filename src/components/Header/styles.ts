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
