import { screen } from "@testing-library/react";

import { renderWithTheme } from "../../utils/tests/renderWithTheme";

import Card from ".";

const props = {
  title: "useState",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  url: "usestate"
};

describe("<Card/>", () => {
  it("should render currectly", () => {
    renderWithTheme(<Card {...props} />);

    expect(screen.getByRole("link", { name: /useState/i })).toHaveAttribute(
      "href",
      "/usestate"
    );

    expect(screen.getByRole("img")).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: /useState/i })
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        "Lorem ipsum dolor sit amet consectetur adipisicing elit."
      )
    ).toBeInTheDocument();
  });
});
