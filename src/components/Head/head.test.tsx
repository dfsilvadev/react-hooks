import { render } from "@testing-library/react";
import Head from ".";

describe("<Head/>", () => {
  it("should render title and description when passed", () => {
    render(
      <Head
        title="useState Hooks"
        description="Conceitos básicos sobre o hook useState e um caso de uso"
      />
    );

    const title = document.title;

    expect(title).toBe("useState Hooks");
  });
});
