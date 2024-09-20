import { FC } from "react";

import { TooltipProps } from "../../types";
import { TooltipContainer } from "./Tooltip.styles.ts";

export const Tooltip: FC<TooltipProps> = ({ textTooltip, ...props }) => {
  return (
    <TooltipContainer>
      <p {...props}>{textTooltip}</p>
    </TooltipContainer>
  );
};
