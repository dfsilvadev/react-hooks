import * as S from "./styles";

import { IParagraphProps } from "./types";

export default function Paragraph({ text }: IParagraphProps) {
  return <S.ParagraphWrapper>{text}</S.ParagraphWrapper>;
}
