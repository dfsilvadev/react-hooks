import { Outlet } from "react-router-dom";

import { Container } from "../../components";

export default function Base() {
  return (
    <>
      <Container>
        <Outlet />
      </Container>
    </>
  );
}
