import * as S from "./styles";
import { IPanelProps } from "./types";

export default function Panel({ title, children }: IPanelProps) {
  return (
    <S.PanelWrapper>
      {!!title && (
        <S.PanelHeader>
          <h4>{title}</h4>
        </S.PanelHeader>
      )}
      <S.PanelBody>{children}</S.PanelBody>
    </S.PanelWrapper>
  );
}
