import Container from "../Container";

import logo from "../../assets/svgexport-4.svg";

import * as Styled from "./styles";

export default function Header() {
  return (
    <Styled.HeaderWrapper>
      <Container>
        <img src={logo} alt="" />
      </Container>
    </Styled.HeaderWrapper>
  );
}
