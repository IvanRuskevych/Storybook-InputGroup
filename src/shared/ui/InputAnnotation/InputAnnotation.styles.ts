import styled from "styled-components";

export const StyledParagraph = styled.p<{
  textOptions: "description" | "error";
}>`
  color: ${({ textOptions, theme }) =>
    textOptions === "description"
      ? theme.colors.textSecondary
      : theme.colors.error};

  /* Text xxs/Regular */
  font-family: Inter, sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 166.667% */
`;
