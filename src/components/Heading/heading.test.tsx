import { screen } from "@testing-library/dom";
import { renderWithTheme } from "../../utils/tests/renderWithTheme";

import Heading from ".";

describe("<Heading/>", () => {
  it("should render currectly", () => {
    renderWithTheme(<Heading>O que o useState faz?</Heading>);

    expect(
      screen.getByRole("heading", { name: "O que o useState faz?" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: "O que o useState faz?" })
    ).toHaveStyleRule("border-bottom", "0.2rem solid #00B37E", {
      modifier: "::after"
    });
  });
});
