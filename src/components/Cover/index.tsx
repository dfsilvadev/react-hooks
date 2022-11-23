import Container from "../Container";

import coverImage from "../../assets/svgexport-5.svg";

import * as Styled from "./styles";

export default function Cover() {
  return (
    <Styled.CoverWrapper>
      <Styled.CoverDisplay>
        <Container>
          <Styled.Headline>
            <Styled.Content>
              <h1>
                <span>Conceitos de</span>
                <strong>
                  <span>Performance</span>
                  <span>com React Hooks</span>
                </strong>
              </h1>

              <p>
                Aprendendo forma de usar os React Hooks, que são funções que
                permitem manipular estados, manipular o ciclo de vida,
                memorização e muito mais.
              </p>
            </Styled.Content>

            <Styled.Illustration>
              <img src={coverImage} alt="" />
            </Styled.Illustration>
          </Styled.Headline>
        </Container>
      </Styled.CoverDisplay>
    </Styled.CoverWrapper>
  );
}
