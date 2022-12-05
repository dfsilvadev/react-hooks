import { screen } from "@testing-library/react";

import { renderWithTheme } from "../../utils/tests/renderWithTheme";

import Breadcrumbs from ".";

const props = {
  pageName: "useState Hooks"
};

describe("<Breadcrumb/>", () => {
  it("should render currectly", () => {
    const { container } = renderWithTheme(<Breadcrumbs {...props} />);

    expect(screen.getByRole("link", { name: /home/i })).toHaveAttribute(
      "href",
      "/"
    );

    expect(screen.getByText(/usestate hooks/i)).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});
