import { FC } from "react";
import clsx from "clsx";

import { InputTextWrapper } from "./InputText.styles.ts";
import spritePath from "../../../assets/svg/sprite.svg";

interface InputTextProps {
  placeholder: string;
  isInvisibleBorder?: boolean;
  isError?: boolean;
  size?: "xs" | "sm" | "lg" | "xl";
}

export const InputText: FC<InputTextProps> = ({
  placeholder,
  isInvisibleBorder = false,
  isError = true,
  size = "sm",
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
