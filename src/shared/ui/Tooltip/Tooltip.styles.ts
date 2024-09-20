import styled from "styled-components";

export const TooltipContainer = styled.div`
  position: absolute;
  bottom: 170%;
  left: -100%;
  z-index: 10;
  min-width: 120px;
  background-color: ${({ theme }) => theme.colors.bgTooltip};
  padding: 8px 12px;
  border-radius: 8px;

  color: ${({ theme }) => theme.colors.textTooltip};
  text-align: center;

  font-weight: 600;

  &::after {
    content: "";
    position: absolute;
    border-width: 8px;
    border-style: solid;
    border-color: ${({ theme }) => theme.colors.bgTooltip} transparent
      transparent transparent;
    transform: translate(-310%, 50%);
  }
`;
