import { GlobalStyle } from "./GlobalStyle";
import Homepage from "./homepage/Homepage";
import { ThemeProvider } from "styled-components";
import { themeColors } from "./Theme";

function App() {
  return (
    <>
      <ThemeProvider theme={themeColors}>
        <GlobalStyle />
        <div className="App">
          <Homepage />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
