import { FC } from "react";
import clsx from "clsx";

import { InputIconProps } from "../../types";
import spritePath from "../../../assets/svg/sprite.svg";
import { StyledIcon } from "./InputIcon.styles.ts";

export const InputIcon: FC<InputIconProps> = ({
  iconType,
  size = "sm",
  isError = false,
}) => {
  return (
    <StyledIcon
      className={clsx(`${iconType}`, `${iconType}--${size}`, {
        [`${iconType}--error`]: isError,
      })}
    >
      <use href={`${spritePath}#${iconType}`}></use>
    </StyledIcon>
  );
};
