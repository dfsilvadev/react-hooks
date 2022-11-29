import { ThemeProvider } from "styled-components";

import { GlobalStyle, MyTheme } from "./styles";

function App() {
  return (
    <ThemeProvider theme={MyTheme}>
      <h1>App</h1>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
