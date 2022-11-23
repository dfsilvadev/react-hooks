import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const CardWrapper = styled(Link)`
  ${({ theme }) => css`
    height: 5.625rem;
    padding: 0.625rem;
    border: 1px solid ${theme.colors.light};
    border-radius: ${theme.border.radius};
    box-shadow: 0 10px 10px rgb(126 126 126 / 10%);
    transition: all 0.3s ease;

    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.625rem;

    img {
      max-width: 2.5rem;
    }

    &:hover {
      box-shadow: none;
      transform: translateY(2px);
    }
  `}
`;

export const CardDisplay = styled.div`
  ${({ theme }) => css`
    h4,
    p {
      font-size: ${theme.font.sizes.small};
    }

    p {
      font-weight: ${theme.font.weight.bold};
      line-height: 1;
      color: #bbc9da;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  `}
`;
