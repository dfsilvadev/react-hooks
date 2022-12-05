import { screen } from "@testing-library/dom";
import { renderWithTheme } from "../../utils/tests/renderWithTheme";

import Paragraph from ".";

const props = {
  text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
};

describe("<Paragraph/>", () => {
  it("should render a title", () => {
    const { container } = renderWithTheme(<Paragraph {...props} />);

    expect(
      screen.getByText(
        /Lorem ipsum dolor sit amet, consectetur adipisicing elit./i
      )
    ).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
