import { FC } from "react";
import clsx from "clsx";

import { InputTextWrapper } from "./InputText.styles.ts";

interface InputTextProps {
  placeholder: string;
  isInvisibleBorder?: boolean;
  isError?: boolean;
  // size?: "small" | "medium" | "large";
}

export const InputText: FC<InputTextProps> = ({
  placeholder,
  isInvisibleBorder = false,
  isError = false,
}) => {
  return (
    <InputTextWrapper>
      <input
        type="text"
        placeholder={placeholder}
        className={clsx({
          "invisible-border": isInvisibleBorder,
          "focus-error": isError,
        })}
      />
    </InputTextWrapper>
  );
};
