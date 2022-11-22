import { render, screen } from "@testing-library/react";

import App from "./App";

describe("APP", () => {
  it("should render a heading", () => {
    render(<App />);

    expect(screen.getByRole("heading", { name: /app/i })).toBeInTheDocument();
  });
});
