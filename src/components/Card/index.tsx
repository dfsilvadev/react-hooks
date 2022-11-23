import cardIcon from "../../assets/svgexport-6.svg";

import * as Styled from "./styles";

import { ICardProps } from "./types";

export default function Card({ url, title, description }: ICardProps) {
  return (
    <Styled.CardWrapper to={url}>
      <img src={cardIcon} alt="" />
      <Styled.CardDisplay>
        <h4>{title}</h4>
        <p>{description}</p>
      </Styled.CardDisplay>
    </Styled.CardWrapper>
  );
}
