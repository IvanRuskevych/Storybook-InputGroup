import { FC } from "react";

import { InputAnnotationProps } from "../../types";
import { StyledParagraph } from "./InputAnnotation.styles.ts";
import clsx from "clsx";

export const InputAnnotation: FC<InputAnnotationProps> = ({
  text,
  isError = false,
}) => {
  return (
    <StyledParagraph className={clsx({ "text-error": isError })}>
      {text}
    </StyledParagraph>
  );
};
