import styled, { css } from "styled-components";

export const CountWrapper = styled.span`
  ${({ theme }) => css`
    background-color: ${theme.colors.elements};
    padding: ${theme.spacings.xsmall};
    border: 2px solid transparent;
    border-radius: ${theme.border.radius};
    cursor: pointer;
    transition: border-color ${theme.transition.fast};

    display: inline-flex;
    align-items: center;
    gap: ${theme.spacings.xsmall};

    strong {
      font-size: ${theme.font.sizes.xlarge};
    }

    &:hover {
      border-color: ${theme.colors.green};
    }
  `}
`;
