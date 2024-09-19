import { FC, useState } from "react";

import { InputIconProps } from "../../types";
import { Tooltip } from "../Tooltip/Tooltip.tsx";
import { InputIconWrapper } from "./InputIconWithTooltip.styles.ts";
import { InputIcon } from "../InputIcon/InputIcon.tsx";

export const InputIconWithTooltip: FC<InputIconProps> = ({
  textTooltip,
  iconType,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <InputIconWrapper
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && <Tooltip textTooltip={textTooltip} />}

      <InputIcon iconType={iconType} />
    </InputIconWrapper>
  );
};
