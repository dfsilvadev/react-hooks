import { Route, Routes } from "react-router-dom";

import { Base } from "../template";

import { Home, StatePage } from "../pages";

export default function Default() {
  return (
    <Routes>
      <Route path="/" element={<Base />}>
        <Route index element={<Home />} />
        <Route path="hooks-state" element={<StatePage />} />
      </Route>
    </Routes>
  );
}
