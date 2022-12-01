import { render, screen } from "@testing-library/react";

import HooksIcon from ".";

describe("<Card/>", () => {
  it("should render currectly", () => {
    const { container } = render(<HooksIcon />);

    expect(
      screen.getByLabelText("React Hooks Icon Learning")
    ).toBeInTheDocument();

    expect(container.parentElement).toMatchSnapshot();
  });
});
