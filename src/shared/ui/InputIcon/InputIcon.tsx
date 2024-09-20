import { FC } from "react";
import clsx from "clsx";

import { InputIconProps } from "../../types";
import spritePath from "../../../assets/svg/sprite.svg";
import { StyledIcon } from "./InputIcon.styles.ts";

export const InputIcon: FC<InputIconProps> = ({
  iconType,
  inputSize,
  isError = false,
  isIconShortkey,
  ...props
}) => {
  return (
    <StyledIcon
      {...props}
      className={clsx(`${iconType}`, `${iconType}--${inputSize}`, {
        [`${iconType}--error`]: isError,
        [`${iconType}__alone`]: !isIconShortkey,
        [`${iconType}__alone--${inputSize}`]: !isIconShortkey,
      })}
    >
      <use href={`${spritePath}#${iconType}`}></use>
    </StyledIcon>
  );
};
