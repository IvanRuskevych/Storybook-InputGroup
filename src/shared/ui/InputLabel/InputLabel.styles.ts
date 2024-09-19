import styled from "styled-components";

export const InputLabelWrapper = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;

  font-family: Inter, sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.66667; /* 20px */

  & label {
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  & span {
    color: ${({ theme }) => theme.colors.textError};
  }

  &.input__position--side {
    grid-area: label;
  }
`;
