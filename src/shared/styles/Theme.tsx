import { ThemeProvider } from "styled-components";
import { ReactNode } from "react";
import { GlobalStyles } from "./global.styles.ts";

const lightTheme = {
  colors: {
    primary: "#ffffff",
    secondary: "#000000",
  },
};

const darkTheme = {
  colors: {
    primary: "#000000",
    secondary: "#ffffff",
  },
};

interface ThemeStylesProps {
  children: ReactNode;
  theme: "light" | "dark";
}

export const ThemeStyles = ({ children, theme }: ThemeStylesProps) => {
  const selectedTheme = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};
