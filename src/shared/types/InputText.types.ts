import { ChangeEvent } from "react";
import { SizeTypes } from "./UnionTypes.types.ts";

export interface InputTextProps {
  id: string;
  placeholder: string;
  value?: string;
  isInvisibleBorder?: boolean;
  isError?: boolean;
  size?: SizeTypes;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}
