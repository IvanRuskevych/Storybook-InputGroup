import { FC } from "react";
import { StyledParagraph } from "./InputAnnotation.styles.ts";
import { InputAnnotationProps } from "../../types";

export const InputAnnotation: FC<InputAnnotationProps> = ({
  text,
  textOptions,
}) => {
  return <StyledParagraph textOptions={textOptions}>{text}</StyledParagraph>;
};
