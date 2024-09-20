import { SVGProps } from "react";

import { IconTypes, InputSizeTypes } from "./UnionTypes.types.ts";

export interface InputIconProps extends SVGProps<SVGSVGElement> {
  iconType: IconTypes;
  inputSize?: InputSizeTypes;
  isError?: boolean;
  textTooltip?: string;
  isIconShortkey?: boolean;
}
