import { HTMLAttributes } from "react";

import { InputPositionTypes } from "./UnionTypes.types.ts";

export interface InputAnnotationProps
  extends HTMLAttributes<HTMLParagraphElement> {
  text: string;
  textError: string;
  isError?: boolean;
  position?: InputPositionTypes;
}
