import HooksIcon from "../HooksIcon";

import * as S from "./styles";

import { ICardProps } from "./types";

export default function Card({ title, description, url }: ICardProps) {
  return (
    <S.CardWrapper to={url}>
      <HooksIcon />
      <S.CardDisplay>
        <h4>{title}</h4>
        <p>{description}</p>
      </S.CardDisplay>
    </S.CardWrapper>
  );
}
