import * as Styled from "./styles";

import { IContainerProps } from "./types";

export default function Container({ children }: IContainerProps) {
  return <Styled.Content>{children}</Styled.Content>;
}
