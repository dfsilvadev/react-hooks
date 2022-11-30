import styled, { css } from "styled-components";

const Content = styled.section`
  ${({ theme }) => css`
    width: 100%;
    height: auto;
    min-height: 100vh;
    padding: ${theme.spacings.medium} 0;

    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;

export default Content;
