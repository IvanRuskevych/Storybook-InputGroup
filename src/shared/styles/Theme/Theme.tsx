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
    bgInput: "#fff",
    borderPrimary: "#D1D1D6", // hover
    borderBrand: "#84CAFF", // focus
    borderError: "#D92D20",
    fillSvgError: "#D92D20",
    borderShadow: "#2e90fa3d",
    borderShadowError: "#f044383d",
    fillSvg: "#a0a0ab",
  },
};

export const darkTheme = {
  colors: {
    textPrimary: "#FAFAFA",
    textSecondary: "#A0A0AB",
    textPlaceholder: "#A0A0AB", // ??
    textError: "#F97066",
    bgPrimary: "#1A1A1E",
    bgInput: "#131316",
    borderPrimary: "#51525C",
    borderBrand: "#53B1FD",
    borderError: "#F04438",
    fillSvgError: "#F04438",
    borderShadow: "#2e90fa3d",
    borderShadowError: "#f044383d",
    fillSvg: "#70707B",
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
