import { FC } from "react";
import clsx from "clsx";

import { InputTextProps } from "../../types";
import { InputIcon } from "../InputIcon/InputIcon.tsx";
import { InputTextWrapper } from "./InputText.styles.ts";

export const InputText: FC<InputTextProps> = ({
  position,
  inputSize = "xl",
  isInvisibleBorder = false,
  isIconSearch = true,
  isIconHelp = true,
  isIconShortkey = true,
  isError = false,
  isTextRightSide = true,
  ...props
}) => {
  const showOnlyHelpIcon = isIconHelp && !isIconShortkey;
  const showOnlyShortkeyIcon = !isIconHelp && isIconShortkey;
  const hideRightIcons = !isIconHelp && !isIconShortkey;

  return (
    <InputTextWrapper>
      <input
        className={clsx({
          "border--invisible": isInvisibleBorder,
          "input--error": isError,
          "text__side--right": isTextRightSide,
          "input__position--side": position,
          [inputSize]: inputSize,
          [`${inputSize}--no-search-icon`]: !isIconSearch,
          [`${inputSize}--only-help-icon`]: showOnlyHelpIcon,
          [`${inputSize}--only-shortkey-icon`]: showOnlyShortkeyIcon,
          [`${inputSize}--no-right-icons`]: hideRightIcons,
        })}
        {...props}
      />
      {isIconSearch && (
        <InputIcon
          iconType={"search"}
          inputSize={inputSize}
          isError={isError}
        />
      )}
      {isIconHelp && (
        <InputIcon
          iconType={"help"}
          inputSize={inputSize}
          isError={isError}
          isIconShortkey={isIconShortkey}
        />
      )}
      {isIconShortkey && (
        <InputIcon
          iconType={"shortkey"}
          inputSize={inputSize}
          isError={isError}
        />
      )}
    </InputTextWrapper>
  );
};
