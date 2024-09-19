import { InputLabelProps } from "./InputLabel.types.ts";
import { InputTextProps } from "./InputText.types.ts";
import { InputAnnotationProps } from "./InputAnnotation.types.ts";

export interface InputGroupProps {
  inputLabelProps: InputLabelProps;
  inputTextProps: InputTextProps;
  inputAnnotationProps: InputAnnotationProps;
  position?: "side" | "top";
}
