import { ReactNode } from "react";

type ThemeType = "light" | "dark";

export interface ThemeStylesProps {
  children: ReactNode;
  theme: ThemeType;
}
