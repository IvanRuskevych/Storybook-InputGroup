import { HTMLAttributes } from "react";

export interface TooltipProps extends HTMLAttributes<HTMLParagraphElement> {
  textTooltip: string | undefined;
}
