import styled, { css } from "styled-components";

export const PanelWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: calc(100vh - 4rem);
    background-color: ${theme.colors.elements};
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xsmall};
  `}
`;

export const PanelHeader = styled.header`
  ${({ theme }) => css`
    padding-bottom: ${theme.spacings.xsmall};
    border-bottom: 1px solid ${theme.colors.background};
  `}
`;

export const PanelBody = styled.div`
  ${({ theme }) => css`
    padding-top: 0;
    display: grid;
    grid-template-columns: 1fr;
    gap: ${theme.spacings.xsmall};

    header + & {
      padding-top: ${theme.spacings.xsmall};
    }

    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 1200px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (min-width: 1400px) {
      grid-template-columns: repeat(4, 1fr);
    }
  `}
`;
