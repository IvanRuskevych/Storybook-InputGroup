import { FC } from "react";
import clsx from "clsx";

import { InputGroupProps } from "../../types";
import { InputLabel } from "../InputLabel/InputLabel.tsx";
import { InputText } from "../InputText/InputText.tsx";
import { InputAnnotation } from "../InputAnnotation/InputAnnotation.tsx";
import { InputGroupContainer } from "./InputGroup.styles.ts";

export const InputGroup: FC<InputGroupProps> = ({
  inputLabelProps,
  inputTextProps,
  inputAnnotationProps,
  position = "top",
  ...props
}) => {
  return (
    <InputGroupContainer
      {...props}
      className={clsx({
        "position--side": position === "side",
      })}
    >
      <InputLabel {...inputLabelProps} />
      <InputText {...inputTextProps} />
      <InputAnnotation {...inputAnnotationProps} />
    </InputGroupContainer>
  );
};
