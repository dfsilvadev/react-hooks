import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const CardWrapper = styled(Link)`
  ${({ theme }) => css`
    width: 100%;
    min-height: 5rem;
    background-color: ${theme.colors.divider};
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxsmall};
    border: 2px solid transparent;
    transition: ${theme.transition.fast};

    display: flex;
    align-items: center;
    gap: ${theme.spacings.xsmall};

    &:hover {
      border: 2px solid ${theme.colors.green};
    }
  `}
`;

export const CardDisplay = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    h4 {
      line-height: 1.6;
    }

    p {
      font-size: ${theme.font.sizes.small};
      color: ${theme.colors.placeholder};
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  `}
`;
