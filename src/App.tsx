import { ThemeProvider } from "styled-components";

import { DefaultTheme, GlobalStyle } from "./styles";

function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <h1>App</h1>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
