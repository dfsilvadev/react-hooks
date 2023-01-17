import { useState } from "react";

import * as S from "./styles";

export default function Count() {
  const [count, setCount] = useState(0);

  return (
    <S.CountWrapper onClick={() => setCount(count + 1)}>
      Count: <strong>{count}</strong>
    </S.CountWrapper>
  );
}
