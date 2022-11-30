import { Route, Routes } from "react-router-dom";
import { Home } from "../pages";
import { Base } from "../template";

export default function Default() {
  return (
    <Routes>
      <Route path="/" element={<Base />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}
