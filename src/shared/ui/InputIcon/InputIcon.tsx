import { FC } from "react";
import clsx from "clsx";

import { InputIconProps } from "../../types";
import spritePath from "../../../assets/svg/sprite.svg";
import { StyledIcon } from "./InputIcon.styles.ts";

export const InputIcon: FC<InputIconProps> = ({
  iconType,
  size,
  isError = false,
  isIconShortkey,
}) => {
  return (
    <StyledIcon
      className={clsx(`${iconType}`, `${iconType}--${size}`, {
        [`${iconType}--error`]: isError,
        [`${iconType}__alone`]: !isIconShortkey,
        [`${iconType}__alone--${size}`]: !isIconShortkey,
      })}
    >
      <use href={`${spritePath}#${iconType}`}></use>
    </StyledIcon>
  );
};
