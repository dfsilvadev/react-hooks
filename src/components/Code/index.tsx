import { ICodeProps } from "./types";

import * as S from "./styles";

export default function Code({ children }: ICodeProps) {
  return (
    <S.CodeWrapper role="code" aria-label="Code">
      {children}
    </S.CodeWrapper>
  );
}
