import { ThemeProvider } from "styled-components";

import { ThemeStylesProps } from "../../types";
import { GlobalStyles } from "../global.styles.ts";

export const lightTheme = {
  colors: {
    textPrimary: "#1a1a1e",
    textSecondary: "#51525c",
    textPlaceholder: "#70707B",
    textError: "#D92D20",
    bgPrimary: "#fff",
    borderPrimary: "#D1D1D6", // hover
    borderBrand: "#84CAFF", // focus
    borderError: "#D92D20",
    borderShadow: "#2e90fa3d",
    borderShadowError: "#f044383d",
  },
};

export const darkTheme = {
  colors: {
    textPrimary: "#FAFAFA",
    textSecondary: "#A0A0AB",
    textError: "#F97066",
    borderError: "#F04438",
    borderShadow: "#2e90fa3d",
    borderShadowError: "#f044383d",
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
