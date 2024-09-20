import { LabelHTMLAttributes } from "react";

export interface InputLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  htmlFor: string;
  label: string;
  required?: boolean;
  textTooltip?: string;
  isInfoIcon?: boolean;
}
