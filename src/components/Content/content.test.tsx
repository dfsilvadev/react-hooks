import { screen } from "@testing-library/react";

import { renderWithTheme } from "../../utils/tests/renderWithTheme";

import Content from ".";

describe("<Content/>", () => {
  it("should render currectly", () => {
    const { container } = renderWithTheme(
      <Content>
        <h1>Content</h1>
      </Content>
    );

    const heading = screen.getByRole("heading", { name: /content/i });
    const parent = heading.parentElement;

    expect(parent).toHaveStyle({
      width: "100%",
      height: "auto",
      "min-height": "100vh",
      padding: "2rem 0",

      display: "flex",
      "align-items": "center",
      "justify-content": "center"
    });

    expect(container).toMatchSnapshot();
  });
});
