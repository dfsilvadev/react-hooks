import { ReactNode } from "react";
import { render, RenderResult } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import { MyTheme } from "../styles";

export const renderWithTheme = (children: ReactNode): RenderResult =>
  render(<ThemeProvider theme={MyTheme}>{children}</ThemeProvider>);
