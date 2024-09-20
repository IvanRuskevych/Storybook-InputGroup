import { FC } from "react";
import clsx from "clsx";

import { InputTextProps } from "../../types";
import { InputIcon } from "../InputIcon/InputIcon.tsx";
import { InputTextWrapper } from "./InputText.styles.ts";

export const InputText: FC<InputTextProps> = ({
  id,
  value,
  placeholder,
  position,
  onChange,
  size = "xl",
  isInvisibleBorder = false,
  isIconSearch = true,

  isIconHelp = true,
  isIconShortkey = true,

  isError = false,
  ...props
}) => {
  const showOnlyHelpIcon = isIconHelp && !isIconShortkey;
  const showOnlyShortkeyIcon = !isIconHelp && isIconShortkey;
  const hideRightIcons = !isIconHelp && !isIconShortkey;

  return (
    <InputTextWrapper>
      <input
        id={id}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={clsx({
          "border--invisible": isInvisibleBorder,
          "input--error": isError,
          "input__position--side": position,
          [size]: size,
          [`${size}--no-search-icon`]: !isIconSearch,
          [`${size}--only-help-icon`]: showOnlyHelpIcon,
          [`${size}--only-shortkey-icon`]: showOnlyShortkeyIcon,
          [`${size}--no-right-icons`]: hideRightIcons,
        })}
        {...props}
      />
      {isIconSearch && (
        <InputIcon iconType={"search"} size={size} isError={isError} />
      )}
      {isIconHelp && (
        <InputIcon
          iconType={"help"}
          size={size}
          isError={isError}
          isIconShortkey={isIconShortkey}
        />
      )}
      {isIconShortkey && (
        <InputIcon iconType={"shortkey"} size={size} isError={isError} />
      )}
    </InputTextWrapper>
  );
};
