import styled from "styled-components";

export const StyledParagraph = styled.p<{}>`
  /* Text xxs/Regular */
  font-family: Inter, sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 166.667% */

  color: ${({ theme }) => theme.colors.textSecondary};

  &.text-error {
    color: ${({ theme }) => theme.colors.textError};
  }
`;

// color: ${({ $textOptions, theme }) =>
// $textOptions === "description"
//     ? theme.colors.textSecondary
//     : theme.colors.textError};
