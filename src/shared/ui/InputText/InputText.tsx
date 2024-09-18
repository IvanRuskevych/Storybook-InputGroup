import { ChangeEvent, FC } from "react";
import clsx from "clsx";

import spritePath from "../../../assets/svg/sprite.svg";
import { InputTextWrapper } from "./InputText.styles.ts";

export interface InputTextProps {
  value?: string;
  placeholder: string;
  customClass?: string;
  isInvisibleBorder?: boolean;
  isError?: boolean;
  size?: "xs" | "sm" | "lg" | "xl";
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const InputText: FC<InputTextProps> = ({
  value,
  placeholder,
  customClass = "",
  isInvisibleBorder = false,
  isError = true,
  size = "sm",
  onChange,
}) => {
  return (
    <InputTextWrapper className={customClass}>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={clsx({
          "invisible-border": isInvisibleBorder,
          "focus-error": isError,
          [size]: size,
          customClass,
        })}
      />
      <svg
        className={clsx("icon", "icon__search", `icon__search--${size}`, {
          "icon__search--error": isError,
        })}
      >
        <use href={`${spritePath}#search`}></use>
      </svg>
      <svg
        className={clsx("icon", "icon__help", `icon__help--${size}`, {
          "icon__help--error": isError,
        })}
      >
        <use href={`${spritePath}#help`}></use>
      </svg>
      <svg
        className={clsx("icon", "icon__shortkey", `icon__shortkey--${size}`)}
      >
        <use href={`${spritePath}#shortkey`}></use>
      </svg>
    </InputTextWrapper>
  );
};
