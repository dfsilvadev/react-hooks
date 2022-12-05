import styled, { css } from "styled-components";

export const BreadcrumbsWrapper = styled.span`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: ${theme.spacings.xxsmall};
    padding: ${theme.spacings.small} 0;

    a {
      border-radius: ${theme.border.radius};
      &:hover,
      &:focus {
        outline: 2px solid ${theme.colors.green};
        outline-offset: ${theme.border.outlineOffiset};
      }
    }
    span {
      font-weight: ${theme.font.weight.bold};
      font-size: ${theme.font.sizes.small};
    }
    span:first-child {
      color: ${theme.colors.green};
    }
    svg {
      line-height: 0;
    }
  `}
`;

export const Disabled = styled.span`
  ${({ theme }) => css`
    cursor: not-allowed;
    color: ${theme.colors.label};
  `}
`;
