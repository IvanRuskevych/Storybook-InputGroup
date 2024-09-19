import { InputPositionTypes } from "./UnionTypes.types.ts";

export interface InputLabelProps {
  htmlFor: string;
  label: string;
  required?: boolean;
  infoIcon?: boolean;
  position?: InputPositionTypes;
}
