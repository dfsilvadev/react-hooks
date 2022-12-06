import * as S from "./styles";

import { IParagraphProps } from "./types";

export default function Paragraph({ children }: IParagraphProps) {
  return <S.ParagraphWrapper>{children}</S.ParagraphWrapper>;
}
