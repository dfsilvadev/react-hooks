import * as Styled from "./styles";

import { IPanelProps } from "./types";

export default function Panel({ children, title }: IPanelProps) {
  return (
    <Styled.PanelWrapper>
      {!!title && (
        <Styled.PanelHeading>
          <h4>{title}</h4>
        </Styled.PanelHeading>
      )}

      <Styled.PanelBody>{children}</Styled.PanelBody>
    </Styled.PanelWrapper>
  );
}
