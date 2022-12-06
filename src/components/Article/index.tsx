import Heading from "../Heading";
import Paragraph from "../Paragraph";

import * as S from "./styles";

import { IArticleProps } from "./types";

export default function Article({ title, children }: IArticleProps) {
  return (
    <S.ArticleWrapper>
      {!!title && <Heading>{title}</Heading>}
      <Paragraph>{children}</Paragraph>
    </S.ArticleWrapper>
  );
}
