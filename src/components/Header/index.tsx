import logo from "../../assets/svgexport-4.svg";

import * as Styled from "./styles";

export default function Header() {
  return (
    <Styled.HeaderWrapper>
      <Styled.Container>
        <img src={logo} alt="" />
      </Styled.Container>
    </Styled.HeaderWrapper>
  );
}
