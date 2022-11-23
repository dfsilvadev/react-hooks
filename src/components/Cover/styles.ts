import styled, { css } from "styled-components";

import bgImage from "../../assets/luz-topo.1647533643.png";

export const CoverWrapper = styled.div`
  background-image: url(${bgImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: 45%;
  clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
`;

export const CoverDisplay = styled.div`
  min-height: 34em;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  padding: 0 0 2em 0;
`;

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.grid.container};
    margin: 0 auto;
    padding: 0 ${theme.spacings.xsmall};
  `}
`;

export const Headline = styled.div`
  ${({ theme }) => css`
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    max-width: 60%;

    h1 {
      color: ${theme.colors.lightBlue};
      line-height: 1;
      margin-right: ${theme.spacings.small};
      margin-bottom: ${theme.spacings.xsmall};

      &,
      & strong {
        font-size: 2.75rem;
        display: flex;
        flex-direction: column;
      }

      & > span {
        font-size: ${theme.font.sizes.medium};
        font-weight: ${theme.font.weight.medium};
      }
    }

    p {
      color: ${theme.colors.white};
      font-weight: ${theme.font.weight.medium};
    }
  `}
`;

export const Illustration = styled.div`
  img {
    max-width: 18.75rem;
  }
`;
