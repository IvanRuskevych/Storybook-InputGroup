import { InputHTMLAttributes } from "react";

import { InputPositionTypes, InputSizeTypes } from "./UnionTypes.types.ts";

export interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  isInvisibleBorder?: boolean;
  isError?: boolean;
  inputSize?: InputSizeTypes;
  position?: InputPositionTypes;
  isIconSearch?: boolean;
  isIconHelp?: boolean;
  isIconShortkey?: boolean;
  isTextRightSide?: boolean;
}
