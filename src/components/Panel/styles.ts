import styled, { css } from "styled-components";

export const PanelWrapper = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    margin: ${theme.spacings.medium} 0;
    padding: ${theme.spacings.xsmall};
    border-radius: ${theme.border.radius};
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  `}
`;

export const PanelHeading = styled.header`
  ${({ theme }) => css`
    padding-bottom: ${theme.spacings.xsmall};
    border-bottom: 1px solid ${theme.colors.light};

    h4 {
      font-size: ${theme.font.sizes.xlarge};
      line-height: 1;
    }
  `}
`;

export const PanelBody = styled.div`
  ${({ theme }) => css`
    padding-top: ${theme.spacings.xsmall};
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.625rem;
  `}
`;
