import { screen } from "@testing-library/dom";
import { renderWithTheme } from "../../utils/tests/renderWithTheme";

import Article from ".";

describe("<Article/>", () => {
  it("should render currectly", () => {
    renderWithTheme(
      <Article title="Lorem title">Lorem ipsum dolor sit amet</Article>
    );

    expect(
      screen.getByRole("heading", { name: "Lorem title" })
    ).toBeInTheDocument();
    expect(screen.getByText("Lorem ipsum dolor sit amet")).toBeInTheDocument();
  });
});
