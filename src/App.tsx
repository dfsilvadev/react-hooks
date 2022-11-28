import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { DefaultRouter } from "./routes";

import { DefaultTheme, GlobalStyle } from "./styles";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={DefaultTheme}>
        <DefaultRouter />
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
