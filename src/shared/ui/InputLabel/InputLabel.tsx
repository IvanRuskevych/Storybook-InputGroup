import { FC } from "react";

import { InputLabelProps } from "../../types";
import { InputIconWithTooltip } from "../InputIconWithTooltip/InputIconWithTooltip.tsx";
import { InputLabelWrapper } from "./InputLabel.styles.ts";

export const InputLabel: FC<InputLabelProps> = ({
  htmlFor,
  label,
  required,
  textTooltip,
  isInfoIcon,
  ...props
}) => {
  return (
    <InputLabelWrapper>
      <label htmlFor={htmlFor} {...props}>
        {label}
      </label>

      {required && <span>*</span>}

      {isInfoIcon && (
        <InputIconWithTooltip iconType={"info"} textTooltip={textTooltip} />
      )}
    </InputLabelWrapper>
  );
};
