import { FC } from "react";

import { InputLabelProps } from "../../types";
import { InputIcon } from "../InputIcon/InputIcon.tsx";
import { InputLabelWrapper } from "./InputLabel.styles.ts";
import clsx from "clsx";

export const InputLabel: FC<InputLabelProps> = ({
  htmlFor,
  label,
  required,
  infoIcon,
  position,
  ...props
}) => {
  return (
    <InputLabelWrapper
      className={clsx({
        "input__position--side": position,
      })}
    >
      <label htmlFor={htmlFor} {...props}>
        {label}
      </label>
      {required && <span>*</span>}
      {infoIcon && <InputIcon iconType={"info"} />}
    </InputLabelWrapper>
  );
};
