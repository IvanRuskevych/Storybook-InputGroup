import { ReactNode } from "react";
import { ThemeTypes } from "./UnionTypes.types.ts";

export interface ThemeStylesProps {
  children: ReactNode;
  theme: ThemeTypes;
}
