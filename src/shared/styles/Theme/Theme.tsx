import { ThemeProvider } from "styled-components";

import { ThemeStylesProps } from "../../types";
import { GlobalStyles } from "../global.styles.ts";

export const lightTheme = {
  colors: {
    textPrimary: "#1a1a1e",
    error: "#D92D20",
    secondary: "#000000",
  },
};

export const darkTheme = {
  colors: {
    textPrimary: "#FAFAFA",
    error: "#D92D20",
    secondary: "#ffffff",
  },
};

export const ThemeStyles = ({ children, theme }: ThemeStylesProps) => {
  const selectedTheme = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};
