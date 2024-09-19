import { InputPositionTypes } from "./UnionTypes.types.ts";

export interface InputAnnotationProps {
  text: string;
  textError: string;
  isError?: boolean;
  position?: InputPositionTypes;
}
