import { FC } from "react";
import clsx from "clsx";

import { InputAnnotationProps } from "../../types";
import { StyledParagraph } from "./InputAnnotation.styles.ts";

export const InputAnnotation: FC<InputAnnotationProps> = ({
  text,
  textError,
  isError = false,
  ...props
}) => {
  return (
    <StyledParagraph className={clsx({ "text-error": isError })} {...props}>
      {!isError && text}
      {isError && textError}
    </StyledParagraph>
  );
};
