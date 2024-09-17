import styled from "styled-components";

export const InputLabelWrapper = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;

  /* Text xxs/Medium */
  font-family: Inter, sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 166.667% */

  & label {
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  & span {
    color: ${({ theme }) => theme.colors.textError};
  }

  & svg {
    width: 12px;
    height: 12px;
    fill: ${({ theme }) => theme.colors.fillSvg};
  }
`;
