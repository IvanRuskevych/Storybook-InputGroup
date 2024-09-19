import { FC } from "react";

import { TooltipContainer } from "./Tooltip.styles.ts";

interface TooltipProps {
  textTooltip: string | undefined;
}

export const Tooltip: FC<TooltipProps> = ({ textTooltip }) => {
  return (
    <TooltipContainer>
      <p className="text-xs font-semibold">{textTooltip}</p>
    </TooltipContainer>
  );
};
