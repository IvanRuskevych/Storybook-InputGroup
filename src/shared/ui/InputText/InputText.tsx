import { FC } from "react";
import clsx from "clsx";

import { InputTextWrapper } from "./InputText.styles.ts";

interface InputTextProps {
  placeholder: string;
  isInvisibleBorder?: boolean;
  isError?: boolean;
  size?: "xs" | "sm" | "lg" | "xl";
}

export const InputText: FC<InputTextProps> = ({
  placeholder,
  isInvisibleBorder = false,
  isError = false,
  size = "md",
}) => {
  return (
    <InputTextWrapper>
      <input
        type="text"
        placeholder={placeholder}
        className={clsx({
          "invisible-border": isInvisibleBorder,
          "focus-error": isError,
          [size]: size,
        })}
      />
    </InputTextWrapper>
  );
};
