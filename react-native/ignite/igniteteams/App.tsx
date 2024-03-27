import theme from "@theme/index";
import { Groups } from "src/Screens/Groups";
import { ThemeProvider } from "styled-components";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Groups />
    </ThemeProvider>
  );
}

