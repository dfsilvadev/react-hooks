import HooksIcon from "../HooksIcon";

import * as S from "./styles";

import { ICardProps } from "./types";

export default function Card({ title, description }: ICardProps) {
  return (
    <S.CardWrapper to="/">
      <HooksIcon />
      <S.CardDisplay>
        <h4>{title}</h4>
        <p>{description}</p>
      </S.CardDisplay>
    </S.CardWrapper>
  );
}
