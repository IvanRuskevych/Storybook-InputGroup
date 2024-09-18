import { FC } from "react";

import { InputLabelProps } from "../../types";
import { InputIcon } from "../InputIcon/InputIcon.tsx";
import { InputLabelWrapper } from "./InputLabel.styles.ts";

export const InputLabel: FC<InputLabelProps> = ({
  htmlFor,
  label,
  required,
  infoIcon,
  ...props
}) => {
  return (
    <InputLabelWrapper>
      <label htmlFor={htmlFor} {...props}>
        {label}
      </label>
      {required && <span>*</span>}
      {infoIcon && <InputIcon iconType={"info"} />}
    </InputLabelWrapper>
  );
};
