import { ChangeEvent } from "react";
import { InputPositionTypes, SizeTypes } from "./UnionTypes.types.ts";

export interface InputTextProps {
  id: string;
  placeholder: string;
  value?: string;
  isInvisibleBorder?: boolean;
  isError?: boolean;
  size?: SizeTypes;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  position?: InputPositionTypes;
  isIconSearch?: boolean;
  isIconHelp?: boolean;
  isIconShortkey?: boolean;
}
