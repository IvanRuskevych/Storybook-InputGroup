import styled from "styled-components";

export const StyledParagraph = styled.p`
  font-family: Inter, sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 166.667% */

  color: blue;

  &.text-error {
    color: red;
  }
`;
