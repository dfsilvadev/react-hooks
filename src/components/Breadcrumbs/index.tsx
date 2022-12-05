import { Link } from "react-router-dom";
import { CaretRight } from "phosphor-react";

import * as S from "./styles";

import { IBreadcrumbsProps } from "./types";

export default function Breadcrumbs({ pageName }: IBreadcrumbsProps) {
  return (
    <S.BreadcrumbsWrapper>
      <Link to="/">
        <span>Home</span>
      </Link>

      {pageName && (
        <>
          <CaretRight size={16} />
          <S.Disabled>{pageName}</S.Disabled>
        </>
      )}
    </S.BreadcrumbsWrapper>
  );
}
