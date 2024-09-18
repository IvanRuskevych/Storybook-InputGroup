import { FC } from "react";
import clsx from "clsx";

import { InputTextProps } from "../../types";
import { InputIcon } from "../InputIcon/InputIcon.tsx";
import { InputTextWrapper } from "./InputText.styles.ts";

export const InputText: FC<InputTextProps> = ({
  id,
  value,
  placeholder,
  isInvisibleBorder = false,
  isError = false,
  size = "sm",
  onChange,
  ...props
}) => {
  return (
    <InputTextWrapper>
      <input
        id={id}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={clsx({
          "invisible-border": isInvisibleBorder,
          "focus-error": isError,
          [size]: size,
        })}
        {...props}
      />

      <InputIcon iconType={"search"} size={size} isError={isError} />
      <InputIcon iconType={"help"} size={size} isError={isError} />
      <InputIcon iconType={"shortkey"} size={size} isError={isError} />
    </InputTextWrapper>
  );
};
