import { IconTypes, SizeTypes } from "./UnionTypes.types.ts";

export interface InputIconProps {
  iconType: IconTypes;
  size?: SizeTypes;
  isError?: boolean;
  textTooltip?: string;
  isIconShortkey?: boolean;
}
