import * as S from "./styles";

import { IHeadingProps } from "./types";

export default function Heading({ children }: IHeadingProps) {
  return <S.HeadingWrapper>{children}</S.HeadingWrapper>;
}
