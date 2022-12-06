import { screen } from "@testing-library/dom";
import { renderWithTheme } from "../../utils/tests/renderWithTheme";

import Blockquote from ".";

const params = {
  cite: "http://127.0.0.1:5173/usestate"
};

describe("<Blockquote/>", () => {
  it("should be render a url quite when passed", () => {
    renderWithTheme(
      <Blockquote {...params}>
        <p>Lorem ipsum dolor</p>
      </Blockquote>
    );

    expect(screen.getByText("Lorem ipsum dolor").parentElement).toHaveAttribute(
      "cite",
      "http://127.0.0.1:5173/usestate"
    );
  });
});
