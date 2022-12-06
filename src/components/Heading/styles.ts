import styled, { css } from "styled-components";

export const HeadingWrapper = styled.h1`
  ${({ theme }) => css`
    position: relative;
    margin-bottom: ${theme.spacings.medium};

    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -0.5rem;
      width: 4rem;
      border-bottom: 0.2rem solid ${theme.colors.green};
    }
  `}
`;
