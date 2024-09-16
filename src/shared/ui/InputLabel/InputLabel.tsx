import { FC } from "react";

import { InputLabelProps } from "../../types";
import { InputLabelWrapper } from "./InputLabel.styles.ts";
import spritePath from "../../../assets/svg/svg-sprite.svg";

export const InputLabel: FC<InputLabelProps> = ({
  label,
  required,
  infoIcon,
}) => {
  return (
    <InputLabelWrapper>
      <label>{label}</label>
      {required && <span>*</span>}
      {infoIcon && (
        <svg>
          <use href={`${spritePath}#icon-info`}></use>
        </svg>
      )}
    </InputLabelWrapper>
  );
};
