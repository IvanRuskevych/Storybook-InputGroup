import { ThemeProvider } from "styled-components";

import { ThemeStylesProps } from "../../types";
import { GlobalStyles } from "../global.styles.ts";

export const lightTheme = {
  colors: {
    textPrimary: "#1a1a1e",
    textSecondary: "#51525c",
    error: "#D92D20",
  },
};

export const darkTheme = {
  colors: {
    textPrimary: "#FAFAFA",
    textSecondary: "#A0A0AB",
    error: "#F97066",
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
