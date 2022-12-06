import { screen } from "@testing-library/dom";
import { renderWithTheme } from "../../utils/tests/renderWithTheme";

import Code from ".";

describe("<Code/>", () => {
  it("should render currectly", () => {
    const { container } = renderWithTheme(<Code>HTML</Code>);

    expect(screen.getByRole("code")).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
