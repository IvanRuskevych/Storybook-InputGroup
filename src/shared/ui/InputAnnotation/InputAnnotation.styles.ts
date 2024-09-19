import styled from "styled-components";

export const StyledParagraph = styled.p`
  font-family: Inter, sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.66667;
  width: 100%;

  color: ${({ theme }) => theme.colors.textSecondary};

  &.text-error {
    color: ${({ theme }) => theme.colors.textError};
  }

  &.input__position--side {
    grid-area: annotation;
  }
`;
