import styled, { css } from "styled-components";

export const CodeWrapper = styled.code`
  ${({ theme }) => css`
    background-color: ${theme.colors.divider};
    padding: 2px ${theme.spacings.xxsmall};
    font-size: 0.94em;
    word-break: break-word;
    border-radius: 2px;
    color: ${theme.colors.green};
  `}
`;
